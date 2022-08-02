/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = () => {
  const recipes = useSelector((state) => state.recipes);
  return (
    <nav className="menu">
      <NavLink
        className="menu-link menu-link--active"
        to="/"
      >
        Accueil
      </NavLink>
      {Array.from(recipes).map((recipe) => (
        <NavLink
          key={recipe.id}
          className="menu-link"
          to={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
