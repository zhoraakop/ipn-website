import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
/* import { useEffect, useState } from "react";
 */import { useAuth } from "../../context/AuthContext";



const Header = () => {
/* const [user, setUser] = useState(null);
 */const { user } = useAuth();

/* useEffect(() => {
  const updateUser = () => {
    const isAuth = localStorage.getItem("isAuth") === "true";
    const savedUser = JSON.parse(localStorage.getItem("user"));

    setUser(isAuth ? savedUser : null);
  };

  updateUser();

  window.addEventListener("authChange", updateUser);

  return () => {
    window.removeEventListener("authChange", updateUser);
  };
}, []); */

  return (
    <header className="header">
      <div className="header__logo">
        <img alt="фото" className="header__image" src={logo}></img>
{/*         <p className="header__title">digital-агенство полного цикла</p>
 */}      </div>
      <ul className="header__menu">
        <li className="menu-list">
          <a className="menu-link" href="#scroll">Услуги</a>
        </li>
        <li className="menu-list">
          <a className="menu-link" href='#workflow'>Реализация</a>
        </li>
        <li className="menu-list">
          <a className="menu-link" href='#tariffs'>Тарифы</a>
        </li>
        <li className="menu-list">
          <a className="menu-link" href="#stats">Результаты</a>
        </li>
     {/*    <li className="menu-list">
          <a className="menu-link" href='#form'>Обратная связь</a>
        </li> */}
      </ul>
      <div className="header__block">
      {/*   <p className="header__phone">+7 812 115-44-12</p> */}
        <a className="header__button" href='#form' id='header-button'>Обсудить проект</a>
       <div className="header__auth">

    {user ? (

        <div className="header__profile">

            <span className="header__email">
                {user.email}
            </span>

            <Link
                to="/profile"
                className="header__account"
            >
                Личный кабинет
            </Link>

        </div>

    ) : (

        <>

            <Link
                className="header__log"
                to="/login"
            >
                Вход
            </Link>
/
            <Link
                className="header__reg"
                to="/reg"
            >
                Регистрация
            </Link>

        </>

    )}

</div>
      </div>
    </header>
  );
};

export default Header;
