type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

// deno-lint-ignore no-explicit-any
type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
