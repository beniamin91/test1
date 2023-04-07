import { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage, clearLocalStorage } from './utils.js';
import { getProductById, getProductsByCategory, getCategoriesByFirm, getFirmById } from './ajax.js';

// Код для обработки событий на страницах проекта

// Пример использования функций из модуля utils.js
const myData = { name: 'John', age: 30 };
saveToLocalStorage('myData', JSON.stringify(myData));
const retrievedData = JSON.parse(getFromLocalStorage('myData'));
console.log(retrievedData);

// Пример использования функций из модуля ajax.js
getProductById(123)
  .then((product) => {
    console.log(product);
  })
  .catch((error) => {
    console.error(error);
  });

getProductsByCategory(456)
  .then((products) => {
    console.log(products);
  })
  .catch((error) => {
    console.error(error);
  });

getCategoriesByFirm(789)
  .then((categories) => {
    console.log(categories);
  })
  .catch((error) => {
    console.error(error);
  });

getFirmById(987)
  .then((firm) => {
    console.log(firm);
  })
  .catch((error) => {
    console.error(error);
  });
