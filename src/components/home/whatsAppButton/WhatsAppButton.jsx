import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router';

export default function WhatsAppButton() {
	const phoneNumber = '989121234567';
	const message = 'سلام، من از طریق وب‌سایت با شما ارتباط برقرار می‌کنم.';

	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	return (
		<Link
			to={whatsappUrl}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="ارتباط با واتساپ"
			className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110 cursor-pointer group"
		>
			<FaWhatsapp className="text-2xl sm:text-3xl" />

			<span className="absolute right-full mr-3 hidden group-hover:flex items-center px-3 py-1.5 bg-neutral-900 text-white text-xs rounded-xl shadow-md whitespace-nowrap transition-all">
				پشتیبانی واتساپ
			</span>
		</Link>
	);
}
