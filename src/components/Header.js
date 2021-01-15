import Logo from "public/images/logo.svg"
import Link from "next/link"
import { useRouter } from "next/router"
import propTypes from "prop-types"

export default function Header({ onLight }) {
  const linkColor = onLight ? "text-gray-900" : "text-white"
  const router = useRouter()
  // console.log(router)
  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBER_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBER_URL}/login`
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Sign Up" : "Sign In"

  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Logo className="on-dark" />
      </div>
      <ul className="flex">
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-300 text-base transition-all duration-200 text-lg px-6 py-3",
              ].join(" ")}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-300 text-base transition-all duration-200 text-lg px-6 py-3",
              ].join(" ")}
            >
              Pricing
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-300 text-base transition-all duration-200 text-lg px-6 py-3",
              ].join(" ")}
            >
              Features
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a
              className={[
                linkColor,
                "text-white hover:text-teal-300 text-base transition-all duration-200 text-lg px-6 py-3",
              ].join(" ")}
            >
              Story
            </a>
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noereferrer"
            href={linkCTA}
            className="bg-orange-600 hover:bg-orange-500 text-white transition-all duration-200 text-lg px-6 py-3 ml-6"
          >
            {textCTA}
          </a>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  onLight: propTypes.bool,
}
