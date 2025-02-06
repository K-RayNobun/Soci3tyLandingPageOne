
const AvatarCircle = ({avatar_url, logo_url='', name}:{avatar_url:string, logo_url?: string, name: string}) => {
  return (
    
    <>
        <div className='flex flex-col items-center'>
            <div className='size-[200px] md:size-[256px] rounded-full border-[5px] border-indigo  overflow-hidden'>
                <img src={avatar_url} alt="Avatar Image not loaded" className='pbject-stretch' />
            </div>
            <div className='w-full text-center'>
                <h3 className='text-white text-[24px] md:text-[32px] font-bold mt-3 mb-4'>{name}</h3>
                { logo_url ? 
                <img src={logo_url} className='w-[200px] mx-auto' alt="Logo Not Found" />
                : <div className='w-[60%] h-16 mx-auto bg-gray-500'></div>
                }
            </div>
        </div>
    </>
  )
}

export default AvatarCircle
