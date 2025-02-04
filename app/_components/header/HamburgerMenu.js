'use client';

import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import Navigation from './Navigation';

function HamburgerMenu() {
	const [navbarShow, setNavbarShow] = useState(false);
	return (
		<>
			<button onClick={() => setNavbarShow(show => !show)} className=''>
				<TiThMenu size={50} />
			</button>

			{navbarShow && <Navigation setNavbarShow={setNavbarShow} />}
		</>
	);
}

export default HamburgerMenu;
