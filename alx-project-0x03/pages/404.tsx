Resolve a 404 page not found
mandatory
Objectives: In the file-based routing system, each pathname has to correspond to a particular file that exists in the pages/ directory. In an event where any such pathname is used but not found in the pages directory. Your routing will resolve to a 404 page not found.

This is a default behavior in Nextjs applications. The behavior can be overridden if you wish to have a Custom Error Page

Instructions:

From your pages/ directory create a file 404.tsx
Replace the content of this file with the code below:
import Link from 'next/link';
import { FaHome } from 'react-icons/fa'; 

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* Main Heading */}
      <h1 className="text-6xl font-bold mb-4">Oops! 😱</h1>
      <p className="text-2xl mb-8">
        We can't seem to find the page you're looking for.
      </p>

      {/* Funny Message */}
      <p className="text-lg mb-8 text-center max-w-md">
        Maybe it was abducted by aliens 👽, or it just took a wrong turn into the Internet wilderness! Either way, it's not here.
      </p>

      {/* Button to navigate back */}
      <Link
        href="/"
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
}

export default Custom404;

Save and close your files
Run npm run dev from the terminal
From a tab in your browser type http://localhost:3000/unknown-pathname to see the changes made.
Repo:

GitHub repository: alx-project-0x03-setup
Directory: alx-project-0x03
File: pages/404.tsx
