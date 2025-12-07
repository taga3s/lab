type ExampleType = Promise<string>;
type ExampleThenableType = {
  then: (onfulfilled: (arg: number) => any) => PromiseLike<any>;
};

type MyAwaited<T> = T extends PromiseLike<infer R>
  ? R extends PromiseLike<any> ? MyAwaited<R>
  : R
  : never;

type Result = MyAwaited<ExampleType>; // string
type ResultThenable = MyAwaited<ExampleThenableType>; // number
