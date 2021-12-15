import { TextField } from '@mui/material';
import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	placeholder: string;
	control: Control<any>;
}

export default function InputField({
	name,
	label,
	placeholder,
	control,
	...inputProps
}: InputFieldProps) {
	const {
		field: { value, onChange, onBlur, ref },
		fieldState: { invalid, error },
	} = useController({
		name,
		control,
	});
	return (
		<TextField
			id={name}
			name={name}
			size="medium"
			value={value}
			label={label}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			inputRef={ref}
			error={invalid}
			helperText={error?.message}
			inputProps={inputProps}
			variant="outlined"
		/>
	);
}
