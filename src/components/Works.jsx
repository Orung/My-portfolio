import React from 'react'
import vanboss from '../assets/images/vanboss.png'
import adbirt from '../assets/images/adbirt.png'
import kompletecare from '../assets/images/kompletecare.png'
import inventory from '../assets/images/inventory.png'


const Works = () => {
    const workData = [
        { id: 1, image: kompletecare, link:'', title: 'KompleteCare', description: 'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.', skill: ['NuxtJs', 'Bootstrap', 'GraphQl'] },
        { id: 2, image: vanboss, link:'', title: 'Vanboss', description: 'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.', skill: ['NextJs', 'Bootstrap', 'REST'] },
        { id: 3, image: adbirt, link:'', title: 'Adbirt', description: 'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.', skill: ['HTML', 'Bootstrap'] },
        ]
    return (
        <div>
            <section className="container m-auto my-[5rem]">
                <div>
                    <h4 className="sm:text-[18px] text-[14px] text-[#aaa5c3] uppercase tracking-wider">
                        MY WORK
                    </h4>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        Projects.
                    </h2>
                    <p className="mt-4 text-[#aaa5c3] text-[17px] max-w-3xl leading-[30px]">
                        Following projects showcases my skills and experience through
                        real-world examples of my work. Each project is briefly described with
                        links to code repositories and live demos in it. It reflects my
                        ability to solve complex problems, work with different technologies,
                        and manage projects effectively.
                    </p>
                </div>
                <div className="mt-20 flex flex-wrap gap-7">
                    {
                        workData.map((data) => (
                            <a href={data.link} target="_blank" rel='noreferrer' key={data.id}>
                                <div className='rounded bg-gradient-to-t from-[#F2F2F2]  p-[0.1rem] to-[#F2C94C] '>
                                <div className="bg-[#0B1138] rounded sm:w-[360px] w-full">
                                    <img
                                        src={data.image}
                                        alt="frontend"
                                        className="object-fill h-[200px] w-full rounded mb-4"
                                    />
                                    <div className='p-5 text-white'>
                                        <h2 className="text-white font-bold text-[24px]">{data.title}</h2>
                                        <p className="mt-2 text-secondary text-[14px]">
                                            {data.description}
                                        </p>
                                        <div className="flex gap-5 flex-wrap mt-4 text-white">
                                            {data.skill.map((item, index) => (
                                                <span key={index}>#{item}</span>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Works