# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`
	A function that deals with one or more other functions in either or both of these capacities: taking one or more inpots as a function, OR outputting a function. 

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max`
	returns the maximum value of zero or more numbers.
	e.g.
	Math.max(1,2,3,4,5);
	/will return 5
* `min`
	returns the minimum value of zero or more numbers.
 	Math.min(20,234);
 	/will return 20
* `each`
	selects each element on the array to operate the function on.
* `map`
	takes one array, operates a function on it and creates a new array
* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
	creates a new array containing all the elements passing a test implemented by the given function
* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
	starts from the beginning of the array, adds the first two together then takes this cumulative total and adds the next, and so on, until all the elements in the array have been added together.
* `reject`: [note](http://underscorejs.org/#reject)
	reates a new array containing all the elements NOT passing a test implemented by the given function
Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

