import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaNodeJs,
	FaGithub,
	FaGit,
} from 'react-icons/fa';
import {
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiMongoose,
} from 'react-icons/si';

export const skills = [
	{ name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
	{ name: 'CSS', icon: <FaCss3Alt className='text-blue-500' /> },
	{ name: 'JavaScript', icon: <SiJavascript className='text-yellow-500' /> },
	{ name: 'React', icon: <FaReact className='text-blue-400' /> },
	{ name: 'Next.js', icon: <SiNextdotjs className='text-black' /> },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss className='text-teal-400' /> },
	{ name: 'Node.js', icon: <FaNodeJs className='text-green-500' /> },
	{ name: 'Express', icon: <SiExpress className='text-gray-600' /> },
	{ name: 'MongoDB', icon: <SiMongodb className='text-green-600' /> },
	{ name: 'Mongoose', icon: <SiMongoose className='text-red-600' /> },
	{ name: 'GitHub', icon: <FaGithub className='text-gray-800' /> },
	{ name: 'Git', icon: <FaGit className='text-orange-800' /> },
];
