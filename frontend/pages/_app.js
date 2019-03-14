import App, { Container } from 'next/app';

class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<container>
				<p>我是layout 任何page都會套用</p>
				<Component />
			</container>
		);
	}
}

export default MyApp;