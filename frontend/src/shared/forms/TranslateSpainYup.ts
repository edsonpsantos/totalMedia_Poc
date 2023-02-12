import { setLocale } from 'yup';

setLocale({
	mixed: {
		default: 'El campo no es válido',
		required: 'El campo es obligatorio',
	},
	string: {
		email: () => 'El campo debe contener un correo electrónico válido',
		max: ({ max }) => `El campo debe tener un máximo ${max} de caracteres`,
		min: ({ min }) => `El campo debe tener un minimo ${min} de caracteres`,
		length: ({ length }) => `El campo debe tener exactamente ${length} de caracteres`,
	},
	date: {
		max: ({ max }) => `La fecha debe ser menor que ${max}`,
		min: ({ min }) => `La fecha debe ser maior que ${min}`,
	},
	number: {
		integer: () => 'El campo debe tener un valor entero',
		negative: () => 'El campo debe tener un valor negativo',
		positive: () => 'El campo debe tener un valor positivo',
		moreThan: ({ more }) => `El campo debe tener un valor mayor que ${more}`,
		lessThan: ({ less }) => `El campo debe tener un valor menor que ${less}`,
		min: ({ min }) => `El campo debe tener un valor con más de ${min} caracteres`,
		max: ({ max }) => `El campo debe tener un valor con menos de ${max} caracteres`,
	},
	boolean: {},
	object: {},
	array: {},
});
