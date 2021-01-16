import FormatThousand from "src/helpers/formatThousand"

export default function features({ feature }) {
  console.log(feature)
  return (
    <div
      className="w-1/4 border border-gray-300 bg-white shadow-md p-6"
      style={{ width: 250 }}
    >
      <div className="flex px-2">
        <div className="flex items-center">{feature?.icon}</div>
        <div className="ml-4">
          <span className="text-gray-500 text-xl font-semibold tracking-wider mb-1 block">
            {feature?.meta}
          </span>
          <span className="text-2xl font-semibold">
            {typeof feature?.value === "number"
              ? FormatThousand(feature?.value)
              : feature?.value}
          </span>
        </div>
      </div>
    </div>
  )
}
