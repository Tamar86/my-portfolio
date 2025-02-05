'use client';

import { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Navigation from './Navigation';

function Header() {
	const [navbarShow, setNavbarShow] = useState(false);
	return (
		<div>
			<div className='hidden md:block relative'>
				<Navigation setNavbarShow={setNavbarShow} />
			</div>
			<div className='md:hidden flex items-center justify-end p-10 w-full fixed'>
				<HamburgerMenu navbarShow={navbarShow} setNavbarShow={setNavbarShow} />
			</div>
		</div>
	);
}

export default Header;
