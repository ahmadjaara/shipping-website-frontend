import Layout from '../comps/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { UserIdProvider } from '../context/UseridState';
import { UserIdValueProvider } from '../context/Useridvalue';
function MyApp({ Component, pageProps }) {
  return (
  <UserIdValueProvider>
  <UserIdProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </UserIdProvider>
  </UserIdValueProvider>
  )
}

export default MyApp
