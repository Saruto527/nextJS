export default function AboutSection() {
    return (
      <section id="about" className="px-8 md:px-16 py-20 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-semibold mb-6 text-black">EXPERTISE</h2>
            <p className="text-sm mb-4 text-gray-800">
              Professional digital sculptor with 8+ years experience. Specialized in character & prop design.
            </p>
            <p className="text-sm text-gray-800">
              In my free time I like to create abstract compositions and related non-regular things.
            </p>
          </div>
          <div>
            {/* Add additional about content here */}
          </div>
        </div>
      </section>
    );
  }