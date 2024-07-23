'use client';

import { create } from 'zustand';
import { FormName } from '@/components/forms/types';

interface LoginStore {
	formName: FormName;
	setFormName: (name: FormName) => void;
}

const useLoginStore = create<LoginStore>((set) => ({
	formName: FormName.Authorization,
	setFormName: (name: FormName) => set((state) => ({ formName: name })),
}));

export default useLoginStore;
