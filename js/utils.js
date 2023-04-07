// Функция для получения значения из localStorage
function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

// Функция для сохранения значения в localStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// Функция для удаления значения из localStorage
function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

// Функция для очистки localStorage
function clearLocalStorage() {
  localStorage.clear();
}

// Экспортируем функции для использования в других файлах
export { getFromLocalStorage, saveToLocalStorage, removeFromLocalStorage, clearLocalStorage };
