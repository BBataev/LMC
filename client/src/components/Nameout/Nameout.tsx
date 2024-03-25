import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../../api/User";
import { queryClient } from "../../api/QueryClient";
import './Nameout.css';

export const Nameout = () => {
  const userInfo = useQuery(
    {
      queryFn: () => fetchMe(),
      queryKey: ["users", "me"],
    },
    queryClient
  );

  switch (userInfo.status) {
    case "pending":
      return <h2 className="pending">Загрузка...</h2>;

    case "error":
      return <h2 className="username">Испанцы.... Опять..</h2>;

    case "success":
      return <h2 className="username">{userInfo.data.username}</h2>;
  }
};
