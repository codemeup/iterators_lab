var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });
});

describe('Iterators', function () {
  describe('#min', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the minimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it('should return Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });
});

describe("Iterators", function(){
  describe('#each', function(){

    var myShoes;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myShoes = ["Stilettos", "Converse", "Sandals"];

    it("should return a new array with 2 added to each of the i in the array", function(){
      expect(Iterators.forEach("Stilettos")).to.equal("I'm wearing Stilettos");
  });
  });
});
});

describe("Iterators", function(){
  describe('#map', function(){

    var myShoes;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myShoes = ["Stilettos", "Converse", "Sandals"];

    it("should return a new array which is the same", function(){
      expect(Iterators.forEach("Stilettos")).to.equal("I'm wearing Stilettos");
  });
  });
});
});

describe("Iterators", function(){
    describe("#filter", function(){
    var numList;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      numList = [66,22,67, 34];
    });

    function isEven(num){
      return num % 2 === 0 ? true : false;
    }

    function isOdd(num){
      return num % 2 !== 0 ? true : false;
    }

    it("should return all the even numbers in the array in a new array", function(){
      expect(Iterators.filter([66,22,67,34], isEven)).to.eql([66,22,34]);
  });
    it("should return all the odd numbers in the array in a new array", function(){
      expect(Iterators.filter([66,22,67,34], isOdd)).to.eql([67]);
  });
});
});
describe("Iterators", function(){
    describe("#reject", function(){
    var numList;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      numList = [66,22,67, 34];
    });

    function isOdd(num){
      return num % 2 === 0 ? true : false;
    }

    function isEven(num){
      return num % 2 !== 0 ? true : false;
    }

    it("should return all the odd numbers in the array in a new array", function(){
      expect(Iterators.filter([66,22,67,34], isEven)).to.eql([67]);
  });
    it("should return all the even numbers in the array in a new array", function(){
      expect(Iterators.filter([66,22,67,34], isOdd)).to.eql([66,22,34]);
  });
});
});
