const request = indexedDB.open("FormDatabase", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  // Создание хранилища объектов для формы
  let objectStore = db.createObjectStore("formData", {
    keyPath: "id",
    autoIncrement: true,
  });
  // Создание индексов для поиска данных
  objectStore.createIndex("name", "name", { unique: true });
  objectStore.createIndex("lastName", "lastName", { unique: true });
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.createIndex("phoneNumber", "phoneNumber", { unique: true });
  objectStore.createIndex("message", "message", { unique: true });
};

request.onsuccess = function (event) {
  const db = event.target.result;

  // Обработчик отправки формы
  document
    .getElementById("myForms")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Получение данных из формы
      let formData = {
        name: document.getElementById("name").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        message: document.getElementById("message").value,
      };

      // Сохранение данных в IndexedDB
      let transaction = db.transaction(["formData"], "readwrite");
      let objectStore = transaction.objectStore("formData");
      let request = objectStore.add(formData);

      request.onsuccess = function (event) {
        console.log("Данные успешно сохранены");
        alert("Данные успешно сохранены");
      };

      request.onerror = function (event) {
        console.log("Ошибка при сохранении данных");
        alert("Ошибка при сохранении данных");
      };
    });
};

request.onerror = function (event) {
  console.log("Ошибка при открытии базы данных");
  alert("Ошибка при открытии базы данных");
};
