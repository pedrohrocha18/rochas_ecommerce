import MainContainer from '@/components/MainContainer'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Redux
import { Provider } from 'react-redux'
import store from '../redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </Provider>
  )
}
