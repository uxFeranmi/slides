import Presentation from '@/components/presentation';
import DevNeeds from '@/slides/dev/dev-needs';

import OpsNeeds from '@/slides/ops/ops-needs';
import OpsBasecamp from '@/slides/ops/ops-basecamp';
import Docs from '@/slides/ops/docs';
import ActionItems1 from '@/slides/ops/action-items-1';
import ActionItems2 from '@/slides/ops/action-items-2';
import Escalation from '@/slides/ops/escalate';
import ImportEmail1 from '@/slides/ops/import-emails-1';
import ImportEmail2 from '@/slides/ops/import-emails-2';

const slides = [
	OpsNeeds, OpsBasecamp, Docs, ActionItems1, ActionItems2,
	Escalation, /* ImportEmail1, ImportEmail2, */

	DevNeeds,
];

export default function Home() {
	return (
		<Presentation /* setSlideIndex */ slides={slides} />
	);
};
