import { ADD_DRINK, REMOVE_DRINK, addDrink, removeDrink, addSandwich, ADD_SANDWICH, addChips, ADD_CHIPS, removeSandwich, REMOVE_SANDWICH, removeChips, REMOVE_CHIPS } from './lunchActions';

describe('lunch action tests', () => {
  it('makes a drink action', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });

  it('makes a sandwich action', () => {
    expect(addSandwich('bologna')).toEqual({
      type: ADD_SANDWICH,
      payload: 'bologna'
    });
  });

  it('makes a chips action', () => {
    expect(addChips('pringles')).toEqual({
      type: ADD_CHIPS,
      payload: 'pringles'
    });
  });

  it('removes a drink', () => {
    expect(removeDrink('water')).toEqual({
      type: REMOVE_DRINK, 
      payload: 'water'
    });
  });

  it('removes a sandwich', () => {
    expect(removeSandwich('bologna')).toEqual({
      type: REMOVE_SANDWICH, 
      payload: 'bologna'
    });
  });

  it('removes chips', () => {
    expect(removeChips('pringles')).toEqual({
      type: REMOVE_CHIPS, 
      payload: 'pringles'
    });
  });
});
