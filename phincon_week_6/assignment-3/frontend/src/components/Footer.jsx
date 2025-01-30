const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} EduTech. All Rights Reserved.</p>
                <p>Contact us: support@edutech.com</p>
            </div>
        </footer>
    );
};

export default Footer;
