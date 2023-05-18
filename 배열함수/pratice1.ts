export interface Item {
  code: string;
  outOfStock: boolean;
  name: string;
  price: number;
  quantity: number;
}

export const cart: Array<Item> = [
  {
    code: "tomato",
    outOfStock: false,
    name: "토마도",
    price: 7000,
    quantity: 2,
  },
  {
    code: "orange",
    outOfStock: true,
    name: "오렌지",
    price: 15000,
    quantity: 3,
  },
  {
    code: "apple",
    outOfStock: false,
    name: "사과",
    price: 10000,
    quantity: 2,
  },
];

let totalPrice = 0;

// for문
for (let i = 0; i < cart.length; i++) {
  if (cart[i].outOfStock === false) {
    console.log("품절");
    console.log(cart[i].name);
    console.log(cart[i].price);
    console.log(cart[i].quantity);
    console.log("---------------------------");
  } else {
    console.log(cart[i].name);
    console.log(cart[i].price);
    console.log(cart[i].quantity);
    console.log("---------------------------");
  }
}

// 계산하는 관심사를 분리한다.
let totalCount = 0;
for (let i = 0; i < cart.length; i++) {
  if (cart[i].outOfStock === false) {
    continue;
  } else {
    totalCount += cart[i].quantity;
  }
}

for (let i = 0; i < cart.length; i++) {
  if (cart[i].outOfStock === false) {
    continue;
  }
  totalPrice += cart[i].price * cart[i].quantity;
}

console.log(`전체 수량 ${totalCount}상자`);
console.log(`전체 가격:${totalPrice}원`);
