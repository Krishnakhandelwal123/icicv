import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function ConferencePage() {
    const importantDates = [
        { date: "Dec. 01, 2024", event: "Call for papers" },
        { date: "Feb. 15, 2025", event: "Submission Deadline" },
        { date: "Mar. 15, 2025", event: "Acceptance Notification" },
        { date: "Mar. 25, 2025", event: "Camera Ready Copy by" },
        { date: "Apr. 21, 2025", event: "Registration Deadline" },
    ];

    const publications = [
        { year: "ICICV-2024 (Vol. 1)", image: "/images/ICICV-2024-1.jpg" },
        { year: "ICICV-2024 (Vol. 2)", image: "/images/ICICV-2024-2.jpg" },
        { year: "ICICV-2022", image: "/images/ICICV-2022.jpg" },
        { year: "ICICV-2021", image: "/images/ICICV-2021.jpg" },
        { year: "ICICV-2020", image: "/images/ICICV-2020.jpg" },
    ];

    return (
        <section className="py-12 px-6 md:px-12 lg:px-20">
            {/* Latest Updates Section */}
            <div className="text-center">
                <div className="flex justify-center">
                    <button className="bg-blue-700 text-white text-lg md:text-xl px-10 md:px-28 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                        Latest updates
                    </button>
                </div>
                <p className="mt-4 md:mt-6 text-gray-800 text-sm md:text-base max-w-2xl mx-auto">
                    Proceedings of ICICV 2025 will be published in LNNS (Springer) |{" "}
                    <a href="#" className="text-blue-600 font-semibold hover:underline">
                        Glimpses of ICICV 2024
                    </a>
                </p>
            </div>

            {/* Important Dates Section */}
            <div className="text-center mt-10">
                <div className="flex justify-center">
                    <button className="bg-blue-700 text-white text-lg md:text-xl px-10 md:px-28 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                        Important Dates
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-6">
                    {importantDates.map((date, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-blue-700 text-3xl md:text-4xl" />
                            <p className="text-gray-800 mt-2 text-sm md:text-base">{date.event}</p>
                            <p className="font-bold text-sm md:text-base">{date.date}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Publication Section */}
            <div className="bg-blue-700 text-white py-10 mt-12">
                <h2 className="text-3xl md:text-4xl text-center font-semibold">Publication</h2>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 px-4">
                    {publications.map((pub, index) => (
                        <div
                            key={index}
                            className="bg-white flex items-center rounded-lg shadow-md p-2 w-full sm:w-56 md:w-52 lg:w-60"
                        >
                            {/* Image */}
                            <img
                                src={pub.image}
                                alt={pub.year}
                                className="h-16 w-12 md:w-14 object-contain"
                            />
                            {/* Text beside the image */}
                            <p className="text-blue-700 font-semibold ml-3 text-xs md:text-sm">
                                {`Proceedings of ${pub.year}`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
