"use strict";

/* 
  섹션 3. 문자열 탐색
  문제 4. 가장 짧은 문자거리
  작성일 : 2022.04.30
*/

const solution = (word, t) => {
  const answer = Array.from({ length: word.length }, () => word.length);

  [...word].forEach((w, i) => {
    if (w === t) {
      answer.forEach((a, j) => {
        const diff = Math.abs(j - i);
        if (a > diff) {
          answer[j] = diff;
        }
      });
    }
  });
};

console.log(solution("teachermode", "e"));
