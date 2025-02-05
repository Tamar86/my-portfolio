import { TiThMenu } from 'react-icons/ti';
import Navigation from './Navigation';

function HamburgerMenu({ navbarShow, setNavbarShow }) {
	return (
		<div>
			<button onClick={() => setNavbarShow(show => !show)} className=''>
				<TiThMenu size={50} />
			</button>

			{navbarShow && <Navigation setNavbarShow={setNavbarShow} />}
		</div>
	);
}

export default HamburgerMenu;
