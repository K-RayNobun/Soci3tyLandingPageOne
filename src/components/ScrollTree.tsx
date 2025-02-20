import { useEffect, useState, useRef } from 'react';

const CircleElement = ({index, contentArray, step}: {index: number, contentArray: Array<string>, step: number}) => {
return <div className={`rounded-full size-[200px] p-2 transform transition-all duration-1000 ${step === index ? 'scale-[110%] bg-indigo' : ' bg-sludge '}`}>
        <div className={`border-8 text-[12px] text-justified rounded-full h-full flex flex-col items-center p-3 justify-center ${step === index ? 'scale-[110%] text-sludge bg-indigo border-[16px] border-sludge/40' : ' text-indigo border-indigo'}`}>
            <h4 className='w-max text-3xl font-blaak font-bold mt-[-20px]'>{index}</h4>
            <h4 className='text-center'>{contentArray[index - 1]}</h4>
        </div>
    </div>
}

const ScrollCirclesSquare = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollTreeRef = useRef<HTMLDivElement | null>(null);

  const circleText = ['Acquire an ownership stake of the ecosystem', 'Onboard your community and create a clan', 'Organize or join events with like minded people for mutual support and growth', 'Collaborate with other leaders and talent on impact driven projects', 'Participate in the governance of the collective treasury', 'Receive funding for your projects from The Soci3ty'];

  useEffect(() => {
    const handleWheel = (e: any) => {

        const element = scrollTreeRef.current;

      if (element && element.contains(e.target)) {
        // Get the element's position relative to the viewport
        const elementTop = window.scrollY;
        // console.log('Position is: ', elementTop);
        console.log('Window Scroll Y:', elementTop);
        console.log('Scroll Tree Y:', element.scrollHeight)

        if (element.scrollHeight >= elementTop && element.scrollHeight <= elementTop + 50)
        {
          console.log('##### Time for the scroll tree! #####')
          setScrollPosition(0);
        } else {
          console.log('#### Getting out of Scrolltree ####')
        }


        let scale = 75;

        if (scrollPosition <= 15100 && scrollPosition > 0) {
          e.preventDefault(); // Prevent default page scroll
          console.log('Prevented default event. \t Scale is ', scale);
        } else {
          scale = 200;
          console.log('Scrolling out of Tree');
        }

        setScrollPosition(prevScrollPosition => {
          let newScrollPosition = prevScrollPosition;
          // Check the wheel direction and update scroll position accordingly
          if (e.deltaY > 0) {
            newScrollPosition = Math.min(newScrollPosition + scale, elementTop + 14000); // Max scroll position to trigger last circle
          } else if (e.deltaY < 0) {
            newScrollPosition = Math.max(newScrollPosition - scale, elementTop); // Min scroll position to trigger first circle
          }
          return newScrollPosition;
        });
      }  
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
        
    // Cleanup on component unmount
    return () => {
        window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    // Based on scroll position, update the active circle
    if (scrollPosition >= 15000) {
        setActiveStep(6);
    } else if (scrollPosition >= 12000) {
        setActiveStep(5);
    } else if (scrollPosition >= 9000) {
        setActiveStep(4);
    } else if (scrollPosition >= 6000) {
        setActiveStep(3);
    } else if (scrollPosition >= 3000) {
        setActiveStep(2);
    } else {
        setActiveStep(1);
    }
  }, [scrollPosition]);

  return (
    <div className="relative w-full overflow-visible pt-20" ref={scrollTreeRef}>
      <div className='w-[65%] bg-gray-300 lg:w-[50%]  mx-auto flex flex-col items-center justify-center'>
        <div className='flex justify-between w-full mb-[-20px] z-20'>
            <CircleElement index={1} contentArray={circleText} step={activeStep} />
            <CircleElement index={2} contentArray={circleText} step={activeStep} />
        </div>
        <div className='border-[16px] border-indigo rounded-xl border-t-transparent h-[70px] w-[75%]'></div>
        <div className='h-[30px] border-[8px] border-indigo w-[1px]'></div>
        <div className='border-l-[22px] border-r-[22px] border-t-[16px] border-indigo rounded-l-xl rounded-r-xl border-l-transparent border-r-transparent'></div>
        <CircleElement index={3} contentArray={circleText} step={activeStep} />        <div className='h-[30px] border-[8px] border-indigo w-[1px]'></div>
        <div className='border-l-[22px] border-r-[22px] border-t-[16px] border-indigo rounded-l-xl rounded-r-xl border-l-transparent border-r-transparent'></div>
        <CircleElement index={4} contentArray={circleText} step={activeStep} />        <div className='h-[22px] border-[8px] border-indigo w-[1px]'></div>
        <div className='border-l-[22px] border-r-[22px] border-t-[16px] border-indigo rounded-l-xl rounded-r-xl border-l-transparent border-r-transparent'></div>
        <div className=' border-[16px] border-indigo rounded-xl border-b-transparent h-[70px] w-[74%]'></div>
        <div className='flex justify-between w-full mt-[-20px] z-20'>
            <CircleElement index={5} contentArray={circleText} step={activeStep} />
            <CircleElement index={6} contentArray={circleText} step={activeStep} />
        </div>
      </div>
    </div>
  );
};

export default ScrollCirclesSquare;
