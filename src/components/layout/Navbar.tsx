import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center py-6 px-8 md:px-16">
          <div className="text-2xl font-bold mb-6 text-black">
            <Link href="/">ma.</Link>
          </div>
         
         <ul className="flex space-x-8">

         <li><Link href="#work" className="text-sm hover:underline mb-6 text-black">Work</Link></li>
        <li><Link href="#about" className="text-sm hover:underline mb-6 text-black">About</Link></li>
        <li><Link href="#playground" className="text-sm hover:underline mb-6 text-black">Playground</Link></li>
        <li><Link href="/contact" className="text-sm text-gray-900 hover: underline">Contact</Link></li>



         </ul>


        </nav>
    );
}