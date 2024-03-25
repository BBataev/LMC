import { FC } from "react";
import { User } from "../../api/User";

export interface UserViewProps {
    user: User;
  }
  
  export const UserView: FC<UserViewProps> = ({ user }) => {
    return (
        <>
            {user.username}
        </>
    )
}  