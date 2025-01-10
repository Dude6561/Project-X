export default function Navbar() {
  return (
    <nav className="">
      <ul className="absolute left-[100px] top-5 flex space-x-6 p-4 text-xl font-bold">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <li>
          <a href="#Project">Project</a>
        </li>
      </ul>
    </nav>
  );
}
