import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      <div className="col-span-2">
        <Image src="/men.png" alt="Image 1" width={600} height={800} className="aspect-square object-cover" />
      </div>
      <div className="col-span-2">
        <Image src="/women.png" alt="Image 2" width={600} height={800} className="aspect-square object-cover" />
      </div>
      <div >
        <Image src="/ss1.jpeg" alt="Image 3" width={600} height={800} className="aspect-square object-cover" />
      </div>
      <div >
        <Image src="/ss2.jpeg" alt="Image 4" width={600} height={800} className="aspect-square object-cover" />
      </div>
      <div >
        <Image src="/ss3.jpeg" alt="Image 5" width={600} height={800} className="aspect-square object-cover" />
      </div>
      <div >
        <Image src="/ss4.jpeg" alt="Image 6" width={600} height={800} className="aspect-square object-cover" />
      </div>
    </div>
  )
}

export default Gallery