import { ClassComponent } from "@cleanweb/react";
import type { JSXElementConstructor, ReactNode } from "react";
import React from "react";

type TProps = {
	children?: ReactNode,
	slides?: JSXElementConstructor<any>[],
	next?: /* string |  */VoidFunction,
	previous?: /* string |  */VoidFunction,
	RootTag?: keyof JSX.IntrinsicElements,
}

type TState = {
	slideIndex: number,
};

class Presentation extends ClassComponent<TProps, TState> {
	static getInitialState = (props) => ({
		slideIndex: 0,
	});

	next = () => {
		const { slides } = this.props;

		if (slides) {
			const newSlideIndex = this.state.slideIndex === slides.length - 1
				? 0 : this.state.slideIndex + 1;

			this.state.slideIndex = newSlideIndex;
		}

		this.props.next?.();
	};


	previous = () => {
		const { slides } = this.props;

		if (slides) {
			const newSlideIndex = this.state.slideIndex === 0
				? slides.length - 1
				: this.state.slideIndex - 1;

			this.state.putMany({ slideIndex: newSlideIndex });
		}

		this.props.previous?.();
	};

	Render = () => {
		const { children = null, slides, RootTag = 'main' } = this.props;
		const { slideIndex } = this.state;

		const Slide = slides?.[slideIndex] ?? (() => <>{children}</>);

		return (
			<RootTag className="flex items-center justify-center w-[100vw] h-[100vh] px-[5vw] py-[5vh] py-[5svh] text-pink-400">
				<aside>
					{/* Minimap sidebar. (Or top bar in portrait) */}
				</aside>

				<Slide />

				<button className="bg-slate-500 text-gray-100 rounded-lg py-3 px-5 absolute landscape:left-5 portrait:top-5"
						onClick={this.previous}>
					Prev
				</button>
				<button className="bg-slate-500 text-gray-200 rounded-lg py-3 px-5 absolute landscape:right-5 portrait:bottom-5"
						onClick={this.next}>
					Next
				</button>
				{/* Next and Previous buttons */}
			</RootTag>
		);
	}
}

export default Presentation.FC();
