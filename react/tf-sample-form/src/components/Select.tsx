import { INVALID_NOT_SELECTED } from "@/constants";
import type { AnyFieldApi } from "@tanstack/react-form";
import { FieldInfo } from "./FieldInfo";

type Props = {
	field: AnyFieldApi;
	label: string;
	options: readonly { value: number; label: string }[];
};

export const Select = ({ field, label, options }: Props) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={field.name} className="font-semibold">
				{label}
			</label>
			<select
				className="border border-gray-300 rounded px-3 py-2"
				id={field.name}
				onChange={(e) => field.handleChange(e.target.value)}
			>
				<option value={INVALID_NOT_SELECTED}>年代を選択してください</option>
				{options.map((option) => (
					<option key={option.label} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<FieldInfo field={field} />
		</div>
	);
};
