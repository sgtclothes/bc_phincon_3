const { useState } = React;

function App() {
    return (
        <div>
            {/* Hero Section */}
            <Navbar />
            <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white">
                <div className="container mx-auto px-6 py-16 text-center mt-16">
                    <img
                        src="https://www.logoai.com/oss/icons/2021/10/27/rA73APprj8wskQ0.png"
                        alt="Logo"
                        className="mx-auto mb-8"
                        width="120"
                    />

                    <h1 className="text-4xl font-bold mb-4">Learn without limits. Grow with Phincon Academy.</h1>
                    <p className="text-lg mb-8">
                        Explore the world of technology and innovation with our comprehensive programs and courses.
                    </p>
                    <button className="bg-white text-pink-500 px-6 py-2 rounded-lg shadow-md hover:bg-gray-100">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">Learn from the best</h2>
                        <p className="text-gray-700 mb-4">
                            Our instructors are experts in their field and have years of experience in teaching and
                            developing curriculum.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                            alt="Illustration"
                            className="mx-auto md:mx-0 rounded-lg shadow-md"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-4">Build real-world projects</h2>
                        <p className="text-gray-700 mb-4">
                            Our courses are designed to give you hands-on experience with real-world projects and case
                            studies.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                            alt="Illustration"
                            className="mx-auto md:mx-0 rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center py-16">
                    <h2 className="text-3xl font-bold mb-12">Pricing</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Offline Bootcamp Card */}
                        <div className="p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <img
                                src="https://i.ibb.co/0s3pdnc/batch-1-modified.png"
                                alt="Offline Regular Bootcamp"
                                className="h-40 w-full object-cover mb-6"
                            />
                            <h3 className="text-xl font-bold mb-6">Offline Regular Bootcamp</h3>
                            <ul className="text-gray-600 space-y-2" style={{ minHeight: "250px" }}>
                                <li>
                                    🛠 <strong>Mode:</strong> Offline
                                </li>
                                <li>
                                    ⏱ <strong>Duration:</strong> 12 Weeks
                                </li>
                                <li>
                                    📆 <strong>Schedule:</strong> Mon-Fri
                                </li>
                                <li>
                                    ⏰ <strong>Time:</strong> 9 AM - 4 PM
                                </li>
                                <li className="mt-4">
                                    <strong>Student able to:</strong>
                                    <div className="grid grid-cols-2 gap-4 mt-2">
                                        <div className="space-y-1 text-gray-500">
                                            <li>Remembering</li>
                                            <li>Understanding</li>
                                            <li>Applying</li>
                                        </div>
                                        <div className="space-y-1 text-gray-500">
                                            <li>Analyzing</li>
                                            <li>Evaluating</li>
                                            <li>Creating</li>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button className="mt-6 bg-pink-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-pink-600">
                                Pilihan Course
                            </button>
                        </div>

                        {/* Online Bootcamp Card */}
                        <div className="p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <img
                                src="https://i.ibb.co/0s3pdnc/batch-1-modified.png"
                                alt="Online Part-Time Bootcamp"
                                className="h-40 w-full object-cover mb-6"
                            />
                            <h3 className="text-xl font-bold mb-6">Online Part-Time Bootcamp</h3>
                            <ul className="text-gray-600 space-y-2" style={{ minHeight: "250px" }}>
                                <li>
                                    💻 <strong>Mode:</strong> Online
                                </li>
                                <li>
                                    ⏱ <strong>Duration:</strong> 8 Weeks
                                </li>
                                <li>
                                    📆 <strong>Schedule:</strong> 2 Sessions/week
                                </li>
                                <li>
                                    ⏰ <strong>Time:</strong> 7 PM - 10 PM
                                </li>
                                <li className="mt-4">
                                    <strong>Student able to:</strong>
                                    <div className="grid grid-cols-2 gap-4 mt-2">
                                        <div className="space-y-1 text-gray-500">
                                            <li>Remembering</li>
                                            <li>Understanding</li>
                                        </div>
                                        <div className="space-y-1 text-gray-500">
                                            <li>Applying</li>
                                            <li>Analyzing</li>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button className="mt-6 bg-pink-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-pink-600">
                                Pilihan Course
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Join the community</h2>
                <p className="text-lg mb-8">Join our community of learners and start learning today!</p>
                <button className="bg-white text-pink-500 px-6 py-2 rounded-lg shadow-md hover:bg-gray-100">
                    Join Now
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Phincon Academy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md z-50 h-auto">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold flex items-center">
                        <span className="text-white material-icons">flight</span>
                        LANDING
                    </span>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        <span className="material-icons text-3xl">menu</span>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul
                    className={`${
                        isOpen ? "block" : "hidden"
                    } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 right-0 bg-gradient-to-r from-pink-500 to-orange-400 md:bg-transparent md:w-auto w-full md:shadow-none shadow-md`}
                >
                    <li className="text-center md:text-left">
                        <span className="block font-bold text-black py-2 md:py-0">Active</span>
                    </li>
                    <li className="text-center md:text-left">
                        <span className="block text-black hover:text-gray-700 py-2 md:py-0">Link</span>
                    </li>
                    <li className="text-center md:text-left">
                        <span className="block text-black hover:text-gray-700 py-2 md:py-0">Link</span>
                    </li>
                </ul>

                {/* Action Button */}
                <div className="hidden md:block">
                    <button className="bg-orange-100 text-black font-bold px-4 py-2 rounded-full shadow-md hover:bg-orange-200">
                        Action
                    </button>
                </div>
            </div>

            {/* Dropdown Action for Mobile */}
            {isOpen && (
                <div className="block md:hidden px-4 py-2 text-center">
                    <button className="bg-orange-100 text-black font-bold px-4 py-2 rounded-full shadow-md hover:bg-orange-200">
                        Action
                    </button>
                </div>
            )}
        </nav>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
