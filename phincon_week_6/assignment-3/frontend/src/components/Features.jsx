const Features = () => {
    const features = [
        { title: "Interactive Learning", description: "Engage with interactive courses and quizzes." },
        { title: "Expert Instructors", description: "Learn from industry-leading professionals." },
        { title: "Flexible Schedules", description: "Access content anytime to suit your schedule." },
        { title: "Global Community", description: "Join a network of learners from around the world." },
    ];

    return (
        <section id="features" className="py-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-white shadow rounded">
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
