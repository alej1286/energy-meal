/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";
//import { API } from "aws-amplify";
import { generateClient  } from "aws-amplify/api";
import * as queries from "../graphql/queries";

async function ServicesApi() {
  try {
    const client = generateClient();
    //const response = await API.graphql({ query: queries.listServices });
    const response = await client.graphql({ query: queries.listServices });
    const allServices = response?.data?.listServices?.items;

    if (!allServices) return null;

    return allServices.reverse();
  } catch (res) {
    const { errors } = res;
    console.error(errors);
  }
}

export function useFetchServicesApi() {
  return useQuery({
    queryKey: ["services"],
    ...ServicesApi
  });
}
