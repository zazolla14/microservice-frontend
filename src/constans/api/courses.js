import axios from "src/configs/axios"

export default {
  all: () => axios.get("/courses").then((res) => res),
  details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),
}
