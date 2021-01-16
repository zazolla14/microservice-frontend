import Star from "src/components/Star"

export default function RenderReviews({ review }) {
  return (
    <div className="w-1/2 flex justify-center px-6 mb-14">
      <div className="w-5/6">
        <Star value={review?.rating ?? 0} width={26} height={26} />
        <p className="text-gray-500 text-lg font-medium text-justify mt-1">
          {review?.note ?? "-"}
        </p>
        <div className="flex items-center px-4 mt-2">
          <div className="rounded-full overflow-hidden">
            <img
              src={review?.user?.avatar ?? "-"}
              alt={review?.user?.name}
              className="w-14 h-14 object-cover overflow-hidden"
            />
          </div>
          <div className="ml-4 mt-4">
            <h1 className="text-gray-700 text-lg font-medium">
              {review?.user?.name ?? "-"}
            </h1>
            <h1 className="text-gray-500">{review?.user?.profession ?? "-"}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
