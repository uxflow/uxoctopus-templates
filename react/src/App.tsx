import '@uxoctopus/icons';
import '@uxoctopus/styles';

import '~/styles/main.scss';

import { LazyMotion, domAnimation } from 'framer-motion';

const App: React.FC = () => (
  <LazyMotion features={domAnimation}>
    <h1>App.</h1>
  </LazyMotion>
);

export default App;
