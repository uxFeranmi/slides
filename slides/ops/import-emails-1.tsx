import Slide from "@/components/slide";

const ImportEmail1 = () => (
	<Slide className="ops-needs bg-img-var flex flex-col items-center justify-center px-4 gap-8"
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Potentially Useful: Import Emails</h1>

		<ul className="max-w-[80%]">
			<li>
				Keep team conversations in one place by bringing relevant emails into Basecamp.
			</li>
			<li>
				Discuss with your team and reply to the original sender
			</li>
		</ul>
	</Slide>
);

export default ImportEmail1;
