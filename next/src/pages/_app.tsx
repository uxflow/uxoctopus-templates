import '@uxoctopus/icons';
import '@uxoctopus/styles';

import '~/styles/main.scss';

import { LazyMotion, domAnimation } from 'framer-motion';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <LazyMotion features={domAnimation}>
    <Component {...pageProps} />
  </LazyMotion>
);

export default App;
