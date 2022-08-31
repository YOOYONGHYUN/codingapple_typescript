var 이름 = ["kim", "yoo"];
var obj = {
    가수이름: "성시경",
    노래제목: "너는 나의 봄이다",
};
console.log(obj);
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    freind: "John",
};
학교.score[4] = false;
학교.freind = ["Lee", 학교.teacher];
// function 함수(x: number | string): void {
//   console.log(x + 3);
// }
function count(x) {
    return x.toString().length;
}
function Name(x) {
    if (x)
        console.log("Hi" + x);
    else
        console.log("No name");
}
function marry(x, y, z) {
    var sum = 0;
    sum += x;
    if (y === true)
        sum += 500;
    else
        sum += 0;
    if (z === "상")
        sum += 100;
    else
        sum += 0;
    if (sum >= 600)
        return "결혼가능";
}
console.log(Name());
console.log(marry(700, false, "중"));
console.log(marry(100, false, "상"));
function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function change(x) {
    var complete = [];
    for (var i = 0; i < x.length; i++) {
        console.log(x);
        var a_1 = x[i];
        if (typeof a_1 === "string") {
            complete.push(Number(a_1));
        }
        else if (typeof a_1 === "number") {
            complete.push(a_1);
        }
    }
    // x.forEach((b) => {
    //   if (typeof b === "string") {
    //     complete.push(parseFloat(b));
    //   } else {
    //     complete.push(b);
    //   }
    // });
    return complete;
}
console.log(change(["1", 2, "3"]));
function subject(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "없음";
    }
}
var 동물 = 123;
function game(x) {
    return ["가위"];
}
var 회원정보 = {
    name: "KIM",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
var cutZero = function (str) {
    return str.replace(/^0+/, "");
};
var removeDash = function (str) {
    return Number(str.replace(/-/g, ""));
};
var lastFunction = function (str, func1, func2) {
    return func2(func1(str));
};
console.log(lastFunction("010-1111-2222", cutZero, removeDash));
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var _this = this;
        console.log(param);
        this.num = [];
        this.str = [];
        param.forEach(function (a) {
            if (typeof a === "string")
                _this.str.push(a);
            else
                _this.num.push(a);
        });
    }
    return Word;
}());
var 단어 = new Word("kim", 3, 5, "park");
console.log(단어);
console.log(단어.num);
console.log(단어.str);
var 학생 = { name: "kim" };
var 선생 = { name: "kim", age: 20 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var cart = [
    { product: "청소기", price: 7000, card: true },
    { product: "삼다수", price: 800, card: false },
];
var cal = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
function max() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max)
            max = nums[i];
    }
    return max;
}
console.log(max(6, 3, 7, 2));
var _a = {
    user1: "kim",
    comment: [3, 5, 4],
    admin: false,
}, user1 = _a.user1, comment = _a.comment, admin = _a.admin;
function 히히(_a) {
    var user1 = _a.user1, comment = _a.comment, admin = _a.admin;
    console.log(user1, comment, admin);
}
히히({ user1: "kim", comment: [3, 5, 4], admin: false });
var Square = /** @class */ (function () {
    function Square(num1, num2, color) {
        this.num1 = num1;
        this.num2 = num2;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var div = document.createElement("div");
        div.style.width = this.num1 + "px";
        div.style.height = this.num2 + "px";
        div.style.backgroundColor = this.color;
        var body = document.querySelector("body");
        body === null || body === void 0 ? void 0 : body.appendChild(div);
    };
    return Square;
}());
var 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
var dog1 = "bark";
var dog2 = { name: "paw" };
function 함수(x) {
    return x[0];
}
var a = 함수([4, 2]);
console.log(a);
function strCount(str) {
    return str.length;
}
function arrCount(arr) {
    return arr.length;
}
var data = '{"name" : "dog", "age" : 1 }';
var food = ["보성녹차", 4000, true];
function 함수3() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
function 함수4() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (a) {
        if (typeof a === "string")
            result[0].push(a);
        else
            result[1].push(a);
    });
    return result;
}
함수4("b", 5, 6, 8, "a");
function 함수6() { }
함수6();
함수6();
