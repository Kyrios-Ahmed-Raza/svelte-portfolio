import { HTMLIcon, CSSIcon, JSIcon, ReactIcon, TailwindIcon } from '../asset/icons';

export const NavLinks = [
	{ name: 'Home', link: '/' },
	{ name: 'About', link: '/about' },
	{ name: 'Skills', link: '/skills' },
	{ name: 'Projects', link: '/projects' },
	{ name: 'Testimonials', link: '/testimonials' },
	{ name: 'Contact', link: '/contact' }
];

let ProjectOneDesc =
	'This was a fun personal project, Completed it in 1 day. I used HTML, CSS. It is just the Hero section and it is only front-end.';
let ProjectTwoDesc =
	'This was also a personal project that was not so fun, I learned error handling with this project. This was the first project that took me over a week to complete.';
let ProjectThreeDesc =
	'This was an assignment from the institute, that took me over 3 weeks to complete. I have learned time managment from this project and it was hard to build a whole website almost alone.';
let ProjectFourDesc =
	'This also was an assignment from the institute, I build this in less than 10 days, It was not that good because I did not had that much knowledge at that time.';

export const Projects = [
	{
		id: 1,
		imgSrc: 'src/asset/img/ProjectsImg/AirbnbClone.png',
		name: 'Airbnb Hero Clone',
		desc: ProjectOneDesc,
		tech: [HTMLIcon, CSSIcon]
	},
	{
		id: 2,
		imgSrc: 'src/asset/img/ProjectsImg/NikeClone.png',
		name: 'Nike Redesigned',
		desc: ProjectTwoDesc,
		tech: [ReactIcon, TailwindIcon]
	},
	{
		id: 3,
		imgSrc: 'src/asset/img/ProjectsImg/CambridgeHospital.png',
		name: 'Cambridge Hospital',
		desc: ProjectThreeDesc,
		tech: [HTMLIcon, CSSIcon, JSIcon]
	},
	{
		id: 4,
		imgSrc: 'src/asset/img/ProjectsImg/PortfolioResponsive.png',
		name: 'Portfolio',
		desc: ProjectFourDesc,
		tech: [HTMLIcon, CSSIcon, JSIcon]
	}
];

export const Skills = [
	'React JS',
	'Astro JS',
	'Svelte JS',
	'JavaScript',
	'TypeScript',
	'HTML',
	'CSS',
	'SCSS',
	'Framer-Motion',
	'Motion One',
	'Gsap',
	'C#',
	'Unity2D',
	'Python',
	'Adobe Photoshop',
	'Adobe Illustrator',
	'Adobe Premier Pro',
	'Adobe After Effect',
	'Bash',
	'Figma'
];

const titleOneDesc = 'I used to do a lot of photo manipulation and it was fun creating art.';

const titleTwoDesc =
	'I built alot of project at that time, they were all for fun and for my portfolio.';

const titleThreeDesc = 'I am currently working as a front-end developer at Kyrios-Dev.';

export const ExperienceData = [
	{ title: 'For My-self', designation: 'Graphics Designer', desc: titleOneDesc },
	{ title: 'For My-self', designation: 'Game Development', desc: titleTwoDesc },
	{ title: 'Kyrios Dev', designation: 'Front-end Development', desc: titleThreeDesc }
];

let MessageOne =
	"Working with Ahmed was a dream come true! He's not only talented but also incredibly responsive and easy to communicate with. Look no further for your design needs!";
let MessageTwo =
	"I can't thank Ahmed enough for his incredible work on my project. His expertise and professionalism made the process seamless. Highly recommended!";
let MessageThree =
	"Ahmed's work is exceptional! From concept to completion, he delivered beyond my wildest expectations. If you're looking for top-notch design and development, Ahmed is your guy!";
let MessageFour =
	"Ahmed is a creative genius! His attention to detail and dedication to his craft truly set him apart. I couldn't be happier with the results.";
let MessageFive =
	'Highly recommend Ahmed! Professional, talented, and exceeded expectations. Thank you for bringing my vision to life!';
let MessageSix =
	'Highly recommend Ahmed for exceptional design and development services! Professional, creative, and exceeded all expectations.';

export const TestimonialsData = [
	{
		id: 1,
		name: 'Liam Benjamin',
		profilePic:
			'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMFByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
		date: '23/10/2024',
		msg: MessageOne
	},
	{
		id: 2,
		name: 'James Mason',
		profilePic:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwUHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
		date: '23/10/2024',
		msg: MessageTwo
	},
	{
		id: 3,
		name: 'William Alexander',
		profilePic:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwUHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
		date: '23/10/2024',
		msg: MessageThree
	},
	{
		id: 4,
		name: 'Christopher Nolan',
		profilePic:
			'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbiUyMFByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
		date: '23/10/2024',
		msg: MessageFour
	},
	{
		id: 5,
		name: 'Lucas Joseph',
		profilePic:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMFByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
		date: '23/10/2024',
		msg: MessageFive
	},
	{
		id: 6,
		name: 'Jenny Lester',
		profilePic:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1lbiUyMFByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
		date: '14/6/2019',
		msg: MessageSix
	}
];
