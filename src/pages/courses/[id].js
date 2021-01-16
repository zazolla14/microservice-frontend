import { useEffect, useRef, useState } from "react"
import YouTube from "react-youtube"
import { CSSTransition } from "react-transition-group"

import courses from "src/constans/api/courses"
import formatThousand from "src/helpers/formatThousand"

import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Features from "src/pages/parts/details-courses/Features"
import Footer from "src/components/Footer"
import CoursePhotos from "src/pages/parts/details-courses/CoursePhotos"
import RenderPreview from "src/pages/parts/details-courses/RenderPreview"
import RenderReviews from "src/pages/parts/details-courses/RenderReviews"

import Student from "public/images/details-course/icon-student.svg"
import Video from "public/images/details-course/icon-video.svg"
import Certificate from "public/images/details-course/icon-certificate.svg"

function DetailsCourse({ details }) {
  // console.log(details.images[0])
  const footer = useRef(null)
  const [isSticky, setIsSticky] = useState(() => true)
  useEffect(() => {
    const stickyOffsetTop = footer.current.getBoundingClientRect().top

    const stickyToggler = () => {
      setIsSticky(stickyOffsetTop >= window.pageYOffset + window.innerHeight)
    }
    window.addEventListener("scroll", stickyToggler)
    return () => {
      window.removeEventListener("scroll", stickyToggler)
    }
  }, [])

  const features = [
    {
      icon: <Student className="fill-current text-teal-500" />,
      meta: "Student",
      value: details?.total_students,
    },
    {
      icon: <Video className="fill-current text-teal-500" />,
      meta: "Videos",
      value: details?.total_videos,
    },
    {
      icon: <Certificate className="fill-current text-teal-500" />,
      meta: "Certificate",
      value: details?.certificate ? "Available" : "Unavailable",
    },
    {
      icon: <Certificate className="fill-current text-teal-500" />,
      meta: "Status",
      value: details?.status === "draft" ? "Uncomplate" : "Complate",
    },
  ]
  return (
    <Layout title={`Micro | ${details.name}`}>
      <section
        className="relative overflow-hidden pt-10 px-4"
        style={{ height: 660 }}
      >
        <div className="container z-10 relative">
          <Header />
        </div>
        {details?.chapters[0]?.lessons[0]?.video && (
          <div className="video-wrapper">
            <YouTube
              videoId={details?.chapters[0]?.lessons[0]?.video}
              id={details?.chapters[0]?.lessons[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(e) => {
                e.target.playVideo()
              }}
            />
          </div>
        )}
        <div className="absolute z-0 inset-0 bg-black opacity-75 h-full w-full"></div>
        <div className="meta-title absolute flex justify-center items-center inset-0 z-0 w-full object-fill">
          <div className="text-center">
            <h3 className="text-white text-xl tracking-wide mb-2">
              Online Course
            </h3>
            <h2 className="text-teal-500 text-6xl font-bold">
              {details?.name}
            </h2>
          </div>
        </div>
      </section>
      <section className="container relative pt-24">
        <div className="absolute w-full top-0 transform -translate-y-1/2">
          <div className="w-5/6 mx-auto">
            <div className="flex flex-wrap justify-between">
              {features.map((feature, index) => {
                return <Features feature={feature} key={index} />
              })}
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isSticky}
            timeout={300}
            unmountOnExit
            classNames="meta-price"
          >
            <div className="meta-price bg-white w-full z-20 left-0 py-3">
              <div className="w-3/4 mx-auto">
                <div className="flex items-center">
                  <div className="w-full">
                    <h2 className="text-gray-500 text-lg font-medium">
                      Course Name
                    </h2>
                    <h1 className="text-gray-900 text-2xl font-semibold">
                      {details?.name}
                    </h1>
                  </div>
                  <h1 className="text-teal-500 text-2xl font-semibold tracking-wider whitespace-nowrap">
                    {details?.type === "free" ? (
                      "Free"
                    ) : (
                      <span>Rp {formatThousand(details?.price)}</span>
                    )}
                  </h1>
                  <a
                    href={`${process.env.NEXT_PUBLIC_MEMBER_URL}/joined/${details?.id}`}
                    target="_blank"
                    rel="noopener noreferer"
                    className="bg-orange-600 hover:bg-orange-500 text-white shadow-inner transition-all duration-200 text-lg px-6 py-2 ml-6 whitespace-nowrap"
                  >
                    {details?.type === "free" ? "Enroll Now" : "Buy Now"}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="w-3/4 mx-auto mt-8">
          <div className="w-full">
            <section className="mb-10">
              <h2 className="text-3xl font-semibold mb-4">
                About <span className="text-teal-500">Course</span>
              </h2>
              <p className="text-gray-500 text-lg text-justify font-medium leading-7">
                {details?.description ?? "No Description"}
              </p>
            </section>
            <section className="mt-10">
              <h2 className="text-3xl font-semibold mb-6">
                Course <span className="text-teal-500">Photos</span>
              </h2>
              <div className="flex flex-wrap justify-start items-center -mx-4">
                {details.images.length > 0 ? (
                  details.images.map((image, index) => (
                    <CoursePhotos image={image.image} key={index} />
                  ))
                ) : (
                  <div className="w-full text-center -py-12">
                    <p>Photos Not Found</p>
                  </div>
                )}
              </div>
            </section>
            <section className="mt-10">
              <h2 className="text-3xl font-semibold mb-6">
                You Will <span className="text-teal-500">Learn</span>
              </h2>
              <div className="w-3/4">
                {details?.chapters?.length > 0 ? (
                  <RenderPreview chapters={details.chapters}></RenderPreview>
                ) : (
                  <div className="w-full text-center py-12">
                    No Chapter Found
                  </div>
                )}
              </div>
            </section>
            <section className="mt-10 w-2/3">
              <h2 className="text-3xl font-semibold mb-6">
                The <span className="text-teal-500">Instructor</span>
              </h2>
              <div className="flex items-center pl-2">
                <img
                  className="w-20 rounded-full object-cover overflow-hidden"
                  src={details?.mentor?.profile ?? ""}
                  alt={`profile ${details?.mentor?.name}`}
                />
                <div className="ml-6">
                  <h1 className="text-2xl text-gray-900 font-medium">
                    {details?.mentor?.name ?? "-"}
                  </h1>
                  <h2 className="text-xl text-gray-800 mt-1">
                    {details?.mentor?.profession ?? "-"}
                  </h2>
                </div>
              </div>
            </section>
            <section className="mt-10">
              <div className="text-center">
                <h2 className="text-3xl font-semibold mb-2">
                  Happy <span className="text-teal-500">Students</span>
                </h2>
                <h3 className="text-gray-800 text-xl">
                  Let's hear what they have to say about this Course
                </h3>
              </div>
              <div className="flex flex-wrap justify-start items-center mt-10">
                {details?.reviews.length > 0 ? (
                  details?.reviews?.map((review, index) => (
                    <RenderReviews key={index} review={review}></RenderReviews>
                  ))
                ) : (
                  <div className="w-full text-center -py-12">
                    Review Not Found
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
      <section ref={footer}>
        <Footer />
      </section>
    </Layout>
  )
}

DetailsCourse.getInitialProps = async (props) => {
  const { id } = props.query
  try {
    const details = await courses.details(id)
    return { details }
  } catch (error) {
    return error
  }
}

export default DetailsCourse
