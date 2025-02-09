import '@/app/_styles/globals.css';
import { Poppins } from 'next/font/google';
import Header from './_components/header/Header';

export const metadata = {
	title: `Tamara's Portfolio`,
};

const poppins = Poppins({
	subsets: ['latin'],
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
