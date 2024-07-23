'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './form.module.scss';

import { CloseIcon } from '@/components/ui';
import { LoadingSpinner } from '@/components/services';

import { AuthorizationForm } from '@/components/forms';

import { RegistrationForm } from '@/components/forms';

type Props = {
	onClose: () => void;
};

const LoginMainForm = (props: Props) => {
	const { onClose } = props;

	return (
		<>
			<AuthorizationForm onClose={onClose} />
			<RegistrationForm onClose={onClose} />
		</>
	);
};

export default LoginMainForm;
