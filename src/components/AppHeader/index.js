/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import './style.scss';
import logo from '../../assets/logo.png';

const AppHeader = () => (
  <header className="header">
    <img src={logo} className="header-logo" alt="Logo oRecipes" />
  </header>
);

export default AppHeader;
