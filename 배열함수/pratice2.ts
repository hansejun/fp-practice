// A타입으로 이뤄진 배열과 A타입의 값을 받아 B타입으로 반환하는 함수를 매개변수로 전달받는다.
// 최정적으로 B타입의 배열을 리턴한다.

export const map = <A, B>(array: Array<A>, fn: (a: A) => B): Array<B> => {
  const result: Array<B> = [];
  for (const value of array) {
    result.push(fn(value));
  }
  return result;
};
