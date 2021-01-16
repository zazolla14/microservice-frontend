import React from "react"
import Link from "next/link"
import IconPlay from "public/images/icon-play.svg"

export default function RenderCourse({ course }) {
  return (
    <div className="w-1/4 px-4 mb-6">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay></IconPlay>
          <img
            src={course?.thumbnail ?? ""}
            alt={course?.name ?? "Some Information"}
          />
        </figure>
        <div className="meta-course mt-2">
          <h4 className="text-indigo-700 text-lg font-semibold">
            {course.name ?? "Course Name"}
          </h4>
          <h5 className="text-gray-500 text-base">
            {course.level ?? "Course Level"}
          </h5>
        </div>
        <Link href="/courses/[id]" as={`/courses/${course.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  )
}
