'use strict';

const multiBracketValidation = require('./multi-bracket-validation.js');

describe('Testing multi bracket validation', () => {
  it ('Should return true if brackets are balanced', () => {
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('{}(){}')).toBe(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
    
  })

  it ('Should return false if brackets aren\'t balanced', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
    expect(multiBracketValidation('{(})')).toBe(false);
    expect(multiBracketValidation('{')).toBe(false);
    expect(multiBracketValidation(')')).toBe(false);
    expect(multiBracketValidation('[}')).toBe(false);
  })
});