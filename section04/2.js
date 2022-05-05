"use strict";

/* 
  섹션 4. 문자열 탐색
  문제 2. 뒤집은 소수
  작성일 : 2022.05.05
*/

const isPrime = (num) => {
  if (num < 2) return false;
  const s = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= s; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (arr) => {
  const answer = [];
  arr.forEach((v) => {
    const num = Number([...v.toString()].reverse().join(""));
    if (isPrime(num)) {
      answer.push(num);
    }
  });
  return answer;
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
