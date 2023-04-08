import React from 'react'
import Hero from "../components/Hero"
import Image from "next/image"
import dynamic from "next/dynamic"
import avatar from "../../public/picFive.png"

const index = () => {
  return (
    <div className="export default bg-black">
        <Hero/>
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})
