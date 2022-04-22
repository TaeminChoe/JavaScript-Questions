"use strict";

/* 문제O: concat을 활용한 출력방법
  작성일 : 2022.04.22
*/

const solution = () => {
  const year = "2019";
  const month = "04";
  const day = "26";
  const hour = "11";
  const minute = "34";
  const second = "27";

  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
};

console.log(solution());
