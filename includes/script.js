"use strict"

// Манипулирование DOM элементами
alert(mmm);
const emptyDiv = document.querySelector('.emptydiv'); // Создаем константу. Пихаем в нее наш пустой блок.
const redDiv = document.createElement('div'); // Создаем новый блок.
const someText = document.createElement('p'); // Создаем абзац.
redDiv.style.backgroundColor = 'red'; // Меняем стиль нашего блока.
someText.innerText = 'SOME TEXT'; // Меняем текст абзаца.
emptyDiv.appendChild(redDiv); // Добавляем в пустой див наш новый див.
redDiv.appendChild(someText); // Пихаем в новый див наш абзац.

// Итого скрипт добавляет на страницу новый блок с текстом внутри.

// Можно добавлять элементам классы:
someText.classList.add('whiteText');

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let count = 0;

function binarySearch(array, item){

}
