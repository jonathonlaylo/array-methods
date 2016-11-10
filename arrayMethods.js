// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//Push your First Name and Last Name into an empty array
var nameArray = [];
nameArray.push('Jonathon', 'Laylo');

//all the missing numbers up to and including 10 to genericNumberArray
var numberArray = genericNumberArray.push(6, 7, 8, 9, 10);

//removes the last element of an array
//'popResult' is storing the return element
var popResult = colors.pop('Charlie');

//the array named 'scrambledWords'
var scrambledWords  = scrambledWords.reverse();

//the array named 'phoneNumber'
var phoneNumber = phoneNumber.reverse();

//removes the first element of an array
//'nextOrder' is storing the return value
var nextOrder = orderQueue.shift();

//the 'mixedNums' array
mixedNums.sort();

//the 'mixedWords' array
mixedWords.sort();

//'fruitCollection' has only fruits inside of it
//'notFruit' var is storing the items removed from 'fruitCollection'
var notFruit = fruitCollection.splice(1,3);

//'gemBox' has only gems inside of it
var notGemBox = gemBox.splice(5,2);
gemBox.splice(6);
//gemBox.splice()

//'upToTen' should have a length of 10
var addUpToTen = upToTen.splice(2, 3, 3, 4, 5, 6, 7, 8, 9, 10);

//'brownOnly' as only the word 'brown' in it and a lenght of 5
//var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
brownOnly.splice(1, 5, 'brown', 'brown', 'brown');

//'orderedValues' array has all numbers between 1 and 10, has a lenght of 10
//'orderedValuesNewLength' is storing the lenght of 'orderedValues'
//var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var orderedValuesNewLength = orderedValues.unshift(1, 2, 3);

//'randomThingsArray' is the result of joining the variables 'genericNumberArray' and 'colors'
var randomThingsArray = genericNumberArray.concat(colors);

//'updateOrders' is the result of joing the array 'orderQueue' and two
//custom orders that you define
//var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var myOrder = [{ takeOut: 'chinese'} , {takeOut: 'thai'}];
var updatedOrders = orderQueue.concat(myOrder);

//'sentence' stores the result of calling join on the variable 'scrambledWords'
var sentence = scrambledWords.join(' ');

//'myFruits' stores the results of calling join on the varibale 'fruitCollection'
var myFruits = fruitCollection.join(' + ');

//'favoriteFriends' stores all my favs from the 'friends' array
//var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var favoriteFriends = friends.slice(1,3);

//'owesMoney' stores all the names of people who owe me money
var owesMoney = friends.slice(3,6);

//'monthNameString' stores the result of called toString on the array stored at 'monthNames'
//var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var monthNameString = monthNames.toString();

//'favoriteColor' stores the index of where the value 'Red' can be found in the 'color' array
//var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var favoriteColor = colors.indexOf('Red');

//'favoriteEvenNumber' stores the index of where the value '76' can be found in the 'mixedNums' array
//var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var favoriteEvenNumber = mixedNums.indexOf(76);

//'lastNine' stores the index of the last 9 that can be found in the 'bulkNumbers' array
//var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];
var lastNine = bulkNumbers.lastIndexOf(9);

//'lastFive' stores the index of the last number 5 that can be found in the 'bulkNumbers' array
var lastFive = bulkNumbers.lastIndexOf(5);