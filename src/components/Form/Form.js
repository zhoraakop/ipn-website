import { useRef, useState } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { Turnstile } from "@marsidev/react-turnstile";

const Form = () => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = nameRef.current.value.trim();
    const phoneValue = phoneRef.current.value.trim();

    if (!name) {
      setError("Введите имя");
      setSuccess("");
      return;
    }

    const phoneNumber = parsePhoneNumberFromString(phoneValue, "RU");

    if (
      !phoneNumber ||
      !phoneNumber.isValid() ||
      phoneNumber.country !== "RU"
    ) {
      setError("Введите корректный номер телефона");
      setSuccess("");
      return;
    }

    if (!captchaToken) {
      setError("Подтвердите, что вы не робот");
      return;
    }

    setError("");
    setSuccess("");
    setIsSending(true);

    try {
      const response = await fetch("https://ipn-1.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone: phoneNumber.number,
          captchaToken,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      nameRef.current.value = "";
      phoneRef.current.value = "";

      setSuccess("Заявка отправлена");
    } catch (error) {
      setError("Ошибка отправки. Попробуйте позже");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-form" id="form">
      <div className="contact-form__content">
        <span className="contact-form__title">Оставить заявку</span>

        <h2 className="contact-form__subtitle">Обсудим ваш проект</h2>

        <p className="contact-form__quote">
          Оставьте контакты — мы свяжемся с вами и предложим решение под ваши
          задачи.
        </p>
      </div>

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <label className="contact-form__label">Введите ваше имя:</label>
        <input
          className="contact-form__input"
          type="text"
          name="name"
          required
          placeholder="Ваше имя"
          ref={nameRef}
        />
        <label className="contact-form__label">Введи ваш телефон:</label>
        <input
          className="contact-form__input"
          type="tel"
          name="phone"
          id="phone"
          minLength="11"
          maxLength="12"
          required
          placeholder="+7(123)-456-78-90"
          ref={phoneRef}
        />
        {error && <p className="contact-form__error">{error}</p>}
        {success && <p className="contact-form__success">{success}</p>}
        <div className="turnstile">
          <Turnstile
            className="turnstile"
            siteKey="0x4AAAAAADr6PZTP03QicDgK"
            onSuccess={(token) => {
              setCaptchaToken(token);
              setError("");
            }}
            onExpire={() => setCaptchaToken("")}
            onError={() => {
              setCaptchaToken("");
              setError("Не удалось пройти проверку");
            }}
          />
        </div>
        <button
          className="contact-form__button"
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Отправка..." : "Отправить заявку"}
        </button>

        <span className="contact-form__privacy">
          * Нажимая «Отправить заявку», вы подтверждаете согласие на обработку
          персональных данных в соответствии с{" "}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Политикой конфиденциальности
          </a>
          .
        </span>
      </form>
    </div>
  );
};

export default Form;
