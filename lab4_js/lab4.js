"use strict";

class Book {
  constructor(title, pubYear, price) {
    this.title = title;
    this.pubYear = pubYear;
    this.price = price;
  }

  get title() {
    return this._title;
  }

  set title(text) {
    if (typeof text !== "string" || text.trim() === "") {
      throw new Error("Title must be a non-empty string.");
    }
    this._title = text.trim();
  }

  get pubYear() {
    return this._pubYear;
  }

  set pubYear(newPubYear) {
    if (
      typeof newPubYear !== "number" ||
      newPubYear <= 0 ||
      !Number.isInteger(newPubYear)
    ) {
      throw new Error("pubYear must be a positive integer.");
    }
    this._pubYear = newPubYear;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    if (typeof newPrice !== "number" || newPrice <= 0) {
      throw new Error("Price must be a positive number.");
    }
    this._price = newPrice;
  }

  show() {
    console.log(
      `Книга: "${this._title}" | Год: ${this._pubYear} | Стоимость: ${this._price} руб.`
    );
  }

  static compare(book1, book2) {
    return book1.pubYear - book2.pubYear;
  }
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
}

function isEmpty(obj) {
  if (typeof obj !== "object" || obj === null) return true;
  if (Object.getOwnPropertyNames(obj).length > 0) return false;
  if (Object.getOwnPropertySymbols(obj).length > 0) return false;
  return true;
}

function getSecondsToday() {
  let now = new Date();
  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - start) / 1000);
}

try {
  let book1 = new Book("Мастер и Маргарита", 1967, 1500);
  book1.show();
  book1.price = 2100;
  book1.show();

  console.log("Текущая цена book1:", book1.price);

  let book2 = new Book("Война и мир", 1869, 2000);
  book2.show();
  let book3 = new Book("Преступление и наказание", 1866, 1800);
  book3.show();
  let book4 = new Book("Гарри Поттер", 1997, 1200);
  book4.show();

  let books = [book1, book2, book3, book4];
  books.sort(Book.compare);
  console.log("Книги после сортировки по году издания:");
  books.forEach((book) => book.show());

  let obj1 = { [Symbol("id")]: 123 };
  let obj2 = {};
  let obj3 = { a: 1 };

  console.log("Объект 1 пустой?", isEmpty(obj1));
  console.log("Объект 2 пустой?", isEmpty(obj2));
  console.log("Объект 3 пустой?", isEmpty(obj3));

  let classObject = {
    className: "header main",

    addClass(cls) {
      let classes = this.className.split(" ");
      if (!classes.includes(cls)) {
        this.className += " " + cls;
      }
      return this;
    },

    removeClass(cls) {
      let classes = this.className.split(" ");
      let index = classes.indexOf(cls);
      if (index !== -1) {
        classes.splice(index, 1);
        this.className = classes.join(" ");
      }
    },
  };

  classObject.addClass("active");
  console.log("className после addClass('active'):", classObject.className);

  classObject.addClass("header");
  console.log("className после addClass('header'):", classObject.className);

  classObject.removeClass("main");
  console.log("className после removeClass('main'):", classObject.className);

  let jsonString = JSON.stringify(classObject, null, 2);
  console.log("JSON строка:", jsonString);

  let object2 = JSON.parse(jsonString);
  console.log(
    "Сравнение объектов из JSON:",
    JSON.stringify(object2) === JSON.stringify(classObject)
  );

  console.log("Секунд с начала дня: ", getSecondsToday());

  let date1 = new Date(2025, 5, 10);
  let date2 = new Date(2010, 3, 15);
  let date3 = new Date(2005, 11, 31);

  console.log("Дата 1:", formatDate(date1)); // 2025.06.10
  console.log("Дата 2:", formatDate(date2)); // 2010.04.15
  console.log("Дата 3:", formatDate(date3)); // 2005.12.31
} catch (error) {
  console.error("Произошла ошибка:", error.message);
}
