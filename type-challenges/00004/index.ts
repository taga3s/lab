interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<
  T,
  K extends
    | keyof T
    | string
    | number
    | symbol,
> = {
  [P in K]: P extends keyof T ? T[P] : never;
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
