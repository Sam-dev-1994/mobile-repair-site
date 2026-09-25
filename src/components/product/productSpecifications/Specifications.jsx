export default function ProductSpecifications({ product }) {
	if (!product) return null;

	return (
		<section className="w-full mx-auto px-2   sm:px-4 py-4 lg:p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm">
			<h4 className="font-semibold lg:text-lg border-b border-neutral-200 pb-3 text-neutral-800">
				جزئیات محصول:
			</h4>

			<div className="flex flex-col md:flex-row py-3 md:py-5 gap-4">
				<p className="w-full md:w-1/3 text-neutral-800 font-medium shrink-0 pt-1">
					مشخصات کلی
				</p>

				<table className="grow text-right w-full border-collapse border border-neutral-200 rounded-lg overflow-hidden">
					<tbody>
						{product.dimensions && (
							<tr className="text-xs sm:text-sm border-b border-neutral-200 last:border-none">
								<th className="w-[120px] md:w-[180px] text-right py-2.5 px-3 bg-neutral-50 align-top border-l border-neutral-200 text-neutral-700 font-medium">
									ابعاد
								</th>
								<td className="py-2.5 px-3 align-top w-full text-neutral-600">
									<span dir="ltr" className="inline-block">
										{product.dimensions.depth} {' x '}{' '}
										{product.dimensions.width} {' x '}{' '}
										{product.dimensions.height}
									</span>{' '}
									میلی‌متر
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</section>
	);
}
