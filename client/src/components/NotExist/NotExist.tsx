import { Link } from 'react-router-dom';
import './NotExist.css';

export const NotExist = () => {
    return (
        <div className='notExPage'>
            <img className="notExPage__svg" src="404.svg" alt="404 ошибка" />
            <h2 className='notExPage__title'>
                Такой страницы не существует
            </h2>
            <Link className='notExPage__link' to="/">
                Перейти на главную
            </Link>
        </div>
    )
}