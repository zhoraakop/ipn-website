const Tarriffs = () => {
    return ( 
        <div className="tariffs" id="tariffs">
            <div className="tariffs__block">
              <h2 className="tariffs__title">Тарифы</h2>
              <p className="tariffs__subtitle">
                Выберите подходящий пакет услуг
              </p>
            </div>
            <div className="tariffs__list">
              <div className="tariff-card">
                <h2 className="tariff-card__title">Лайт</h2>
                <p className="tariff-card__subtitle">250 000 &#8381;</p>
                <ul className="tariff-card__list">
                  <li className="tariff-card__item">&#10004; Создание сайта</li>
                  <li className="tariff-card__item">&#10004; SEO продвижение</li>
                  <li className="tariff-card__item">&#10006; Рекламный проект</li>
                   <li className="tariff-card__item">&#10006; Хранение данных</li>
                    <li className="tariff-card__item">&#10006; Услуги ЦОД</li>
                </ul>
              </div>
              <div className="tariff-card">
                <h2 className="tariff-card__title">Стандарт</h2>
                <p className="tariff-card__subtitle">500 000 &#8381;</p>
                <ul className="tariff-card__list">
                   <li className="tariff-card__item">&#10004; Создание сайта</li>
                  <li className="tariff-card__item">&#10004; SEO продвижение</li>
                  <li className="tariff-card__item">&#10004; Рекламный проект</li>
                   <li className="tariff-card__item">&#10006; Хранение данных</li>
                    <li className="tariff-card__item">&#10006; Услуги ЦОД</li>
                </ul>
              </div>
              <div className="tariff-card" id="special">
                <p className="tariff-card__special">Популярный</p>
                <h2 className="tariff-card__title">Стандарт +</h2>
                <p className="tariff-card__subtitle">1 000 000 &#8381;</p>
                <ul className="tariff-card__list">
              <li className="tariff-card__item">&#10004; Создание сайта</li>
                  <li className="tariff-card__item">&#10004; SEO продвижение</li>
                  <li className="tariff-card__item">&#10004; Рекламный проект</li>
                   <li className="tariff-card__item">&#10004; Хранение данных</li>
                    <li className="tariff-card__item">&#10006; Услуги ЦОД</li>
                </ul>
              </div>
              <div className="tariff-card">
                <h2 className="tariff-card__title">Про</h2>
                <p className="tariff-card__subtitle">1 500 000 &#8381;</p>
                <ul className="tariff-card__list">
                  <li className="tariff-card__item">&#10004; Создание сайта</li>
                  <li className="tariff-card__item">&#10004; SEO продвижение</li>
                  <li className="tariff-card__item">&#10004; Рекламный проект</li>
                   <li className="tariff-card__item">&#10004; Хранение данных</li>
                    <li className="tariff-card__item">&#10004; Услуги ЦОД</li>
                </ul>
              </div>
             
            </div>
          </div>
     );
}
 
export default Tarriffs;