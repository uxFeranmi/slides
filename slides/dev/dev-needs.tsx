import Slide from "@/components/slide";

const DevNeeds = () => (
	<Slide className="ops-needs bg-img-var flex flex-col items-center justify-center"
			style={{
				'--bg-img': "url('backgrounds/wheel-guy.svg')",
			}}>
		<h1>Development Teams</h1>

		<h2>Needs</h2>
		<ul>
			<li>
				Tasks tracking and visibility
			</li>
			<li>
				Self-directed daily updates
			</li>
			<li>
				Open platform for technical discussions
			</li>
		</ul>
	</Slide>
);

export default DevNeeds;
