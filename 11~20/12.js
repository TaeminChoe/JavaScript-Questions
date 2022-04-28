"use strict";

/* 문제12: 게임 케릭터 클래스 만들기
  작성일 : 2022.04.22
*/

class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }

  atack = () => {
    console.log("파이어볼");
  };
}

const solution = () => {
  const x = new Wizard(545, 210, 10);
  console.log(x.health, x.mana, x.armor);
  x.atack();
};

solution();
