import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';
import { fetchRecipes } from '../../actions/recipes';
import { setUser } from '../../actions/user';
import Fav from '../Fav';

function App() {
  const location = useLocation();

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.recipes.loading);
  const logged = useSelector((state) => state.user.logged);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    if (loggedUser) {
      dispatch(setUser(loggedUser.pseudo, loggedUser.token));
    }
    dispatch(fetchRecipes());
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<Recipe />} />
        {logged && <Route path="/favorites" element={<Fav />} />}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

