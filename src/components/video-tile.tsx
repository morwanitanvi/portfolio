type VideoTileProps = {
  item: {
    title: string;
    description: string;
    content: string;
    videoUrl: string;
    role: string;
    goal: string;
  };
};

const VideoTile = ({ item }: VideoTileProps) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto my-4 flex md:flex-row max-w-8/10">
      <div className="p-6 flex-1">
        <h3 className="md:text-6xl text-2xl font-bold mb-2 text-black text-center py-3">
          {item.title}
        </h3>
        <h4 className="md:text-3xl text-xl font-semibold md:text-left text-center text-black mb-4 px-10">
          {item.description}
        </h4>
        <p className="text-lg text-left md:text-left text-black mb-4 px-10">
          {item.content}
        </p>
        <p className="text-lg text-center md:text-left text-black mb-4 px-10">
          <b>Role</b>: {item.role}
        </p>
        <p className="text-lg text-center md:text-left text-black mb-4 px-10">
          <b>Goal</b>: {item.goal}
        </p>
      </div>
      <div className="flex justify-center">
        <iframe
          src={`${item.videoUrl}embed/`}
          width="320"
          height="400"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Instagram Video"
          className="rounded-lg"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoTile;
