const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// keyof any -> string | number | symbol
// deno-lint-ignore no-explicit-any
type Tuple = readonly (keyof any)[];
type TupleToObject<T extends Tuple> = {
  [P in T[number]]: P;
};

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
