export default function ConferenceBanner() {
  return (
    <div className="flex flex-col items-center text-center bg-white pt-20 px-4">
      {/* Conference Title */}
      <h2 className="text-red-600 text-xl md:text-2xl font-semibold mt-6">
        5<sup>th</sup> International Conference on
      </h2>

      {/* Conference Name */}
      <h1 className="text-blue-700 text-2xl md:text-3xl font-bold w-full max-w-3xl">
        Innovations in Computational Intelligence and Computer Vision (ICICV-2025)
      </h1>

      {/* Conference Details */}
      <p className="text-gray-700 text-lg md:text-xl mt-2 w-full max-w-2xl">
        June 04-06, 2025 | CNR NANOTEC, at the University of Calabria, Italy | Hybrid Mode
      </p>

      {/* Banner Image - Now covering 97% width! */}
      <div className="mt-6 mb-5 w-full max-w-[97%] flex justify-center items-center mx-auto">
        <img
          src="./public/images/conferencebanner.jpg"
          alt="ICICV-2025 Conference Venue"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
