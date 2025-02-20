import heroPhoto from '../../public/mdfbanner.png'
import heroPhoto2 from '../../public/mdfLarge.jpeg'
import mdfLogoLarge from "../../public/mdfLogoLarge.png"
import Image from 'next/image'
import Link from 'next/link'
import Asset3 from "../../public/Asset 3.svg"



function Hero() {


  return (<>
    <div style={{
      position: "relative",
      textAlign: "center",
      color: "white"
    }}>
      <div className="hidden md:block"><Image src={heroPhoto} alt="Snow" width={2000} /></div>
      <div className="sm:block md:hidden object-cover"><Image src={heroPhoto2} /></div>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
        <Image src={Asset3} width={200} />

        <Link href="/book"><button type="button" class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Book Appointment
          <svg aria-hidden="true" class="w-5 h-5 ml-2 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button></Link>

      </div>
    </div>
  </>)
}

export default Hero