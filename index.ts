let 이름: string[] = ["kim", "yoo"];

let obj: { 가수이름: string; 노래제목: string } = {
  가수이름: "성시경",
  노래제목: "너는 나의 봄이다",
};

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
