import React, { useState } from 'react';
import { FormName } from '@/components/forms/types';
import { InputName } from '@/components/ui/input/types';

const authorizatonFormValid: Record<string, string> = {
	email: 'gog3d@mail.ru',
	password: '123123',
};

export const useForm = (errorsInitialState: Record<string, boolean>) => {
	const [errors, setErrors] = useState(errorsInitialState);
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(true);
	const [checkEnd, setCheckEnd] = useState(false);

	const handlerOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();

		setValid(true);
		setCheckEnd(false);
		setLoading(true);

		const formName = event.target.name;
		const formData = new FormData(event.target);
		const formDataPairs = Array.from(formData.entries());

		//		console.log(formData);

		if (formName === FormName.Authorization) {
			setTimeout(() => {
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
			}, 1500);
		} else if (formName === FormName.Registration) {
			if (formData.getAll(InputName.ConfirmRegistration).length) {
				setTimeout(() => {
					for (const [key, value] of formDataPairs) {
						switch (key) {
							case InputName.UserName:
								if (value) {
									setErrors((errors) => ({ ...errors, [key]: false }));
								} else {
									setErrors((errors) => ({ ...errors, [key]: true }));
									setValid(false);
								}
								break;
							case InputName.UserSurname:
								if (value) {
									setErrors((errors) => ({ ...errors, [key]: false }));
								} else {
									setErrors((errors) => ({ ...errors, [key]: true }));
									setValid(false);
								}
								break;
							case InputName.Email:
								if (value) {
									setErrors((errors) => ({ ...errors, [key]: false }));
								} else {
									setErrors((errors) => ({ ...errors, [key]: true }));
									setValid(false);
								}
								break;
							case InputName.Telephone:
								if (value) {
									setErrors((errors) => ({ ...errors, [key]: false }));
								} else {
									setErrors((errors) => ({ ...errors, [key]: true }));
									setValid(false);
								}
								break;
							case InputName.Password:
								if (value === formData.get(InputName.RepeatPassword)) {
									setErrors((errors) => ({ ...errors, [key]: false }));
								} else {
									setErrors((errors) => ({ ...errors, [key]: true }));
									setValid(false);
								}
								break;
							case InputName.RepeatPassword:
								if (value === formData.get(InputName.Password)) {
									setErrors((errors) => ({ ...errors, [key]: false }));
								} else {
									setErrors((errors) => ({ ...errors, [key]: true }));
									setValid(false);
								}
								break;
							default:
//								setValid(false);
						}
					}

					setLoading(false);
					setCheckEnd(true);
				}, 1500);
			} else {
				setErrors((errors) => ({
					...errors,
					[InputName.ConfirmRegistration]: true,
				}));
				setValid(false);
				setLoading(false);
				setCheckEnd(true);
			}
		} else {
			setLoading(false);
			setCheckEnd(true);
		}
	};

	return {
		handlerOnSubmit,
		errors,
		valid,
		loading,
		checkEnd,
	};
};
