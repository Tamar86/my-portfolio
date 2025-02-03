import Link from 'next/link';

function Navigation() {
	return (
		<nav className='navbar-menu w-full flex items-center justify-center lg:justify-end '>
			<ul className='flex w-full lg:w-2/4 bg-var(--header) py-10 px-10 sm:px-36 md:px-44 items-center gap-4 justify-between '>
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
