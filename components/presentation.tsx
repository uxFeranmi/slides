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

class Presentation extends React.Component<TProps, TState> {
	constructor(props) {
		super(props);

		this.state = {
			slideIndex: 0,
		};
	}

	next = () => {
		const { slides } = this.props;

		if (slides) {
			const newSlideIndex = this.state.slideIndex === slides.length - 1
				? 0 : this.state.slideIndex + 1;

			this.setState({ slideIndex: newSlideIndex });
		}

		this.props.next?.();
	};


	previous = () => {
		const { slides } = this.props;

		if (slides) {
			const newSlideIndex = this.state.slideIndex === 0
				? slides.length - 1
				: this.state.slideIndex - 1;

			this.setState({ slideIndex: newSlideIndex });
		}

		this.props.previous?.();
	};

	render(): ReactNode {
		const { children = null, slides, RootTag = 'main' } = this.props;
		const { slideIndex } = this.state;

		const Slide = slides?.[slideIndex] || (() => <>{children}</>);

		return (
			<RootTag className="flex items-center justify-center w-full h-full px-[5vw] py-[5vh] py-[5svh] text-pink-400">
				<aside>
					{/* Minimap sidebar. (Or top bar in portrait) */}
				</aside>

				<Slide />

				<button onClick={this.previous}>
					Previous
				</button>
				<button onClick={this.next}>
					Next
				</button>
				{/* Next and Previous buttons */}
			</RootTag>
		);
	}
}

export default Presentation;
