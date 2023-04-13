import React from 'react'
import { SiCashapp } from "react-icons/si"
import { IoLogoVenmo } from "react-icons/io5"
import Link from "next/link" 

const Tips = () => {

    return (
        <div className="p-4 bg-black bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] h-full">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Your business is greatly appreciated</h1>
                    <p class="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48 text-gray-200">Payments for services can be made with cash, Cash App, and Venmo.</p>
                    <div class="w-full mx-auto text-white flex flex-wrap justify-center py-8">
                        <div className="flex flex-col items-center m-4 cursor-pointer md:px-8">
                            <Link href="https://cash.app/$MTBARBER">
                            <SiCashapp className="w-20 h-auto mx-auto mb-2" />
                            <p className="font-bold text-3xl">$MTBARBER</p>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center m-4 cursor-pointer md:px-8">
                            <Link href="https://account.venmo.com/u/Michael-Medrano-4">
                            <IoLogoVenmo className="w-20 h-auto mx-auto mb-2 " />
                            <p className="font-bold text-3xl">@Michael-Medrano-4</p>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Tips