import { Modal } from '@/components/services';
import { RegistrationForm } from '@/components/forms';

const RegisterPage = () => {
	return (
		<Modal returnPath={'/'}>
			<RegistrationForm />
		</Modal>
	);
};

export default RegisterPage;
