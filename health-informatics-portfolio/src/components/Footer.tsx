"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Name. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://linkedin.com/in/yourprofile" className="mx-2 hover:text-blue-500">LinkedIn</a>
          <a href="https://github.com/yourprofile" className="mx-2 hover:text-blue-500">GitHub</a>
        </div>
      </div>
    </footer>
  );
}