export default function Footer() {
    return (
        <footer className="bg-[rgb(9,61,119)] text-white py-10 px-10 md:px-28">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                {/* Contact Section */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-4xl font-semibold mb-6">Contact Us</h3>
                    <a href="mailto:helpdesk.icicv@gmail.com" className="text-blue-300 hover:underline text-lg">
                        helpdesk.icicv@gmail.com
                    </a>

                    {/* CNR Contact */}
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold">CNR-NANOTEC, at the University of Calabria, Italy</h4>
                        <p className="mt-2">
                            Eugenio Vocatoro:{" "}
                            <a href="mailto:eugenio.vocatoro@cnr.it" className="text-blue-300 hover:underline">
                                eugenio.vocatoro@cnr.it
                            </a>
                        </p>
                        <p>
                            Ester Zumpano:{" "}
                            <a href="mailto:e.zumpano@dimes.unical.it" className="text-blue-300 hover:underline">
                                e.zumpano@dimes.unical.it
                            </a>
                        </p>
                    </div>

                    {/* Manipal Contact */}
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold">Manipal University Jaipur, India</h4>
                        <p className="mt-2">
                            Deepak Sinwar:{" "}
                            <a href="mailto:deepak.sinwar@jaipur.manipal.edu" className="text-blue-300 hover:underline">
                                deepak.sinwar@jaipur.manipal.edu
                            </a>
                        </p>
                        <p>
                            Satyabrata Roy:{" "}
                            <a href="mailto:satyabrata.roy@jaipur.manipal.edu" className="text-blue-300 hover:underline">
                                satyabrata.roy@jaipur.manipal.edu
                            </a>
                        </p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-4xl font-semibold mb-6">Address</h3>
                    <div className="mt-2">
                        <h4 className="text-xl font-semibold">CNR-NANOTEC</h4>
                        <p className="mt-2 text-lg">
                            CNR-NANOTEC, at the University of Calabria, Cube 31/C, Via P. Bucci, 87036 Arcavacata (CS), Italy
                        </p>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-xl font-semibold">Manipal University Jaipur</h4>
                        <p className="mt-2 text-lg">
                            Dehmi Kalan, Off Jaipur-Ajmer Expressway, Jaipur, Rajasthan, India-303007
                        </p>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="w-full md:w-1/4 flex justify-center md:justify-end">
                    <img
                        src="/images/ICICV.png"
                        alt="ICICV Logo"
                        className="w-52 object-contain filter brightness-125 drop-shadow-lg"
                    />
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-lg text-gray-300 mt-10 border-t border-gray-500 pt-6">
                Copyright © 2025 <span className="font-semibold">ICICV-2025</span>. All Rights Reserved.
            </div>
        </footer>
    );
}
