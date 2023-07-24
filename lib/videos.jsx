import videosData from "../data/videos.json";

export const getVideos = () => {
    return videosData.items.map((item) => {
        return {
            title: item.snippet.title,
            imgURL: item.snippet.thumbnails.high.url,
            id: item?.id?.videoId,
        };
    });
};
