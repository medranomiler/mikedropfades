import React from 'react'
import img1 from "../../public/img1.jpeg"
import Image from "next/image"


const GalleryComponent = () => {

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="grid gap-4">
    <div>
      <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
    <div>
    <Image
        className="h-auto max-w-full rounded-lg"
        src={img1}
        alt=""
      />
    </div>
  </div>
</div>

  )
}

export default GalleryComponent