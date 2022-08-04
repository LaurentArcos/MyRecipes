import axios from 'axios';
import { LOGIN } from '../actions/user';

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
          console.log(res.data);
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

    default:
      next(action);
  }
};

export default userMiddleware;
