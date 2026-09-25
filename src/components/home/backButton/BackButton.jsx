import { useNavigate } from 'react-router';

export default function BackButton(fallbackPath = '/') {
	const navigate = useNavigate();
	const handleBack = () => {
		if (window.history.state && window.history.state.idx > 0) {
			navigate(-1);
		} else {
			navigate(fallbackPath);
		}
	};
	return (
		<div className="relative w-full h-5">
			<button
				onClick={handleBack}
				className="text-[0.6rem] md:text-[0.8rem] text-gray-800 cursor-pointer transition duration-300 hover:text-brand-orange absolute left-3 top-1 "
			>
				بازگشت&nbsp;&#x2190;
			</button>
		</div>
	);
}
