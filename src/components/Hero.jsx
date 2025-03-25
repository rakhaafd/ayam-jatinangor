import hero from "../assets/ayam_hero.png";
import star from "../assets/star.png";
import starOutline from "../assets/star-outline.png";
import time from "../assets/time.png";

const Hero = () => {
    return (
        <div id="hero" className="bg-orange-50 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-center px-5 lg:px-16 mx-auto max-w-7xl gap-10">
                
                <div className="lg:w-1/2 text-center lg:text-left space-y-6 max-w-lg md:max-w-xl lg:max-w-2xl">
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl tracking-normal">
                        <span className="text-red-500">Cita Rasa Ayam</span> yang Menggoda 😋.
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Nikmati kelezatan ayam yang meresap hingga ke tulang. Dibuat dengan bahan berkualitas dan cita rasa autentik!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <button className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 hover:scale-105 transition-all">
                            Lebih Lanjut 🚀
                        </button>
                        <button className="bg-white px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-white hover:scale-105 transition-all">
                            Hubungi Kami 📞
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/2 relative">
                    <img src={hero} alt="food" className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg spin" />

                    <div className="bg-red-50 gap-1 text-sm flex border border-red-200 items-center absolute bottom-12 left-6 sm:left-14 px-4 py-2 rounded-full shadow-md">
                        <img src={time} alt="time" className="w-8 h-8 sm:w-10 sm:h-10" />
                        <p className="leading-4 font-semibold">Pengantaran<br />Cepat.</p>
                    </div>

                    <div className="bg-red-50 leading-none flex flex-col gap-1 text-sm px-4 py-2 border border-red-200 absolute top-10 right-6 sm:right-16 rounded-full items-center shadow-md">
                        <p className="font-semibold">Rating Tinggi.</p>
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <img key={i} src={star} width={15} height={15} alt="star" />
                            ))}
                            <img src={starOutline} width={15} height={15} alt="star" />
                        </div>
                    </div>

                    <div className="bg-red-50 flex flex-col border border-red-200 px-6 py-2 absolute top-32 left-1/2 transform -translate-x-1/2 sm:left-auto sm:top-16 rounded-full items-center shadow-md">
                        <h1 className="text-red-500 text-xl md:text-2xl font-bold">20+</h1>
                        <p className="text-sm font-semibold">Cabang.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
