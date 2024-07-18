'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './form.module.scss';

import { CloseIcon } from '@/components/ui';
import { LoadingSpinner } from '@/components/services';

import { AuthorizationForm } from '@/components/forms';

import { RegistrationForm } from '@/components/forms';


import { FormName } from './types';

type Props = {
//	startFormName?: FormName;
	onClose: () => void;
};

const LoginMainForm = (props: Props) => {
	const { onClose } = props;

	return (
		<>
			{
				false && <AuthorizationForm onClose={onClose}/>
			}
			{
				true && <RegistrationForm onClose={onClose}/>
			}
		</>
	);
};

export default LoginMainForm;
