export default function Partners() {
    return (
        <div>
        <section className="py-16 px-8 md:px-20 bg-gray-50">
            {/* Download Flyer Link */}
            <p className="text-gray-600 text-lg  mb-6">
                Download ICICV 2025 Flyer from{" "}
                <a href="#" className="text-blue-600 font-semibold hover:underline">here</a>
            </p>

            {/* Title */}
            <h2 className="text-5xl font-semibold text-gray-800 mt-18 mb-12">Organizing Partners</h2>

            {/* Partner Logos */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-20">
                {/* Manipal University Jaipur */}
                <div className="flex flex-col items-center mt-10">
                    <div className="flex justify-center transform transition-all duration-300 hover:scale-105">
                        <img
                            src="/images/MUJ.jpg"
                            alt="Manipal University Jaipur"
                            className="w-130 object-contain drop-shadow-lg"
                        />
                    </div>
                    <p className="font-semibold text-xl text-gray-700 mt-4 text-left">
                        Manipal University Jaipur, India
                    </p>
                </div>

                {/* CNR Nanotec */}
                <div className="flex flex-col items-center">
                    <div className="flex justify-center transform transition-all duration-300 hover:scale-105 mt-6">
                        <img
                            src="/images/CNR.jpg"
                            alt="CNR Nanotec"
                            className="w-130 object-contain drop-shadow-lg"
                        />
                    </div>
                    <p className="font-semibold text-xl text-gray-700 mt-4 text-left">
                        CNR Nanotec – Institute of Nanotechnology, Italy
                    </p>
                </div>
            </div>
        </section>
        <img className="w-[100%]" src="./public/images/Design.jpg" alt="" />
        </div>
    );
}
