// получаем элементы со страницы
var myString = document.querySelector('.my-string');

var myNumber = document.querySelector('.my-number');

var myBoolean = document.querySelector('.my-boolean');

var myNull = document.querySelector('.my-null');

var myUndefined = document.querySelector('.my-undefined');

var myObject = document.querySelector('.my-object');

var myArray = document.querySelector('.my-array');

// вставляем значения в элементы
myString.textContent = 'эта строка из js сукантьяго';

myNumber.textContent = 1993;

myBoolean.textContent = true;

myNull.textContent = null;

myUndefined.textContent = undefined;

myObject.textContent = {
    name: 'Рахман'
};

myArray.textContent = [1, 2, 3, 4, 5];


