import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href={href} onClick={handleClick} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </Link>
  );
};

export default NavLink;