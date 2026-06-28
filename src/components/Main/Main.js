import star from "../../images/star.png";
import folder from "../../images/folder.png";
import people from "../../images/people.png";
import support from "../../images/support.png";
import main from "../../images/main.png";

const Main = () => {
  return (
    <div className="main" id="company">
      <div className="main__information">
      <h1 className="main__title">
        Создаем цифровую инфраструктуру для роста и бизнеса
      </h1>
      <p className="main__subtitle">
        Разрабатываем сайты и сервисы, продвигаем в поиске, настраиваем рекламу,
        работаем с данными и обеспечиваем надежную инфраструктуру.
      </p>
      <div className="main__block">
        <a className="header__button" href="#form" >Обсудить проект &rArr;</a>
        <a className="main__link" href="#scroll">Наши услуги &dArr;</a>
      </div>
      <ul className="main__achieves">
        <li className="main__list">
          <img alt="фото" className="list-img" src={star} />
          <div>
            <h2 className="list-title">10+ лет</h2>
            <p className="list-subtitle">опыта</p>
          </div>
        </li>
        <li className="main__list">
          <img alt="фото" className="list-img" src={folder} />
          <div>
            <h2 className="list-title">100+</h2>
            <p className="list-subtitle">проектов</p>
          </div>
        </li>
        <li className="main__list">
          <img alt="фото" className="list-img" src={people} />
          <div>
            <h2 className="list-title">Команда</h2>
            <p className="list-subtitle">профессионалов</p>
          </div>
        </li>
        <li className="main__list">
          <img alt="фото" className="list-img" src={support} />
          <div>
            <h2 className="list-title">Поддержка</h2>
            <p className="list-subtitle">24/7</p>
          </div>
        </li>
      </ul>

      </div>
      <img alt="фото" src={main} className="main__image" />
    </div>
  );
};

export default Main;
