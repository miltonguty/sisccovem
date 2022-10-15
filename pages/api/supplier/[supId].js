import { getById } from "../../../controller/Supplier";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      await getById(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end("Method {method} Not Allowd");
      break;
  }
}
