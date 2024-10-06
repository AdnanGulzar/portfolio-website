import AnimatedText from '@/components/AnimatedText'
import Name from '@/components/Name'
import PageTransition from '@/components/PageTransition'
import SnakesGame from '@/components/SnakesGame'
import TicTacGame from '@/components/TickTacGame/TickTac'
import Head from 'next/head'
import Image from 'next/image'
let schema = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Adnan Gul",
  url: "https://adnangull.vercel.app/",
  image: "https://adnangull.vercel.app/img123.jpg",
  sameAs: [
    "https://www.facebook.com/adnan.gul.7739814",
    "https://twitter.com/AdnanGu75590360",
    "https://www.instagram.com/adnan.gul.7739814/",
    "https://www.linkedin.com/in/adnangul/",
    "https://github.com/AdnanGulzar",
    "https://adnangull.vercel.app/",
  ],
  "jobTitle":"Web Developer",
  "worksFor":{
    "@type":"Orginization",
    "name":"freelance(self-employed)"
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Adnan Gul</title>
        <meta
          property="og:title"
          content="Adnan Gul"
        />
        <meta
          property="og:site_name"
          content="Adnan Gul"
        />
        <meta
          property="og:url"
          content="https://adnangull.vercel.app/"
        />
        <meta
          property="og:description"
          content="Providing services of web development .Skills are react.js ,next.js ,node.js,html,cssand javascript"
        />
        <meta
          property="og:type"
          content="profile"
        />
        <meta
          property="og:image"
          content="https://adnangull.vercel.app/1672231731036.jpg"
        />

        <meta
          name="description"
          content="adnan gul is a web developer working  on reactjs projects "
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="keywords"
          content="web developer ,frontend developer,reacts developer,react,next , nodejs,mern stack"
        />
        <link
          rel="canonical"
          href="https://adnangull.vercel.app/"
        />

        <link
          rel="icon"
          href="/adnangul.svg"
        />
        <meta
          name="google-site-verification"
          content="6dS-LYhkKHco8vk4fE5wf-cmZQuNp9pCVJ7O994WKMo"
        />

        <meta
          name="author"
          content="Adnan Gul"
        ></meta>
       
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
       
      </Head>
    
    <main className="min-h-[85vh] w-full  flex justify-center gap-10 flex-wrap items-center p-2">
      <PageTransition/>
       <section className='flex flex-col h-full gap-2'>
        <p className='text-md pl-2'>Hi all. I am</p>
        <h2 className='text-4xl'>Adnan Gul</h2>
        <h3 className='text-blue text-2xl'>
         {">"} 
          <Name/>
        </h3>
          
     
        <div className='flex flex-col mt-6'>
          <code className='text-sm text-code w-[300px] block'>
        <AnimatedText text=  {"import * as mern from MERN_STACK"}/>
          </code>
          <code className='text-sm text-code block'>
          <AnimatedText text= {"const {react,node,next,ts} = mern"}/>
          </code>
          <code className='text-sm text-code'>
     <span className='text-[#4D5BCE]'>
     <AnimatedText text={"const"}/>
      
      </span>  
      <span className='text-[#43D9AD]'>
      <AnimatedText text={"githubLink= "}/>
      
      </span>  
       <span className='text-[#E99287]'>
       <AnimatedText text={`"https://github.com/AdnanGulzar"`}/>
       </span>
          </code>
       
       
        </div>
        <div >

        <button className="bg-blue hover:opacity-70 font-bold py-2 px-4 rounded ">
        <a
            href="/adnangulfrontenddev.pdf"
            download="adnangul.pdf"
            className='inline-flex items-center'
          >
           
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download CV</span>
  </a>
</button>
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
    </>
  )
}
