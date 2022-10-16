import { getById } from "../../../back-end/controller/Supplier";

const handler = async (req, res) => {
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
};
export default handler;
