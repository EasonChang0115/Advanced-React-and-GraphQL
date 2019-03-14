import App, { Container } from 'next/app';
import Pages from '../components/Pages';

class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<container>
				<Pages>
					<Component />
				</Pages>
			</container>
		);
	}
}

export default MyApp;