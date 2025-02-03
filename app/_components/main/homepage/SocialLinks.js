function SocialLinks() {
	return (
		<div className='btn-container items-center w-3/4 justify-center gap-6 grid grid-cols-3 '>
			<div className='bg-purple-400 '>
				<a href='https://github.com/Tamar86'>github</a>
			</div>
			<div className='bg-blue-500'>
				<a href='https://linkedin.com/in/tamara-kikalishvili-88825628a'>
					Linkedin
				</a>
			</div>
			<div className='bg-green-500'>
				<a download='tamaras-resume.pdf' href='/tamaras-resume.pdf'>
					Download resume
				</a>
			</div>
		</div>
	);
}

export default SocialLinks;
