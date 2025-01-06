import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 My Lifestyle Blog</p>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
