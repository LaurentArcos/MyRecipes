import './style.scss';
import logo from 'src/assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeLoginField, login, logout } from '../../actions/user';
import LoginForm from '../LoginForm';

function AppHeader() {
  const dispatch = useDispatch();

  const { logged, pseudo } = useSelector((state) => state.user);
  const { email, password } = useSelector((state) => state.user.loginForm);

  const handleChangeLoginField = (value, key) => {
    dispatch(changeLoginField(value, key));
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        changeField={handleChangeLoginField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isLogged={logged}
        loggedMessage={`Bonjour, ${pseudo} !`}
      />
    </header>
  );
}

export default AppHeader;
