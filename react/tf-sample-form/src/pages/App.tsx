import { useForm } from "@tanstack/react-form";
import { TextInput } from "@/components/TextInput";
import { Select } from "@/components/Select";
import { AGE_OPTIONS, INVALID_NOT_SELECTED } from "@/constants";

export function App() {
	const form = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			age: INVALID_NOT_SELECTED,
		},
		onSubmit: async ({ value }) => {
			// Do something with form data
			console.log(value);
		},
	});

	return (
		<div className="w-1/2 mx-auto mt-10 p-4 border border-gray-300 rounded">
			<h1 className="text-2xl font-bold">サンプルフォーム</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="mt-8"
			>
				<div className="flex flex-col gap-4 w-full">
					{/* A type-safe field component*/}
					<form.Field
						name="firstName"
						validators={{
							onChange: ({ value }) =>
								!value
									? "必須項目です"
									: value.length < 1
										? "苗字は1文字以上である必要があります"
										: undefined,
							onChangeAsyncDebounceMs: 500,
							onChangeAsync: async ({ value }) => {
								await new Promise((resolve) => setTimeout(resolve, 1000));
								return (
									value.includes("error") && 'No "error" allowed in first name'
								);
							},
						}}
						children={(field) => <TextInput label="苗字（姓）" field={field} />}
					/>
					<form.Field
						name="lastName"
						children={(field) => <TextInput label="名前（名）" field={field} />}
					/>
					<form.Field
						name="age"
						validators={{
							onChange: ({ value }) => {
								return value === INVALID_NOT_SELECTED
									? "必須項目です"
									: undefined;
							},
						}}
						children={(field) => (
							<Select label="年代" field={field} options={AGE_OPTIONS} />
						)}
					/>
				</div>
				<div className="mt-16">
					<form.Subscribe
						selector={(state) => [state.canSubmit, state.isSubmitting]}
						children={([canSubmit, isSubmitting]) => (
							<button
								type="submit"
								disabled={!canSubmit}
								className="cursor-pointer mx-auto block px-4 py-2 bg-blue-900 text-white font-bold rounded disabled:opacity-50"
							>
								{isSubmitting ? "..." : "送信"}
							</button>
						)}
					/>
				</div>
			</form>
		</div>
	);
}
