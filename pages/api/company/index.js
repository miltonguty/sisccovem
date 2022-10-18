import { get, add, remove, update } from "../../../back-end/controller/Company";

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      await get(req, res);
      break;
    case "POST":
      await add(req, res);
      break;
    case "PUT":
      await update(req, res);
      break;
    case "DELETE":
      await remove(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end("Method {method} Not Allowd");
      break;
  }
};
export default handler;
