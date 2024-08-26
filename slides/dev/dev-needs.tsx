import Slide, { helperClassName } from "@/components/slide";

const DevNeeds = () => (
	<Slide className={`${helperClassName}`}
			style={{
				'--bg-img': "url('backgrounds/wheel-guy.svg')",
			}}>
		<h1>Development Teams</h1>

		{/*

		MS todos, primarily a personally daily planner. Despite todo list sharing feature, can't be as robust as Basecamp's.
		How about ms lists? this disjointed smattering of apps makes it impossible to keep straight what goes where. Team engagement will be poor. We need a simple and straightforward integrated system.

		Still managing office licenses per user after paying for the 365 plan?

		Export from slack, link in basecamp docs & files area.
		*/}

		<h2>Needs</h2>
		<ul className=" flex flex-col gap-4">
			<li>
				Open platform for technical discussions
			</li>
			<li>
				Tasks tracking and visibility
			</li>
			<li>
				Self-directed daily updates
			</li>
			<li>
				Faster onboarding. Having to arrange 2+ hours for a technical onboarding call is inefficient.
				And often still fails to compensate for a lack of documentation, as I can attest.
			</li>
			<li>
				Bring in clients and partners as external collaborators at no cost
			</li>
		</ul>
	</Slide>
);

export default DevNeeds;
