# lab-02-array-methods

//TODO

//- 1. map(arr, callback)
    - Takes an array and callback (item => {}) and creates a new array with the return value of each called callback.

//- 2. filter(arr, callback)
    - Takes an array and callback (item => {}) and creates a new array with all the items whose callback returned true or truthy.

//- 3. findIndex(arr, callback)
    - - Takes an array and callback (item => {}) and returns the index of the first item whose callback returns true or truthy.

- 4. reduce(arr, callback [, initialValue])
    - Takes an array and callback ((acc, item) => {}) and an optional second initialValue parameter that is the initial value of the accumulator. The return value is passed as the accumulator argument of the next function call.

- 5. every(arr, callback)
    - Takes an array and callback (item => {}) and retruns an overall true if all callbacks return true or truthy.

- bonus forEach(arr, callback)
    - - Takes an array and callback ((item, index) => {}) and calls that cunction for each item in the array.