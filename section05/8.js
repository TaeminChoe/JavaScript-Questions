"use strict";

/* 
  섹션 5. 효율성
  문제 8. 모든 아나그램 찾기
  작성일 : 2022.05.23
*/

const solution = (S, T) => {
  const size = T.length;
  const anaT = {};
  const sortedAnaT = {};
  const windows = [];
  let answer = 0;

  for (let i = 0; i <= S.length - size; i++) {
    windows.push([...S].slice(i, i + size));
  }

  [...T].forEach((v) => {
    if (anaT[v]) anaT[v] += 1;
    else anaT[v] = 1;
  });

  Object.keys(anaT)
    .sort()
    .forEach((k) => {
      sortedAnaT[k] = anaT[k];
    });

  windows.forEach((window) => {
    const anaS = {};
    const sortedAnaS = {};
    window.forEach((v) => {
      if (anaS[v]) anaS[v] += 1;
      else anaS[v] = 1;
    });
    Object.keys(anaS)
      .sort()
      .forEach((k) => {
        sortedAnaS[k] = anaS[k];
      });
    if (JSON.stringify(sortedAnaT) === JSON.stringify(sortedAnaS)) {
      answer++;
    }
  });

  return answer;
};

console.log(solution("bacaAacba", "abc"));
