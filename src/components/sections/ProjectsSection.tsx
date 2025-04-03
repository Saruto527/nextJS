import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
      {
        id: 1,
        title: "3D Character Model",
        description: "Description of the 3D character model project.",
        imageUrl: "/images/3d-character.jpeg" 
      },
      {
        id: 2,
        title: "Texture Study",
        description: "Description of the texture study project.",
        imageUrl: "/images/texture-study.jpg" 
      }
    ];
    return (
        <section id="work" className="px-8 md:px-16 py-20 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-12 text-black">3D PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="mb-12">
                <div className="relative w-full h-64">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium mt-4 text-black">{project.title}</h3>
                <p className="text-sm mt-2 text-gray-800">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
    }
