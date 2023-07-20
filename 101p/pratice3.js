// 1. shift() 메서드는 읽기와 쓰기를 동시에 한다.

const a = [1, 2, 3, 4];
const b = a.shift();

console.log(a); // [2,3,4];
console.log(b); // 1

// 2. 위와 같은 역할을 읽기와 쓰기로 구분한다.

function first_element(arr) {
  return arr[0];
}

function delete_first_element(arr) {
  arr.shift();
}

const a = [1, 2, 3, 4];
const b = first_element(a);

console.log(a); // [1,2,3,4];
console.log(b); // 1

delete_first_element(a);
console.log(a); // [2,3,4]

// 3. delete 역할을 하는 함수를 copy-on-write로 바꾸기
function delete_first_element(arr) {
  const copy_arr = arr.slice();
  copy_arr.shift();
  return copy_arr;
}

const a = [1, 2, 3, 4];
const c = delete_first_element(a); // [2,3,4]

// 4. 값을 두

// 4-1. 처ㅅ번 째
