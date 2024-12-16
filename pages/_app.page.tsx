// 'use client';
import type { JSXElementConstructor, VoidFunctionComponent } from 'react';
import type { THooksBase } from '@cleanweb/react';
import type { IClassComponent } from '@cleanweb/react/class/types/class/instance';
import type { TStateData } from '@cleanweb/react/state';

import '@/styles/tailwind.css';
import '@/styles/index.scss';

import { useMemo } from 'react';
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

class AppCC extends ClassComponent<AppProps, {count: number}, {a: string}> {};
interface IAppCC extends IClassComponent<AppCC> {}

class App extends AppCC implements IClassComponent<App> {
	// static getInitialState = () => ({ count: 0 });

	onMount = () => {
		setTimeout(() => {
			this.state.count++;
		}, 2000);

		return noOp;
	};

	PageComponent = () => {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps?.toPage} />;
	};

	useHooks = () => {
		return {a: ''}
	};

	template = () => <>
		<Head>
			<link rel="icon" href="/favicon.svg" />
			<meta name="theme-color" content="#F06900" />
		</Head>

		<h1>COUNT: {this.state.count}</h1>
		<this.PageComponent />
	</>;

	static readonly RC: NextJsPage = this.FC();
}


App.RC.getInitialProps = async (context: any) => {
	const { res, err: error, asPath, pathname } = context;
	const statusCode = res?.statusCode || error?.statusCode || error?.status || 500;

	return {};
};

export default App.RC;

