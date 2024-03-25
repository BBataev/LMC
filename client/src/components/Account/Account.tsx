import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../api/User";
import { queryClient } from "../../api/QueryClient";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import './Account.css';
import { Nameout } from "../Nameout/Nameout";

export const Account = () => {
  const navigate = useNavigate();

  const logoutUserPls = useMutation(
    {
      mutationFn: () => logoutUser(),
      onSuccess: () => {
        navigate("/login");
      },
    },
    queryClient
  );

  const handleSubmit = async () => {
    logoutUserPls.mutate();
  };

  return (
    <div className="account">
      <div className="account__username">
        <Nameout />
      </div>
      <Button
        title="Выйти"
        onClick={handleSubmit}
        size="small"
        isLoading={logoutUserPls.isPending}
      />
    </div>
  );
};
