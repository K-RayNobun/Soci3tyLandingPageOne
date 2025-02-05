import React from 'react';
import ScrollCirclesSquare from '../components/ScrollTree';
import AvatarCircle from '../components/AvatarCircle';

const LandingPage = () => {
  return (
    <>
      <main className='pb-[300px] bg-sludge -z-10 w-screen'>
        <div className='mb-16 md:mb-[100px] pt-3 md:pt-[20px]'>
          <img className='w-[160px] md:w-[220px]' src="/src/assets/logo_name.png" alt="Society Logo" />
        </div>
        <section className="relative w-full z-20 px-[10%] sm:px-[15%] overflow-visible font-bold flex flex-col items-center text-center h-[600px] sm:h-[700px] md:h-[750px]">
          <div className='absolute z-20 top-[50%] left-[12%] rounded-full size-[500px] blur-lg bg-greenie opacity-20'></div>
          <div className='max-w-[530px]'>
            <h1 className='text-white text-[32px] md:text-[48px] mb-[25px]'>
              Let's make your vision <br />
              <span className='text-indigo text-[40px] md:text-[54px] lg:text-[64px]'>
                a reality
              </span>
            </h1>
            <h5 className='text-white text-[18px] sm:text-lg md:text-[20px] font-normal'>
              You are a visionary entrepreneur and <br />
              <span className='font-bold'>you want to have impact.</span>
              <br />
              The Soci3ty is the technological and community layer to make it happen.
              <br />
              <span className='font-light italic'>Find mentors, early adopters, and financial resources.</span>
            </h5>
          </div>
          <div className='w-[400px] sm:w-[500px] md:w-[800px] lg:w-[1000px] p-0 mt-2 overflow-visible z-10 relative'>
            <img className='w-full' src="src/assets/header_video.png" alt="No Video Loaded" />
            <div className='absolute top-[48%] right-[48%] size-[40px] rounded-full bg-gray-800/40 hover:bg-gray-800/80 hover:scale-125 flex items-center justify-center'>
              <div
                id='triangle'
                className='ml-1 relative bg-white hover:transition-transform'
                style={{
                  width: '12px',
                  height: '12px',
                  clipPath: 'polygon(0% 0%, 0% 100%, 75% 50%)',
                }}
              ></div>
            </div>
          </div>
        </section>

        <section className='z-0 mt-[-155px] md:mt-[20px] min-h-max bg-indigo md:pb-[100px] h-[720px] md:h-[920px] lg:h-[1200px] flex flex-col items-center' style={{ width: '100%', clipPath: 'polygon(0% 8%, 100% 0%, 100% 92%, 0% 100%)' }}>
          <div className='w-[80%] sm:w-[70%] md:w-[50%] mt-28 md:mt-[160px] mb-10 md:px-[10%] flex flex-col items-center justify-center text-[18px] sm:text-[24px] text-center text-white'>
            <h1 className='text-[30px] md:text-[40px] leading-10 font-semibold text-center'>
              A platform that supports visionaries
            </h1>
            <p className='font-light md:leading-[32px]'>
              The Soci3ty is made up of pioneers who are at the forefront of change and who want to come
              <span className='font-bold'> together and support each other?</span>
            </p>
          </div>

          <div className='sm:w-[80%] min-w-max mx-auto bg-greenieieie rounded-lg my-4 max-h-[500px] md:h-[580px] lg:h-[780px]'>
            <div id="thead" className='h-[15%] py-5 text-center min-w-full bg-black rounded-t-lg'>
              <h3 className='text-greenie font-bold text-[28px]'>Other platforms</h3>
            </div>
            <div className='flex h-full text-white text-xl md:text-[25px] rounded-b-lg bg-gray-700 md:text-2xl font-bold justify-between gap-1'>
              <ul className='bg-black flex flex-col justify-between pt-[3%] pb-10 px-4 md:px-8 w-[28%] text-center md:text-end rounded-bl-lg'>
                <li className='h-1/5'>Ownership</li>
                <li className='h-1/5'>Governance</li>
                <li className='h-1/5'>Value Creation</li>
                <li className='h-1/5'>Target audience</li>
                <li className='h-1/5 pt-4 lg:pt-8'>Signup /onboarding</li>
              </ul>
              <ul className='bg-black flex flex-grow flex-col justify-between pt-[3%] pb-10 px-4 font-normal text-center'>
                <li>Team/shareholders</li>
                <li>Centralized</li>
                <li>Centralized at top</li>
                <li>Privileged</li>
                <li>Free for all</li>
              </ul>
              <ul className='bg-black flex flex-grow flex-col justify-between pt-[3%] pb-10 px-4 text-center rounded-br-lg'>
                <li>You</li>
                <li>Decentralized</li>
                <li>Shared at bottom</li>
                <li>Truly global</li>
                <li>Referral only</li>
              </ul>
            </div>
          </div>
          <button className='uppercase w-60 font-semibold rounded-full mt-24 bg-greenie text-lg px-[30px] py-[17px]'>
            Join the Network
          </button>
        </section>

        <section className='py-20 px-12 mt-[150px] min-h-max w-full rounded-[] flex flex-col justify-between items-center'>
          <h3 className='text-3xl sm:text-4xl font-bold text-white text-center mb-16'>A platform built for visionaries</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-[28px] max-w-[780px]'>
            <div className="flex items-center rounded-xl font-bold text-white py-[7%] px-[10%] border-8 border-greenie text-center">
              A global pool of impact-driven changemakers and talent to collaborate with
            </div>
            <div className="flex items-center rounded-xl font-bold text-white py-[7%] px-[10%] border-8 border-greenie text-center">
              Online and IRL events to network, grow and find collaborators
            </div>
            <div className="flex items-center rounded-xl font-bold text-white py-[7%] px-[8%] border-8 border-greenie text-center">
              A collective treasury governed by members to support impact-driven initiatives
            </div>
            <div className="flex items-center rounded-xl font-bold text-white py-[7%] px-[10%] border-8 border-greenie text-center">
              Ability to organize your community in a clan to empower it and offer an opportunity for financial sustainability
            </div>
          </div>
          <button className='uppercase w-52 font-semibold rounded-full mt-12 bg-greenie text-lg px-[30px] py-[17px]'>
            Apply Here
          </button>
        </section>

        <section className='py-20 px-[15%] min-h-max w-full flex flex-col items-center'>
          <h2 className='text-white font-bold text-[40px] sm:text-[48px] mb-[64px]'>
            They joined us
          </h2>
          <div className='flex flex-wrap py-8 gap-[30px] justify-center w-[90%]'>
            <AvatarCircle avatar_url='/src/assets/avatars/aldeguer.png' name='Emmanuel Aldeguer' />
            <AvatarCircle avatar_url='/src/assets/avatars/koko.png' name='Koko ' />
            <AvatarCircle avatar_url='/src/assets/avatars/etienne.png' name='Etienne de Sainte Marie' />
            <AvatarCircle avatar_url='/src/assets/avatars/fabrizi.png' name='Emilie-ALice Fabrizi ' />
            <AvatarCircle avatar_url='/src/assets/avatars/gallardo.png' name='Nico Gallardo' />
          </div>
        </section>

        <section className="min-h-[800px] h-max bg-greenie pt-[120px] pb-[200px] flex flex-col items-center overflow-visible" style={{ width: '100%', clipPath: 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)' }}>
          <h2 className="text-sludge font-bold text-[36px] text-center md:text-[48px]">What you can do as a founder</h2>
          <div className='h-[100%] w-[60%]'>
            <ScrollCirclesSquare />
          </div>
        </section>

        <section className='w-full py-24 mt-12 flex flex-col items-center '>
          <div className="mt-[-340px] md:mt-[-325px] mb-[100px] z-20 w-[432px] h-auto">
            <img src="/src/assets/coin.png" alt="" />
          </div>
          <div className='w-[80%] md:w-[60%] py-4 text-center flex flex-col items-center justify-center'>
            <div className='flex mb-8 md:mb-12'>
              <h2 className='text-white font-bold text-[40px] sm:text-[48px]'>You own</h2>
              <img src="/src/assets/logo_name.png" className='md:w-[232px] w-[180px] h-auto' alt="Logo Name Unavailable" />
            </div>
            <div className='text-wrap w-[80%]'>
              <p className='w-full text-white text-[20px] md:text-3xl'>
                Unlike traditional companies, The Soci3ty will only emit shares once that can be acquired during an initial sale or by participating in The Soci3ty economic activity.
              </p>
              <div className='mt-12 md:mt-16 text-wrap'>
                <h4 className='text-indigo text-[32px] md:text-[40px] font-bold'>Ownership</h4>
                <h5 className='text-white text-[20px] md:text-[28px] font-bold mb-4 md:mb-8'>You own The Soci3ty and the assets</h5>
                <h4 className='text-indigo text-[32px] md:text-[40px] font-bold'>Governance</h4>
                <h5 className='text-white text-[20px] md:text-[28px] font-bold mb-4 md:mb-8'>Every month you gain more governance power as the treasury grows</h5>
                <h4 className='text-indigo text-[32px] md:text-[40px] font-bold'>Utility</h4>
                <h5 className='text-white text-[20px] md:text-[28px] font-bold mb-4 md:mb-8'>You can also use Arrow to perform important actions (sponsor citizens, create a clan, etc...)</h5>
              </div>
            </div>
          </div>
          <button className='uppercase font-semibold rounded-full mt-12 bg-greenie text-[22px] md:text-[22px] px-[45px] py-[25px]'>
            Join the movement
          </button>
        </section>
      </main>
    </>
  )
}

export default LandingPage;
