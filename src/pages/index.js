import React from 'react'
import Hero from "../components/Hero"
import Jumbotron from '../components/Jumbotron'
import dynamic from "next/dynamic"

const index = () => {
  return (
    <div className="bg-black">
        <Hero/>
        <Jumbotron/>
    </div>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})
