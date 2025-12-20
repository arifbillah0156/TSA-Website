const youtubeVideos = {
    video1: 'https://www.youtube.com/embed/HRXhEXrCi6A',
    video2: 'https://www.youtube.com/embed/iQDquev1oZU',
    video3: 'https://www.youtube.com/embed/XlXXtsUrEAM',
    video4: 'https://www.youtube.com/embed/EoDdXOEddRM',
    video5: 'https://www.youtube.com/embed/zZh9CwS_rbY',
    video6: 'https://www.youtube.com/embed/xvjfyuIFcpU',
};

const YouTubeGallery = () => {
    return (
        <div className="min-h-screen py-10 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-lc galada-regular tracking-wider">
                <i className="fa-solid fa-video mr-3 text-2xl md:text-3xl"></i>Video Gallery
            </h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(youtubeVideos).map(([key, url]) => (
                    <div key={key} className="overflow-hidden rounded-lg border p-2 border-lc shadow-lg bg-white">
                        <div className="aspect-w-16 aspect-h-8">
                            <iframe
                                className="w-full h-[300px] rounded-lg"
                                src={url}
                                title={`YouTube video ${key}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubeGallery;
