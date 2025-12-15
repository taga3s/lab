interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

type MyReadonly2<T, K> =
  & {
    readonly [P in keyof T as P extends K ? P : never]: T[P];
  }
  & {
    [P in keyof T as P extends K ? never : P]: T[P];
  };

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
