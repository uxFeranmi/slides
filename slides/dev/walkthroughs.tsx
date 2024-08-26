import Slide, { helperClassName } from "@/components/slide";

const DevWalkthroughs = () => (
	<Slide className={`${helperClassName}`} c2="max-w-full"
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1 className="mb-4">
			Watch the Dev task management Walkthroughs
		</h1>
		<p className="mb-4">
			<small>Watch in fullscreen for better visibility</small>
		</p>

		<section className="flex-center-scrollable w-full h-[75%] gap-5">
			<figure className="w-auto h-full flex flex-col gap-4">
				<iframe src="https://www.loom.com/embed/a7dfa144771c4506aeaef4fcc259ca2a?sid=84439016-d1ac-45d9-ae2c-26d2ad5b4395"
					frameBorder="0"
					className="grow w-auto"
					allowFullScreen>
				</iframe>
				<figcaption className="text-center">
					Tracking tasks and due dates
				</figcaption>
			</figure>
			<figure className="w-auto h-full flex flex-col gap-4">
				<iframe src="https://www.loom.com/embed/e74adb01838d407bbcbf4c459f30bf28?sid=8298aaf7-32f6-4553-b988-64850d366728"
					frameBorder="0"
					className="grow w-auto"
					allowFullScreen>
				</iframe>
				<figcaption className="text-center">
					Meetingless progress updates and more
				</figcaption>
			</figure>
		</section>
	</Slide>
);

export default DevWalkthroughs;
