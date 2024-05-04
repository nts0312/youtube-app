import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-72 shadow-lg rounded-lg m-2 p-1">
      <img
        className="rounded-lg h-44 w-full"
        src={snippet.thumbnails.medium.url}
        alt="videoThumbhnail"
      />
      <div className="py-1.5 grid grid-flow-col">
        <div className="col-span-2">
          <img
            className="rounded-full h-10"
            src="https://yt3.ggpht.com/J2HPMmqxEM-tWP6pvwBFeIfVH-FeAw2m44K5NRUzlLNUZwvFbm0ywvbCEweXxwqSO6ilfful6Q=s68-c-k-c0x00ffffff-no-rj"
            alt="channelLogo"
          />
        </div>
        <div className="col-span-10 truncate ml-2">
          <h1 className="text-base font-semibold ">{title}</h1>
          <h1 className="text-gray-800 text-sm ">{channelTitle}</h1>
          <div className="flex text-gray-800 text-xs">
            <h1>{statistics.viewCount} views .</h1>
            <h1> {5} months ago</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
