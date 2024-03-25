import { FormEventHandler, useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/User";
import { queryClient } from "../../api/QueryClient";
import { Button } from "../Button/Button";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginMutation = useMutation(
    {
      mutationFn: () => loginUser(email, password),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["users", "me"] });
        navigate('/notes');
      },
    },
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="form__title">Вход</h2>
        <div className="form__inputTitled">
          <div className="form__inputGroup form__input-email">
            <input
              className="input-name__input"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label className="input-name__title">Email</label>
          </div>
          <div className="form__inputGroup form__input-password">
            <input
              className="input-name__input"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <label className="input-name__title">Пароль</label>
          </div>
        </div>
        <Button title="Войти" isLoading={loginMutation.isPending} size="big"/>
        <div className="form__loginRoute">
          <span className="loginRoute__descr">Хотите создать аккаунт?</span>
          <Link className="loginRoute__link" to="/registration">
            Регистрирация
          </Link>
        </div>
      </form>
    </div>
  );
};
