import axios from 'axios';
import { LOGIN, LOGOUT, setUser } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { email, password } = store.getState().user.loginForm;
      // Objectif haut niveau : envoyer un post à l'api
      // avec les valeurs du champ email et password

      // Je récupère depuis le store la valeur de email
      // Je récupère depuis le store la valeur de password

      // J'envoie ma requête en POST via axios sur localhost:3001/login
      axios.post('http://localhost:3001/login', { email, password })
        .then((res) => {
          const { pseudo, token } = res.data;

          // localStorage n'accepte que des chaînes de caractères !
          // nous devons donc transformer notre object en string via JSON.stringify
          localStorage.setItem('user', JSON.stringify({
            pseudo,
            token,
          }));
          store.dispatch(setUser(pseudo, token));
        })
        .catch((err) => {
          console.err(err);
        });

      // Si c'est réussi
      // ?
      // Si ça échoue
      // J'affiche une erreur
      break;
    }

    case LOGOUT: {
      localStorage.removeItem('user');
      break;
    }

    default:
      next(action);
  }
};

export default userMiddleware;
