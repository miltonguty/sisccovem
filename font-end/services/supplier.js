import { BASE_URL } from "../../config";
export const get = async () => {
  const response = await fetch(`${BASE_URL}/api/supplier`);
  const json = await response.json();

  return json;
};
