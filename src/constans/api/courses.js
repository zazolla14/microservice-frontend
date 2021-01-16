import axios from "src/configs/axios"

export default {
  all: (options) => axios.get("/courses", options).then((res) => res),
  details: (id) => axios.get(`/courses/${id}`).then((res) => res.data),
}
