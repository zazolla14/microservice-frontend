import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState(() => "")
  function submit() {
    window.open(`${process.env.NEXT_PUBLIC_MEMBER_URL}/register?email=${email}`)
  }
  return (
    <div className="bg-indigo-900 mt-24 py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-1/6">
            <h6 className="text-white text-lg font-semibold">Company</h6>
            <ul className="mt-4">
              <li className=" mt-2">
                <Link href="/#">
                  <a className="text-gray-400 hover:text-teal-500 hover:underline tracking-wider">
                    API Developer
                  </a>
                </Link>
              </li>
              <li className=" mt-2">
                <Link href="/#">
                  <a className="text-gray-400 hover:text-teal-500 hover:underline tracking-wider">
                    Career
                  </a>
                </Link>
              </li>
              <li className=" mt-2">
                <Link href="/#">
                  <a className="text-gray-400 hover:text-teal-500 hover:underline tracking-wider">
                    Our Story
                  </a>
                </Link>
              </li>
              <li className=" mt-2">
                <Link href="/#">
                  <a className="text-gray-400 hover:text-teal-500 hover:underline tracking-wider">
                    New Soon
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/6">
            <h6 className="text-white text-lg font-semibold">Student</h6>
            <ul className="mt-4">
              <li className=" mt-2">
                <Link href="/#">
                  <a className="text-gray-400 hover:text-teal-500 hover:underline tracking-wider">
                    Get Scholarship
                  </a>
                </Link>
              </li>
              <li className=" mt-2">
                <Link href="/#">
                  <a className="text-gray-400 hover:text-teal-500 hover:underline tracking-wider">
                    Our Pathskills
                  </a>
                </Link>
              </li>
              <li className=" mt-2">
                <Link href="/#">
                  <a className="text-gray-400 hover:text-teal-500 hover:underline tracking-wider">
                    All Features
                  </a>
                </Link>
              </li>
              <li className=" mt-2">
                <Link href="/#">
                  <a className="text-gray-400 hover:text-teal-500 hover:underline tracking-wider">
                    Refund Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/6">
            <h6 className="text-white text-lg font-semibold">Touch Us</h6>
            <div className="mt-2">
              <p className="text-gray-400 leading-8">
                Micro Centre <br />
                Alleysi Block X No. 12 <br />
                Jakarta Selatan, Indonesia <br />
                +21 2020 5555
              </p>
            </div>
          </div>
          <div className="w-2/6">
            <h6 className="text-white text-lg font-semibold">Promotions</h6>
            <p className="text-gray-400 mt-2 mb-4">
              Submit your email for new updates
            </p>
            <form onSubmit={submit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Your Email Address"
                className="bg-white text-gray-100 focus:outline-none rounded-sm font-medium px-6 py-3"
              />
              <button className="bg-gradient-to-br from-orange-600 to-orange-500 text-white hover:text-gray-100 font-medium  focus:outline-none transition-all duration-200 rounded-sm px-6 py-3">
                Register Now
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-500 text-center pt-8 mt-8">
          <p className="text-gray-300">
            2020 Copyright Micro by BuildWith Angga. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}
