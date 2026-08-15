import { RiCloseLargeLine } from 'react-icons/ri';
import { Link } from 'react-router';

export default function NavbarMenuMobile({ ref }) {
	function handleClose() {
		ref.current.style.display = 'none';
	}
	return (
		<div
			ref={ref}
			id="mobile-menu"
			className="hidden absolute top-0 right-0 w-full"
		>
			<ul className="flex flex-col border pt-2 bg-brand-info border-none">
				<span
					className="p-3 absolute left-0 top-0 z-50 cursor-pointer"
					onClick={handleClose}
				>
					<RiCloseLargeLine />
				</span>
				<li className="hover:text-brand-primary transition duration-300">
					<Link to="/" className="inline-block py-4 px-2">
						خانه
					</Link>
				</li>
				<li className="hover:text-brand-primary transition duration-300">
					<a href="#" className="inline-block py-4 px-2">
						خدمات
					</a>
				</li>
				<li className="hover:text-brand-primary transition duration-300">
					<a href="#" className="inline-block py-4 px-2">
						درباره ما
					</a>
				</li>
				<li className="hover:text-brand-primary transition duration-300">
					<a href="#" className="inline-block py-4 px-2">
						تماس با ما
					</a>
				</li>
			</ul>
		</div>
	);
}
