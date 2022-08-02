import axios from 'axios';
import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/recipes')
      .then((res) => {
        dispatch({
          type: 'SET_RECIPES',
          payload: {
            recipes: res.data,
          },
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        <Route path="*" element={<Error />} />
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

