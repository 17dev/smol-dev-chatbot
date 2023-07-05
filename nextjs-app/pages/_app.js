```javascript
import '../styles/index.css';
import { Provider } from 'next-auth/client';
import { VercelProvider } from '../utils/vercel.js';
import { OpenAIProvider } from '../utils/openai.js';
import { LangChainProvider } from '../utils/langchain.js';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <VercelProvider>
        <OpenAIProvider>
          <LangChainProvider>
            <Component {...pageProps} />
          </LangChainProvider>
        </OpenAIProvider>
      </VercelProvider>
    </Provider>
  );
}

export default MyApp;
```