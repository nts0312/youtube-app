const GOOGLE_API_KEY = "AIzaSyC3zJ4VQiu72X1_o0xWd9ZzFPk4ds2fn-E";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;