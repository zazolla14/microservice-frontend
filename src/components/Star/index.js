import React from "react"
import propTypes from "prop-types"

import IconStar from "public/images/details-course/icon-star.svg"

export default function Star({ className, value, height, width }) {
  // console.log(value)
  let leftPos = 0

  const star = []
  for (let index = 0; index < 5 && index < value; index++) {
    leftPos = leftPos + width
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />
    )
  }

  const starPlaceholder = []
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />
    )
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
      <IconStar></IconStar>
    </>
  )
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
}
