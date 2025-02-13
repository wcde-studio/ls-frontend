import React from 'react';
import { useState } from 'react';
export const useFormState = (
	initialState: Record<string, any>,
	action: (initialState: Record<string, any>, formData: FormData) => void
) => {
	const [formState, setFormState] = useState<Record<string, any>>(initialState);
	const [isProcessing, setIsProcessing] = useState(false);

	const formSubmit = async (formData: FormData) => {
		
		//event?.preventDefault();
		setIsProcessing(true);
		try {
			const actionState = await action(initialState, formData);			
			//console.log('useFormState', {actionState});
			setFormState((prevState) => actionState);
			setIsProcessing(false);
		} catch (error) {
			setFormState((prevState) => ({ ...prevState, error: error }));
			setIsProcessing(false);
			console.error('useFormState error: ', {error});
		}
	};

	return { formState, formSubmit, isProcessing };
};
