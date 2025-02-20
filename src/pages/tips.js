import React from 'react'
import { SiCashapp } from "react-icons/si"
import { IoLogoVenmo } from "react-icons/io5"
import Link from "next/link" 

const Tips = () => {

    return (
        <div className="p-4 bg-black bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] h-full">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                        Your business is greatly appreciated
                    </h1>
                    <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48 text-gray-200">
                        Payments for services can be made with cash, Cash App, and Venmo.
                    </p>
                    <div className="w-full mx-auto text-white flex flex-wrap justify-center py-8">
                        <div className="m-4 cursor-pointer md:px-8">
                            <Link href="https://cash.app/$MTBARBER">
                            <button type="button" className="text-white bg-[#00D632] hover:bg-[#00D632]/80 focus:ring-4 focus:outline-none focus:ring-[#00D632]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#00D632]/80 dark:focus:ring-[#00D632]/40 mr-2 mb-2">
                            <SiCashapp className="w-4 h-4 mr-2 -ml-1" />
                            Pay with CashApp
                            </button>
                            </Link> 
                        </div>
                        <div className="m-4 cursor-pointer md:px-8">
                            <Link href="https://account.venmo.com/u/Michael-Medrano-4">
                            <button type="button" className="text-white bg-[#008CFF] hover:bg-[#008CFF]/80 focus:ring-4 focus:outline-none focus:ring-[#008CFF]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#008CFF]/80 dark:focus:ring-[#008CFF]/40 mr-2 mb-2">
                            <IoLogoVenmo className="w-4 h-4 mr-2 -ml-1" />
                            Pay with Venmo
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Tips
                      {/* <div className="flex flex-col items-center m-4 cursor-pointer md:px-8">
                            <button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                            <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="bitcoin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"></path></svg>
                            Pay with Bitcoin
                            </button>
                        </div> */}