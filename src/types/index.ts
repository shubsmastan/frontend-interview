type ApplicationBasics = {
	id: number;
	first_name: string;
	last_name: string;
	loan_history: Record<string, string | number>;
};

export type Application = ApplicationBasics & Record<string, string | number>;
