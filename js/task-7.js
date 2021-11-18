"use strict";

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) return true;
  return false;
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) return false;
  return true;
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
      return 'Логин успешно добавлен!';
    }
    return 'Такой логин уже используется!';
  }
  return 'Ошибка! Логин должен быть от 4 до 16 символов';
};


console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'Poly'));