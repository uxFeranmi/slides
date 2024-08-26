import Slide, { helperClassName } from "@/components/slide";

const OpsDocs = () => (
	<Slide className={`${helperClassName}`}
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Curated Documentation</h1>

		<ul className="max-w-[80%] flex flex-col gap-4">
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
	</Slide>
);

export default OpsDocs;
