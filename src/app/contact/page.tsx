import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="px-8 md:px-16 py-20">
        <h1 className="text-4xl font-bold mb-12 text-black">Get In Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-800 mb-8">
              Feel free to reach out for collaborations, questions, or just a friendly chat.
              I am always open to discussing new projects and creative ideas.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2 text-black">Email</h3>
              <p className="text-gray-800">
                <a href="mailto:contact@example.com" className="underline text-gray-900">
                  contact@example.com
                </a>
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-2 text-black">Location</h3>
              <p className="text-gray-800">Based in Istanbul, Turkey</p>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}