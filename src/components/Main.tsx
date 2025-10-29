import { Link } from 'react-router-dom';

export default function Main() { 
    return (
        <div className="flex flex-col items-center gap-8 py-8">
            <div className="w-[800px] h-[300px] bg-[rgba(255,255,255,0.01)] rounded-[100px] flex items-center justify-center">
                <Link to='/articles/intro-to-neural' className="text-blue-400 hover:underline">
                Read more CLICK HERE
                </Link>
            </div>
            <div className="w-[800px] h-[300px] bg-[rgba(255,255,255,0.01)] rounded-[100px] flex items-center justify-center">
                Coming soon...
            </div>
            <div className="w-[800px] h-[300px] bg-[rgba(255,255,255,0.01)] rounded-[100px] flex items-center justify-center">
                Coming soon...
            </div>
        </div>
    )
}