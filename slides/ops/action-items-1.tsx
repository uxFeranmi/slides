import Slide, { helperClassName } from "@/components/slide";

const ActionItems1 = () => (
	<Slide className={`${helperClassName}`}
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Managing Action Items</h1>

		<img
			src="/basecamp/action-items.png"
			className="w-auto max-h-[75%]"
			alt=""
		/>
	</Slide>
);

export default ActionItems1;
