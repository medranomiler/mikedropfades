import heroPhoto from '../../public/mdfbanner.png'
import heroPhoto2 from '../../public/mdfLarge.jpeg'
// import heroPhoto3 from '../../public/mdfLarger.png'
import mdfLogoLarge from "../../public/mdfLogoLarge.png"
import Image from 'next/image'


function Hero() {


  return (<>
    <div style={{
      position: "relative",
      textAlign: "center",
      color: "white"
    }}>
      <div className="hidden md:block"><Image src={heroPhoto} alt="Snow" width={2000}/></div>
      <div className="sm:block md:hidden object-cover"><Image src={heroPhoto2} /></div>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
        <Image src={mdfLogoLarge} />
        </div>
    </div>
  </>)
}

export default Hero