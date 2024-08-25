import type { ReactNode } from "react";

type TProps = {
	children: ReactNode,
	className?: string,
	style?: Record<string, string>,
}

const Slide = ({ children, className, style }: TProps) => {
	return (
		<section className={`aspect-[1270/720] grow max-h-full max-w-full ${className}`}
				style={style}>
			{children}
		</section>
	);
};

export default Slide;
