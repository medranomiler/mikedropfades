import React, { useRef, useEffect } from 'react';

const Gallery = ({feed}) => {
  const images = feed.data;
  const videoRef = useRef(null);

  // function formattedDate(timestamp) {
  //   const date = new Date(timestamp);
  //   const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
  //   return date.toLocaleDateString('en-US', options);
  // }

  function handleVideoEnded() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      document.exitFullscreen();
      document.webkitExitFullscreen();
      document.mozCancelFullScreen?.();
      document.msExitFullscreen?.();
    }
  }

  useEffect(() => {
    function handleFullscreenChange() {
      if (document.fullscreenElement === null && document.webkitFullscreenElement === null && document.mozFullScreenElement === null && document.msFullscreenElement === null) {
        if (!videoRef.current.paused && videoRef.current.currentTime >= videoRef.current.duration) {
          handleVideoEnded();
        }
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <main className="flex flex-wrap justify-center sm:p-4">
      {images && 
        images.map(image => (
          <div key={image.id} className="sm:p-6 flex flex-col items-center w-[600px]">
            {image.media_type === "VIDEO" ? (
              <video
                src={image.media_url}
                alt={image.caption}
                controls
                className="sm:rounded-xl"
                ref={videoRef}
                poster={image.thumbnail_url}
                onEnded={handleVideoEnded}
                onClick={() => {
                  if (!document.fullscreenElement) {
                    videoRef.current.requestFullscreen();
                  } else {
                    if (document.exitFullscreen) {
                      document.exitFullscreen();
                    }
                  }
                }}
              />
            ) : (
              <img src={image.media_url} alt={image.caption} className="sm:rounded-lg" />
            )}
            <div className="p-2 flex flex-col items-center">
              <h2 className="text-white mt-1 text-sm font-bold">{image.caption}</h2>
              {/* <p className="text-white mt-1 text-sm font-bold">{formattedDate(image.timestamp)}</p> */}
            </div>
          </div>
        ))}
    </main>
  )
}

export default Gallery;

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,thumbnail_url,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed,
    }
  }
}
