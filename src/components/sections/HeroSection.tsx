import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
      <section className="px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold mb-6 text-black">
              Hello, I'm<br />
              Mehmet Akif.
            </h1>
            <p className="text-lg mb-6 text-black max-w-md">
              A senior-year design student who is trying to specialize in 3D modeling & texturing.
            </p>
            <div className="mt-12">
              <Link 
                href="#work" 
                className="inline-flex items-center"
              >
                <svg 
                  className="w-8 h-8" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 5v14m-7-7l7 7 7-7" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
              <Image
              src="/images/hero-3d-model1.jpg"
              alt = "3D model by Mehmet Akif"
              fill
              className="object-cover rounded-lg"
              priority
              />
            </div>
          </div>
        </div>
      </section>
    );
  }