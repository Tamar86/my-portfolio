import Image from 'next/image';

import { myProjects } from '@/app/utils/myProjects';

function ProjectsPage() {
	return (
		<ul className='projects-list  grid lg:grid-cols-3 gap-10'>
			{myProjects.map(project => (
				<li
					key={project.id}
					className='flex flex-col items-center bg-slate-800 p-5 rounded-md gap-2 shadow-[0_0_15px] shadow-slate-700'
				>
					<h4 className='uppercase text-lg h-16 font-bold '>{project.title}</h4>

					<a
						href={project.link}
						className='text-xs flex flex-col items-center gap-2'
					>
						<Image
							className='w-[25rem] h-[15rem] '
							src={project.image}
							alt={project.title}
							width={500}
							height={500}
						/>
						<p>{project.link}</p>
					</a>
				</li>
			))}
		</ul>
	);
}

export default ProjectsPage;
