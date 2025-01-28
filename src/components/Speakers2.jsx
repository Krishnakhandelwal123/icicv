export default function Speakers2() {
    const speakers = [
      {
        name: "Rajesh Kumar",
        university: "MNIT Jaipur, India",
        image: "./public/images/Rajesh.jpg",
      },
      {
        name: "Aninda Bose",
        university: "Executive Editor, Springer Nature, London",
        image: "./public/images/Aninda.jpg",
      },
      {
        name: "Nilanjan Dey",
        university: "Techno International New Town, Kolkata, India",
        image: "./public/images/Nilanjan.jpg",
      },
      {
        name: "Ayan Mondal",
        university: "Indian Institute of Technology, Indore, India",
        image: "./public/images/Ayan.jpg",
      },
      {
        name: "Arijit Roy",
        university: "Indian Institute of Technology, Patna, India",
        image: "./public/images/Arijit.jpg",
      },
    ];
  
    return (
      <section className="py-12 px-6 md:px-16 text-center">
        {/* Speakers Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-3xl p-6 w-56 flex flex-col items-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-lg bg-opacity-90"
            >
              {/* Circular Speaker Image with Glow Effect */}
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
              </div>
  
              {/* Speaker Name */}
              <p className="mt-4 font-bold text-lg text-center transition-all duration-300 hover:text-yellow-300">
                {speaker.name}
              </p>
  
              {/* University/Institute */}
              <p className="text-sm mt-1 text-center opacity-90 whitespace-pre-line">
                {speaker.university}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  