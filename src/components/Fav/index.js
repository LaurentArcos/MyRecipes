import Page from 'src/components/Page';
import Content from 'src/components/Content';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AppHeader from '../AppHeader';

function Fav() {
  const token = useSelector((state) => state.user.token);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Convention permettant d'ajouter le token JWT automatiquement
    // aux appels axios
    axios.defaults.headers.common.Authorization = `bearer ${token}`;
    axios.get('http://localhost:3001/favorites')
      .then((res) => {
        setRecipes(res.data.favorites);
      });
  }, []);

  return (
    <Page>
      <AppHeader />
      <Content
        title="Vos recettes préférées"
        text="Retrouvez ici vos recettes favorites. Sympa, non ?"
        recipes={recipes}
      />
    </Page>
  );
}

export default Fav;

