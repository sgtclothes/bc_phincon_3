import { useEffect, useState } from "react";
import { getAllCourses } from "../services/api";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Courses = ({ loading, error, setLoading, setError }) => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await getAllCourses();
                setCourses(response.data);
            } catch (errorMessage) {
                console.error(errorMessage.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return <Loading />;

    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white rounded shadow-md p-4">
                        <div className="min-h-72">
                            <img src={course.imageUrl} alt={course.name} className="w-full h-48 object-cover" />
                            <h3 className="text-2xl font-semibold mt-4 text-center">{course.name}</h3>
                        </div>
                        <button
                            onClick={() => {
                                navigate(`/course-detail/${course.id}`);
                            }}
                            className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
