const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "This platform has transformed the way I learn. Highly recommended!",
        },
        {
            name: "Jane Smith",
            feedback: "The interactive courses are amazing. I've gained so much knowledge.",
        },
        {
            name: "Michael Johnson",
            feedback: "Flexible schedules make it easy to balance learning with work.",
        },
    ];

    return (
        <section id="testimonials" className="py-16 bg-blue-500 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-white text-blue-500 rounded shadow">
                            <p className="mb-4">{testimonial.feedback}</p>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
