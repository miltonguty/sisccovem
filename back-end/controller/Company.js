/*** CONTROLLER*/
import prisma from "../lib/prisma";
export const get = async (req, res) => {
  try {
    const companys = await prisma.company.findMany();
    res.status(200).json(companys);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
export const getById = async (req, res) => {
  try {
    const { comId } = req.query;

    if (comId) {
      const company = await prisma.company.findUnique({
        where: { id: Number(comId) },
      });
      res.status(200).json(company);
    } else {
      res.status(404).json({ error: "company id not provide" });
    }
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
export const add = async (req, res) => {
  try {
    const { name, phone, address } = req.body;
    const company = await prisma.company.create({
      data: { name, phone, address },
    });
    res.status(200).json(company);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
export const update = async (req, res) => {
  try {
    const { id, name, phone, address } = req.body;
    const companyUpdate = await prisma.company.update({
      where: { id: Number(id) },
      data: { name: name, phone: phone, address: address },
    });
    res.status(200).json(companyUpdate);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.query;
    const companyDelete = await prisma.company.delete({
      where: { id: id },
    });
    res.status(200).json(companyDelete);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};
