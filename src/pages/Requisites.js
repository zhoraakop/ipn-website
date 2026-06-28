

const Requisites = () => {
  return (
    <main className="legal-page">
      <div className="legal-page__container">
        <header className="legal-page__header">
          <span className="legal-page__eyebrow">Компания</span>
          <h1 className="legal-page__title">Реквизиты</h1>
          <p className="legal-page__description">
            Сведения об операторе сайта и компании, оказывающей услуги в сфере digital-разработки, продвижения, аналитики и инфраструктуры.
          </p>
        </header>

        <article className="legal-page__card">
          <section className="legal-page__section">
            <h2>Основные сведения</h2>

            <div className="legal-page__meta">
              <div className="legal-page__meta-row">
                <strong>Полное наименование</strong>
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
                <strong>Юридический адрес</strong>
                <span>199155, г. Санкт-Петербург, ул. Железноводская, д. 32, литер Д, пом. 22-Н офис.5-8</span>
              </div>
              <div className="legal-page__meta-row">
                <strong>E-mail</strong>
                <span>info@ipn.ru</span>
              </div>
            </div>

          
          </section>

          <section className="legal-page__section">
            <h2>Направления деятельности</h2>
            <ul>
              <li>создание корпоративных сайтов, лендингов и интернет-магазинов;</li>
              <li>техническая поддержка веб-проектов;</li>
              <li>SEO-продвижение;</li>
              <li>контекстная, таргетированная и медийная реклама;</li>
              <li>аналитика данных, хранение данных и инфраструктурные услуги.</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Requisites;