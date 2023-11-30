import Image from 'next/image'
import themes from '@/helpers/themes'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='p-[20px] lg:p-[50px] flex bg-gray-100 bg-[url(https://i.pinimg.com/originals/69/f9/e9/69f9e9afdabacb960185c5aaea3af619.gif)] bg-cover flex-col items-center'>
      <div className='overlay bg-black/50 flex items-center justify-center w-full h-full min-h-screen '>

        <div className='flex flex-col items-center justify-center z-20'>
          <p className='text-[25px] lg:text-[90px] opacity-75'>Enter the Dark World</p>
          <h2 className='text-[15px] lg:text-[35px] lg:-mt-[20px] opacity-75 mb-10'>Plunge into Himanshu's Life</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 place-items-center">
            {
              themes.map((theme, index) =>
                <Link className='text-center flex flex-col items-center p-8 bg-[#3335] transition-all hover:scale-125 rounded-xl' href={theme.url}>
                  <img src={theme.imgSrc}/>
                  <p className=''></p>
                </Link>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}
