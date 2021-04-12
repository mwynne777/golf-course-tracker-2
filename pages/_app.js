import { Amplify } from 'aws-amplify';
import awsmobile from '../src/aws-exports';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import '../styles/globals.css'

Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyAuthenticator>
      <Component {...pageProps} />
    </AmplifyAuthenticator>
  );
}

export default MyApp
