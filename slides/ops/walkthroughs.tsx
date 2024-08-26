import Slide, { helperClassName } from "@/components/slide";

const OpsWalkthroughs = () => (
	<Slide className={`${helperClassName}`} c2="max-w-full"
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1 className="mb-4">
			Watch the Ops Walkthroughs
		</h1>
		<p className="mb-4">
			<small>Watch in fullscreen for better visibility</small>
		</p>

		<section className="flex-center-scrollable w-full h-[75%] gap-5">
			<figure className="w-auto h-full flex flex-col gap-4">
				<iframe src="https://www.loom.com/embed/57c49ea0226248ddaf7877603b6aa9d2?sid=94f0aeca-6850-4240-b952-4d99206d4b09"
					frameBorder="0"
					className="grow w-auto"
					allowFullScreen>
				</iframe>
				<figcaption className="text-center">
					Task Templates
				</figcaption>
			</figure>
			<figure className="w-auto h-full flex flex-col gap-4">
				<iframe src="https://www.loom.com/embed/1541ae5219964fdda82ef94974f0d75d"
					frameBorder="0"
					className="grow w-auto"
					allowFullScreen>
				</iframe>
				<figcaption className="text-center">
					Curate Documentation
				</figcaption>
			</figure>
			<figure className="w-auto h-full flex flex-col gap-4">
				<iframe src="https://www.loom.com/embed/0ec7af273f3546419b2f48ca2e75a354?sid=13715b76-8575-4db5-8926-e6bdd172da6c"
					frameBorder="0"
					className="grow w-auto"
					allowFullScreen>
				</iframe>
				<figcaption className="text-center">
					Escalate Seamlessly
				</figcaption>
			</figure>
		</section>
	</Slide>
);

export default OpsWalkthroughs;
