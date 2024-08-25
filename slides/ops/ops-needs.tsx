import Slide from "@/components/slide";

const OpsNeeds = () => (
	<Slide className="ops-needs bg-img-var flex flex-col items-center justify-center"
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

		{/* <h2>Potentially Useful</h2>
		<ul>
			<li>Importing Emails</li>
		</ul> */}
	</Slide>
);

export default OpsNeeds;
