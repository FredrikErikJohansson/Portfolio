import { INTRO, ABOUT, PROJECTS } from '$lib/constants/constants';

export const getBackgroundColor = (page: string, type = 'primary') => {
	return `bg-${page}-${type}`;
};

export const getTextColor = (page: string) => {
	switch (page) {
		case INTRO:
			return 'text-white';
		case ABOUT:
			return 'text-black';
		case PROJECTS:
			return 'text-white';
		default:
			return '';
	}
};
