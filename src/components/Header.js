import Link from 'next/link';

const Header = () => (
  <nav>
    <Link href="/">Home</Link> | 
    <Link href="/about">About</Link> | 
    <Link href="/products">Products</Link> | 
    <Link href="/contact">Contact</Link>
  </nav>
);

export default Header;
