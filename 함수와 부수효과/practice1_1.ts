// 부수효과 있는 코드 예시 명령적 방식

/*
  토마토: 7000원
  오렌지: 15000원
  사과: 10000원
 */

// 전역 변수 totalPrice의 값을 변경하여 부수효과가 발생하는 예제이다

export let totalPrice = 0;

export function addTomaton() {
  totalPrice += 7000;
}

export function addOrange() {
  totalPrice += 7000;
}

export function addApple() {
  totalPrice += 10000;
}

export function list1() {
  // 각자 한 상자씩
  addTomaton();
  addOrange();
  addApple();
}

export function list2() {
  //  토마토 2상자
  addTomaton();
  addTomaton();
}

export function list3() {
  // 오렌지 100상자
  for (let i = 0; i < 100; i++) {
    addOrange();
  }
}
