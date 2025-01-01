export default function About() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              I have over 5 years of experience in health informatics, specializing in data analysis, EHR systems, and healthcare technology. My goal is to leverage data to improve patient care and operational efficiency in healthcare organizations.
            </p>
            <p className="text-gray-600">
              I am passionate about using technology to solve complex healthcare challenges and drive innovation in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}