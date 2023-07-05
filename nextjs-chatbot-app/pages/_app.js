import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import { VercelAIProvider } from '../lib/vercelAI'
import { OpenAIProvider } from '../lib/openAI'
import { LangChainProvider } from '../lib/langChain'
import { ShadcnUIProvider } from '../lib/shadcnUI'
import { RadixUIProvider } from '../lib/radixUI'
import { PhosphorIconsProvider } from '../lib/phosphorIcons'
import { VercelKVProvider } from '../lib/vercelKV'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <VercelAIProvider>
        <OpenAIProvider>
          <LangChainProvider>
            <ShadcnUIProvider>
              <RadixUIProvider>
                <PhosphorIconsProvider>
                  <VercelKVProvider>
                    <Component {...pageProps} />
                  </VercelKVProvider>
                </PhosphorIconsProvider>
              </RadixUIProvider>
            </ShadcnUIProvider>
          </LangChainProvider>
        </OpenAIProvider>
      </VercelAIProvider>
    </Provider>
  )
}

export default MyApp