// 'use client';
import { useMemo, type JSXElementConstructor, type VoidFunctionComponent } from 'react';

import '@/styles/tailwind.css';
import '@/styles/index.scss';

import Head from 'next/head';
import { ClassComponent, noOp } from '@cleanweb/react';


export interface AppComponentProps {
	toPage: any,
};

export interface PageComponentProps {
}


type AppProps = {
	// router: NextRouter,
	pageProps: AppComponentProps,
	Component: JSXElementConstructor<PageComponentProps & AppComponentProps['toPage']>,
}

interface NextJsPage extends VoidFunctionComponent<AppProps> {
	getInitialProps?: (params: any) => object;
}

class AppComponent extends ClassComponent<AppProps, {count: number}> {
	static getInitialState = () => ({ count: 0 });

	onMount = () => {
		setTimeout(() => {
			this.state.count++;
		}, 2000);

		return noOp;
	};

	PageComponentNode = () => {
		return <this.props.Component {...this.props.pageProps?.toPage} />;
	};

	template = () => <>
		<Head>
			<link rel="icon" href="/favicon.svg" />
			<meta name="theme-color" content="#F06900" />
		</Head>

		<h1>COUNT: {this.state.count}</h1>
		<this.PageComponentNode />
	</>;
}

const App: NextJsPage = AppComponent.FC();

App.getInitialProps = async (context: any) => {
	const { res, err: error, asPath, pathname } = context;
	const statusCode = res?.statusCode || error?.statusCode || error?.status || 500;

	return {};
};

export default App;
