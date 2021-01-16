import React, { useState } from "react"
import { CSSTransition } from "react-transition-group"

import ArrowDown from "public/images/details-course/icon-arrow-down.svg"

export default function Item({ name, id, child, active, toggle, children }) {
  // console.log(id, active, toggle)
  const [height, setHeight] = useState(() => 0)

  function cellHeight(event) {
    // console.log(event)
    setHeight(event.offsetHeight)
  }
  return (
    <div className="bg-white border border-gray-300 overflow-hidden">
      <div className="meta pl-4 py-2 relative flex justify-between items-center">
        <span className="text-gray-600 font-medium tracking-wide">{name}</span>
        <button
          className="link-wrapped pr-2 focus:outline-none"
          onClick={() => toggle(id)}
        >
          {child && child?.length > 0 && (
            <ArrowDown
              className={[
                "transition-all duration-300 transform",
                active === id ? "rotate-180" : "rotate-0",
              ].join(" ")}
            ></ArrowDown>
          )}
        </button>
      </div>
      <div
        className="transition-all duration-500"
        style={{ height: active === id ? height : 0 }}
      >
        <CSSTransition
          in={active === id}
          timeout={500}
          onEnter={cellHeight}
          className="accordion-item"
        >
          <div className="accordion-item">
            <div className="py-2 bg-gray-100">{children}</div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}
