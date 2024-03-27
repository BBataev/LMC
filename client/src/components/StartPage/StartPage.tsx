import { Link } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
  return (
    <div className="startPage">
      <div className="startPage-header">
        <img className="header__logo" src="LMC.svg"/>
        <Link className="header__link" to="/login">
                Войти
        </Link>
      </div>

      <div className="startPage-main">
        <img className="main__logo" src="logo.svg" alt="file pic" />
        <h1 className="main__title">
          Ваши заметки, идеи, планы. Добро пожаловать в LMC
        </h1>
        <p className="main__descr">
          LMC лучшее рабочее пространство, где можно просто творить
        </p>
        <Link className="main__link" to="/registration">
          Создать аккаунт
        </Link>
      </div>
    </div>
  );
};
