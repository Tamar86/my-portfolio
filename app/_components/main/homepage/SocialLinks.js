function SocialLinks() {
	return (
		<div className='flex flex-col btn-container items-center w-full lg:w-3/4 justify-center gap-6 md:grid md:grid-cols-3 '>
			<div className='bg-purple-400 '>
				<a href='https://github.com/Tamar86'>github</a>
			</div>
			<div className='bg-blue-500'>
				<a href='linkedin.com/in/tamar-collins-88825628a'>Linkedin</a>
			</div>
			<div className='bg-green-500'>
				<a download='tamaras-resume.pdf' href='/tamaras-resume.pdf'>
					Download CV
				</a>
			</div>
		</div>
	);
}

export default SocialLinks;
