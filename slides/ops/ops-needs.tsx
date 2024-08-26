import Slide, { helperClassName } from "@/components/slide";

const OpsNeeds = () => (
	<Slide className={`${helperClassName}`}
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Operations Teams</h1>

		<h2>Needs</h2>
		<ul>
			<li>
				Curating documentation
			</li>
			<li>
				Managing action items
			</li>
			<li>
				Escalating seamlessly.
			</li>
		</ul>
	</Slide>
);

export default OpsNeeds;
