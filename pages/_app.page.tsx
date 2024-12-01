// 'use client';
import { useMemo, type JSXElementConstructor, type VoidFunctionComponent } from 'react';

import '@/styles/tailwind.css';
import '@/styles/index.scss';

import Head from 'next/head';
import { ClassComponent, IComponentClass, noOp, THooksBase } from '@cleanweb/react';
import { TStateData } from '@cleanweb/react/state';


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

class AppBaseClass extends ClassComponent<AppProps, {count: number}, object> {};
interface IAppBaseClass extends ComponentClassIT<AppBaseClass> {}

class App extends AppBaseClass implements IAppBaseClass {
	static getInitialState = () => ({ count: 0 });

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

	template = () => <>
		<Head>
			<link rel="icon" href="/favicon.svg" />
			<meta name="theme-color" content="#F06900" />
		</Head>

		<h1>COUNT: {this.state.count}</h1>
		<this.PageComponent />
	</>;

	static UI = this.FC();
	static RC: NextJsPage = App.FC();
	static readonly Component = this.RC;
}


App.Component.getInitialProps = async (context: any) => {
	const { res, err: error, asPath, pathname } = context;
	const statusCode = res?.statusCode || error?.statusCode || error?.status || 500;

	return {};
};

export default App.Component;





type ComponentClassIT<
		TComponent extends ClassComponent<object, object, THooksBase>> = {
	useHooks$?: () => TComponent['hooks'];
	template?: () => React.JSX.Element | null;
} & TComponent;

type T<
	TProps extends object,
	TState extends TStateData,
	THooks extends THooksBase
> = typeof ClassComponent<TProps, TState, THooks>;

interface ComponentClass<
		TProps extends object,
		TState extends TStateData,
		THooks extends THooksBase> extends T<TProps, TState, THooks> {
	new (
		...params: ConstructorParameters<T<TProps, TState, THooks>>
	): ComponentClassIT<ClassComponent<TProps, TState, THooks>>;
}

type Extractor = <
		TComponent extends ComponentClass<object, object, THooksBase>>(
	this: NonNullable<typeof _Component>,
	_Component?: TComponent & IComponentClass<InstanceType<TComponent>>
) => VoidFunctionComponent<InstanceType<TComponent>['props']>;


