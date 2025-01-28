export default function AboutOrganisers() {
    return (
        <section className="py-12 px-6 md:px-16">
            {/* Title */}
            <h2 className="text-4xl font-semibold mb-8 text-left">About the Organiser</h2>

            {/* First Section - Image on Left, Text on Right */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                {/* Left - Image */}
                <div className="md:w-1/3 w-full">
                    <img
                        src="/images/Manipal.jpg" // Ensure the image is in /public/images/
                        alt="Manipal University Jaipur"
                        className="rounded-lg shadow-md w-full"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="md:w-2/3 w-full">
                    <h3 className="text-2xl font-semibold mb-4">Manipal University Jaipur, India</h3>
                    <p className="text-gray-700 leading-relaxed">
                        The Manipal Education and Medical Group is an established leader in the field of education, 
                        research, and healthcare. In a span of over six decades, it has transformed the lives of more 
                        than <strong>3,00,000 students</strong> from over 59 countries. The group includes five Universities 
                        – Manipal Academy of Higher Education (MAHE, Karnataka), Sikkim Manipal University (Sikkim), 
                        American University of Antigua (Caribbean Islands), Manipal International University (Malaysia), 
                        and Manipal University Jaipur (Jaipur).
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3">
                        <strong>Manipal University Jaipur</strong> was launched in 2011 on an invitation from the Government of Rajasthan, 
                        as a self-financed State University. MUJ has redefined academic excellence in the region, with the Manipal way 
                        of learning; one that inspires students of all disciplines to learn and innovate through hands-on practical 
                        experience.
                    </p>

                    {/* Read More Link */}
                    <a href="#" className="text-blue-600 font-medium mt-4 inline-block hover:underline">
                        Read More
                    </a>
                </div>
            </div>

            {/* Second Section - Image on Right, Text on Left */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                {/* Right - Image */}
                <div className="md:w-1/3 w-full">
                    <img
                        src="/images/Campus.jpg" // Ensure the image is in /public/images/
                        alt="CNR NANOTEC, University of Calabria"
                        className="rounded-lg shadow-md w-full"
                    />
                </div>

                {/* Left - Text Content */}
                <div className="md:w-2/3 w-full">
                    <h3 className="text-2xl font-semibold mb-4">CNR NANOTEC, hosted at the University of Calabria, Italy</h3>
                    <p className="text-gray-700 leading-relaxed">
                        The Institute of Nanotechnology CNR-NANOTEC develops fundamental and applied research 
                        in the fields of nanosciences and nanotechnology.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3">
                        It gathers scientists and students from the disciplines of physics, chemistry, engineering, 
                        materials science, as well as biology and medicine. To promote knowledge and innovation in 
                        science and technology, CNR-NANOTEC develops cutting-edge experimental techniques and 
                        modeling tools, developed within the Institute in close collaboration with academic, 
                        institutional and industrial partners. The Institute was founded in 2015 and now hosts about 
                        200 people.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3">
                        CNR-NANOTEC mission is to attract and involve talented researchers through an open-access 
                        management of the facilities in order to promote the development of external projects as well 
                        as partnerships with international leading research centers.
                    </p>

                    {/* Read More Link */}
                    <a href="#" className="text-blue-600 font-medium mt-4 inline-block hover:underline">
                        Read More
                    </a>
                </div>
            </div>
            <div className="w-full border-t border-black mt-20 mb-4"></div>
        </section>
    );
}
