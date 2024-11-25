import type { JSXElementConstructor } from 'react';

import '@/styles/tailwind.css';
import '@/styles/index.scss';

import { useMemo } from 'react';
import Head from 'next/head';
import { useInstance } from '@cleanweb/react';


interface AppComponentProps {
	toPage: any,
};

export interface PageComponentProps {
}


type AppProps = {
	// router: NextRouter,
	pageProps: AppComponentProps,
	Component: JSXElementConstructor<PageComponentProps & AppComponentProps['toPage']>,
}

const App = (props: AppProps) => {
	const { pageProps: appComponentProps } = props;

	useInstance()

	const pageComponentProps = (() => {
		const dependencies = {};

		// eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
		return useMemo(() => dependencies, Object.values(dependencies));
	})();

	const pageComponentNode = useMemo(() => {
		return <props.Component {...pageComponentProps} {...appComponentProps?.toPage} />;

		// Eslint fails to recognise "props.Component" as the more appropriate dependency even though it's more specific. It expects "props", a limitation in the rule's implementation.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.Component, pageComponentProps, appComponentProps?.toPage]);

	return <>
		<Head>
			<link rel="icon" href="/favicon.svg" />
			<meta name="theme-color" content="#F06900" />
		</Head>

		{pageComponentNode}
	</>;
};

App.getInitialProps = async (context: any) => {
	const { res, err: error, asPath, pathname } = context;
	const statusCode = res?.statusCode || error?.statusCode || error?.status || 500;


	return {};
};

export default App;
