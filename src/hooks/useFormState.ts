import React from 'react';
import { useState, SetStateAction, Dispatch } from 'react';
export const useFormState = (
	initialState: Record<string, any>,
	action: (initialState: Record<string, any>, formData: FormData) => void,
	//setLoading: Dispatch<SetStateAction<boolean>>
) => {
	const [formState, setFormState] = useState<Record<string, any>>(initialState);
	const [isProcessing, setIsProcessing] = useState(false);
	//console.log({isProcessing});
		
	const formSubmit = async (formData: FormData) => {
		//event?.preventDefault();
		//setLoading(true);
		try {
			setIsProcessing(true);
			
			const actionState = await action(initialState, formData);
			setFormState((prevState) => actionState);
			setIsProcessing(false);
		} catch (error) {
			setFormState((prevState) => ({ ...prevState, error: error }));
			console.error('useFormState error: ', { error });
			setIsProcessing(false);
		}
		//setIsProcessing(false);
	
	};
//	console.log({isProcessing});
	return { formState, formSubmit, isProcessing };
};
