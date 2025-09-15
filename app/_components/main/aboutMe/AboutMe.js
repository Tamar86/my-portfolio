import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';

function AboutMe() {
	return (
		<div className='flex  flex-col gap-5'>
			<div>
				<h1 className='text-4xl'>Tamar Collins</h1>
				<h3 className='text-2xl'>Junior Web Developer</h3>
			</div>

			<div className='grid grid-flow-row lg:grid-cols-2 gap-16'>
				<Profile />

				<div className='flex flex-col gap-6'>
					<h4 className='text-xl text-green-400'>Education</h4>
					<Education />

					<h4 className='text-xl text-purple-400'>
						Bootcamp and technical experience
					</h4>

					<Experience />
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
