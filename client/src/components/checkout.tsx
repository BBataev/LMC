import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api/User";
import { queryClient } from "../api/QueryClient";
import { Navigate } from "react-router-dom";

export const CheckoutIfDoHave = () =>{
  const meQuery = useQuery(
    {
      queryFn: () => fetchMe(),
      queryKey: ["users", "me"],
    },
    queryClient
  );

  switch (meQuery.status) {
    case "error":
      return <Navigate to={"/login"}/>
      
    case "success":
      return <Navigate to={"/notes"}/>
  };
}