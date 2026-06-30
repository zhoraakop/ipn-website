import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import file from "../../files/file.pdf";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__block">
        <div className="footer__information">
          <img className="footer__logo" src={logo} alt="Фото"></img>
          <p className="footer__subtitle">
            Digital-агенство полного цикла. Создаем, продвигаем и масштабируем
            цифровые продукты.
          </p>
        </div>
        <div className="footer__services">
          <h2 className="footer__title">Услуги</h2>
          <ul className="footer__list">
            <li className="footer__item">Веб-разарботка</li>
            <li className="footer__item">SEO-продвижение</li>
            <li className="footer__item">Реклама и маркетинг</li>
            <li className="footer__item">Аналалитика и данные</li>
            <li className="footer__item">Инрфаструктура и ЦОД</li>
          </ul>
        </div>
        <div className="footer__about">
          <h2 className="footer__title">Компания</h2>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#company">
                О компании
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#scroll">
                Услуги
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#workflow">
                Разработка
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#tariffs">
                Тарифы
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contacts">
          <h2 className="footer__title">Контакты</h2>
          <ul className="footer__list">
            <li className="footer__item">&#128379; +7 812 115-44-12</li>
            <li className="footer__item">&#9993; info@@ipn-agency.ru</li>
            <li className="footer__item">
              &#x1F4CD; г. Санкт-Петербург, ул. Железноводская, д. 32, литер Д,
              пом. 22-Н офис.5-8
            </li>
            <li className="footer__item">&#9200; Пн-Вс: 10:00 - 19:00</li>
          </ul>
        </div>
      </div>
      <div className="footer__legal">
        <p className="footer__copyright">
          &copy; 2004 ООО "Айпиэн". Все права защищены.
        </p>
        <div className="footer__links">
          <Link className="footer__link" to="/privacy">
            Политика конфиденциальности
          </Link>
          <Link className="footer__link" to="/agreement">
            Пользовательское соглашение
          </Link>
          <Link className="footer__link" to="/personal-data-consent">
            Согласие на обработку персональных данных
          </Link>
          <Link className="footer__link" to="/requisites">
            Реквизиты
          </Link>
          <a className="footer__link" href={file} download={true}>
            Публичная оферта
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
