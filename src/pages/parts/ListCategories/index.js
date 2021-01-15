import RenderCategory from "./RenderCategory"

import Business from "public/images/category/business.svg"
import Content from "public/images/category/content.svg"
import Customer from "public/images/category/customer.svg"
import Game from "public/images/category/game.svg"
import Product from "public/images/category/product.svg"
import Travel from "public/images/category/travel.svg"

export default function index() {
  const data = [
    {
      img: <Business />,
      name: "Business Development",
      total: 12345,
    },
    {
      img: <Content />,
      name: "Content Writer",
      total: 123,
    },
    {
      img: <Product />,
      name: "Product Advertisement",
      total: 123,
    },
    {
      img: <Customer />,
      name: "Customer Relationship",
      total: 123,
    },
    {
      img: <Game />,
      name: "Game Development",
      total: 1234,
    },
    {
      img: <Travel />,
      name: "Travel Guidance",
      total: 12,
    },
  ]
  return (
    <div className="container px-4 pt-12">
      <div className="flex justify-between items-center mb-6">
        <div className="w-auto">
          <h2 className="text-gray-500 text-xl font-semibold mb-2">Category</h2>
          <h3 className="text-gray-600 text-2xl font-normal">
            Explore & <span className="text-teal-500">Learn</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center -mx-4">
        {data.length > 0 ? (
          data.map((category, index) => {
            return <RenderCategory category={category} key={index} />
          })
        ) : (
          <div className="w-full text-center -py-12">
            <p>Category Not Found</p>
          </div>
        )}
      </div>
    </div>
  )
}
