// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { divide } from '../utilities.js';

const test = QUnit.test;


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations. What are the inputs and outputs for the functions you are going to be testing.

    const x = 5;
    const y = 5;
    const quotient = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    //expect.equal(actual, expected) builtin from the qunit testing library to make an assertion. go test that actual and expected are equal. 
    expect.equal(result, quotient);
});
