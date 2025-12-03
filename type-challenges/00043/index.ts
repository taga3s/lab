type A = "a" | "b" | "c";
type B = "a";
type C = A extends B ? never : A; // not work: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<A, B>; // 'b' | 'c'
