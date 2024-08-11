'use client';

import { create } from 'zustand';

interface LoginStore {
	loginReturnPath: string;
	setLoginReturnPath: (name: string) => void;
	login: boolean;
	setLogin: (auth: boolean) => void;
}

const useLoginStore = create<LoginStore>((set) => ({
	loginReturnPath: '/',
	setLoginReturnPath: (name: string) =>
		set((state) => ({ loginReturnPath: name })),
	login: false,
	setLogin: (auth: boolean) => set((state) => ({ login: auth })),
}));

export default useLoginStore;
