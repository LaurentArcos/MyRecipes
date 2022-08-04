import './style.scss';
import logo from 'src/assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../LoginForm';
import { changeLoginField, login } from '../../actions/user';

function AppHeader() {
  const dispatch = useDispatch();

  const { email, password } = useSelector((state) => state.user.loginForm);

  const handleChangeLoginField = (value, key) => {
    dispatch(changeLoginField(value, key));
  };

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        changeField={handleChangeLoginField}
        handleLogin={handleLogin}
      />
    </header>
  );
}

export default AppHeader;
