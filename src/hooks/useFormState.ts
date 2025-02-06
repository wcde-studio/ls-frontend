import React from 'react';
import { useState } from 'react';
export const useFormState = (
	initialState:  Record<string, any>,
	action: (initialState: Record<string, any>, formData: FormData) => void) => {
	
	const [formState, setFormState] = useState<Record<string, any>>(initialState);
	const [isProcessing, setIsProcessing] = useState(false);

	const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();
		setIsProcessing(true);
		try {
			const formData = new FormData(event.currentTarget);
			const actionState =	await action(initialState, formData);
			//console.log(actionState);
			setFormState((prevState) => (actionState));
			setIsProcessing(false);
		} catch (error) {
			setFormState((prevState) => ({...prevState, error: error}));
			setIsProcessing(false);
			console.error(error);
		}
	};

	return {formState, formSubmit, isProcessing};
	
};

		// for(const [key, value] of Object.entries(formState)) {
			// setFormState((formState: any)=> ({...formState, [key]: formData.get(key)}));
		// }
