import App, { Container } from 'next/app';
import Pages from '../components/Pages';
import { ApolloProvider } from 'react-apollo';
import widthData from '../lib/withData';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleUp, faTags, faUndoAlt, faRedoAlt, faImage, faLink, faCode, faQuoteLeft, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDoubleUp, faTags, faUndoAlt, faRedoAlt, faImage, faLink, faCode, faQuoteLeft, faCloudUploadAlt);

class MyApp extends App {
	// Next 對 React 的 props生命週期 傳入做了控制
	// 主要用於 server 端的數據會序列話傳到 client端的props中 寫入HTML原碼裡，而client端就可以用傳過來的數據做組件的變化。
	// 當頁面是user通過連結跳過去的，而不是輸入網址或刷新。這時候是純client行為，沒有發HTTP請求。就不會觸法getInitialProps();
	// 若當user是通過連結跳到這個頁面，getInitialProps會起作用，會自動讀取HTML裡NEXT設計的window.__NEXT_DATA__.props裡的props作為組件的props。
	static async getInitialProps({ Component, ctx }) {
		// Component: 傳入的Pages component
		// ctx: next/apollo 路由資料
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		// this exposes the query to the user
		pageProps.query = ctx.query;
		return { pageProps };
	}
	render() {
		const { Component, apollo, pageProps } = this.props;
		return (
			<Container>
				<ApolloProvider client={apollo}> 
					<Pages>
						<Component {...pageProps}/>
					</Pages>
				</ApolloProvider>
			</Container>
		);
	}
}

export default widthData(MyApp);