import { useRef } from 'react';
import { FormHandles } from '@unform/core';

export const useVForm = () => {
	const formRef = useRef<FormHandles>(null);

	return {
		formRef,
	};
};
