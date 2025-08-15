export default function Hero() {
  return (
    <div className="flex py-20 flex-col md:flex-row gap-12 items-start justify-center w-full pt-10 pb-10">
        <div>
            <h1 className="px-3 text-sm font-medium py-1.5 rounded-md opacity-100 mb-10 !text-black dark:!text-white uppercase">FRONTEND WBE DEVELOPER</h1>
            <h2 className="dark:text-gray-50 bg-clip-text text-5xl md:text-3xl lg:text-5xl xl:text-5xl max-w-8xl xl:leading-tight my-shine-object z-10">
                Olá, me chamo André 👋 
                <br />
                Sou um desenvolvedor frontend
                <br />
                apaixonado por tecnologias web.
            </h2>
        </div>
        <div className="h-full flex justify-items-center align-center">
            <img
            className="rounded-full"
            src="/me2.png"
            width={451}
            height={451}
            alt="André"
        />
        </div>
        
    </div>
  );
}