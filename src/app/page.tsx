import AnimatedText from '@/components/AnimatedText'
import Name from '@/components/Name'
import SnakesGame from '@/components/SnakesGame'
import TicTacGame from '@/components/TickTacGame/TickTac'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-[85vh] w-full  flex justify-center gap-10 flex-wrap items-center p-2">
       <section className='flex flex-col h-full gap-2'>
        <p className='text-md pl-2'>Hi all. I am</p>
        <h2 className='text-4xl'>Adnan Gul</h2>
        <h3 className='text-blue text-2xl'>
         {">"} 
          <Name/>
        </h3>
          
     
        <div className='flex flex-col mt-10'>
          <code className='text-sm text-code w-[300px] block'>
      
        <AnimatedText text=  {"// #include<mern stack>"}/>
        
          </code>
          <code className='text-sm text-code block'>
          <AnimatedText text= {"//using typescript, react,next,node etc."}/>
          </code>
          <code className='text-sm text-code'>
     <span className='text-[#4D5BCE]'>
     <AnimatedText text={"const"}/>
      
      </span>  
      <span className='text-[#43D9AD]'>
      <AnimatedText text={"githubLink= "}/>
      
      </span>  
       <span className='text-[#E99287]'>
       <AnimatedText text={"https://github.com/AdnanGulzar"}/>
       </span>
          </code>
       
        
        </div>
       </section>
       <section>
       <TicTacGame/>
        {/* <SnakesGame/>     */}
        {/* <div className="flex flex-row justify-center items-center">
          <div className="max-w-[400px]">
            <Image
              src="/snake.svg"    
              alt="Adnan Gul"
              className='w-full'
              width={200}
              height={200}
            />
          </div>
         
        </div> */}
       </section>
    </main>
  )
}
