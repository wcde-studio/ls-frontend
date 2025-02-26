/*'use server';

import { InputSize, InputName, InputType } from '@/components/ui/input/types';
import registerUserServices from '../services/auth-services';

const createUser = async (formData: FormData) => {
	try {
		const fields = {
			userName: formData.get(InputName.UserName),
			userSurname: formData.get(InputName.UserSurname),
			email: formData.get(InputName.Email),
			telephone: formData.get(InputName.Telephone),
			telegram: formData.get(InputName.Telegram),
			city: formData.get(InputName.City),
			password: formData.get(InputName.Password),
			repeatPassword: formData.get(InputName.RepeatPassword),
			confirmRegistration: formData.get(InputName.ConfirmRegistration),
		};
		const responseData = await registerUserServices();

		console.log({ fields }, 'done', { responseData });
	} catch (error) {
		console.log({ error });
	}
};

export default createUser;
*/
