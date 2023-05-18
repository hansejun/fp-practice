import { Item, cart } from "./pratice1";

// 재고가 있을 경우 실행 함수
const stockItem = (item: Item) => {
  console.log(item.name);
  console.log(item.price);
  console.log(item.quantity);
  console.log("---------------------------");
};

// 재고가 없을 경우 실행 함수
const outOfStockItem = (item: Item) => {
  console.log("품절");
  console.log(item.name);
  console.log(item.price);
  console.log(item.quantity);
  console.log("---------------------------");
};

// 재고가 유/무 확인하고 알맞은 함수를 실행시키는 함수
const item = (item: Item) => {
  if (item.outOfStock) return outOfStockItem(item);
  else return stockItem(item);
};

const list = (list: Array<Item>) => {
  list.map(item);
};

const totalCalculator = (
  list: Array<Item>,
  getValue: (item: Item) => number
) => {
  // 전체 목록 중 재고가 있는 상품만 getValue를 실행하고 그 값을 모두 더한다.
  list
    // 1. 재고가 있는 상품만 분류하기
    .filter((item) => item.outOfStock === false)
    // 2. 분류된 상품들에 대해서 getValue 실행하기
    .map(getValue)
    // 3. getValue가 실행된 값 모두 더하기
    .reduce((total, value) => total + value, 0);
};

const totalCount = (list: Array<Item>) => {
  const totalCount = totalCalculator(list, (a) => a.quantity);
  console.log(`전체 수량 ${totalCount}`);
};

const totalPrice = (list: Array<Item>) => {
  const totalPrice = totalCalculator(list, (a) => a.price);
  console.log(`전체 가격 ${totalPrice}`);
};

console.log(list(cart));
console.log(totalCount(cart));
console.log(totalPrice(cart));
