import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(props) {
  const recipes = useSelector((state) => state.recipes.list);
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Home />
      <Routes>
        <Route
          path={`/recipe/${recipes.slug}`}
          element={(<Recipe />)}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
