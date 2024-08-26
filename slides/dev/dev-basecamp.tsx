import Slide, { helperClassName } from "@/components/slide";

const DevBasecamp = () => (
	<Slide className={`${helperClassName}`} c2="gap-2"
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Dev teams manage tasks and communicate better with Basecamp</h1>

		<p>
			<small>
				Basecamp has a laundry list of tools to give dev teams perfect
				visibility into ongoing and updcoming tasks.
			</small>
		</p>

		<img
			src="/basecamp/lineup-thumbnail.webp"
			className="w-auto max-h-[75%]"
			alt=""
		/>
	</Slide>
);

export default DevBasecamp;
