import { motion } from 'framer-motion';

function SkillsMotion({ skills }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<div className='grid grid-cols-2 sm:grid-cols-3 gap-6 text-center'>
				{skills.map((skill, index) => (
					<div
						key={index}
						className='flex flex-col items-center bg-white shadow-md p-4 rounded-xl font-semibold text-gray-800 hover:scale-105 transition-transform'
					>
						{skill.icon}
						<span className='mt-2'>{skill.name}</span>
					</div>
				))}
			</div>
		</motion.div>
	);
}

export default SkillsMotion;
