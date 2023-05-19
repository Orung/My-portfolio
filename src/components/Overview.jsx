import React from 'react'

const Overview = () => {
    return (
        <div>
            <section className="container m-auto mt-[10rem] mb-[12rem]" id="about">
                <div>
                    <h4 className="sm:text-[18px] text-[14px] text-[#aaa5c3] uppercase tracking-wider">
                        INTRODUCTION
                    </h4>
                    <h2
                        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
                    >
                        Overview.
                    </h2>
                    <p className="mt-4 text-[#aaa5c3] text-[17px] max-w-3xl leading-[30px] text-justify md:text-lef">
                        I&apos;m a skilled Full Stack software developer with experience in JavaScript, and expertise in frameworks like VueJs, React,
                        Node.js, mySQL and Express.js. I&apos;m a quick learner and collaborate
                        closely with clients to create efficient, scalable, and user-friendly
                        solutions that solve real-world problems. Let&apos;s work together to bring
                        your ideas to life!
                    </p>
                    <div className="flex flex-wrap gap-[5rem] mt-[4rem] md:justify-start justify-center">
                        <div className="bg-tertiary rounded-[20px]   py-1 px-1  max-w-sm bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500">
                            <div className='bg-[#0B1138] flex justify-evenly rounded-[20px] items-center  py-5 px-12  min-h-[280px] flex-col'>
                                <svg width="52" height="39" viewBox="0 0 52 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.0123 0L12.8049 38.4147H19.2074L38.4147 0H32.0123ZM6.40245 6.40245L0 19.2074L6.40245 32.0123H12.8049L6.40245 19.2074L12.8049 6.40245H6.40245ZM38.4147 6.40245L44.8172 19.2074L38.4147 32.0123H44.8172L51.2196 19.2074L44.8172 6.40245H38.4147Z" fill="#F2F2F2" />
                                </svg>
                                <h4 className='text-white'>Frontend Developer</h4>
                            </div>
                        </div>
                        <div className="bg-tertiary rounded-[20px]   py-1 px-1  max-w-sm bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500">
                            <div className='bg-[#0B1138] flex justify-evenly rounded-[20px] items-center  py-5 px-12  min-h-[280px] flex-col'>
                                <svg width="35" height="48" viewBox="0 0 35 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5625 8.72727H28.4375V13.0909H32.8125V4.36364C32.8125 1.96364 30.8438 0.0218182 28.4375 0.0218182L6.5625 0C4.15625 0 2.1875 1.96364 2.1875 4.36364V13.0909H6.5625V8.72727ZM24.9594 34.0145L35 24L24.9594 13.9855L21.875 17.0836L28.8094 24L21.875 30.9164L24.9594 34.0145ZM13.125 30.9164L6.19062 24L13.125 17.0836L10.0406 13.9855L0 24L10.0406 34.0145L13.125 30.9164ZM28.4375 39.2727H6.5625V34.9091H2.1875V43.6364C2.1875 46.0364 4.15625 48 6.5625 48H28.4375C30.8438 48 32.8125 46.0364 32.8125 43.6364V34.9091H28.4375V39.2727Z" fill="white" />
                                </svg>
                                <h4 className='text-white'>Backend Developer</h4>
                            </div>
                        </div>
                        <div className="bg-tertiary rounded-[20px] py-1 px-1  max-w-sm bg-gradient-to-t from-rose-400 via-fuchsia-500 to-indigo-500">
                            <div className='bg-[#0B1138] flex justify-evenly rounded-[20px] items-center  py-5 px-12  min-h-[280px] flex-col'>
                                <svg width="49" height="44" viewBox="0 0 49 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49 14.6667V9.77778H44.1V4.88889C44.1 2.2 41.895 0 39.2 0H4.9C2.205 0 0 2.2 0 4.88889V39.1111C0 41.8 2.205 44 4.9 44H39.2C41.895 44 44.1 41.8 44.1 39.1111V34.2222H49V29.3333H44.1V24.4444H49V19.5556H44.1V14.6667H49ZM39.2 39.1111H4.9V4.88889H39.2V39.1111ZM9.8 24.4444H22.05V34.2222H9.8V24.4444ZM24.5 9.77778H34.3V17.1111H24.5V9.77778ZM9.8 9.77778H22.05V22H9.8V9.77778ZM24.5 19.5556H34.3V34.2222H24.5V19.5556Z" fill="white" />
                                </svg>
                                <h4 className='text-white'>Full Stack Developer</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Overview