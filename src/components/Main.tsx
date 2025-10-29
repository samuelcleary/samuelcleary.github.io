import { Link } from 'react-router-dom';

export default function Main() {

    const baseCardClasses = "max-w-4xl w-full h-full min-h-[250px] font-sans rounded-xl p-8";
    const visualClasses = "bg-[#242424]";
    const activeClasses =
    "transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-card-glow cursor-pointer"
    const inactiveClasses = "bg-[#1A1A1A] cursor-not-allowed";

    return (
        // the colours of the articles section is overlayed                 COLOUR FOR ARTICLE BOX BG
        <div className="flex flex-col items-center gap-12 py-20 px-4 min-h-screen bg-[rgba(255,255,255,0.02)]">
            <div className={`${baseCardClasses} ${activeClasses} ${visualClasses} flex flex-col`}>
                <Link to='/articles/intro-to-neural' className="block h-[100%] flex flex-col flex-1 text-white hover:no-underline">
                    <h2 className="text-3xl md:text-4xl font-bold">Here is the title</h2>
                    <p className='text-lg text-gray-300 mb-4 leading-relaxed flex-1'>
                        This will be the part that describes that the article is about
                    </p>
                    <p className='text-sm font-light text-gray-500 mt-auto pt-4 border-t border-white/10'>
                        Last Updated: day month, year
                    </p>
                </Link>
            </div>
            <div className={`${baseCardClasses} ${inactiveClasses} opacity-[50%] flex items-center justify-center`}>
                <span className='text-xl md:text-2xl font-medium text-gray-500'>
                    Coming soon...
                </span>
            </div>
            <div className={`${baseCardClasses} ${inactiveClasses} opacity-[30%] flex items-center justify-center`}>
                <span className='text-xl md:text-2xl font-medium text-gray-500'>
                    Coming soon...
                </span>
            </div>
            <div className={`${baseCardClasses} ${inactiveClasses} opacity-[5%] flex items-center justify-center`}>
                <span className='text-xl md:text-2xl font-medium text-gray-500'>
                    Coming soon...
                </span>
            </div>
        </div>
    )
}