import Slide, { helperClassName } from "@/components/slide";

const TechTalks = () => (
	<Slide className={`${helperClassName} gap-5 overflow-auto`}
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Better Technical Discussions</h1>

		<p>
			Create multiple Message Boards for posts of different categories.
			Questions, quick tips, pitches: create spaces for different types of ideas and foster any environment
			that encourages frequent sharing of knowledge an ideas. This helps a budding development team grow together.
		</p>
		<p>
			Create and organize technical documentation right in Basecamp.
			Onboard new devs in as little as a 15 minutes minute.
			With specific components, repos, APIs, etc, documented within Basecamp, developer onboarding can be a largely
			self-service process.
		</p>
		<p>
			Have structured conversations in a format that encourages well-detailed posts
			which are useful for future reference, rather than
			ephemeral group chat messages with minimal detail and potentially increased back-and-forth.
		</p>
		<p>
			Cut down time wasted in meetings significantly with more effective asynchronous communications,
			including automated daily check-ins for status updates.
		</p>
		<p>
			Keep everyone accountable with open conversations. When conversations happen in posts and comments
			on Basecamp, it's easy to go back and see what was said. No more quibling over who said what when.
		</p>
		<p>
			Schedule meetings directly in basecamp when necessary.
			Because every now and then, it's necessary to hash things out in realtime.
			Generally you'd want summaries of technical meetings posted to Basecamp immediately after, to allow for future reference.
			Integrated with google calendar.
		</p>
	</Slide>
);

export default TechTalks;
