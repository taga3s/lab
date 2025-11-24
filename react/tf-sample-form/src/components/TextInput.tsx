import type { AnyFieldApi } from "@tanstack/react-form";
import { FieldInfo } from "./FieldInfo";

type Props = {
	label: string;
	field: AnyFieldApi;
};

export const TextInput = ({ label, field }: Props) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={field.name} className="font-semibold">
				{label}
			</label>
			<input
				id={field.name}
				name={field.name}
				value={field.state.value}
				onBlur={field.handleBlur}
				onChange={(e) => field.handleChange(e.target.value)}
				className="border border-gray-300 rounded px-3 py-2"
			/>
			<FieldInfo field={field} />
		</div>
	);
};
