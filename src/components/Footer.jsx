import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-muted text-muted-foreground bg-orange-50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Contact Us</h3>
                        <div className='flex gap-2'>
                            <MapPin className='text-red-500' />
                            <div>
                                <p>Jl. Nganjuk Barat No. 69</p>
                                <p>Semarang Selatan</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Phone className='text-red-500 my-4' />
                            <p>No: +62 895-3390-23888</p>
                        </div>
                        <div className='flex gap-2'>
                            <Mail className='text-red-500' />
                            <p>Email: ayamjatinangor@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Jam Kerja</h3>
                        <p>Senin - Jumat: 10.00 - 21.00 WIB</p>
                        <p>Sabtu - Minggu: 11.00 - 22.00 WIB</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">Follow Us</h3>
                        <div className='flex gap-4'>
                            <a href="#" className="text-red-500 hover:text-red-600">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-red-500 hover:text-red-600">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-red-500 hover:text-red-600">
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} by <span className='text-red-500 font-semibold'>Ayam</span>Jatinangor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer