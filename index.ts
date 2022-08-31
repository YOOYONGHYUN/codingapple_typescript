let 이름: string[] = ["kim", "yoo"];

let obj: { 가수이름: string; 노래제목: string } = {
  가수이름: "성시경",
  노래제목: "너는 나의 봄이다",
};

console.log(obj);

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (undefined | string | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  freind: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  freind: "John",
};

학교.score[4] = false;
학교.freind = ["Lee", 학교.teacher];

// function 함수(x: number | string): void {
//   console.log(x + 3);
// }

function count(x: string | number): number {
  return x.toString().length;
}

function Name(x?: string) {
  if (x) console.log("Hi" + x);
  else console.log("No name");
}

function marry(x: number, y: boolean, z: string): string | void {
  let sum: number = 0;

  sum += x;

  if (y === true) sum += 500;
  else sum += 0;

  if (z === "상") sum += 100;
  else sum += 0;

  if (sum >= 600) return "결혼가능";
}

console.log(Name());

console.log(marry(700, false, "중"));
console.log(marry(100, false, "상"));

function 내함수(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

function change(x: (string | number)[]) {
  let complete: number[] = [];

  for (let i = 0; i < x.length; i++) {
    console.log(x);
    let a = x[i];
    if (typeof a === "string") {
      complete.push(Number(a));
    } else if (typeof a === "number") {
      complete.push(a);
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

function subject(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "없음";
  }
}

type Animal = string | number | undefined;
let 동물: Animal = 123;

type Condition = { color?: string; size: number; readonly position: number[] };

type User = { name: string; phone: number; email: string };

type Adult = { adult: boolean };

type PersonalInfo = User & Adult;

function game(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

let 회원정보: {
  name: string;
  plusOne: (a: number) => number;
  changeName: () => void;
} = {
  name: "KIM",
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

type Cut = (a: string) => string;
type Remove = (a: string) => number;

let cutZero: Cut = function (str) {
  return str.replace(/^0+/, "");
};

let removeDash: Remove = function (str) {
  return Number(str.replace(/-/g, ""));
};

type Last = (
  str: string,
  func1: typeof cutZero,
  func2: typeof removeDash
) => number;

let lastFunction: Last = function (str, func1, func2) {
  return func2(func1(str));
};

console.log(lastFunction("010-1111-2222", cutZero, removeDash));

class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price / 10;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

class Word {
  num: number[];
  str: string[];
  constructor(...param) {
    console.log(param);
    this.num = [];
    this.str = [];

    param.forEach((a) => {
      if (typeof a === "string") this.str.push(a);
      else this.num.push(a);
    });
  }
}
let 단어 = new Word("kim", 3, 5, "park");
console.log(단어);
console.log(단어.num);
console.log(단어.str);

interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "kim", age: 20 };

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Basket {
  product: string;
  price: number;
}

interface Cart extends Basket {
  card: boolean;
}

let 장바구니: Basket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

let cart: Cart[] = [
  { product: "청소기", price: 7000, card: true },
  { product: "삼다수", price: 800, card: false },
];

interface Cal {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let cal: Cal = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};

function max(...nums: number[]) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return max;
}

console.log(max(6, 3, 7, 2));

let { user1, comment, admin } = {
  user1: "kim",
  comment: [3, 5, 4],
  admin: false,
};

function 히히({
  user1,
  comment,
  admin,
}: {
  user1: string;
  comment: number[];
  admin: boolean;
}): void {
  console.log(user1, comment, admin);
}

히히({ user1: "kim", comment: [3, 5, 4], admin: false });

type Fish = { swim: string };
type Bird = { fly: string };

class Square {
  num1;
  num2;
  color;
  constructor(num1: number, num2: number, color: string) {
    this.num1 = num1;
    this.num2 = num2;
    this.color = color;
  }
  draw() {
    let div = document.createElement("div");
    div.style.width = this.num1 + "px";
    div.style.height = this.num2 + "px";
    div.style.backgroundColor = this.color;
    let body = document.querySelector("body");
    body?.appendChild(div);
  }
}

let 네모 = new Square(30, 30, "red");

네모.draw();
네모.draw();
네모.draw();

namespace secretDog {
  export type Dog = string;
}
interface Dog {
  name: string;
}

let dog1: secretDog.Dog = "bark";
let dog2: Dog = { name: "paw" };

function 함수(x: unknown[]) {
  return x[0];
}

let a = 함수([4, 2]);
console.log(a);

function strCount(str: string): number {
  return str.length;
}

function arrCount(arr: string[]): number {
  return arr.length;
}

interface Animal2 {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

let food: [string, number, boolean] = ["보성녹차", 4000, true];

function 함수3(...rest: [string, boolean, (string | number)[]]) {}

function 함수4(...rest: (string | number)[]) {
  let result: [string[], number[]] = [[], []];

  rest.forEach((a) => {
    if (typeof a === "string") result[0].push(a);
    else result[1].push(a);
  });

  return result;
}

함수4("b", 5, 6, 8, "a");

function 함수6<T>() {}

함수6<string>();
함수6<number>();
