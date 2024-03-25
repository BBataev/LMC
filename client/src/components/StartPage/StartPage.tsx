import { Link } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
  return (
    <div>
      <h1>Че ты выбираешь</h1>
      <div>
        <Link to="/registration">В жопу раз</Link>
        <Link to="/login">Вилкой в глаз</Link>
      </div>
    </div>
  );
};
