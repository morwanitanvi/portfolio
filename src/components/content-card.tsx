type ContentCardProps = {
  item: {
    key: number;
    content: string;
    title: string;
    tags: string[];
  };
};

const ContentCard = (props: ContentCardProps) => {
  return (
    <div className="bg-blue-800 h-100 w-80 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <h3 className="md:text-8xl text-4xl font-bold mb-2 text-white text-center py-8">
          {props.item.key} .
        </h3>
        <h4 className="md:text-2xl text-xl font-semibold md:text-left text-center text-white mb-4 px-10">
          {props.item.title}
        </h4>
        <p className="text-lg text-center md:text-left text-white mb-4 px-10">
          {props.item.content}
        </p>
        <div className="flex gap-2 px-10">
          {props.item.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-black bg-gray-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
