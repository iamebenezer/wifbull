import './App.css'
import React, { useEffect} from 'react'
import logo from "./assets/logo.png"
import x from "./assets/x.png"
import tg from "./assets/tg.png"
import logoTwo from "./assets/logo-2.png"
import roadmap from "./assets/roadmap.png"
import how from "./assets/how.png"
import howOne from "./assets/how-1.png"
import howTwo from "./assets/how-2.png"
import howThree from "./assets/how-3.png"
import howFour from "./assets/how-4.png"
import howFive from "./assets/how-5.png"
import Aos from "aos"
import 'aos/dist/aos.css'
import about from "./assets/about.png"
function App() {
    useEffect(()=>{
      Aos.init();
    }, [])
  return (
   <>
   
        <div className="bg-black text-white">
          
        
          
          <section className="bg-cover md:h-[639px] bg-center text-center bg-[url('./assets/one.png')] p-8">
          <header className="bg-[#D82F28] px-1 py-1 md:p-3 flex rounded-full justify-between items-center">
            <div className="flex items-center space-x-4 md:-py-0 -py-3">
              <img src={logo} alt="Logo" className=" rounded-full"/>
              <nav className="hidden md:flex font-itim md:text-lg space-x-4">
                <a href="#" className="text-white">Home</a>
                <a href="#about" className="text-white">About</a>
                <a href="#roadmap" className="text-white">Roadmap</a>
                <a href="#how" className="text-white">How to Buy</a>
              </nav>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="">
              <img src={x} className='md:h-12 h-8 ' alt="" />
              </a>
              <a href="">
              <img src={tg} className='h-8 md:h-12' alt="" />
              </a>
              <button className="bg-white text-black text-md md:text-xl px-4 py-2 font-jeju rounded-full">Buy Now</button>
            </div>
          </header>
          <div className="flex justify-center items-center flex-col py-12 md:py-32">
            <h1 className="text-4xl md:text-6xl font-bold md:mb-16 font-jeju animate-pulse" data-aos="fade-up"
     data-aos-duration="1000">Welcome to WifBull</h1>
            <p className="mt-4 text-lg md:text-xl font-itim md:px-52">Get ready to charge with the bull market! WifBull is here, and we're not just running—we're stampeding. With our iconic cow donning the legendary MAGA hat, we're bringing the energy and spirit of a movement that's unstoppable. Backing Trump for the 2024 U.S. presidential election, we're set to lead the crypto world into a new era of greatness.</p>
            <p className="mt-4 font-bold font-itim md:text-xl md:mt-3">JOIN US AND RIDE THE WAVE TO SUCCESS!</p>
            </div>
          </section>
          
          <section className="bg-blue-500 text-white py-2 px-6 md:h-[561px]" id='about'>
           
            <div className="flex flex-col md:flex-row items-center mt-2" data-aos="fade-up"
     data-aos-duration="3000">
              <div className="md:w-1/2">
              <h2 className="text-3xl md:text-[60px] mt-3 mb-3 md:mt-0 md:mb-8 font-bold font-jeju animate-pulse text-center md:text-start">About WifBull</h2>
                <p className='font-itim text-lg  text-center md:text-start'>WifBull is more than a meme project; it's a revolution on the Ethereum chain. Inspired by the unstoppable force of the bull market and the iconic MAGA movement, WifBull is set to make the crypto world great again.</p>
                <p className="mt-4 font-itim text-lg  text-center md:text-start">Our mascot, the bold cow with the MAGA hat, symbolizes our mission: to lead the charge and break new ground. With Trump's 2024 campaign fueling our fire, we're ready for a bullish run like never before. If you're ready for a wild, bullish ride, WifBull is your ultimate ticket.</p>
              </div>
              <div className="md:w-1/2 my-8 md:mt-1 flex justify-center">
                <img src={about} alt="WifBull Mascot" className="rounded-full border-4 border-white"/>
              </div>
            </div>
          </section>
          
          <section className="bg-[url('./assets/roadmap.png')] p-8" id='roadmap'>
            <h2 className="text-[40px] mt-3 md:mt-0 md:text-[50px] font-bold text-center font-jeju animate-pulse">Roadmap</h2>
         
        <div className="bg-cover bg-center p-8">
        
          <div className="relative flex justify-center flex-col items-center max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>
        <div className="relative mb-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="ml-8 wobble bg-blue-500 w-80 md:w-96 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-2 font-jeju">Q2 2024: Project Launch</h2>
            <p className='font-itim text-xl'>Unleash WifBull on Ethereum</p>
            <p className='font-itim text-xl'>Kick off community building with epic hype</p>
          </div>
        </div>
        
        <div className="relative mb-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="ml-8 bg-blue-500 wobble w-80 md:w-96 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2 font-jeju">Q3 2024: Bullish Growth</h2>
            <p>Listing on top exchanges</p>
            <p>Drop the first wave of WifBull NFTs</p>
            <p>Announce powerhouse partnerships</p>
          </div>
        </div>
        
        <div className="relative mb-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="ml-8 bg-blue-500 wobble w-80 md:w-96 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2 font-jeju">Q4 2024: Global Expansion</h2>
            <p className='font-itim text-xl'>Launch the WifBull merch store</p>
            <p className='font-itim text-xl'>Collaborate with major influencers</p>
            <p className='font-itim text-xl'>Host community-driven events and contests</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="ml-8 bg-blue-500 wobble w-80 md:w-96 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2 font-jeju">Q1 2025: Beyond the Moon</h2>
            <p className='font-itim text-xl'>Organize global meetups and events</p>
            <p className='font-itim text-xl'>Expand utility and integration in DeFi</p>
            <p className='font-itim text-xl'>Keep the community pumped with ongoing rewards</p>
          </div>
        </div>
          </div>
        </div>
  
          </section>
          
          <section className="bg-blue-500  text-white p-8" id='how'>
         
            <div className="flex flex-col md:flex-row items-center mt-8">
              
            <div className="md:w-1/2 mt-3 md:mt-0 flex items-center flex-col justify-center">
            <h2 className="text-[30px] md:text-[50px] font-bold font-jeju text-center animate-pulse">How to Buy WifBull</h2>
                <img src={how} alt="How to Buy WifBull" className="mt-1" data-aos="fade-right"
     data-aos-duration="3000"/>
              </div>
              <div className="md:w-1/2" data-aos="fade-left"
     data-aos-duration="3000">
                <ul className="list-decimal  font-itim  text-2xl list-inside space-y-3">
                  <li className='py-1  flex justify-start items-center'>
                    <img src={howOne} className='h-8 mr-2' alt="" />
                    Get yourself a crypto wallet (MetaMask is our top pick).</li> <hr />
                  <li className='py-1  flex justify-start items-center'>
                  <img src={howTwo} className='h-8 mr-2' alt="" />
                    Load up on Ethereum (ETH) from your favorite exchange.</li>
                    <hr />
                  <li className='py-1  flex justify-start items-center'>
                  <img src={howThree} className='h-8 mr-2' alt="" />
                    
                    Connect your wallet to our platform.</li>
                    <hr />
                  <li className='py-1  flex justify-start items-center'>
                  <img src={howFour} className='h-8 mr-2' alt="" />
                    Swap that ETH for WifBull tokens.</li>
                  <hr />

                  <li className='py-1  flex justify-start items-center'>
                      <img src={howFive} className='h-8 mr-2' alt="" />
                      Welcome to the bull gang! Hold tight as we charge ahead.</li>
                      <hr />
                </ul>
              </div>
             
            </div>
          </section>
          
          <section className="bg-white text-white p-8">
            <div className="bg-[#D82F28] p-8 md:p-10 rounded-3xl" data-aos="fade-up"
     data-aos-duration="3000">
            <h2 className="text-3xl md:text-4xl md:hidden font-bold text-center font-jeju animate-pulse">Join the WifBull Revolution</h2>
           
            <div className="flex flex-col md:flex-row items-center mt-8">
             
              <div className="md:w-1/2">
              <h2 className="text-3xl md:text-[50px] hidden md:flex md:leading-[50px] md:mb-1 font-bold text-start font-jeju animate-pulse">Join the WifBull Revolution</h2>
           
                <p className='font-itim text-lg text-center md:text-start'>Stay in the loop and be part of the action! Follow us on Twitter, join our Telegram group, and dive into the most electrifying crypto community around. Together, we're making crypto great again!</p>
                <div className="flex  justify-center md:justify-start flex-row space-x-4 my-4">
                <a href="">
                <img src={x} className='h-12' alt="" />
                </a>
                  <a href="">
                <img src={tg} className='h-12' alt="" />
                </a>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img src={logoTwo} alt="Join the WifBull Revolution" className="w-80 rounded-full border-4 border-black"/>
              </div>
            </div>
           
            </div>
          </section>
          
          <footer className="bg-white text-black font-itim text-center p-4">
            <p>© 2024. All rights reserved.</p>
          </footer>
        </div>
   </>
  )
}

export default App
