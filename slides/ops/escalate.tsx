import Slide, { helperClassName } from "@/components/slide";

const Escalation = () => (
	<Slide className={`${helperClassName}`}
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Seamlessly Escalate Urgent Blockers</h1>

		<ul className="max-w-[80%] flex flex-col gap-4">
			<li>
				10x effieciency by cutting out miscommunications.
			</li>
			<li>
				WhatsApp? Phone call? DM? Do away with the confusion.
				Simply assign a task to someone and Basecamp will keep them informed for you.
			</li>
			<li>
				{/* Due dates */}
			</li>
		</ul>
	</Slide>
);

export default Escalation;
