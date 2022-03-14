import { useQuery } from "@apollo/client";
import { FIND_ALL } from "./queries";

export const useUsers = () => {
  const result = useQuery(FIND_ALL);
  return result;
};
