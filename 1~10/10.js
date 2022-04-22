"use strict";

/* 문제 10: 별 찍기
  작성일 : 2022.04.22
*/

const solution = (num) => {
  for (let i = 0; i < num; i++) {
    let tree = "";
    for (let j = 0; j < num - i; j++) {
      tree += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      tree += "*";
    }
    console.log(tree);
  }
};

solution(5);
