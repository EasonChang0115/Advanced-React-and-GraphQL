import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    // 當頁面發送請求時  可以再請求的內容加入的資訊 authMiddleware
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers
        // headers: {
        //   authorization: localStorage.getItem('token') || null,
        // }
      });
    },
  });
}

export default withApollo(createClient);
