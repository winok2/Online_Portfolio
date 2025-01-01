export default function ProjectCard({ title, description, image, link }: { title: string; description: string; image: string; link: string }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a href={link} className="mt-4 inline-block text-blue-500 hover:text-blue-600">Learn More</a>
      </div>
    </div>
  );
}