/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseById, registerCourse } from "../services/api";
import Loading from "../components/Loading";

export default function CourseDetail({ loading, error, setLoading, setError, isAuthenticated }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [schedule, setSchedule] = useState("");

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await getCourseById(id);
                setCourse(response.data);
            } catch (errorMessage) {
                console.error(errorMessage.message);
                setError(errorMessage.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="container mx-auto py-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-4xl font-bold mb-6 text-gray-800">{course.name}</h2>
                <img src={course.imageUrl} alt={course.name} className="w-full h-64 object-cover rounded-lg mb-6" />
                <p className="text-gray-700 mb-6">{course.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Instructor</h3>
                        <p className="text-gray-600">John Doe</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Price</h3>
                        <p className="text-gray-600">{`$5`}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">Pilih Jadwal</h3>
                    <div className="w-full">
                        <select
                            onChange={(e) => setSchedule(e.target.value)}
                            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        >
                            <option value="">Pilih Tanggal</option>
                            <option value="01/03/2025|07/03/2025">01 Maret 2025 - 07 Maret 2025</option>
                            <option value="08/03/2025|14/03/2025">08 Maret 2025 - 14 Maret 2025</option>
                            <option value="15/03/2025|21/03/2025">15 Maret 2025 - 21 Maret 2025</option>
                            <option value="22/03/2025|28/03/2025">22 Maret 2025 - 28 Maret 2025</option>
                            <option value="29/03/2025|04/04/2025">29 Maret 2025 - 04 April 2025</option>
                        </select>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick={async () => {
                            if (schedule === "") {
                                alert("Pilih jadwal terlebih dahulu");
                                return;
                            }
                            if (!isAuthenticated) {
                                navigate("/login");
                            } else {
                                const response = await registerCourse({ courseId: course.id, schedule });
                                console.log(response);
                                alert("Anda berhasil mendaftar di kursus ini");
                                navigate("/");
                            }
                        }}
                        className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
                    >
                        Daftar Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
}
