/* eslint-disable react/prop-types */
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const LandingPage = ({ loading, error, setLoading, setError }) => {
    return (
        <div>
            <Hero />
            <Features />
            <Courses loading={loading} error={error} setLoading={setLoading} setError={setError} />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default LandingPage;
