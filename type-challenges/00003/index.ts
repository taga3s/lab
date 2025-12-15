interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Key Remapping via `as`
// see: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
