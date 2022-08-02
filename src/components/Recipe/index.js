/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */

// == Import : npm
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findRecipe } from 'src/selectors/recipes';

// == Import : local
// Composants
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe() {
  const recipe = useSelector((state) => findRecipe(state.recipes.list, 'crepes-raffinees'));

  if (!recipe) {
    return <Navigate to="/error" replace />;
  }
  return (
    <Page>
      <AppHeader />
      <Link to={`/recipe/${recipe.slug}`}>
        <div className="recipe">
          <Header
            name={recipe.title}
            thumbnail={recipe.thumbnail}
            author={recipe.author}
            difficulty={recipe.difficulty}
          />
          <Ingredients
            list={recipe.ingredients}
          />
          <Instructions
            steps={recipe.instructions}
          />
        </div>
      </Link>
    </Page>
  );
}

// == Export
export default Recipe;
