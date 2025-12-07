type Tuple = readonly unknown[];
type Concat<A extends Tuple, B extends Tuple> = [...A, ...B];
type Result = Concat<[1], [2]>; // expected to be [1, 2]
