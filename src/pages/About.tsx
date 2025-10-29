export default function About() {

    const paragraphCustom = "text-lg text-gray-300 leading-relaxed";

    return (
        <section className="pt32 pb-20 px-4  max-w-4xl mx-auto font-sans">
            {/* TITLE */}
            <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">Why I am creating this blog?
            </h1>
            {/* MAIN TEXT */}
            <div>
                <p className={`${paragraphCustom}`}>The purpose of this site is to show what I have learnt while also presenting
                    it in a way that is easy to understand and learn.
                </p>
                <p className={`${paragraphCustom}`}>Specifically looking at how we got to the
                    current state-of-the-art systems, by documenting the progress of each research paper.
                </p>
                <p className={`${paragraphCustom}`}>This blog is designed to take multiple years, and only include my researched
                    topics in AI.
                </p>
            </div>
            {/* METADATA */}
            <div className="mt-12 pt-6 border-t border-white/10 text-center">
                <p className="text-sm font-light text-gray-500">Sam Cleary-McHarg, 29/10/2025</p>
            </div>           

        </section>
    )
}