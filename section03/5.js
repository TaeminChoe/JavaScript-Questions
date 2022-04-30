"use strict";

/* 
  섹션 3. 문자열 탐색
  문제 1. 문자열 압축
  작성일 : 2022.04.30
*/

const solution = (word) => {
  let answer = "";

  for (let i = 0; i < word.length; i++) {
    let cnt = 1;
    answer += word[i];
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) cnt++;
      else {
        i = j - 1;
        break;
      }
    }
    if (cnt > 1) answer += cnt.toString();
  }

  return answer;
};

console.log(solution("KKHSSSSSSSE"));
