
var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },
    min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },
    each: function (myShoes, callback) {
    myShoes = ["Stilettos", "Converse", "Sandals"];
      for (var i=0; i<myShoes.length; i++)
        callback(myShoes[i]);
      },
    map: function (myShoes, callback) {
    var newArr = [];
    myShoes = ["Stilettos", "Converse", "Sandals"];
      for (var i=0; i<myShoes.length; i++)
        newArr.push(callback(myShoes[i]));
      },
    
    filter: function(arr, testCase){
    var filteredArr = [];
    for (var i=0; i<arr.length; i++){
      if(testCase(arr[i])){
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
    },
    reject: function(testCase){
    numList = [66,22,67, 34];
    var rejectedArr = [];
    for (var i=0; i<numList.length; i++){
        filteredArr.push(!testCase(numList[i]));
    }
  }
};

module.exports = iterators;

var myArr = [1,2,3];

myArr.map(function(value, index){
  return value *2;
});

var add = function(a,b){
  return a+b;
} ;
var subtract = function(a,b){
  return a-b;
} ;

var math = function(a,b,callback){
  return callback(a,b);
};

var testCase = function(a){
  if(a%2===0);
  return a;
};

//returns 3
math(1,2,add);

//returns 0
math(2,2,subtract);


