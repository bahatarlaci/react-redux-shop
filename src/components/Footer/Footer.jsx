import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Shop Name</h3>
                    <p className="text-gray-400">The best place to find the products you love.</p>
                    <p className="mt-2 text-gray-400">© 2024 Shop Name. All rights reserved.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                    <p className="text-gray-400">Email: info@shopname.com</p>
                    <p className="mt-2 text-gray-400">Phone: +123 456 789</p>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <a href="#" className="hover:text-white">Facebook</a>
                        <a href="#" className="hover:text-white">Instagram</a>
                        <a href="#" className="hover:text-white">Twitter</a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12038.72391362763!2d29.021638271250517!3d41.03223499155194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab78eb4cc28d7%3A0xd6cc13bd2c633762!2zw5xza8O8ZGFyLCBLdXpndW5jdWssIDM0Njc0IMOcc2vDvGRhci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1726401803844!5m2!1str!2str" className='border-0 w-full h-fit' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    )
}

export default Footer