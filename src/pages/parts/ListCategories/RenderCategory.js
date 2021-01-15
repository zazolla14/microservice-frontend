import Link from "next/link"
import FormatThousand from "src/helpers/formatThousand"

export default function RenderCategory({ category }) {
  return (
    <div className="w-1/6 px-4 h-100">
      <div className="card border-gray-300 border relative transition-all duration-200 h-full p-6 hover:shadow-2xl hover:bg-orange-400 hover:border-orange-500 hover:text-white">
        {category.img}
        <div className="meta-category mt-10">
          <h4 className="text-indigo-700 text-lg font-medium transition-all duration-300 w-1/2">
            {category.name ?? "Category Name"}
          </h4>
          <h5 className="text-gray-500 text-base font-medium tracking-wider transition-all duration-500 mt-2">
            {FormatThousand(category.total)}
          </h5>
          <Link href="/#">
            <a className="link-wrapped"></a>
          </Link>
        </div>
      </div>
    </div>
  )
}
