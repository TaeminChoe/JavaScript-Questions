"use strict";

/* 
  섹션 6. 자료구조 (스택, 큐)
  문제 3. 크레인 인형뽑기
  작성일 : 2022.05.25
*/

const pickup = (board, column) => {
  let res = 0;

  for (let i = 0; i < board.length; i++) {
    if (board[i][column] !== 0) {
      res = board[i][column];
      board[i][column] = 0;
      return res;
    }
  }
  return 0;
};

const solution = (board, moves) => {
  const bucket = [];
  let size = -1;
  let answer = 0;

  moves.forEach((move) => {
    const pick = pickup(board, move - 1);
    if (pick !== 0) {
      if (bucket[size] == pick) {
        bucket.pop();
        size--;
        answer += 2;
      } else {
        bucket.push(pick);
        size++;
      }
    }
  });

  return answer;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
