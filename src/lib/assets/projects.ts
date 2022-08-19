export interface Project {
	id: string;
	title: string;
	shortDescription: string;
	sourceLink: string | undefined;
	imageSource: string;
	features: string[];
	technologies: string[];
	year: number;
}

export const projects: Project[] = [
	{
		id: '1',
		title: "Master's thesis",
		shortDescription: "Master's thesis project.",
		sourceLink: 'https://github.com/FredrikErikJohansson/VI-SLAM-UAV',
		imageSource: '/images/MT.png',
		features: [],
		technologies: [],
		year: 2021
	},
	{
		id: '2',
		title: 'Chess engine with an integrated AI',
		shortDescription: 'Chess engine with an integrated AI, written from scratch in C++',
		sourceLink: 'https://github.com/FredrikErikJohansson/chess-ai',
		imageSource: '/images/CHESS.png',
		features: [
			'Bitboards',
			'SIMD',
			'Move generation',
			'Evaluation function',
			'Material score',
			'Positional score',
			'Minimax',
			'Negamax',
			'Alpha-beta pruning',
			'Quiescence search',
			'Transposition table',
			'MVV-LVA',
			'Zobrist hashing'
		],
		technologies: ['C++'],
		year: 2020
	},
	{
		id: '3',
		title: 'Proccraft',
		shortDescription: 'Voxel engine for generation of procedural terrains.',
		sourceLink: 'https://github.com/FredrikErikJohansson/Proccraft',
		imageSource: '/images/PROCCRAFT.png',
		features: [
			'Batching',
			'Face culling',
			'Marching cubes algorithm',
			'Simplex noise',
			'Infinite generation',
			'Exponential fog',
			'Camera',
			'Directional light',
			'Cave systems',
			'Mountainlike terrain',
			'ImGui'
		],
		technologies: ['C++', 'OpenGL', 'GLSL'],
		year: 2020
	},
	{
		id: '4',
		title: 'Cloudmatch',
		shortDescription: 'Spotify to Soundcloud music recommendation tool.',
		sourceLink: 'https://github.com/johanforslund/cloudmatch',
		imageSource: '/images/CLOUDMATCH.png',
		features: ['KNN', 'Data gathering', 'Scoring algorithm'],
		technologies: ['Python', 'JavaScript', 'React', 'Flask', 'Spotify API', 'Soundcloud API'],
		year: 2020
	},
	{
		id: '5',
		title: 'Face Recognition Software',
		shortDescription: 'Software which identifies faces using image processing.',
		sourceLink: 'https://github.com/samuelllsvensson/Face_Recognition',
		imageSource: '/images/FACE.jpg',
		features: [
			'Morphology',
			'Eigenfaces',
			'Fisherfaces',
			'PCA',
			'LDA',
			'Face masking',
			'Eyemap',
			'Mouthmap',
			'Face normalization',
			'Face alignment',
			'Light compensation'
		],
		technologies: ['MATLAB'],
		year: 2019
	},
	{
		id: '6',
		title: 'Monte Carlo Ray Tracer',
		shortDescription: 'Monte Carlo Ray Tracer implemented in C++.',
		sourceLink: 'https://github.com/FredrikErikJohansson/Ray-tracer',
		imageSource: '/images/MCRT.jpg',
		features: [
			'Monte Carlo Estimator',
			'Russian Roulette',
			'Lambertian Reflectors',
			'Oren-Nayar Reflectors',
			'Pure Reflective Surfaces',
			'Transparent Objects',
			'Multi Sampling',
			'Anti Aliasing',
			"Snell's law",
			"Brewster's law",
			'Color bleeding'
		],
		technologies: ['C++', 'OpenMP'],
		year: 2019
	},
	{
		id: '7',
		title: 'Metiri',
		shortDescription: 'Android application to measure distances using ARcore.',
		sourceLink: undefined,
		imageSource: '/images/METIRI.jpg',
		features: [
			'Real Time Measure',
			'Store Measurment Data',
			'Surface Detection',
			'Surface Visualization',
			'Onboarding Introduction'
		],
		technologies: ['ARCore', 'OpenGL ES', 'Android', 'Java', 'Room'],
		year: 2019
	},
	{
		id: '8',
		title: 'Football Simulator',
		shortDescription: 'Football Trajectory Simulator with Drag and Magnus effect.',
		sourceLink: 'https://github.com/FredrikErikJohansson/FootballSim',
		imageSource: '/images/MOS.jpg',
		features: ['Drag', 'Gravity', 'Bounce', 'Collision', 'Magnus Effect', 'GUI', 'Object Import'],
		technologies: ['C++', 'OpenGL', 'MATLAB'],
		year: 2019
	},
	{
		id: '9',
		title: 'Bibliuteket',
		shortDescription: 'Android/iOS application for selling course literature.',
		sourceLink: 'https://github.com/johanforslund/bibliuteket',
		imageSource: '/images/BIBLIU.jpg',
		features: [
			'Posting',
			'Searching',
			'Notifications',
			'Autofill queries',
			'Wishlist',
			'User verification'
		],
		technologies: ['JavaScript', 'React Native', 'Firebase'],
		year: 2019
	},
	{
		id: '10',
		title: 'Amaze',
		shortDescription: 'Mobile game for Samsung Gear VR, developed in Unreal Engine.',
		sourceLink: 'https://github.com/FredrikErikJohansson/vr-maze',
		imageSource: '/images/AMAZE.jpg',
		features: ['VR', 'Animations', 'Puzzles', 'Interactive objects', 'Trigger effects'],
		technologies: ['Unreal Engine', 'Samsung Gear VR', '3ds Max'],
		year: 2018
	}
];
