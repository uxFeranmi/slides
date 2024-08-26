import Link from 'next/link';

import Presentation from '@/components/presentation';
import Slide, { helperClassName } from "@/components/slide";

import DevNeeds from '@/slides/dev/dev-needs';
import TechTalks from '@/slides/dev/tech-talks';
import DevBasecamp from '@/slides/dev/dev-basecamp';
import DevWalkthroughs from '@/slides/dev/walkthroughs';

import OpsNeeds from '@/slides/ops/ops-needs';
import OpsBasecamp from '@/slides/ops/ops-basecamp';
import Docs from '@/slides/ops/docs';
import ActionItems1 from '@/slides/ops/action-items-1';
import ActionItems2 from '@/slides/ops/action-items-2';
import Escalation from '@/slides/ops/escalate';
import ImportEmail1 from '@/slides/ops/import-emails-1';
import ImportEmail2 from '@/slides/ops/import-emails-2';
import OpsWalkthroughs from '@/slides/ops/walkthroughs';


const Links = () => (
	<Slide className={`${helperClassName}`} c2="gap-2"
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Hear from the Basecamp devs</h1>

		<p className="text-blue-500">
			<Link href="https://basecamp.com/features">
				See all basecamp features
			</Link>
		</p>
		<p className="text-blue-500">
			<Link href="https://basecamp.com/guides/how-we-communicate">
				More on the communication philosophy
				behind Basecamp's design
			</Link>
			<br />
			<em className="text-gray-600">
				You should defintely read this one 👆🏼.
			</em>
		</p>
	</Slide>
);


const slides = [
	OpsNeeds, OpsBasecamp, Docs, ActionItems1, ActionItems2,
	Escalation, ImportEmail1, ImportEmail2,
	OpsWalkthroughs,

	DevNeeds, DevBasecamp, TechTalks, DevWalkthroughs,
	Links
];

export default function Home() {
	return (
		<Presentation /* setSlideIndex */ slides={slides} />
	);
};
