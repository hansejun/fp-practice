// before
function addItem(cart, name, price) {
  const new_cart = cart.slice();
  new_cart.push({ name, price });
  return new_cart;
}

addItem(cart, "bread", 3500);

// 1단계 item으ㄹ 만드는 생성자 함수를 분리한다.
function addItem(cart, item) {
  const new_cart = cart.slice();
  new_cart.push(item);
  return new_cart;
}

function make_item(name, price) {
  return { name, price };
}

const newItem = make_item("breact", 3500);
addItem(cart, newItem);

// 일반적인 이름으로 변경하여 어떤 배열이나 항목에도 쓸 수 있도록 한다.
function add_element_last(arr, elem) {
  const new_array = arr.slice();
  new_array.push(elem);
  return new_array;
}

function add_item(cart, item) {
  return add_element_last(cart, item);
}
