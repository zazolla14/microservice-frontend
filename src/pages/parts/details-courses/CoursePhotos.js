import Eyes from "public/images/details-course/icon-eyes.svg"
import Modal from "src/components/Modal"

export default function CoursePhotos({ image }) {
  return (
    <div className="w-1/3 px-4 mb-4">
      <div className="item relative">
        <figure className="item-image">
          <Eyes></Eyes>
          <img src={image} alt={image} className="object-cover h-44 w-full" />
        </figure>
        <Modal content={(toggle) => <img src={image} alt={image} />}>
          {(toggle) => <span onClick={toggle} className="link-wrapped"></span>}
        </Modal>
      </div>
    </div>
  )
}
