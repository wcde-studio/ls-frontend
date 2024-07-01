import React, { useState } from 'react';
//import { FormName } from  '@/components/forms/types';
import { InputName } from '@/components/ui/input/types';

const formsValid: Record<string, Record<string, string>> = {
	authorization: {
		email: 'gog3d@mail.ru',
		password: '123123',
		userName: 'oleg',
	},
};

export const useForm = (errorsInitialState: Record<string, boolean>) => {

	const [errors, setErrors] = useState(errorsInitialState);
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(true);
	const [checkEnd, setCheckEnd] = useState(false);

	const handlerOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const formDataPairs = Array.from(formData.entries());
		const formName = event.target.name;


		const formValid = formsValid[formName];

		setValid(true);
		setCheckEnd(false);
		setLoading(true);

		setTimeout(() => {
			for (const [key, value] of formDataPairs) {
				if (formValid[key] === value) {
					setErrors((errors) => ({ ...errors, [key]: false }));
				} else {
					setErrors((errors) => ({ ...errors, [key]: true }));
					setValid(false);
				}
			}
			setLoading(false);
			setCheckEnd(true);
		}, 1500);
	};
	return {
		handlerOnSubmit,
		errors,
		valid,
		loading,
		checkEnd,
	};
};
