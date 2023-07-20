/*
카피 온 라이트 원칙 세 단계 

전역변수를 변경하는 동작을 모두 카피 온 라이트로 바꾸면, 불변 데이터로 동작한다.

1. 복사본 만들기
2. 복사본 변경하기 
3. 복사본 리턴하기
*/

// before
function remove_item_by_name(cart, name) {
  let idx = null;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) idx = i;
  }
  if (idx !== null) cart.splice(idx, 1);
}

// 1. copy item
function remove_item_by_name(cart, name) {
  // copy
  const new_cart = cart.slice();
  let idx = null;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) idx = i;
  }
  if (idx !== null) cart.splice(idx, 1);
}

// 2. modify copied item
function remove_item_by_name(cart, name) {
  const new_cart = cart.slice();
  let idx = null;

  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) idx = i;
  }
  if (idx !== null) new_cart.splice(idx, 1);
}

// 3. return copied item
function remove_item_by_name(cart, name) {
  const new_cart = cart.slice();
  let idx = null;

  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) idx = i;
  }
  if (idx !== null) new_cart.splice(idx, 1);
  return new_cart;
}
