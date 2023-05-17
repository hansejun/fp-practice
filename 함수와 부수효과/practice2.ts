// 숫자를 그대로 돌려주는 함수
const idNumber = (n: number) => n;

// 문자열을 그대로 돌려주는 함수
const idString = (str: string) => str;

// boolean 값을 그대로 돌려주는 함수
const idBoolean = (bool: boolean) => bool;

// 어떤 타입의 값이라도 그대로 돌려주는 함수
const id = <T>(x: T) => {
  return x;
};

// 제네릭을 사용하여 타입을 매개변수화 한다.

// 문자열 배열
type T1 = Array<string>;
