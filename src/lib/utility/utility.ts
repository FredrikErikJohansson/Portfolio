import { INTRO, ABOUT, PROJECTS } from '$lib/constants/constants';

export const getBackgroundColor = (page: string, secondary = false) => {
	switch (page) {
		case INTRO:
			return secondary ? `bg-intro-secondary` : `bg-intro-primary`;
		case ABOUT:
			return secondary ? `bg-about-secondary` : `bg-about-primary`;
		case PROJECTS:
			return secondary ? `bg-projects-secondary` : `bg-projects-primary`;
		default:
			return '';
	}
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
