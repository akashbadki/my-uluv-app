import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h1>About Us</h1>
        <p>
          Welcome to Uluv App! We are dedicated to providing top-quality products and excellent customer service.
          Our mission is to deliver value and innovation through our platform.
        </p>
      </main>
      <Footer />
    </>
  );
}
