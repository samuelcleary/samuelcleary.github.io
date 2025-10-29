export default function Hero() { 
    return (
        <section className="pt-32 pb-16 px-4 max-w-4xl w-full mx-auto text-center font-sans">

            {/* MAIN TITLE */}
            <div className="mb-4">
                <h1
                className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                    A Collection of No Deep Learning Yet</h1>
            </div>

            {/* MAIN SUBTITLE */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-2">Sam Cleary-McHarg</h2>
                <h2 className="text-base md:text-lg font-normal text-gray-300 leading-relaxed">A repository of things I have learnt,
                    in a digestible and understand format</h2>
            </div>
        </section>
    )
}