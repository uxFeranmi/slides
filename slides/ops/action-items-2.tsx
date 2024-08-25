import Slide from "@/components/slide";

const ActionItems2 = () => (
	<Slide className="ops-needs bg-img-var flex flex-col items-center justify-center px-4 gap-8"
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Managing Action Items</h1>

		<ul className="max-w-[80%]">
			<li>
				Create tasks, assign one or more people, & set due dates.
				Never lose track of your todos.
			</li>
			<li>
				Discuss context and progress in the comments of each task.
				Basecamo keeps your conversations organized.
			</li>
			<li>
				Use to-do list templates to curate occassionally recurring tasks.
				Simply make a copy of the template each time.
			</li>
			<li>
				Create as many todo lists as you need, to keep tasks organized.
				Choose from a variety of ways to group them.
			</li>
		</ul>
	</Slide>
);

export default ActionItems2;
