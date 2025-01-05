export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4">Hi, I’m Kennedy Ojowi</h1>
        <p className="text-xl text-blue-100 mb-8">
          Health Informatics Specialist | Data Analyst | Healthcare Technology Enthusiast
        </p>
        <a
          href="/resume.pdf"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}