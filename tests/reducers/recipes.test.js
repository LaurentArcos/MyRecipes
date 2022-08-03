import reducer, {initialState} from 'src/reducers/recipes';
import { setRecipesList } from '../../src/actions/recipes';

describe('reducer for recipes', () => {
    describe('structure', () => {
        it('is a function', () => {
            expect(typeof reducer).toBe('function');
        });
    });

    describe('execution', () => {
        it('should return the initial state when called without arguments', () => {
            expect(reducer()).toEqual(initialState);
        });

        it('SET_RECIPES_LIST', () => {
            //Je crée une "fausse action"
            const list = [
                {id: 1, slug: 'tacos-18-viandes'},
                {id: 2, slug: 'pizza-aux-brocolis'}
            ];
            //J'appelle pour ça mon action creator (setRecipesList)
            const action = setRecipesList(list);
            // Je passe cette action à mon appel du reducer
            expect(reducer(initialState, action)).toEqual({
                list,
                loading: false
            });
        });
    });
});
