import { NavLink } from 'react-router';

export default function NavbarMenu() {
	return (
		<div className="hidden sm:block grow ">
			<ul className="flex gap-5 justify-start items-center pr-5">
				<li>
					<NavLink
						to="/"
						className={`transition-opacity duration-300 hover:text-brand-secondary  navbar-link`}
					>
						خانه
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/shop"
						className="transition-opacity duration-300 hover:text-brand-secondary navbar-link"
					>
						فروشگاه
					</NavLink>
				</li>
				{/*<li>*/}
				{/*	<NavLink*/}
				{/*		to="/#about-us"*/}
				{/*		className={`transition-opacity duration-300 hover:text-brand-primary navbar-link`}*/}
				{/*	>*/}
				{/*		درباره ما*/}
				{/*	</NavLink>*/}
				{/*</li>*/}
			</ul>
		</div>
	);
}
