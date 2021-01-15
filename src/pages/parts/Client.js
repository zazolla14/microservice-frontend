export default function Client() {
  return (
    <div className="container pt-12 px-4">
      <div className="text-center">
        <h2 className="text-gray-700 text-4xl font-bold mb-2">Our Clients</h2>
        <h3 className="text-gray-600 text-2xl font-normal">
          The following are client <span className="text-teal-500">most</span>{" "}
          in demand of all time
        </h3>
      </div>
      <div className="flex flex-wrap justify-around items-center">
        <div className="w-1/6">
          <img
            src="/images/clients/gojek.svg"
            style={{ height: 180 }}
            alt="Gojek"
          />
        </div>
        <div className="w-1/6">
          <img
            src="/images/clients/tokopedia.svg"
            style={{ height: 180 }}
            alt="Tokopedia"
          />
        </div>
        <div className="w-1/6">
          <img
            src="/images/clients/traveloka.svg"
            style={{ height: 180 }}
            alt="Traveloka"
          />
        </div>
        <div className="w-1/6">
          <img
            src="/images/clients/bukalapak.svg"
            style={{ height: 180 }}
            alt="Bukalapak"
          />
        </div>
        <div className="w-1/6">
          <img
            src="/images/clients/grab.svg"
            style={{ height: 180 }}
            alt="Grab"
          />
        </div>
      </div>
    </div>
  )
}
