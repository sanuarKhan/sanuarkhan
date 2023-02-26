const ImageCard = ({ title, image, description }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden scale-up-top shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="font-bold text-lg mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
export default ImageCard;