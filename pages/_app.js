import { Amplify } from 'aws-amplify';
import awsmobile from '../src/aws-exports';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import Layout from '../src/layout/Layout';

Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyAuthenticator>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AmplifyAuthenticator>
  );
}

export default MyApp
