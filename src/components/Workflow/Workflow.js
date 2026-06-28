import idea from "../../images/idea.png";
import code from "../../images/code.png";
import graph from "../../images/graph.png";
import analytics from "../../images/analytics1.png";
import cloude from "../../images/cloud.png";
import COD from "../../images/COD.png";
import arrow from '../../images/arrow.png'


const Workflow = () => {
    return ( 
        <div className="road" id="workflow">
        <div className="road__block">
          <h2 className="road__title">Путь вашего проекта</h2>
          <p className="road__subtitle">
            Берем на себя все этапы - от идеи до масштабирования
          </p>
        </div>
        <div className="road__cards">
          
          <div className="road-card" >
            <img alt="фото" src={idea} className="road-card__image" />
            <h2 className="road-card__title">1. Идея</h2>
            <p className="road-card__subtitle">Анализируем задачу и предлагаем решение</p>
            <img alt="фото" src={arrow} className="road-card__arrow"/>
          </div>
          <div className="road-card">
            <img alt="фото" src={code} className="road-card__image" />
            <h2 className="road-card__title">2. Разработка</h2>
            <p className="road-card__subtitle">Создаем сайты и сервисы любой сложности</p>
             <img alt="фото" src={arrow} className="road-card__arrow"/>
          </div>
          <div className="road-card">
            <img alt="фото" src={graph} className="road-card__image" />
            <h2 className="road-card__title">3. продвижение</h2>
            <p className="road-card__subtitle">Проанализируем целевой трафик и клиентов</p>
             <img alt="фото" src={arrow} className="road-card__arrow" id="card3" />
          </div>
          <div className="road-card">
            <img alt="фото" src={analytics} className="road-card__image" />
            <h2 className="road-card__title">4. Аналитика</h2>
            <p className="road-card__subtitle">Собираем и анализируем данные для роста и эффективности</p>
             <img alt="фото" src={arrow} className="road-card__arrow"/>
          </div>
          <div className="road-card">
            <img alt="фото" src={cloude} className="road-card__image" />
            <h2 className="road-card__title">5. Масштабирование</h2>
            <p className="road-card__subtitle">Обеспечиваем надежную инфраструктуру и хранение данных</p>
             <img alt="фото" src={arrow} className="road-card__arrow"/>
          </div>
          <div className="road-card">
            <img alt="фото" src={COD} className="road-card__image" />
            <h2 className="road-card__title">6. Собственный ЦОД</h2>
            <p className="road-card__subtitle">Ваши данные под защитой в нашем центре обработки данных</p>
          </div>
        </div>
      </div>
     );
}
 
export default Workflow;