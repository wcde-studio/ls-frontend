'use server';
import { InputSize, InputName, InputType } from '@/components/ui/input/types';

import { z } from 'zod';
import  registerUserServices from '@/lib/data/services/auth-services';

const schemaRegister = z
	.object({
		[InputName.UserName]: z.string().min(3).max(20, {
			message: 'Имя должно быть не менее 3 и не более 20 символов',
		}),
		[InputName.UserSurname]: z.string().min(3).max(20, {
			message: 'Фамилия должна быть не менее 3 и не более 20 символов',
		}),
		[InputName.Email]: z.string().email({
			message: 'Введите корректный email',
		}),
		[InputName.Telephone]: z.string().min(6).max(20, {
			message: 'Введите телефон',
		}),
		[InputName.Telegram]: z.string(),
		city: z.string(),
		password: z.string().min(3).max(20, {
			message: 'Пароль должен быть не менее 3 и не более 20 символов',
		}),
		[InputName.RepeatPassword]: z.string().min(3).max(20, {
			message: 'Пароль должен быть не менее 3 и не более 20 символов',
		}),
		[InputName.ConfirmRegistration]: z.string().includes('on', {
			message: 'Подвердите согласие',
		}),
	})
	.refine(
		(data) => data[InputName.Password] === data[InputName.RepeatPassword],
		{
			message: 'Пароли не совпадают',
			path: [InputName.RepeatPassword],
		}
	);

const registerUserAction = async (
	initialState: Record<string, any>,
	formData: FormData
) => {
	try {
		const validateFields = schemaRegister.safeParse({
			username: formData.get(InputName.UserName),
			usersurname: formData.get(InputName.UserSurname),
			email: formData.get(InputName.Email),
			telephone: formData.get(InputName.Telephone),
			telegram: formData.get(InputName.Telegram),
			city: formData.get(InputName.City),
			password: formData.get(InputName.Password),
			repeatpassword: formData.get(InputName.RepeatPassword),
			confirmregistration: formData.get(InputName.ConfirmRegistration),
		});

	/*	const sendData = await new Promise((resolve) => {
			setTimeout(() => {
				resolve('data');
			}, 500);
		});
	*/

		if (!validateFields.success) {
			return {
				...initialState,
				zodErrors: validateFields.error.flatten().fieldErrors,
				strapiError: null,
				message: 'Missing Fields. Failed to Register',
			};
		}

		const responseData = await registerUserServices(validateFields.data);

		if(!responseData) { 
			return {
				...initialState,
				strapiErrors: null,
				zodErrors: null,				
				message: 'Что то пошло не так, попробуйте еще раз.'
			};
		}

		if(responseData.error) {
			return {
				...initialState,
				strapiErrors: responseData.error,
				zodErrors: null,				
				message: 'Ошибка регистрации.'
			};
		}
		console.log('##########################');
		console.log('User Register Successfuly', responseData.jwt);
		console.log('##########################');

	} catch (error) {
		 console.log('auth-act-error: ', { error });
		 return {
			 ...initialState,
			 error,
		 };
	 }
};

export default registerUserAction;
