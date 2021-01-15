import axios from "axios"

import Layout from "../../components/Layout"

function Courses({ courses }) {
  console.log(courses)
  return <Layout title="Micro | Random"></Layout>
}

export async function getStaticProps() {
  try {
    const courses = await axios.get("/courses")
    return {
      props: {
        courses,
      },
    }
  } catch (error) {
    return error
  }
}

export default Courses
