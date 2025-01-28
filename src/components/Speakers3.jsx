export default function Speakers3() {
    const speakers = [
        {
            name: "Ajoy Kumar Ray",
            university: "JIS Institute of Advanced Studies and Research, Kolkata, India",
            image: "/images/Ajoy.jpg",
        },
        {
            name: "Ibrahim A Hameed",
            university: "NTNU, Norway",
            image: "/images/Ibrahim.jpg",
        },
        {
            name: "Saroj",
            university: "Guru Jambheshwar University of Science and Technology, India",
            image: "/images/Saroj.jpg",
        },
        {
            name: "Aninda Bose",
            university: "Executive Editor, Springer Nature, London",
            image: "/images/Aninda.jpg",
        },
        {
            name: "Nilanjan Dey",
            university: "Techno International New Town, Kolkata, India",
            image: "/images/Nilanjan.jpg",
        },
        {
            name: "R Balasubramanian",
            university: "Professor, Indian Institute of Technology Roorkee, India",
            image: "/images/R.jpg",
        },
        {
            name: "Yi Pan",
            university: "Professor, Georgia State University, USA",
            image: "/images/Yi.jpg",
        },
        {
            name: "Arun Baran Samaddar",
            university: "Advisor, JIS Group, India",
            image: "/images/Arun.jpg",
        },
        {
            name: "Robin T Bye",
            university: "NTNU, Ålesund, NTNU",
            image: "/images/Robin.jpg",
        },
        {
            name: "Swagatam Das",
            university: "Indian Statistical Institute, Kolkata, India",
            image: "/images/Swagatam.jpg",
        },
        {
            name: "Ottar Laurits Osen",
            university: "NTNU, Ålesund, NTNU",
            image: "/images/Ottar.jpg",
        },
        {
            name: "K.V. Arya",
            university: "ABV-IIITM, Gwalior, India",
            image: "/images/K.jpg",
        },
        {
            name: "Rajeev Srivastava",
            university: "Indian Institute of Technology (BHU) Varanasi, India",
            image: "/images/Rajeev.jpg",
        },
        {
            name: "Dharm Singh Jat",
            university: "Namibia University of Science and Technology, Namibia",
            image: "/images/Dharm.jpg",
        },
        {
            name: "Rajesh Kumar",
            university: "MNIT Jaipur, India",
            image: "/images/Rajesh.jpg",
        },
        {
            name: "Bhabani Shankar Prasad Mishra",
            university: "KIIT University, Bhubaneswar, India",
            image: "/images/Bhabani.jpg",
        },
    ];

    return (
        <section className="py-10 px-4 md:px-10 text-center">
            {/* Title */}
            <h2 className="text-4xl font-semibold mb-10 ">
                Distinguished Speakers in Past Editions
            </h2>

            {/* Centered Speakers Grid */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
                    {speakers.map((speaker, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-blue-700 to-blue-900 text-white rounded-2xl p-4 w-52 flex flex-col items-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-lg bg-opacity-90"
                        >
                            {/* Circular Speaker Image with Glow Effect */}
                            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center border-4 border-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Speaker Name */}
                            <p className="mt-3 font-bold text-lg text-center transition-all duration-300 hover:text-yellow-300">
                                {speaker.name}
                            </p>

                            {/* University/Institute */}
                            <p className="text-sm mt-1 text-center opacity-90 whitespace-pre-line">
                                {speaker.university}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
