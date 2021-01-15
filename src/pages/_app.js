import Router from "next/router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "../../styles/globals.css"

NProgress.configure({}) //showSpinner: false
Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  )
}

export default MyApp
