import { useState } from "react";
import { hashPassword } from "../../utils/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.email.value.trim();
    const password = form.password.value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("Пользователь не найден");
      return;
    }

    const passwordHash = await hashPassword(password);

    if (email !== user.email || passwordHash !== user.passwordHash) {
      setError("Неверный email или пароль");
      setIsPassword(false);
      return;
    }
    setError("");
    setIsPassword(true);
    localStorage.setItem("isAuth", "true");
    login(user);
    navigate('/');
  };

  return (
    <main className="auth">
      <form className="auth__form" onSubmit={handleLogin}>
        <Link className="auth__link" to="/">
          &larr; Назад
        </Link>
        <h1 className="auth__title">Вход</h1>
        <label className="auth__label">E-mail:</label>

        <input
          name="email"
          required
          type="email"
          placeholder="Введите ваш Email"
          className="auth__input"
        />
        <label className="auth__label">Пароль:</label>

        <input
          name="password"
          required
          type="password"
          placeholder="Введите ваш пароль"
          className={!isPassword ? "auth__input_red" : "auth__input"}
        />

        {error && <p className="auth__error">{error}</p>}

        <button type="submit" className="auth__button">
          Войти
        </button>
      </form>
    </main>
  );
};

export default Login;
