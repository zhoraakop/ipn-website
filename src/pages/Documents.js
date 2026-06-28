

const Documents = () => {
  return (
    <main className="legal-page">
      <div className="legal-page__container">
        <header className="legal-page__header">
          <span className="legal-page__eyebrow">Правовая информация</span>
          <h1 className="legal-page__title">Документы</h1>
          <p className="legal-page__description">
            Раздел содержит основные документы, регулирующие использование сайта и обработку персональных данных.
          </p>
        </header>

        <article className="legal-page__card">
          <section className="legal-page__section">
            <h2>Юридические документы</h2>

            <div className="legal-links">
              <a className="legal-links__link" href="/privacy">Политика конфиденциальности</a>
              <a className="legal-links__link" href="/agreement">Пользовательское соглашение</a>
              <a className="legal-links__link" href="/personal-data-consent">Согласие на обработку персональных данных</a>
              <a className="legal-links__link" href="/requisites">Реквизиты</a>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Documents;