import { useState } from "react"

export default function Hero() {
  const [email, setEmail] = useState(() => "")
  function submit() {
    window.open(`${process.env.NEXT_PUBLIC_MEMBER_URL}/register?email=${email}`)
  }
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="w-1/2">
        <h1 className="text-white text-6xl font-semibold mb-8">
          <span className="text-teal-400">The New </span> Way to Achieve Good{" "}
          <span className="text-teal-400">Skills</span>
        </h1>
        <p className="text-white text-xl font-semibold tracking-wide mb-14">
          We provide tons of pathskill that you <br /> can choose and focus on
        </p>
        <form onSubmit={submit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Your Email Address"
            className="bg-white text-gray-100 focus:outline-none w-1/2 font-medium rounded-sm px-6 py-3"
          />
          <button className="bg-gradient-to-br from-orange-600 to-orange-500 text-white hover:text-gray-100 font-medium  focus:outline-none transition-all duration-200 rounded-sm px-6 py-3 ml-1">
            Register Now
          </button>
        </form>
      </div>
      <div className="w-1/2 justify-end pt-24 pr-16 hidden md:flex">
        <div className="relative" style={{ width: 369, height: 444 }}>
          <div
            className="absolute border-teal-500 border-2 -mt-12 -mr-6 right-0"
            style={{ width: 324, height: 374 }}
          ></div>
          <div className="absolute h-full w-full -mb-8 -ml-8">
            <img
              className="rounded-sm"
              src="/images/img-hero-1.png"
              alt="Hero Image"
              style={{ height: 425 }}
            />
          </div>
          <div
            className="absolute z-10 bg-white shadow-xl rounded-sm px-4 py-3 bottom-0 mb-24"
            style={{ transform: "translateX(-80%)", width: 350 }}
          >
            <p className="text-gray-800 text-xl font-semibold mb-2">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <span className="text-gray-500 text-lg font-semibold tracking-wide">
              Dety Mei, Backend Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
