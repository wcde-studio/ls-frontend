//'use server';
import { InputSize, InputName, InputType } from '@/components/ui/input/types';

import { z } from 'zod';

const schemaRegister = z.object({
	[InputName.UserName]: z.string().min(3).max(20, {
		message: 'Имя должно быть не менее 3 и не более 20 символов'
	}),
	[InputName.UserSurname]: z.string().min(3).max(20, {
		message: 'Фамилия должна быть не менее 3 и не более 20 символов'
	}),
	[InputName.Email]: z.string().email({
		message: 'Введите корректный email'
	}),
	[InputName.Telephone]: z.string().min(6).max(20, {
		message: 'Введите телефон'
	}),
	[InputName.Telegram]: z.string(),
	city: z.string(),
	password: z.string().min(3).max(20, {
		message: 'Пароль должен быть не менее 3 и не более 20 символов'
	}),
	[InputName.RepeatPassword]: z.string().min(3).max(20, {
		message: 'Пароль должен быть не менее 3 и не более 20 символов'
	}),
	[InputName.ConfirmRegistration]: z.string().includes('on', {
		message: 'Подвердите согласие'
	}),		

}).refine((data) => data[InputName.Password] === data[InputName.RepeatPassword], {
	message: 'Пароли не совпадают',
	path: [InputName.RepeatPassword]
});

const registerUserAction = async (
	initialState: Record<string, any>, 
	formData: FormData ) => {
	
	try {
		const validateFields = schemaRegister.safeParse({
			userName: formData.get(InputName.UserName),
			userSurname: formData.get(InputName.UserSurname),
			email: formData.get(InputName.Email),
			telephone: formData.get(InputName.Telephone),
			telegram: formData.get(InputName.Telegram),
			city: formData.get(InputName.City),
			password: formData.get(InputName.Password),
			repeatPassword: formData.get(InputName.RepeatPassword),
			confirmRegistration:formData.get(InputName.ConfirmRegistration),		
	});
		
		const sendData = await new Promise((resolve) => {setTimeout(()=> {resolve('data')}, 500)});
	
		console.log({validateFields});

		if(!validateFields.success) {
			return {
				...initialState,
				zodErrors: validateFields.error.flatten().fieldErrors,
				strapiError: null,
				message: 'Missing Fields. Failed to Register'
			}
		}

		return {
			...initialState,
			data: validateFields,
		}
	} catch(error) {
		console.log({error});
		return {
			...initialState,
			error
		}
	}
};

export default registerUserAction;
