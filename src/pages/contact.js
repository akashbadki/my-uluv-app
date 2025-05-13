import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-10">
            We're here to help. Reach out to us anytime and we'll happily answer your questions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Email</h2>
            <p className="text-gray-700">support@uluvapp.com</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Phone</h2>
            <p className="text-gray-700">+91 000 111 222</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Address</h2>
            <p className="text-gray-700">
              123 Uluv Street<br />
              Tech City, India
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
          <p className="text-gray-600 mb-4">
            Our support team is available 24/7 via email and chat.
          </p>
          <a
            href="mailto:support@uluvapp.com"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Email Support
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
