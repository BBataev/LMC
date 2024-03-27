import { FormEventHandler, useState } from "react";
import "./RegisterForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/User";
import { queryClient } from "../../api/QueryClient";
import { Button } from "../Button/Button";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerMutations = useMutation(
    {
      mutationFn: () => registerUser(username, email, password),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["users", "me"] });
        navigate("/notes");
      },
    },
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    registerMutations.mutateAsync();
  };
  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <h2 className="form__title">Регистрация</h2>
        <div className="form__input">
          <div className="form__inputGroup form__input-name">
            <input
              className="input-name__input"
              type="text"
              name="username"
              onChange={(event) => setUsername(event.target.value)}
              placeholder=""
              required
            />
            <label className="input-name__title">Имя</label>
          </div>
          <div className="form__inputGroup form__input-email">
            <input
              className="input-name__input"
              type="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder=""
              required
            />
            <label className="input-name__title">Email</label>
          </div>
          <div className="form__inputGroup form__input-password">
            <input
              className="input-name__input"
              type="password"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              placeholder=""
              required
            />
            <label className="input-name__title">Пароль</label>
          </div>
        </div>
        <Button
          title="Зарегистрироваться"
          size="big"
          isLoading={registerMutations.isPending}
        />
        {registerMutations.error && (
          <span>{registerMutations.error.message}</span>
        )}
        <div className="form__loginRoute">
          <span className="loginRoute__descr">Уже есть аккаунт?</span>
          <Link className="loginRoute__link" to="/login">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};
