import { IoIosInformationCircleOutline } from 'react-icons/io';

export default function ProductNotice() {
	return (
		<section className="container mx-auto px-3 sm:px-4 py-4">
			<div className="flex flex-col justify-start items-start p-4 md:p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm space-y-6">
				<div className="flex flex-col sm:flex-row justify-start items-start gap-4 w-full pb-6 border-b border-neutral-100">
					<div className="relative pt-1 flex-shrink-0">
						<div className="flex p-2.5 rounded-full bg-amber-50 text-amber-600">
							<IoIosInformationCircleOutline className="text-xl" />
						</div>
					</div>
					<div className="flex gap-2 grow flex-col">
						<h5 className="text-xs sm:text-sm font-bold text-neutral-900">
							شرایط مهلت تست گوشی دست دوم
						</h5>
						<p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
							⚠️ گوشی‌های دست دوم دارای{' '}
							<strong className="text-neutral-800">
								۷ روز مهلت تست
							</strong>{' '}
							هستند. این مهلت فقط شامل{' '}
							<strong className="text-neutral-800">
								ایرادات فنی و عملکردی دستگاه
							</strong>{' '}
							می‌شود. در صورت وارد شدن{' '}
							<strong className="text-neutral-800">
								هرگونه ضربه یا آسیب فیزیکی
							</strong>{' '}
							مانند شکستگی یا ترک LCD، آب‌خوردگی و سایر آسیب‌های
							ناشی از استفاده، مهلت تست و ضمانت دستگاه به‌طور کامل
							لغو خواهد شد.
							<br className="my-2" />
							لطفاً هنگام تحویل، دستگاه را با دقت بررسی و تست
							نمایید.
						</p>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row justify-start items-start gap-4 w-full">
					<div className="relative pt-1 flex-shrink-0">
						<div className="flex p-2.5 rounded-full bg-sky-50 text-sky-600">
							<IoIosInformationCircleOutline className="text-xl" />
						</div>
					</div>
					<div className="flex gap-2 grow flex-col">
						<h5 className="text-xs sm:text-sm font-bold text-neutral-900">
							هشدار سامانه همتا:
						</h5>
						<p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
							در صورت انجام معامله، از فروشنده کد فعال‌سازی را
							گرفته و حتماً در حضور ایشان، دستگاه را از طریق کد
							دستوری{' '}
							<span className="font-mono bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-800">
								#7777*
							</span>
							، برای سیم‌کارت خود فعال‌سازی نمایید.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
