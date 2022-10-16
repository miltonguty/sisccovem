/*** CONTROLLER*/
import prisma from "../lib/prisma";
export const get = async (req, res) => {
  try {
    const suppliers = await prisma.supplier.findMany();
    res.status(200).json(suppliers);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
export const getById = async (req, res) => {
  try {
    const { supId } = req.query;

    if (supId) {
      const supplier = await prisma.supplier.findUnique({
        where: { id: Number(supId) },
        include: { product: true },
      });
      res.status(200).json(supplier);
    } else {
      res.status(404).json({ error: "supplier id not provide" });
    }
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
export const add = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const supplier = await prisma.supplier.create({
      data: { name, phone, address },
    });
    res.status(200).json(supplier);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
export const update = async (req, res) => {
  try {
    const { id, name, phone, address } = req.body;
    const supplierUpdate = await prisma.supplier.update({
      where: { id: Number(id) },
      data: { name: name, phone: phone, address: address },
    });
    res.status(200).json(supplierUpdate);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.query;
    const supplierDelete = await prisma.supplier.delete({
      where: { id: id },
    });
    res.status(200).json(supplierDelete);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
