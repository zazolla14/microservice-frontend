import Link from "next/link"
import RenderCourse from "./RenderCourse"

export default function ListClasses({ courses }) {
  // console.log(courses)
  return (
    <div className="container px-4 pt-8">
      <div className="flex justify-between items-center mb-8">
        <div className="w-auto">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">
            Most Popular Series
          </h2>
          <h3 className="text-gray-600 text-2xl font-normal">
            The following are some of the series that are{" "}
            <span className="text-teal-500">most</span> in demand of all time
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 text-sm font-semibold hover:underline hover:text-teal-500">
              Explore TODO
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center -mx-4">
        {courses.data.length > 0 ? (
          courses.data.map((course, index) => {
            return <RenderCourse course={course} key={index} />
          })
        ) : (
          <div className="w-full text-center -py-12">
            <p>Course Not Found</p>
          </div>
        )}
      </div>
    </div>
  )
}
