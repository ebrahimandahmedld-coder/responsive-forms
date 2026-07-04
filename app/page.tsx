import { AiOutlineArrowLeft } from "react-icons/ai";
export default function Home() {
  return (
    <main>
      {/* Start NavBar */}
      <nav className="w-full  flex md:items-center justify-between  font-mono text-sm p-6 h-14 bg-blue-300 rounded-lg">
        <div className="flex items-center cursor-pointer md:hidden">
          <AiOutlineArrowLeft className="text-xl" />
        </div>
        <div className=" flex items-center justify-center w-full md:w-auto ">
          <h2 className="text-lg font-bold">Add New Order</h2>
        </div>
        <div className=" hidden md:flex gap-4 items-center">
          <div>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded border border-gray-400">
              Cancel
            </button>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Order
            </button>
          </div>
        </div>
      </nav>
      {/* End NavBar */}
      {/* Start Form */}
      <div className="w-full flex px-4 py-4 text-lg font-bold md:px-6">
        <h3>Customer Information</h3>
      </div>
      <form
        className="w-full flex flex-col gap-4 px-4 md:flex-row md:flex-wrap  md:items-center md:justify-between md:px-6"
        action="/api/orders"
        method="POST"
      >
        <div className="w-full md:w-[48%]">
          <label
            htmlFor="customerName"
            className="block text-sm font-bold text-gray-700"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            placeholder="Enter customer name"
            className="mt-1 block w-full py-2 px-4 md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-[48%]">
          <label
            htmlFor="EmailAddress"
            className="block text-sm font-bold text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="EmailAddress"
            name="EmailAddress"
            placeholder="Enter email Address"
            className="mt-1 block w-full py-2 px-4 md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-[48%]">
          <label
            htmlFor="PhoneNumber"
            className="block text-sm font-bold text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="PhoneNumber"
            name="PhoneNumber"
            placeholder="Enter phone number"
            className="mt-1 block w-full py-2 px-4 md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-[48%]">
          <label
            htmlFor="shippingAddress"
            className="block text-sm font-bold text-gray-700"
          >
            Shipping Address
          </label>
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            placeholder="Enter shipping address"
            className="mt-1 block w-full py-2 px-4 md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          />
        </div>
      </form>
      {/* End Form */}
      {/* Start form Details */}
      <div className="w-full flex px-4 py-4 text-lg font-bold md:px-6">
        <h3>Order Details</h3>
      </div>
      <form
        className="w-full flex flex-col gap-4 px-4 md:flex-row md:flex-wrap  md:items-center md:justify-between md:px-6"
        action="/api/orders"
        method="POST"
      >
        <div className="w-full  md:w-[30%]">
          <label
            htmlFor="productName"
            className="block text-sm font-bold text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Enter product name"
            className="mt-1 block w-full py-2 px-4 md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-[30%]">
          <label
            htmlFor="quantity"
            className="block text-sm font-bold text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            className="mt-1 block w-full py-2 px-4 md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          />
        </div>
        <div className="w-full md:w-[30%]">
          <label
            htmlFor="price"
            className="block text-sm font-bold text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            className="mt-1 block w-full py-2 px-4 md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          />
        </div>

        <div className="flex items-center justify-between md:w-full md:flex ">
          <div className=" md:w-[48%]">
            <label
              htmlFor="OrderDate"
              className="block text-sm font-bold text-gray-700"
            >
              Order Date
            </label>
            <input
              type="date"
              id="OrderDate"
              name="OrderDate"
              placeholder="Select date"
              className="mt-1 block md:w-full py-2 px-4  md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
            />
          </div>
          <div className=" md:w-[48%] ">
            <label
              htmlFor="OrderStatus"
              className="block text-sm font-bold text-gray-700"
            >
              Status
            </label>
            <select
              id="OrderStatus"
              name="OrderStatus"
              className="mt-1 block md:w-full py-2 px-4 md:font-bold text-black  placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
            >
              <option value="Pending">Pending</option>
              <option value="Select status">Select status</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
        <div className="w-full md:w-full">
          <label
            htmlFor="notes"
            className="block text-sm font-bold text-gray-700"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Enter any additional notes"
            className="mt-1 block w-full md:py-4 px-4 md:font-bold text-black placeholder:text-gray-500 rounded-md border border-gray-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-sm"
          ></textarea>
        </div>

        <div className=" flex items-center justify-between w-full py-4 md:hidden">
          <div className=" w-[48%]">
            <button className="w-full bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded border border-gray-400">
              Cancel
            </button>
          </div>
          <div className=" w-[48%]">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Order
            </button>
          </div>
        </div>
      </form>
      {/* End form Details */}
    </main>
  );
}
