import Link from "next/link";

export default function ContactSection() {
    return (
      <section id="contact" className="px-8 md:px-16 py-20 border-t border-gray-200">
        <h2 className="text-xl font-semibold mb-6 text-black">GET IN TOUCH</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm mb-8 text-gray-800">
              Feel free to reach out for collaborations, questions, or just a friendly chat.
            </p>
            <p className="text-sm text-gray-800">
              <a href="mailto:contact@example.com" className="underline text-gray-900">contact@example.com</a>
            </p>
           
             <Link 
                href="/contact"
                className="inline-block px-5 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors"

                >

                 Contact Form

                </Link>


          </div>
        </div>
      </section>
    );
  }