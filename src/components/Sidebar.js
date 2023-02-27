
const Sidebar = () => {
  return (
    <div
    className={`${
      isOpen ? "block" : "hidden"
    } md:hidden mt-2`}
  >
    <ul className="flex flex-col space-y-4">
      <li>
        <a
          href="#"
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>

  )
}

export default Sidebar
