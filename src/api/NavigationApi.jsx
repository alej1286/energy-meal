/* eslint-disable react-refresh/only-export-components */
import { useQuery } from "@tanstack/react-query";
//import { API } from "aws-amplify/api";
import { generateClient  } from "aws-amplify/api";
import * as queries from "../graphql/queries";



const client = generateClient();

async function NavigationApi() {
  try {
    //const response = await API.graphql({ query: queries.listNavigations });
    const response = await client.graphql({ query: queries.listNavigations });
    const allNavigation = response?.data?.listNavigations?.items;
    
    if (!allNavigation) return null;
    //console.log("allNavigation:",allNavigation)
    //return allNavigation.reverse();
    return sortNavigationArray(allNavigation);
    //return allNavigation;
  } catch (res) {
    const { errors } = res;
    console.error(errors);
  }
}

export function useFetchNavigationApi() {
  return useQuery({
    queryKey: ['navigation'],
    queryFn: NavigationApi
  });
}


function sortNavigationArray(navArray) {
  // Find the index of the 'Home' element
  const homeIndex = navArray.findIndex(item => item.name === 'Home');
  
  // If 'Home' is not found, return the original array
  if (homeIndex === -1) {
    return navArray;
  }
  
  // Remove 'Home' from its current position
  const homeElement = navArray.splice(homeIndex, 1)[0];
  
  // Insert 'Home' at the beginning of the array
  navArray.unshift(homeElement);
  
  return navArray;
}
