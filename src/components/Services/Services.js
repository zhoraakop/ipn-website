import code from "../../images/code2.png";
import target from "../../images/target.png";
import megaphone from "../../images/megaphone.png";
import analytics from "../../images/analytics.png";
import cloude from "../../images/cloud1.png";

const Services = () => {
  return (
    <div className="services" id="scroll">
      <div className="services__block">
        <h2 className="services__title">Наши услуги</h2>
        <p className="services__subtitle">
          Комплексные решения для вашего бизнеса
        </p>
      </div>
      <div className="services__list">
        <div className="service-card">
          <img alt="фото" src={code} className="service-card__image" />
          <h2 className="service-card__title">Веб-разработка</h2>
          <ul className="service-card__list">
            <li className="service-card__item">Корпоративные сайты</li>
            <li className="service-card__item">Интернет-магазины</li>
            <li className="service-card__item">Веб-сервисы</li>
          </ul>
        </div>
        <div className="service-card">
          <img alt="фото" src={target} className="service-card__image" />
          <h2 className="service-card__title">SEO-продвижение</h2>
          <ul className="service-card__list">
            <li className="service-card__item">Внутренняя оптимизация</li>
            <li className="service-card__item">Внешнее продижение</li>
            <li className="service-card__item">
              Вывод в ТОП в Яндекс и Google
            </li>
            <li className="service-card__item">Рост органического трафика</li>
          </ul>
        </div>
        <div className="service-card">
          <img alt="фото" src={megaphone} className="service-card__image" />
          <h2 className="service-card__title">Реклама и маркетинг</h2>
          <ul className="service-card__list">
            <li className="service-card__item">Яндекс Директ</li>
            <li className="service-card__item">VK Ads/Таргетинг</li>
            <li className="service-card__item">Медийная реклама</li>
            <li className="service-card__item">Аналитика рекламных кампаний</li>
          </ul>
        </div>
        <div className="service-card">
          <img alt="фото" src={analytics} className="service-card__image" />
          <h2 className="service-card__title">Аналитика и данные</h2>
          <ul className="service-card__list">
            <li className="service-card__item">Сквозная аналитика</li>
            <li className="service-card__item">Сбор и обработка данных</li>
            <li className="service-card__item">Отчеты и дашборды</li>
            <li className="service-card__item">
              Принятие решений на основе данных
            </li>
          </ul>
        </div>
        <div className="service-card">
          <img alt="фото" src={cloude} className="service-card__image" />
          <h2 className="service-card__title">Инфраструктура и ЦОД</h2>
          <ul className="service-card__list">
            <li className="service-card__item">Хостинг и серверы</li>
            <li className="service-card__item">Резервное копирование</li>
            <li className="service-card__item">Защита данных</li>
            <li className="service-card__item">Собственный ЦОД</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
