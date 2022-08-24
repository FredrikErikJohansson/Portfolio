export interface Project {
	id: string;
	title: string;
	shortDescription: string;
	longDescription: string;
	sourceLink: string | undefined;
	imageSource: string;
	resultImages: string[];
	vimeoId: string | undefined;
	reportSource: string | undefined;
	features: string[];
	technologies: string[];
	year: number;
}

export const projects: Project[] = [
	{
		id: '1',
		title: "Master's thesis",
		shortDescription: "Master's thesis project.",
		longDescription: '',
		sourceLink: 'https://github.com/FredrikErikJohansson/VI-SLAM-UAV',
		imageSource: '/images/MT.png',
		resultImages: [],
		vimeoId: undefined,
		reportSource: undefined,
		features: [],
		technologies: [],
		year: 2021
	},
	{
		id: '2',
		title: 'Chess engine with an integrated AI',
		shortDescription: 'Chess engine with an integrated AI, written from scratch in C++',
		longDescription:
			'A chess engine with an integrated AI, written from scratch in C++. The AI makes decisions by simulating future board states and evaluating the positions using heuristics.',
		sourceLink: 'https://github.com/FredrikErikJohansson/chess-ai',
		imageSource: '/images/CHESS.png',
		resultImages: ['/images/puzzle01.png', '/images/puzzle02.png'],
		vimeoId: undefined,
		reportSource: '/documents/Report_Chess.pdf',
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
		longDescription:
			'This is a voxel terrain engine implemented from scratch in C++ with the graphics API OpenGL and the shading language GLSL. The engine uses a combination of the marching cubes algorithm and simplex noise to generate the voxels and the materials. The genereated terrains are infinite and highly customizeable. For mountainlike terrains, 2D-simplex noise were used to generate a heightmap. For cave systems 3D-simplex noise were used to enable overhangs.',
		sourceLink: 'https://github.com/FredrikErikJohansson/Proccraft',
		imageSource: '/images/PROCCRAFT.png',
		resultImages: ['/images/cave01.png', '/images/cave02.png', '/images/mountain01.png'],
		vimeoId: undefined,
		reportSource: '/documents/Report_TNM084.pdf',
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
		longDescription:
			'Tool to connect Spotify and Soundcloud users to recommend amateur music for the Spotify users. Data from 30 000 Soundcloud users with a total of 24 000 000 tracks were collected. The Spotify user is then connected to a group of Soundcloud users based on their mean favorite genre. From that group of people, tracks are choosen according to a scoring system.',
		sourceLink: 'https://github.com/johanforslund/cloudmatch',
		imageSource: '/images/CLOUDMATCH.png',
		resultImages: ['/images/CLList.png'],
		vimeoId: undefined,
		reportSource: '/documents/Report_Cloudmatch.pdf',
		features: ['KNN', 'Data gathering', 'Scoring algorithm'],
		technologies: ['Python', 'JavaScript', 'React', 'Flask', 'Spotify API', 'Soundcloud API'],
		year: 2020
	},
	{
		id: '5',
		title: 'Face Recognition Software',
		shortDescription: 'Software which identifies faces using image processing.',
		longDescription:
			'A Face Recognition program which takes in an image of a face and returns an identification number of a matching face from a database. The program consist of a pipeline which includes: light compensation, normalization, eye and mouth map extraction and lastly feature extraction for each image. These features are what allows the program to determine if there is a match.',
		sourceLink: 'https://github.com/samuelllsvensson/Face_Recognition',
		imageSource: '/images/FACE.jpg',
		resultImages: ['/images/facerecog.jpg'],
		vimeoId: undefined,
		reportSource: '/documents/Report_Abob.pdf',
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
		longDescription:
			'A Monte Carlo Ray tracer made during the course Advanced Global Illumination and Rendering at Linköpings University. The ray tracer is physically based and were implemented in C++. The underlying physics range from Bidirectional Reflectance Distribution Functions to Estimations of the light contribution from the rendering equation.',
		sourceLink: 'https://github.com/FredrikErikJohansson/Ray-tracer',
		imageSource: '/images/MCRT.jpg',
		resultImages: [],
		vimeoId: undefined,
		reportSource: '/documents/Report_TNCG15.pdf',
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
		longDescription:
			'The Android application Metiri was developed during the course TNM094, Media Technology - Bachelor Project. Metiri is the Latin word for "measured" and describes the purpose of the product. The application is a mobile measurement tool that uses augmented reality to measure flat surfaces in real time. It is also possible to measure flat surfaces in stored environments. Metiri has been developed using Google\'s platform ARCore, the 3D API OpenGL ES and the database library Room. The project was developed using the agile methodology Scrum.',
		sourceLink: undefined,
		imageSource: '/images/METIRI.jpg',
		resultImages: [],
		vimeoId: '369190884',
		reportSource: '/documents/Report_TNM094.pdf',
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
		longDescription:
			"This project was developed during the course TNM085, Modelling Project. The goal was to create a mathematical model that describes a projectile's trajectory. The model was verified using simulation tools and finally visualized in a three-dimensional computing environment. The result is a physically realistic football simulator where the user can set physical parameters and see how the trajectory differs.",
		sourceLink: 'https://github.com/FredrikErikJohansson/FootballSim',
		imageSource: '/images/MOS.jpg',
		resultImages: [],
		vimeoId: undefined,
		reportSource: '/documents/Report_Mos.pdf',
		features: ['Drag', 'Gravity', 'Bounce', 'Collision', 'Magnus Effect', 'GUI', 'Object Import'],
		technologies: ['C++', 'OpenGL', 'MATLAB'],
		year: 2019
	},
	{
		id: '9',
		title: 'Bibliuteket',
		shortDescription: 'Android/iOS application for selling course literature.',
		longDescription:
			'Bibliuteket is a mobile application to help students at Linköpings University to sell and buy used course literature. The user can post books for sale as well as search for currently available books to buy. The user can also add books to a wishlist to recieve notifications as soon as the books are available. An integrated Facebook Messenger button is used to handle the contact between users. Bibliuteket is availible for download at Google Play and App store.',
		sourceLink: 'https://github.com/johanforslund/bibliuteket',
		imageSource: '/images/BIBLIU.jpg',
		resultImages: [],
		vimeoId: '386549456',
		reportSource: undefined,
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
		longDescription:
			'Amaze is a Virtual reality game developed for Samsung Gear VR. The game was implemented using Unreal Engine combined with 3Ds Max. Developing a VR Game for a phone comes with some constraints regarding the performance. However, by using well-thought-out techniques and tricks the game still deliver a relative realistic experience.',
		sourceLink: 'https://github.com/FredrikErikJohansson/vr-maze',
		imageSource: '/images/AMAZE.jpg',
		resultImages: [],
		vimeoId: '272102306',
		reportSource: undefined,
		features: ['VR', 'Animations', 'Puzzles', 'Interactive objects', 'Trigger effects'],
		technologies: ['Unreal Engine', 'Samsung Gear VR', '3ds Max'],
		year: 2018
	}
];
