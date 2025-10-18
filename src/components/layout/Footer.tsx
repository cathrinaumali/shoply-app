export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">TMI Shop</h3>
            <p className="text-gray-400 text-sm">
              Your trusted e-commerce platform for quality products at great
              prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/categories"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shopping Cart
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm">
              Technical Assessment Project
              <br />
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} TMI Automotive Products, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
