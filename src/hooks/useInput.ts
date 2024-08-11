import React, { useState } from 'react';

import { InputName, InputType } from '@/components/ui/input/types';

export const useInput = (initialState: Record<string, string>) => {
	const [inputValue, setInputValue] = useState(initialState);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setInputValue((inputValue) => ({
			...inputValue,
			//				e.target.type === 'checkbox' ? e.target.checked : e.target.value,
			[e.target.name]: e.target.value,
		}));
	};

	const resetInputValue = (name: string) => {
		setInputValue((inputValue) => ({ ...inputValue, [name]: '' }));
	};

	return {
		inputValue,
		handleInputChange,
		resetInputValue,
	};
};
