import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './style.scss';

function Menu() {
  const recipes = useSelector((state) => state.recipes.list);
  const logged = useSelector((state) => state.user.logged);

  const classNames = ({ isActive }) => `menu-link ${isActive ? 'menu-link--active' : ''}`;

  return (
    <nav className="menu">
      <NavLink to="/" className={classNames}>Accueil</NavLink>

      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          to={`/recipe/${recipe.slug}`}
          className={classNames}
        >
          {recipe.title}
        </NavLink>
      ))}

      {logged && <NavLink to="/favorites" className={classNames}>Favoris</NavLink>}
    </nav>
  );
}

export default Menu;
