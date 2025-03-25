import { useState } from "react";
import delivery from "../assets/delivery.json";
import Lottie from 'lottie-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isConfirmed = window.confirm(
            `Konfirmasi Data Anda:\n\n` +
            `Nama: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n` +
            `Nomor HP: ${formData.phoneNumber || '-'}\n` +
            `Pesan: ${formData.message}\n\n` +
            `Apakah Sudah Benar?`
        );

        if (isConfirmed) {
            alert('Pesan terkirim 🚀');
        }
    };

    return (
        <div id="contact" className="py-5">
            <div className="mx-auto max-w-2xl text-center px-4 lg:px-0">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-red-500 mb-4">Hubungi Kami</h2>
                <p className="mt-2 text-lg lg:text-xl leading-8 text-gray-600">
                    Ada pertanyaan atau ingin memesan? Hubungi kami sekarang! Kami siap melayani Anda dengan cepat dan ramah. 📞🔥
                </p>
            </div>
            <div className='lg:grid lg:grid-cols-2 mt-10 lg:mt-0'>
                <Lottie animationData={delivery} />
                <form onSubmit={handleSubmit} className="lg:mx-auto mt-16 max-w-xl sm:mt-20 bg-orange-50 p-8 rounded-lg mx-4">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-semibold leading-6">
                                Nama Depan <span className='text-red-500'>*</span>
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-semibold leading-6">
                                Nama Belakang <span className='text-red-500'>*</span>
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6">
                                Email <span className='text-red-500'>*</span>
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6">
                                Nomor HP
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    autoComplete="tel"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6">
                                Pesan <span className='text-red-500'>*</span>
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-red-500"
                        >
                            Kirim Pesan 🚀
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
