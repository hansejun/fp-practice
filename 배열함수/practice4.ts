const suits = ["a", "b", "c", "d"];
const numbers = Array(10)
  .fill(1)
  .map((item, i) => item + i + "");

// 중첩 for문 함수형 프로그래밍으로 구현
const cards: Array<string> = [];

for (const suit of suits) {
  for (const number of numbers) {
    cards.push(suit + number);
  }
}

// 순수 함수로 리팩터링

// 모든 카드 목록은 아래의 작접이 완료된 것이다. const result = suits.flatMap(suit => numbers.map(number => suite + number))
// 아래의 작업을 모든 무늬에 적용한다. suits.map(suit => numbers.map(number => suite + number))
//  아래의 작업을 모든 숫자에 적용한다. numbers.map(number => suite + number)
//   카드는 알파벳과 숫자를 연결한 문자열이다. suite + number
