import { getBackendURL } from '@/lib/utils';

interface RegisterUserProps {
	username: string,
	usersurname: string,
	email: string,
	telephone: string,
	telegram: string,
	city: string,
	password: string,
	repeatpassword: string,
	confirmregistration: string,
}

const baseUrl = getBackendURL();

const registerUserServices = async (userData: RegisterUserProps) => {
	const url = new URL('/api/auth/local/register', baseUrl);	
	
	try {		
		//console.log({url});
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({...userData}),
			});

		return response.json();
	} catch(error) {
		console.log('Ошибка регистрации:', error);
	}

};

export default registerUserServices;
