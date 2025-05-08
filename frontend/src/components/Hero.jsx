import imgHero from '../assets/Hero.jpeg'

const Hero = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-start bg-gradient-to-r
         from-[#534053] to-[#2d2d2d] h-svh">
            <div className="flex justify-around items-center w-full h-full">
                <div className="gap-4">
                    <h1 className='text-white text-8xl'>India's</h1>
                    <h2 className='text-white text-6xl'>Top Fun Prediction Platform</h2>
                    <h4 className='text-white text-2xl'>Sports, Entertainment, Economy,or Trends</h4>
                </div>
                <div className="">
                    <img src={imgHero} className="rounded-lg"
                     height={600} width={700} alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero