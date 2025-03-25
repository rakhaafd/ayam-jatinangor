import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: "Gustavo Fringe", rating: 5, text: "Mantap mas, pelayanannya saya kasih bintang 5 sangat JOSSHT🤩😋." },
        { id: 2, name: "Walter White", rating: 4, text: "Rasanya krispi di luar dan gurih di dalam, Bikin Nagih!! 😖" },
        { id: 3, name: "Jesse Pinkman", rating: 3, text: "Boleh lahh overall 8/10. Baru nyobain Pasta nya enak juga kok🍝." },
        { id: 4, name: "Saul Goodman", rating: 5, text: "Burger nya empuk, dan gurihh. Menu andalan sepulang kerja ❤️" },
        { id: 5, name: "Ryan Gosling", rating: 4, text: "Baru jalan jalan ke daerah ini, terus nyobain menu di Jatinangor. Bikin Nagih!" },
    ];

    return (
        <div id='testimonial' className='py-20'>
            <h1 className='text-center text-3xl lg:text-4xl font-bold'>Testimoni Pelanggan</h1>
            <div className='max-w-6xl mx-auto py-10 px-3 relative'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='bg-white border border-gray-300 shadow-xl rounded-lg p-6 flex flex-col items-start relative max-w-sm md:max-w-md lg:max-w-lg mx-auto'>
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>

                                <div className='flex mb-3'>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} fill={i < item.rating ? 'black' : 'none'} />
                                    ))}
                                </div>

                                <p className='text-gray-700 mb-4'>{item.text}</p>

                                <div className='flex justify-between items-center w-full'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm text-gray-500'>Pelanggan</p>
                                    </div>
                                    <Quote className='text-red-400' />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="swiper-pagination absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 mb-6 md:mb-8 lg:mb-10"></div>
            </div>
        </div>
    );
};

export default Testimonials;