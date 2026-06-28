import logo from '../../images/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img alt="фото" className="header__image" src={logo}></img>
        <p className="header__title">digital-агенство полного цикла</p>
      </div>
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
        <li className="menu-list">
          <a className="menu-link" href='#form'>Обратная связь</a>
        </li>
      </ul>
      <div className="header__block">
      {/*   <p className="header__phone">+7 812 115-44-12</p> */}
        <a className="header__button" href='#form'>Обсудить проект</a>
      </div>
    </header>
  );
};

export default Header;
