'use client';

import Link from 'next/link';
import { AiFillCloseCircle } from 'react-icons/ai';

function Navigation({ setNavbarShow }) {
	return (
		<nav className='navbar-menu w-full sm:w-1/2 opacity-95 shadow-lg shadow-slate-800 bg-slate-900 md:bg-transparent rounded-lg absolute md:relative top-0 h-screen sm:h-fit right-0 md:w-full md:flex md:items-center md:justify-center lg:justify-end'>
			<button
				className='md:hidden  w-full flex items-center justify-end p-10  sm:p-5'
				onClick={() => setNavbarShow(false)}
			>
				<AiFillCloseCircle className='text-5xl sm:text-3xl' />
			</button>
			<ul className='flex flex-col text-3xl sm:text-lg md:flex-row w-full lg:w-2/4 bg-var(--header) py-10 px-10 md:px-44 md:items-center gap-8 md:gap-4 md:justify-between '>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/pages/projects'>Projects</Link>
				</li>
				<li>
					<Link href='/pages/about'>About</Link>
				</li>
				<li>
					<Link href='/pages/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
