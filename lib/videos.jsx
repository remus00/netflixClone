export const getVideos = async (searchQuery) => {
    const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    try {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUTUBE_API_KEY}`,
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
// disney%20trailer
