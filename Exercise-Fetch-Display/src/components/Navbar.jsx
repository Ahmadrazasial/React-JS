export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <ul className="flex gap-4 justify-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}