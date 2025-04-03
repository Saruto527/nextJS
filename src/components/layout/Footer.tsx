export default function Footer() {
    return (
      <footer className="px-8 md:px-16 py-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <p className="text-sm mb-6 text-black">© {new Date().getFullYear()} Mehmet Akif</p>
          <div className="flex space-x-4">
            {/* Social media links would go here */}
          </div>
        </div>
      </footer>
    );
  }