export default function Speakers() {
    const speakers = [
        {
            name: "Simon Fong James",
            university: "University of Macau",
            image: "/images/Simon.jpg",
        },
        {
            name: "Milan Tuba",
            university: "Singidunum University, Serbia",
            image: "/images/Milan.jpg",
        },
        {
            name: "Eugenio Vocatoro",
            university: "CNR – NANOTEC – DIMES\nUniversity of Calabria, Italy",
            image: "/images/Eugenio.jpg",
        },
        {
            name: "Sudip Misra",
            university: "Indian Institute of Technology, Kharagpur, India",
            image: "/images/Sudip.jpg",
        },
    ];

    return (
        <section className="py-12 px-6 md:px-16 text-center">
            {/* Logos */}
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 mb-6">
                <img src="/images/Springer.jpg" alt="Springer Logo" className="max-h-20 md:max-h-24" />
                <img src="/images/Scopus.jpg" alt="Scopus Logo" className="max-h-28 md:max-h-32" />
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold">Distinguished Speakers in ICICV-2024</h2>

            {/* Speakers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-3xl p-6 w-full max-w-xs flex flex-col items-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-lg bg-opacity-90 mx-auto"
                    >
                        {/* Circular Speaker Image with Glow Effect */}
                        <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center border-4 border-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                        </div>

                        {/* Speaker Name */}
                        <p className="mt-4 font-bold text-md md:text-lg text-center transition-all duration-300 hover:text-yellow-300">
                            {speaker.name}
                        </p>

                        {/* University/Institute */}
                        <p className="text-xs md:text-sm mt-1 text-center opacity-90 whitespace-pre-line">
                            {speaker.university}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
