

const PersonalDataConsent = () => {
  return (
    <main className="legal-page">
      <div className="legal-page__container">
        <header className="legal-page__header">
          <span className="legal-page__eyebrow">Правовая информация</span>
          <h1 className="legal-page__title">Согласие на обработку персональных данных</h1>
          <p className="legal-page__description">
            Документ определяет условия согласия пользователя на обработку персональных данных при отправке формы обратной связи.
          </p>
        </header>

        <article className="legal-page__card">
          <section className="legal-page__section">
            <h2>1. Согласие пользователя</h2>
            <p>
              Пользователь, заполняя форму обратной связи на сайте и проставляя отметку о согласии, свободно, своей волей и в своем интересе дает согласие ООО «Айпиэн» на обработку персональных данных.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>2. Оператор персональных данных</h2>
            <div className="legal-page__meta">
              <div className="legal-page__meta-row">
                <strong>Оператор</strong>
                <span>ООО «Айпиэн»</span>
              </div>
              <div className="legal-page__meta-row">
                <strong>ИНН</strong>
                <span>7801366585</span>
              </div>
              <div className="legal-page__meta-row">
                <strong>ОГРН</strong>
                <span>1047855100765</span>
              </div>
              <div className="legal-page__meta-row">
                <strong>Адрес</strong>
                <span>199155, г. Санкт-Петербург, ул. Железноводская, д. 32, литер Д, пом. 22-Н офис.5-8</span>
              </div>
              <div className="legal-page__meta-row">
                <strong>E-mail</strong>
                <span>ipn65162@gmail.com</span>
              </div>
            </div>
          </section>

          <section className="legal-page__section">
            <h2>3. Перечень персональных данных</h2>
            <p>Пользователь дает согласие на обработку следующих данных:</p>
            <ul>
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>технические данные, связанные с отправкой формы: дата, время, IP-адрес и данные проверки защиты от спама.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>4. Цели обработки</h2>
            <p>Персональные данные обрабатываются в целях:</p>
            <ul>
              <li>обработки заявки пользователя;</li>
              <li>связи с пользователем;</li>
              <li>подготовки предложения по услугам компании;</li>
              <li>защиты сайта и формы обратной связи от спама и автоматических отправок.</li>
            </ul>
          </section>

          <section className="legal-page__section">
            <h2>5. Действия с персональными данными</h2>
            <p>
              Согласие предоставляется на совершение следующих действий: сбор, запись, систематизация, накопление, хранение, уточнение, использование, передача в случаях, необходимых для работы сайта, обезличивание, блокирование, удаление и уничтожение персональных данных.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>6. Срок действия согласия</h2>
            <p>
              Согласие действует до достижения целей обработки персональных данных либо до момента его отзыва пользователем.
            </p>
          </section>

          <section className="legal-page__section">
            <h2>7. Отзыв согласия</h2>
            <p>
              Пользователь вправе отозвать согласие, направив обращение на электронную почту ipn65162@gmail.com. После получения отзыва оператор прекращает обработку персональных данных, если отсутствуют иные законные основания для продолжения обработки.
            </p>
          </section>

          <p className="legal-page__date">Дата последнего обновления: 2026 г.</p>
        </article>
      </div>
    </main>
  );
};

export default PersonalDataConsent;