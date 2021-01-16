import React, { useEffect, useState, useRef } from "react"
import Link from "next/link"

import courses from "src/constans/api/courses"

import Layout from "../../components/Layout"
import Header from "src/components/Header"
import Footer from "src/components/Footer"
import ListCourses from "src/pages/parts/ListCourses"

function Courses({ data }) {
  // console.log(data)
  // data.data.map((item, index) => {
  //   console.log(item)
  // })
  const [search, setSearch] = useState(() => "")
  const [searchFocus, setSearchFocus] = useState(() => false)
  const [searchResponse, setSearchResponse] = useState(() => ({
    isLoading: false,
    isError: false,
    data: [],
  }))

  const selectWrapper = useRef(null)

  function clickOutside(event) {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setSearch("")
    }
  }

  let timeoutSearch = useRef(null)
  function handleSearch(e) {
    e.persist()
    setSearch(e.target.value)
    clearTimeout(timeoutSearch.current)
    timeoutSearch.current = setTimeout(() => {
      setSearchResponse({
        isLoading: true,
        isError: false,
        data: null,
      })
      courses
        .all({ params: { q: e.target.value } })
        .then((res) => {
          console.log(res)
          setSearchResponse({
            isLoading: false,
            isError: false,
            data: res.data,
          })
        })
        .catch((err) => {
          setSearchResponse({
            isLoading: false,
            isError: true,
            data: null,
          })
        })
    }, 1000)
  }
  useEffect(() => {
    window.addEventListener("mousedown", clickOutside)
    return () => {
      window.removeEventListener("mousedown", clickOutside)
    }
  }, [])
  console.log(searchResponse)
  return (
    <Layout title="Micro | Courses">
      <section className="pt-10 z-30 relative" style={{ height: 360 }}>
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
        <div
          className="meta-title absolute bottom-0 object-fill z-0 w-full flex justify-center items-center"
          style={{ marginBottom: "-25px" }}
        >
          <div className="px-4">
            <h3 className="text-6xl text-center text-teal-500 font-semibold mb-4">
              List Courses
            </h3>
            <h4 className="text-lg text-center text-white">
              Lest build somethinks from the{" "}
              <span className="text-orange-500">Scratch</span>
              <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quidem, minima!
            </h4>
            <div className="flex flex-col relative" ref={selectWrapper}>
              <input
                id="q"
                type="text"
                onChange={handleSearch}
                onFocus={() => setSearchFocus(!searchFocus)}
                onBlur={() => setSearchFocus(!searchFocus)}
                value={search}
                placeholder={
                  searchFocus
                    ? "Ketik minimal 3 karakter untuk mencari"
                    : "Search..."
                }
                className="bg-white focus:outline-none transition-all duration-200 focus:border-teal-500 border border-gray-600 px-4 py-3 w-full mt-6"
              />
              {search.length >= 3 && (
                <div
                  className="flex flex-col absolute py-2 px-4 bg-white border border-gray-600 w-full"
                  style={{ top: 75 }}
                >
                  {searchResponse.isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      {searchResponse.isError &&
                        "Something is technically wrong "}
                      {searchResponse.data?.length > 0
                        ? searchResponse.data?.map?.((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative"
                              >
                                <div
                                  className="w-auto px-4"
                                  style={{ width: 150 }}
                                >
                                  <img
                                    src={item?.thumbnail ?? ""}
                                    alt={item?.name ?? "Course Name"}
                                  />
                                </div>
                                <div className="w-full px-4">
                                  <h6 className="text-gray-900 text-lg">
                                    {item?.name ?? "Course Name"}
                                  </h6>
                                  <p className="text-gray-600">
                                    {item?.level ?? "level"} |{" "}
                                    {item?.status === "draft"
                                      ? "Uncomplate"
                                      : "Complate"}
                                  </p>
                                  <Link
                                    href="/courses/[id]"
                                    as={`/courses/${item.id}`}
                                  >
                                    <a className="link-wrapped"></a>
                                  </Link>
                                </div>
                              </div>
                            )
                          })
                        : "No course found"}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>

      <section className="container px-4 mx-auto pt-24">
        <ListCourses courses={data}></ListCourses>
      </section>
      <section className="mt-24 bg-indigo-1000 py-12">
        <Footer />
      </section>
    </Layout>
  )
}

Courses.getInitialProps = async () => {
  try {
    const data = await courses.all()
    return { data }
  } catch (error) {}
}

export default Courses
