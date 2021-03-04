// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../utilities.js';
import { subtract } from '../utilities.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
        // const expected = true;
    const x = 5
    const y = 2
    const expectedResult = 3   
    
    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = false;
    const actualResult = subtract(x, y)
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualResult, expectedResult);
});
