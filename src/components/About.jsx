export default function AboutPage() {
    return (
        <section className="bg-gray-100 py-12 px-6 md:px-16">
            {/* Blue Header Section */}
            <div
                className="bg-blue-700 text-white text-center py-10 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/About.jpg')" }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold  bg-opacity-60 inline-block px-4 py-2 rounded-md">
                    About the Conference
                </h2>
            </div>


            {/* Content Section */}
            <div className="bg-white shadow-lg rounded-lg px-6 md:px-16 py-10 max-w-5xl mx-auto mt-6">
                <p className="text-gray-800 leading-relaxed">
                    School of Computing and Intelligent Systems, Manipal University Jaipur, India in Collaboration with
                    CNR-Nanotec at the University of Calabria, Italy is organizing the
                    <strong> Fifth International Conference on Innovations in Computational Intelligence and Computer Vision (ICICV-2025)</strong> during
                    <strong> June 04-06, 2025.</strong> The conference invites industry professionals, academics, and researchers to submit original, high-quality, and previously unpublished research papers.
                </p>

                <p className="mt-4 text-gray-800 leading-relaxed">
                    The conference will be organized in <strong>hybrid mode</strong> with in-person sessions at
                    <strong> CNR-Nanotec, University of Calabria, Italy</strong> and virtual (online) sessions at
                    <strong> Manipal University Jaipur</strong> and other partner institutions
                    (<strong>University of Southampton, UK; University of Central Florida, USA; and Hansraj College, University of Delhi</strong>).
                </p>

                <p className="mt-4 text-gray-800 leading-relaxed">
                    Since ICICV-2025 is jointly organized by multiple institutions, the corresponding author must choose the appropriate track on
                    <a href="#" className="text-blue-600 font-semibold hover:underline"> submission portal</a> to indicate their preference.
                </p>
            </div>
        </section>
    );
}
