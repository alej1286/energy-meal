/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";
//import { API } from "aws-amplify/api";
import { generateClient  } from "aws-amplify/api";
import * as queries from "../graphql/queries";

async function NavigationApi() {
  try {
    const client = generateClient();
    //const response = await API.graphql({ query: queries.listNavigations });
    const response = await client.graphql({ query: queries.listNavigations });
    const allNavigation = response?.data?.listNavigations?.items;

    if (!allNavigation) return null;

    return allNavigation.reverse();
  } catch (res) {
    const { errors } = res;
    console.error(errors);
  }
}

export function useFetchNavigationApi() {
  return useQuery({
    queryKey: ["navigation"],
    ...NavigationApi
  });
}
