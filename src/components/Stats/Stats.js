import graph from '../../images/purple-graph.png';
import rocket from '../../images/rocket.png';
import people from '../../images/clients.png';
import star from '../../images/experience.png';
import support from '../../images/support.png';

const Stats = () => {
    return ( 
 <div className="stats" id="stats">
        <div className="stats__block">
          <h2 className="stats__title">Айпиэн в цифрах</h2>
        </div>
        <div className="stats__list">
          <div className="stat-card">
            <img alt="фото" src={graph} className="stat-card__image"/>
            <div className="stat-card__block">
              <h2 className="stat-card__title">30-40 млн &#8381;</h2>
              <p className="stat-card__subtitle">Текущий ежемесячный оборот компании</p>
            </div>
          </div>
          <div className="stat-card">
              <img alt="фото" src={rocket} className="stat-card__image"/>
            <div className="stat-card__block">
              <h2 className="stat-card__title">150-300 млн &#8381;</h2>
              <p className="stat-card__subtitle">Прогнозируемый оборот после запуска ЦОД</p>
            </div>
          </div>
          <div className="stat-card">
              <img alt="фото" src={people} className="stat-card__image"/>
            <div className="stat-card__block">
              <h2 className="stat-card__title">100+</h2>
              <p className="stat-card__subtitle">Активных клиентов и преоктов</p>
            </div>
          </div>
          <div className="stat-card">
              <img alt="фото" src={star} className="stat-card__image"/>
            <div className="stat-card__block">
              <h2 className="stat-card__title">10+ лет</h2>
              <p className="stat-card__subtitle">На рынке цифровых технологий</p>
            </div>
          </div>
           <div className="stat-card">
              <img alt="фото" src={support} className="stat-card__image"/>
            <div className="stat-card__block">
              <h2 className="stat-card__title">24/7</h2>
              <p className="stat-card__subtitle">Техническая поддержка и мониторинг</p>
            </div>
          </div>
        </div>
      </div>

     );
}
 
export default Stats;