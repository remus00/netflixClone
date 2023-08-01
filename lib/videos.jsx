import videosData from "../data/videos.json";

export const getVideos = async (searchQuery) => {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`,
    );
    const data = await response.json();

    return data?.items.map((item) => {
        return {
            title: item.snippet.title,
            imgURL: item.snippet.thumbnails.high.url,
            id: item?.id?.videoId || null,
        };
    });
};
// disney%20trailer
