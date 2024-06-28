/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";
//import { API } from "aws-amplify/api";
import { generateClient  } from "aws-amplify/api";

async function InstagramApi() {
  const client = generateClient();
  //const instagramapi = await API.get("instagramapi", "/items");
  const instagramapi = await client.get("instagramapi", "/items");
  return instagramapi;
}

export function useFetchInstagramApi() {
  return useQuery({
    queryKey: ["instagram"],
    ...InstagramApi
  });
}
