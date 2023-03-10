import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import RootLayout from 'components/Layout';

import '../styles/global.scss';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <RecoilRoot>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </RecoilRoot>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
