import '@/app/_styles/globals.css';
import { Poppins } from 'next/font/google';
import Header from './_components/header/Header';

export const metadata = {
	title: {
		template: `%s / Tamara Kikalishvili | Web Developer Portfolio `,
		default: `Tamara Kikalishvili | Web Developer Portfolio`,
	},
	description:
		'Tamara Kikalishvili is a Frontend Web Developer skilled in Next.js, React, and Tailwind CSS. View modern, responsive, and user-friendly web projects.',
};

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '600', '700'],
	variable: '--font-poppins',
});

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={poppins.variable}>
			<body>
				<header className='pb-24'>
					<Header />
				</header>
				<main className='py-16 px-4 sm:py-36 md:py-24 flex items-center justify-center min-h-screen'>
					{children}
				</main>
			</body>
		</html>
	);
}
