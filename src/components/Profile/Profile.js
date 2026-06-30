/* import { getUser, logout } from "../../utils/auth";
 */ import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  /*   const user = getUser(); */
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <main className="profile">
      <div className="profile__block">
        <Link className="auth__link" to="/">
          &larr; Назад
        </Link>
        <h1 className="profile__title">Личный кабинет</h1>

        <p className="profile__subtitle">Имя: {user.name}</p>
        <p className="profile__subtitle">Email: {user.email}</p>
        <p className="profile__subtitle">Дата регистрации: {user.createdAt}</p>

        <button onClick={handleLogout} className="profile__button">
          Выйти
        </button>
      </div>
    </main>
  );
};

export default Profile;
