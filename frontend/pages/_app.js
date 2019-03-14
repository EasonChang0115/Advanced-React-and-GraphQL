import App, { Container } from 'next/app';
import Pages from '../components/Pages';

class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<container>
				<p>我是layout 任何page都會套用</p>
				<Pages>
					<Component />
				</Pages>
			</container>
		);
	}
}

export default MyApp;