// 1. Класс Book с методом show
class Book {
    constructor(title, pubYear, price) {
        this._title = title;
        this._pubYear = pubYear;
        this._price = price;
    }

    // Метод show
    show() {
        console.log(`Название: ${this._title}, Цена: ${this._price}`);
    }

    // 2. Геттеры и сеттеры
    get title() {
        return this._title;
    }

    set title(value) {
        if (value.trim() === '') {
            throw new Error("Название не может быть пустым");
        }
        this._title = value;
    }

    get pubYear() {
        return this._pubYear;
    }

    set pubYear(value) {
        if (value <= 0) {
            throw new Error("Год публикации должен быть положительным числом");
        }
        this._pubYear = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value <= 0) {
            throw new Error("Цена должна быть положительным числом");
        }
        this._price = value;
    }

    // 3. Статический метод compare
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

// 4. Функция isEmpty
function isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    const symbolKeys = Object.getOwnPropertySymbols(obj);
    return symbolKeys.length === 0;
}

// 5. Объект с методами addClass и removeClass
const classObj = {
    className: 'open menu',
    
    addClass(cls) {
        const classes = this.className.split(' ');
        if (!classes.includes(cls)) {
            classes.push(cls);
            this.className = classes.join(' ');
        }
        return this;
    },
    
    removeClass(cls) {
        const classes = this.className.split(' ');
        const index = classes.indexOf(cls);
        if (index !== -1) {
            classes.splice(index, 1);
            this.className = classes.join(' ');
        }
        return this;
    }
};

// 6. Функции для работы с JSON
function objToJson(obj) {
    return JSON.stringify(obj, null, 2);
}

function jsonToObj(jsonStr) {
    return JSON.parse(jsonStr);
}

// 7. Функция getSecondsToday
function getSecondsToday() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = now - today;
    return Math.round(diff / 1000);
}

// 8. Функция formatDate
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}

// Демонстрация работы всех функций
(function demo() {
    console.log('=== Задание 1 ===');
    const book1 = new Book("JavaScript для начинающих", 2020, 999);
    book1.show();

    console.log('\n=== Задание 2 ===');
    const book2 = new Book("React в действии", 2019, 1200);
    book2.title = "React в действии. 2-е издание";
    book2.price = 1500;
    console.log(book2);

    console.log('\n=== Задание 3 ===');
    const books = [
        new Book("Книга 1", 2015, 500),
        new Book("Книга 2", 2010, 700),
        new Book("Книга 3", 2020, 900)
    ];
    books.sort(Book.compare);
    console.log(books);

    console.log('\n=== Задание 4 ===');
    const testObj = {[Symbol()]: true};
    console.log(isEmpty(testObj)); // false
    console.log(isEmpty({})); // true

    console.log('\n=== Задание 5 ===');
    classObj.addClass('new').removeClass('open');
    console.log(classObj.className); // "menu new"

    console.log('\n=== Задание 6 ===');
    const obj = {
        name: "John",
        age: 30,
        address: {
            city: "New York",
            street: "5th Avenue"
        }
    };
    const jsonStr = objToJson(obj);
    console.log(jsonStr);
    const obj2 = jsonToObj(jsonStr);
    console.log(JSON.stringify(obj) === JSON.stringify(obj2)); // true

    console.log('\n=== Задание 7 ===');
    console.log(`С начала дня прошло ${getSecondsToday()} секунд`);

    console.log('\n=== Задание 8 ===');
    console.log(`Текущая дата: ${formatDate(new Date())}`);
})();