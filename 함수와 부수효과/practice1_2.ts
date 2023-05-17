// 순수함수 (부수효과x) 선언적 방식

// 전역 변수를 참조하지 않기 때문에 부수효과가 발생하지 않는다.

function priceOfTomato() {
  return 7000;
}

function priceOfOrange() {
  return 15000;
}

function priceOfApple() {
  return 10000;
}

function getPrice(name: string) {
  if (name === "tomato") return priceOfTomato();
  else if (name === "orange") return priceOfOrange();
  else if (name === "apple") return priceOfApple();
}

const isExpensive = (price: number | undefined) => {
  if (price === undefined) return false;
  return price > 10000;
};

// 함수 합성
const isExpensivePrice = (name: string) => {
  return isExpensive(getPrice(name));
};

console.log(isExpensive(getPrice("tomato")));

console.log(isExpensivePrice("tomato"));

export function list1() {
  // 토마도, 오렌지, 사과 한 상자
  return priceOfApple() + priceOfOrange() + priceOfTomato();
}

export function list2() {
  //  토마토 2상자
  return priceOfTomato() + priceOfTomato();
}

export function list3() {
  // 오렌지 100상자
  return priceOfOrange() * 100;
}

const isEven = {
  toamto: true,
  orange: true,
  apple: false,
};

const isEvenFn = (str: string) => str.length % 2 === 0;
