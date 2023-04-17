import React from 'react'

const Gallery = ({feed}) => {
  const images = feed.data

  function formattedDate(timestamp) {
    const date = new Date(timestamp);
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
        <main className="flex flex-wrap justify-center sm:p-4">
      {images && 
        images.map(image => (
          <div key={image.id} className="sm:p-6 flex flex-col items-center w-[600px]">
            
              {image.media_type === "VIDEO" ? (
                <video src={image.media_url} alt={image.caption} controls className="sm:rounded-xl" />
              ) : (
                <img src={image.media_url} alt={image.caption} className="sm:rounded-lg" />
              )}
              <div className="p-2 flex flex-col items-center">
              <h2 className="text-white mt-1 text-sm font-bold">{image.caption}</h2>
              <p className="text-white mt-1 text-sm font-bold">{formattedDate(image.timestamp)}</p>
              </div>
          </div>
        ))}
        </main>
  )
}

export default Gallery

export const getStaticProps = async () =>{
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`
  const data = await fetch(url)
  const feed = await data.json()

  return {
    props: {
      feed,
    }
  }
}