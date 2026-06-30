import { useState } from "react";
import { hashPassword } from "../../utils/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const repeatPassword = form.repeatPassword.value;

    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      setIsPassword(false);
      return;
    }

    const passwordHash = await hashPassword(password);

    const user = {
      id: Date.now(),
      name,
      email,
      passwordHash,
      createdAt: new Date().toLocaleDateString("ru-RU"),
    };

    if (!isValidEmail(email)) {
      setError("Введите корректную почту");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuth", "true");
    setIsPassword(true);
    login(user);
    navigate("/");
  };

  return (
    <main className="auth">
      <form className="auth__form" onSubmit={handleRegister}>
        <Link className="auth__link" to="/">
          &larr; Назад
        </Link>
        <h1 className="auth__title">Регистрация</h1>
        <label className="auth__label">Имя:</label>

        <input name="name" required placeholder="Имя" className="auth__input" />
        <label className="auth__label">E-mail:</label>

        <input
          name="email"
          required
          type="email"
          placeholder="Email"
          className="auth__input"
        />
        <label className="auth__label">Придумайте пароль:</label>

        <input
          name="password"
          required
          type="password"
          placeholder="Пароль"
          className="auth__input"
        />

        <input
          name="repeatPassword"
          required
          type="password"
          placeholder="Повторите пароль"
          className={!isPassword ? "auth__input_red" : "auth__input"}
        />

        {error && <p className="auth__error">{error}</p>}

        <button type="submit" className="auth__button">
          Создать аккаунт
        </button>
      </form>
    </main>
  );
};

export default Register;
