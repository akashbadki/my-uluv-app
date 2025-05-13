import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Card from '@/components/Card';

const mockProducts = [
  { id: 1, title: 'Product A', description: 'Description for product A.' },
  { id: 2, title: 'Product B', description: 'Description for product B.' },
  { id: 3, title: 'Product C', description: 'Description for product C.' },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h1>Our Products</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {mockProducts.map((product) => (
            <Card key={product.id} title={product.title} description={product.description} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
