import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../api/User";
import { FC } from "react";
import { queryClient } from "../../api/QueryClient";
import { UserView } from "./UserView";

export interface fetchUserViewProps {
  userId: string;
}

export const FetchUserView: FC<fetchUserViewProps> = ({ userId }) => {
  const userView = useQuery(
    {
      queryFn: () => fetchUser(userId),
      queryKey: ["users", userId],
    },
    queryClient
  );

  switch (userView.status) {
    case "error":
      return <span>Ошибка!</span>;
    case "success":
      return <span>{<UserView user={userView.data} />}</span>;
  }
};
