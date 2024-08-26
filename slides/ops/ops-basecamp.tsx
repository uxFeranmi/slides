import Slide, { helperClassName } from "@/components/slide";

const OpsBasecamp = () => (
	<Slide className={`${helperClassName}`}
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Basecamp Helps Us Meet These Needs</h1>

		<img
			src="/basecamp/docs-and-files-thumbnail.webp"
			className="w-auto max-h-[75%]"
			alt=""
		/>
	</Slide>
);

export default OpsBasecamp;
