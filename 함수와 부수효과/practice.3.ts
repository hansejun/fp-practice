// 같은 부분을 제네릭으로 변경하는 과정

// 1단계
const compose =
  (
    g: (y: number | undefined) => boolean,
    f: (s: string) => number | undefined
  ) =>
  (x: string) => {
    return g(f(x));
  };

// 2단계 f의 매개변수 s와 x의 string이 같아 제네릭으로 변경
const compose1 =
  <A>(g: (y: number | undefined) => boolean, f: (s: A) => number | undefined) =>
  (x: A) => {
    return g(f(x));
  };

//3단계 g의 매개변수와 f가 리턴하는 타입이 같아 제네릭으로 변경
const compose2 =
  <A, B>(g: (y: B) => boolean, f: (s: A) => B) =>
  (x: A) => {
    return g(f(x));
  };

// 4단계 g의 타입이 boolean 뿐만 아니라 어떤 타입이라도 될 수 있도록 매개변수화 한다.
// 공역과 정의역이 일치하는 함수라면 어떤 함수라도 합성할 수 있게 되었다.
const compose3 =
  <A, B, C>(g: (y: B) => C, f: (s: A) => B) =>
  (x: A) => {
    return g(f(x));
  };

// compose3의 타입은 아래와 같다.
//  <A, B, C>(g: (y: B) => C, f: (s: A) => B) => (x: A) => C

// 아래와 같은 방법으로 매개변수를 지워 타입만 남겨놓아 쉽게 잃을 수 있도록 한다.
//  <A, B, C>((B) => C, (A) => B) => (A) => C

// B타입의 값을 입력 받아 C타입의 값을 리턴하는 함수와 A타입을 입력 받아 B타입을 리턴하는 함수를 입력받아 
// A타입의 값을 입력 받아 C타입의 값을 리턴하는 함수를 출력한다.