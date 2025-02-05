import ContactLinks from './ContactLinks';
import Form from './Form';

export default function ContactPage() {
	return (
		<div className='flex flex-col items-center bg-gray-100 py-20 min-h-screen w-full  sm:w-[50rem] rounded-lg text-slate-800'>
			<div className='bg-white shadow-lg rounded-xl p-6 sm:w-[30rem] w-full'>
				<h2 className='text-2xl font-bold text-center mb-4'>Get in Touch</h2>
				<Form />

				<ContactLinks />
			</div>
		</div>
	);
}
