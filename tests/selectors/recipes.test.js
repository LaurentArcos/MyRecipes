import { findRecipe, recipesTitle } from "../../src/selectors/recipes";
import data from 'src/data';

describe('findRecipe', () => {
    describe('structure', () => {
        it('should be a function', () => {
            expect(typeof findRecipe).toBe('function');
        });
    });

    describe('execution', () => {
        it('should return a recipe object with an id property if found', () => {
            expect(typeof findRecipe(data, 'crepes-raffinees'))
                .toBe('object');

            expect(findRecipe(data, 'crepes-raffinees'))
                .toHaveProperty('id', 12345);
        });

        it('should return corresponding data depending on slug', () => {
            for(let i = 0; i < data.length; i++) {
                expect(findRecipe(data, data[i].slug)).toEqual(data[i]);
            }
        });

        it('should return undefined if slug is not found', () => {
            expect(findRecipe(data, 'lola-tacos-muchos-buenos'))
                .toBeUndefined();
        });
    });
});

describe('recipesTitle', () => {
    describe('structure', () => {
        it('should be a function', () => {
            expect(typeof recipesTitle).toBe('function');
        });

        it('should return a string', () => {
            expect(typeof recipesTitle()).toBe('string');
        });
    });

    describe('execution', () => {
        it('should return a title by default', () => {
            expect(recipesTitle()).toEqual('Découvrez prochainement nos recettes.');
        });

        it('should return a specific title for 1 recipe', () => {
            expect(recipesTitle([data[0]])).toEqual('Découvrez notre recette.');
        });

        it('should return a specific title for all recipes containing the number', () => {
            expect(recipesTitle(data)).toEqual(`Découvrez nos ${data.length} recettes.`);
        });
    });
});
