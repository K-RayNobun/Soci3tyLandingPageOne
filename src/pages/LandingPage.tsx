import ScrollCirclesSquare from '../components/ScrollTree';
import AvatarCircle from '../components/AvatarCircle';
import HeaderVideo from '/header_video.png';
import "../index.css";
 

const LandingPage = () => {
  return (
    <>
      <main className='pb-[150px] bg-[url("/grayn.png")] bg-sludge  -z-10 w-screen'>
        <div className='mb-16 md:mb-[100px] pt-3 md:pt-[30px] md:pl-[30px]'>
          <img className='w-[160px] md:w-[220px]' src="/logo_name.png" alt="Society Logo" />
        </div>
        <section className="relative w-full z-20 px-[10%] sm:px-[15%] overflow-visible font-bold flex flex-col items-center text-center h-[700px] sm:h-[700px] md:h-[750px]">
          <div className='max-w-[800px]'>
            <h1 className='text-white text-[40px] font-blaak md:text-[48px] lg:text-[64px] mb-[20px] md:mb-[25px] md:leading-[64px] lg:leading-[72px]'>
              Let's make your vision <br />
              <span className='text-indigo text-[48px] md:text-[60px] lg:text-[78px] leading-10'>
                a reality
              </span>
            </h1>
            <h5 className='text-white px-4 text-[20px] md:text-[20px] lg:text-[24px]'>
              You are a visionary entrepreneur and <br />
              <span className='font-bold'>you want to have impact.</span>
              <br />
              The Soci3ty is the technological and community layer to make it happen.
              <br />
              <span className='font-light italic'>Find mentors, early adopters, and financial resources.</span>
            </h5>
          </div>
          <div className='w-[120%] md:w-[800px] lg:w-[1000px] mt-2 overflow-visible z-10 relative'>
            <img className='sm:w-[90%] sm:mb-0 mx-auto w-full' src={HeaderVideo} alt="No Video Loaded" />
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

        <section className='relative mt-[-15%] md:mt-[0px] mb-[20%] md:mb-[0%] min-h-max md:pb-[100px] h-[880px]  md:h-[1220px] lg:h-[1200px] flex flex-col items-center'>
          <div className='absolute top-[0px] md:top-0 left-0 -z-0 flex flex-col items-center h-[75%] w-full mt-[0px] bg-[url("/grainblue.jpg")] clip-trapezis sm-screen'>
          </div>
          <div className='bg-gray-400 z-10 w-[100%] md:w-[80%] mt-28 md:mt-[10%] lg: mb-10 md:px-[10%] lg:px-[0px] flex flex-col items-center justify-center text-[18px] sm:text-[24px] text-center text-white'>
            <h1 className='text-[30px] font-blaak md:text-[40px] lg:text-[48px] leading-10 lg:leading-[65px] font-semibold text-center my-[30px]'>
              A platform that supports visionaries
            </h1>
            <p className=' md:leading-[32px] text-[18px] md:text-[20px] lg:text-[28px]'>
              The Soci3ty is made up of pioneers who are at the forefront of change and who want to come
              <span className='font-bold'> together and support each other?</span>
            </p>
          </div>

          <div className='sm:w-[80%] z-20 min-w-max mx-auto rounded-lg mt-4  md:h-[580px] lg:h-[780px]'>
            <div id="thead" className='relative h-[15%] pb-10 py-5 text-center min-w-full bg-sludge rounded-t-2xl'>
              <h3 className='text-greenie font-blaak text-[28px]'>Other platforms</h3>
              <img src="/logo_name.png" alt="" className='absolute right-[10%] top-6 w-[80px] sm:w-[120px] lg:w-[180px]' />
            </div>
            <div className='flex h-[80%] text-white text-xl md:text-[20px] lg:text-[24px] rounded-b-lg bg-gray-700 md:text-2xl font-bold justify-between gap-1'>
              <ul className='bg-sludge font-blaak flex flex-col justify-between text-lg md:text-xl pt-[3%] pb-10 px-4 md:px-8 w-[28%] text-center md:text-end rounded-bl-lg'>
                <li className='h-1/5'>Ownership</li>
                <li className='h-1/5'>Governance</li>
                <li className='h-1/5'>Value Creation</li>
                <li className='h-1/5 5 lg:pt-4'>Target audience</li>
                <li className='h-1/5 pt-4 lg:pt-8'>Signup /onboarding</li>
              </ul>
              <ul className='bg-sludge flex flex-grow flex-col justify-between pt-[3%] pb-10 px-4 font-normal text-center'>
                <li>Team/shareholders</li>
                <li>Centralized</li>
                <li>Centralized at top</li>
                <li>Privileged</li>
                <li>Free for all</li>
              </ul>
              <ul className='bg-sludge flex flex-grow flex-col justify-between pt-[3%] pb-10 px-4 text-center rounded-br-lg'>
                <li>You</li>
                <li>Decentralized</li>
                <li>Shared at bottom</li>
                <li>Truly global</li>
                <li>Referral only</li>
              </ul>
            </div>
          </div>
          <button className='uppercase px-12 md:px-[3%] rounded-full mt-5 md:mt-10 bg-greenie hover:bg-greenie/80 active:scale-[105%] text-[16px] md:text-[20px] px-[24px] py-[17px] md:py-[20px]'>
            Join the Network
          </button>
        </section>
        <div className='relative w-full flex justify-center overflow'>
          <div className='absolute z-10 mt-[-80%] md:mt-[-40%] left-[-10%] md:left-[0%] rounded-full size-[600px] blur-2xl bg-greenie to-transparent opacity-20'></div>
          <img src="/logo.png" alt="" className='w-[180px] lg:w-[250px] mb-[-50px] z-20 overflow-visible' />
        </div>
        <section className='relative py-20 md:py-[120px] px-12 mt-[0px] min-h-max w-full lg:px-[10%] flex flex-col justify-between items-center clip-curve bg-black/30 overflow'>
          <div className='absolute z-20 top-[-8%] left-[12%] rounded-full size-[60%] blur-3xl bg-indigo opacity-20'></div>
          <h3 className='text-3xl sm:text-4xl font-blaak text-white text-center mb-16'>A platform built for visionaries</h3>
          <div className='grid grid-cols-1 md:grid-cols-2  gap-[24px] text-[px] md:text-[16px] max-w-[80%]'>
            <div className="flex items-center rounded-2xl lg:rounded-3xl font-bold text-white py-[7%] md:py-[7%] px-[7%] lg:px-[10%] max-h-[220px] border-[5px] lg:border-8 border-greenie text-center">
              A global pool of impact-driven changemakers and talent to collaborate with
            </div>
            <div className="flex items-center rounded-2xl lg:rounded-3xl font-bold text-white py-[7%] md:py-[7%] px-[10%] lg:px-[10%] max-h-[220px] border-[5px] lg:border-8 border-greenie text-center">
              Online and IRL events to network, grow and find collaborators
            </div>
            <div className="flex items-center rounded-2xl lg:rounded-3xl font-bold text-white py-[7%] md:py-[7%] px-[10%] lg:px-[10%] max-h-[220px] border-[5px] lg:border-8 border-greenie text-center">
              A collective treasury governed by members to support impact-driven initiatives
            </div>
            <div className="flex items-center rounded-2xl lg:rounded-3xl font-bold text-white py-[7%] md:py-[7%] px-[7%] lg:px-[10%] max-h-[220px] border-[5px] lg:border-8 border-greenie text-center">
              Ability to organize your community in a clan to empower it and offer an opportunity for financial sustainability
            </div>
          </div>
          <button className='uppercase px-12 md:px-[5%] rounded-full mt-12 bg-greenie hover:bg-greenie/80 active:scale-[105%] text-[16px] md:text-[20px] px-[30px] py-[17px] md:py-[25px]'>
            Apply Here
          </button>
        </section>

        <section className='py-20 px-[15%] min-h-max w-full flex flex-col items-center'>
          <h2 className='text-white font-blaak text-[32px] md:text-[36px] mb-[20px] md:mb-[40px] lg:mb-[64px]'>
            They joined us
          </h2>
          <div className='flex flex-wrap py-8 gap-[30px] justify-center w-[100%]'>
            <AvatarCircle avatar_url='/avatars/aldeguer.png' logo_url='/logos/axone.jpg' name='Emmanuel Aldeguer' />
            <AvatarCircle avatar_url='/avatars/koko.png' logo_url='/logos/safariDAO.jpg' name='Koko ' />
            <AvatarCircle avatar_url='/avatars/etienne.png' logo_url='/logos/republike.jpg' name='Etienne de Sainte Marie' />
            <AvatarCircle avatar_url='/avatars/fabrizi.png' logo_url='/logos/TGTS.jpg' name='Emilie-ALice Fabrizi ' />
            <AvatarCircle avatar_url='/avatars/gallardo.png' logo_url='/logos/lottoPGF.jpg' name='Nico Gallardo' />
          </div>
        </section>

        <section className="min-h-[800px] h-max bg-[url('/graingreen.jpg')] pt-[120px] pb-[200px] flex flex-col items-center overflow-visible" style={{ width: '100%', clipPath: 'polygon(0% 7%, 100% 0%, 100% 93%, 0% 100%)' }}>
          <h2 className="text-sludge font-blaak text-[24px] md:text-[40px] lg:text-[48px] text-center ">What you can do as a founder</h2>
          <div className='h-[100%] w-[100%] flex items-center'>
            <ScrollCirclesSquare />
          </div>
        </section>

        <section className='w-full py-24 mt-12 flex flex-col items-center text-[18px] md:text-[20px] lg:text-[24px]'>
          <div className="relative mt-[-340px] md:mt-[-325px] mb-[100px] z-20 w-[432px] h-auto">
            <div className='absolute rounded-full size-[400px] bg-gradient-radial from-indigo to-greenie opacity-80'></div>
            <img src="/coin.png" alt="" className='z-10' />
          </div>
          <div className='w-[100%] md:w-[60%] py-4 text-center flex flex-col items-center justify-center'>
            <div className='flex mb-8 md:mb-1'>
              <h2 className='text-white font-blaak lg:text-[48px] text-[32px]'>You own</h2>
              <img src="/logo_name.png" className='w-[150px] md:w-[200px] lg:w-[250px]' alt="Logo Name Unavailable" />
            </div>
            <div className='text-wrap w-[80%]'>
              <p className='w-full text-white'>
                Unlike traditional companies, The Soci3ty will only emit shares once that can be acquired during an initial sale or by participating in The Soci3ty economic activity.
              </p>
              <div className='mt-12 md:mt-16 text-wrap text-[18px] md:text-[20px] lg:text-[24px]'>
                <h4 className='text-indigo text-[26px] md:text-[26px] font-blaak'>Ownership</h4>
                <h5 className='text-white font-bold mb-4 md:mb-8'>You own The Soci3ty and the assets</h5>
                <h4 className='text-indigo text-[32px] md:text-[26px] font-blaak'>Governance</h4>
                <h5 className='text-white font-bold mb-4 md:mb-8'>Every month you gain more governance power as the treasury grows</h5>
                <h4 className='text-indigo text-[32px] md:text-[26px] font-blaak font-bold'>Utility</h4>
                <h5 className='text-white font-bold mb-4 md:mb-8'>You can also use Arrow to perform important actions (sponsor citizens, create a clan, etc...)</h5>
              </div>
            </div>
          </div>
          <button className='uppercase rounded-full mt-12 bg-greenie hover:bg-greenie/80 active:scale-[105%] text-[16px] md:text-[20px] px-[24px] md:py-[20px] lg:px-[45px] py-[25px]'>
            Join the movement
          </button>
        </section>
      </main>
    </>
  )
}

export default LandingPage;
