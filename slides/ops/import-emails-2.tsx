import Slide, { helperClassName } from "@/components/slide";

const ImportEmail1 = () => (
	<Slide className={`${helperClassName}`}
			style={{
				'--bg-img': "url('/backgrounds/wheel-guy.svg')",
			}}>
		<h1>Potentially Useful: Import Emails</h1>

		<img
			src="/basecamp/email-forwards.png"
			className="w-auto max-h-[75%]"
			alt=""
		/>
	</Slide>
);

export default ImportEmail1;
