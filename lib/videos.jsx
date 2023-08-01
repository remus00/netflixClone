export const getCommonVideos = async (url) => {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    try {
        const BASE_URL = "youtube.googleapis.com/youtube/v3";
        const response = await fetch(
            `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`,
        );
        const data = await response.json();

        if (data?.error) {
            console.error("Youtube API error!", data.error);
            return [];
        }

        return data?.items.map((item) => {
            // console.log({ id: item.id });
            const id = item.id?.videoId || item.id;
            return {
                title: item.snippet.title,
                imgURL: item.snippet.thumbnails.high.url,
                id,
            };
        });
    } catch (error) {
        console.log("Something went wrong with the video library", error);
        return [];
    }
};

export const getVideos = async (searchQuery) => {
    const URL = `search?part=snippet&q=${searchQuery}`;
    return getCommonVideos(URL);
};

export const getPopularVideos = async () => {
    const URL =
        "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
    return getCommonVideos(URL);
};
