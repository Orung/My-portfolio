import logo from '../assets/images/logo.png'
import { useEffect, useState } from "react";


function App() {



  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Work', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]

  const [isContentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    function toggleContent() {
      setContentVisible(window.innerWidth > 768);
    }
    toggleContent();
    window.addEventListener("resize", toggleContent);
    return () => window.removeEventListener("resize", toggleContent);
  }, []);

  return (
    <>
      <nav className='navbar py-4 fixed top-0 w-full bg-gradient-to-b from-[#05034E] z-40'>
        <div className="w-10/12 md:container flex justify-between items-center m-auto">
          <img src={logo} alt='logo' className='w-[50px] h-[50px]' />
          {isContentVisible &&
            <div className='bg-[#05034E] md:bg-transparent absolute md:static text-white left-0 top-0 h-screen md:h-auto w-full md:w-auto p-[3rem] md:p-0'>
              <div className='hambuger-collapse md:hidden absolute right-[3rem]' onClick={() => setContentVisible(!isContentVisible)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <ul className="navbar-nav md:flex gap-5 ms-auto mb-2 mb-lg-0">
                {
                  navigation.map((item) => (
                    <li className="nav-item mb-[3rem] md:mb-0" key={item.name}>
                      <a className="nav-link" aria-current="page" href={item.href}>{item.name}</a>
                    </li>
                  ))
                }
                <li className="nav-item mb-[3rem] md:mb-0 md:hidden">
                  <a href="/" className="bg-[#F37A23] hover:bg-[#ef8a41] text-white font-bold py-2 px-4 rounded">
                    Button
                  </a>
                </li>
              </ul>
            </div>
          }
          <div className='hambuger-collapse md:hidden' onClick={() => setContentVisible(!isContentVisible)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          <div className='button hidden md:block'>
            <a href="/" className="bg-[#F37A23] hover:bg-[#ef8a41] text-white font-bold py-2 px-4 rounded">
              Button
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
