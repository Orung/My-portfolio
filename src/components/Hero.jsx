import React from 'react'
import laptop from '../assets/images/laptop.gif'
import arrow from '../assets/images/arrow-dropdown.gif'

const Hero = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#05034E] overflow-hidden relative h-screen'>
                <div className='container m-auto pt-[5rem]'>
                    <div className='lg:absolute w-full top-[-14rem] right-[-19rem]'>
                        <img src={laptop} alt="Laptop" className='w-full' />
                    </div>
                </div>
                <div className="container m-auto mt-[-3rem] md:mt-[8rem] flex relative text-center md:text-left">
                    <div className='mr-5 hidden md:block'>
                        <div className="cirlce bg-[#F37A23] w-8 h-8 rounded-full"></div>
                        <div className="w-1 sm:h-80 h-40 v-line ml-[13px] bg-gradient-to-b from-[#F37A23]"></div>
                    </div>
                    <div>
                        <h1 className="font-black lg:text-[64px] sm:text-[60px] xs:text-[50px] text-[20px] lg:leading-[98px] mt-2 text-white">
                            Hi, I&apos;m <span className='text-[#F37A23]'> Promise Orung</span>
                        </h1>
                        <p className="text-white md:text-[24px] sm:text-[50px] xs:text-[40px] text-[24px] mt-3">
                            I develop Attractive,<br />
                            user interfaces and web applications
                        </p>
                    </div>
                </div>
                <div className='relative'>
                   <a href='#about'> <img src={arrow} alt="Drop down arrow" className='absolute right-[36%] md:right-[50%] w-[8rem] md:bottom-[-17rem]' /></a>
                </div>
            </div>

        </>
    )
}

export default Hero