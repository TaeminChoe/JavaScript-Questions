# 1번부터 10번 문제 풀이

# 문제 1 ~ 10

# 문제1 : 배열의 삭제

## Question

![image](https://user-images.githubusercontent.com/92558961/164605493-8a062e69-2c5f-4720-8fd4-706792bf55ee.png)

## Answer

```jsx
const solution = () => {
  const nums = [100, 200, 300, 400, 500];

  nums.pop();
  nums.pop();

  return nums;
};
```

# 문제2 : 배열의 내장 함수

## Question

![image](https://user-images.githubusercontent.com/92558961/164605543-28a711ee-7cfc-4ace-928b-cbc8c0a1ed03.png)

## Answer

```jsx
const solution = () => {
  const arr = [200, 100, 300];
  arr.splice(2, 0, 10000);
  return arr;
};
```

# 문제3 : 변수의 타입

## Question

![image](https://user-images.githubusercontent.com/92558961/164605566-f07181c6-a5d5-4e5f-a9c6-0dcf92850df0.png)

## Answer

```jsx
4) Object
```

# 문제4 : 변수의 타입2

## Question

![image](https://user-images.githubusercontent.com/92558961/164605617-e0022528-0957-4ddf-82ce-fd6727884516.png)

## Answer

```jsx
const solution = () => {
  console.log(typeof 1); // number
  console.log(typeof 2.22); // number
  console.log(typeof "p"); // string
  console.log(typeof [1, 2, 3]); // object
};
```

# 문제5 : for문 계산

## Question

다음 코드의 출력 값으로 알맞은 것은?

```jsx
const solution = () => {
  let a = 10;
  let b = 2;

  for (let i = 1; i < 5; i += 2) {
    a += i;
  }

  return a + b;
};
```

## Answer

```jsx
16;
```

# 문제6 : False

## Question

다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

1. NaN
2. 1
3. “”
4. 0
5. undefined

## Answer

```jsx
const solution = () => {
  console.log(Boolean(NaN)); // false
  console.log(Boolean(1)); // true
  console.log(Boolean("")); // false
  console.log(Boolean(0)); // false
  console.log(Boolean(undefined)); // false
};
```

# 문제7 : 변수명

## Question

다음 중 변수명으로 사용할 수 없느 것 2개를 고르시오.

1. age
2. &age
3. let
4. \_age
5. 1age

## Answer

```jsx
const solution = () => {
  const age = 1;
  const &age = 2; // 변수 선언이 필요합니다.
  const let = 3;
  const _age = 4;
  const 1age = 5; // 식별자 또는 키워드는 숫자 바로 뒤에 올 수 없습니다.
};
```

# 문제8 : 객체의 키 이름 중복

## Question

자바스크립트 객체를 다음과 같이 만들었다.

출력값을 입력하시오.

```jsx
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
```

## Answer

```jsx
84;
```

# 문제9 : concat을 활용한 출력 방법

## Question

다음 소스를 완성하여 날짜와 시간을 출력하시오.

```jsx
const solution = () => {
  const year = "2019";
  const month = "04";
  const day = "26";
  const hour = "11";
  const minute = "34";
  const second = "27";

  return [];
};
```

## Answer

```jsx
return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
```

# 문제 10 : 별 찍기

## Question

입력하는 숫자에 맞는 트리모양 별을 출력하세요.

## Answer

```jsx
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
////
     *
    ***
   *****
  *******
 *********
```
