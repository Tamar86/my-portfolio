'use client';

import { useEffect, useState } from 'react';
import { skills } from '@/app/utils/skills';
import Spinner from '../Spinner';
import SkillsMotion from './SkillsMotion';
import IntroductionSection from './IntroductionSection';
import SocialLinks from './SocialLinks';

function HomePage() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (skills) {
			setLoading(false);
		}
	}, []);

	return (
		<div className='flex flex-col gap-24  items-center justify-center'>
			<div className='grid grid-rows-2 lg:flex items-center justify-between gap-24 h-fit'>
				<IntroductionSection />
				<div>{loading ? <Spinner /> : <SkillsMotion skills={skills} />}</div>
			</div>

			<SocialLinks />
		</div>
	);
}

export default HomePage;
