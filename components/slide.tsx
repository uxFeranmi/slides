import type { ReactNode } from "react";

type TProps = {
	children: ReactNode,
	className?: string,
	c2?: string,
	style?: Record<string, string>,
}

const Slide = ({ children, className, style, c2 }: TProps) => {
	return (
		<section className={`bg-gray-200 text-gray-700 rounded-lg aspect-[1270/720] grow portrait:max-h-[calc(90vw/1.764)] portrait:w-full landscape:max-w-[calc(1.764*70vh)] landscape:h-full shadow-xl ${className}`}
				style={style}>
			<div className={`flex-center-scrollable flex-col items-start justify-center gap-8 max-w-[60%] ${c2}`}> {/* Temp container */}
				{children}
			</div>
		</section>
	);
};

// "ops-needs bg-img-var flex flex-col items-center justify-center"
export const helperClassName = 'bg-img-var bg-[center_top_0rem] flex justify-center before:grow-0 after:grow-[5] px-10';

export default Slide;
