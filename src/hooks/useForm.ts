import React, { useState } from 'react';
import { FormName } from '@/components/forms/types';
import { InputName } from '@/components/ui/input/types';

/*
	authorization: {
		email: 'gog3d@mail.ru',
		password: '123123',
	},
	registration: {
		userName: 'Валерия',
		userSurname: 'Смирнова',
		email: 'valery9@mail.ru',
		telephone: '+7 921 342-98-93',
		telegramNic: '',
		city: '',
		pasword: '',
		repeatPassword: '',
		confirm: ''
	},

*/

const authorizatonFormValid: Record<string, string> = {
	//	authorization: {
	email: 'gog3d@mail.ru',
	password: '123123',
	//	},
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

		console.log(event.target);

		setValid(true);
		setCheckEnd(false);
		setLoading(true);

		setTimeout(() => {
			if (formName === FormName.Authorization) {
				for (const [key, value] of formDataPairs) {
					if (authorizatonFormValid[key] === value) {
						setErrors((errors) => ({ ...errors, [key]: false }));
					} else {
						setErrors((errors) => ({ ...errors, [key]: true }));
						setValid(false);
					}
				}
				setLoading(false);
				setCheckEnd(true);
			} else if (formName === FormName.Registration) {
				for (const [key, value] of formDataPairs) {
					//if (authorizatonFormValid[key] === value) {
					//console.log({key, value});
					setErrors((errors) => ({ ...errors, [key]: true }));
					//} else {
					//setErrors((errors) => ({ ...errors, [key]: true }));
					//setValid(false);
					//}
				}
				setLoading(false);
				setCheckEnd(true);
			} else {
				setLoading(false);
				setCheckEnd(false);
			}
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
