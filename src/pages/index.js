import Layout from "../components/Layout"
import axios from "src/configs/axios"
// import courses from "src/constans/api/courses"

import Circle from "public/images/circle-accent-1.svg"
import Header from "../components/Header"
import Hero from "./parts/Hero"
import Client from "./parts/Client"
import ListCourses from "src/pages/parts/ListCourses"
import ListCategory from "src/pages/parts/ListCategories"
import Footer from "src/components/Footer"

function Home({ courses }) {
  // console.log(courses)
  return (
    <Layout title="TODO Learn">
      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0" />
          <div className="sunshine"></div>
          <div className="container">
            <Header />
            <Hero />
          </div>
        </section>
        <section>
          <Client />
        </section>
        <section>
          <ListCourses courses={courses} />
        </section>
        <section>
          <ListCategory />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const courses = await axios.get("/courses")
    // const courses = await courses.all()
    return {
      props: {
        courses,
      },
    }
  } catch (error) {
    return error
  }
}
export default Home
