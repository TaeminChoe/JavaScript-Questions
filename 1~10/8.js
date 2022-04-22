"use strict";

/* 문제8: 객체의 키 이름 중복
  작성일 : 2022.04.22
*/

const solution = () => {
  const d = {
    height: 100,
    weight: 78,
    weight: 84,
    temperature: 36,
    eyesight: 1,
  };

  return d["weight"];
};

console.log(solution());
