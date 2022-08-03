import { findRecipe } from "../../src/selectors/recipes";
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

        it('should return undefined if slug is bidoning', () => {
            expect(findRecipe(data, 'lola-tacos-muchos-buenos')).toBeUndefined();
        });
    });
});

