import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);

    // WEE NEED STATE VARIABLE TO LOOP ON THIS
  };

  return (
    <div className="flex flex-wrap">
      {videos ? (
        videos.map((video) => <VideoCard key={video.id} info={video} />)
      ) : (
        <h1>shimmmmmer UI</h1>
      )}
    </div>
  );
};

export default VideoContainer;
