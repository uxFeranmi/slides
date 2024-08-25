import Slide from "@/components/slide";

const ActionItems1 = () => (
	<Slide className="ops-needs bg-img-var flex flex-col items-center justify-center px-4 gap-8"
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
