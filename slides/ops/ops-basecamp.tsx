import Slide from "@/components/slide";

const OpsBasecamp = () => (
	<Slide className="ops-needs bg-img-var flex flex-col items-center justify-center px-4 gap-8"
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
