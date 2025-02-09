'use client';

import { useState } from 'react';

function Form() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		setStatus('Sending...');
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			const result = await response.json();
			if (response.ok) {
				setStatus(result.success);
				setFormData({ name: '', email: '', message: '' });
			} else {
				setStatus(result.error || 'Something went wrong!');
			}
		} catch (error) {
			setStatus('Failed to send message. Try again later.', error);
		}
	};

	console.log('status', status);
	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<input
				type='text'
				placeholder='Your Name'
				className='p-3 border rounded-md'
				defaultValue={formData.name}
				onChange={e => setFormData({ ...formData, name: e.target.value })}
				required
			/>
			<input
				type='email'
				placeholder='Your Email'
				className='p-3 border rounded-md'
				defaultValue={formData.email}
				onChange={e => setFormData({ ...formData, email: e.target.value })}
				required
			/>
			<textarea
				placeholder='Your Message'
				className='p-3 border rounded-md h-32'
				defaultValue={formData.message}
				onChange={e => setFormData({ ...formData, message: e.target.value })}
				required
			/>
			<button
				type='submit'
				className='bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition'
			>
				Send Message
			</button>
			{status && <p className='text-center text-green-600'>{status}</p>}
		</form>
	);
}

export default Form;
