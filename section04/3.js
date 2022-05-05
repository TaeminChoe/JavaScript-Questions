"use strict";

/* 
  섹션 4. 문자열 탐색
  문제 3. 멘토링
  작성일 : 2022.05.05
*/

const isMento = (mento, menti, arr) => {
  let flag = true;
  arr.forEach((test) => {
    const mentoGrade = test.indexOf(mento) + 1;
    const mentiGrade = test.indexOf(menti) + 1;
    if (mentoGrade > mentiGrade) flag = false;
  });
  return flag;
};

const solution = (arr) => {
  const answer = [];

  for (let i = 1; i <= arr[0].length; i++) {
    for (let j = 1; j <= arr[0].length; j++) {
      if (i === j) continue;
      if (isMento(i, j, arr)) {
        answer.push([i, j]);
      }
    }
  }
  console.log(answer);
  return answer.length;
};

const exam = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(exam));
