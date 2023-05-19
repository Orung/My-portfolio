import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import user from '../assets/images/user.png';

const Testimonials = () => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 768) {
        setSettings({
          ...settings,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      } else {
        setSettings({
          ...settings,
          slidesToShow: 3,
          slidesToScroll: 2,
        });
      }
    };

    // Update settings initially and whenever window is resized
    updateSettings();
    window.addEventListener("resize", updateSettings);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);
    
    const userTestimonial = [
        { id: 1, testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.', name: 'Sara Lee', position: 'CFO of Acme Co.', image: user },
        { id: 2, testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.', name: 'Sara Lee', position: 'CFO of Acme Co.', image: user },
        { id: 3, testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.', name: 'Sara Lee', position: 'CFO of Acme Co.', image: user },
        { id: 3, testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.', name: 'Sara Lee', position: 'CFO of Acme Co.', image: user },
        { id: 3, testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Hasan proved me wrong.Hasan, made a great website for us. Thanks, Hasan.', name: 'Sara Lee', position: 'CFO of Acme Co.', image: user }
    ]



    return (
        <div className='container m-auto'>
            <div className='bg-[#151030] rounded-2xl p-[2rem] md:p-[4rem]'>
                <h4 className="sm:text-[18px] text-[14px] text-[#aaa5c3] uppercase tracking-wider">
                    WHAT OTHERS SAY
                </h4>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-[5rem]">
                    Testimonials
                </h2>
                <Slider {...settings}>
                {userTestimonial.map((user) => (
                       <div key={user.id}>
                            <div className='bg-[#090325] bg-tertiary rounded-[20px] md:w-11/12 px-[1rem] md:px-[3rem] py-[2rem] m-auto' >
                            <p className='text-white quote text-8xl'>&quot;</p>
                            <p className='text-white'>{user.testimonial}</p>
                            <div className='mt-[3rem] flex justify-between items-center'>
                                <p>
                                    <span className='text-purple-400'>@ </span>
                                    <span className='text-white'>{user.name}</span><br />
                                    <span className='text-gray-400'>{user.position}</span></p>
                                <img src={user.image} alt="User" />
                            </div>
                        </div>
                       </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Testimonials