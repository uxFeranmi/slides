import Slide from "@/components/slide";

const OpsDocs = () => (
	<Slide className="ops-needs bg-img-var flex flex-col items-center justify-center px-4 gap-8"
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Curated Documentation</h1>

		<ul className="max-w-[80%]">
			<li>
				Create well formatted documents and organize them into folders right in Basecamp
			</li>
			<li>
				Import external documents like Google Docs or Sheets into your folders
			</li>
			<li>
				Each project or team can create as many document repositories as they need, each with folders and subfolders
			</li>
			<li>
				Document repositories have great visibility on the team or project page, making it easy to find anything
			</li>
		</ul>
		{/* <iframe src="https://www.loom.com/embed/1541ae5219964fdda82ef94974f0d75d?sid=9c39294a-3961-4b8f-b715-f7ccf3fe10fb"
			className="aspect-[16/9] w-[50%]"
			// webkitallowfullscreen
			// mozallowfullscreen
			allowFullScreen
			frameBorder="0">
		</iframe> */}
	</Slide>
);

export default OpsDocs;
