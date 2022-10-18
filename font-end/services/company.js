import { BASE_URL } from "../../config";
export const get = async () => {
  const response = await fetch(`${BASE_URL}/api/company`);
  const json =  response.json();

  return json;
};
