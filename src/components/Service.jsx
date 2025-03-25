import React from "react";
import { FaDrumstickBite, FaMotorcycle, FaStar, FaLeaf } from "react-icons/fa";

const services = [
  { icon: <FaDrumstickBite className="text-red-500 text-4xl" />, title: "Ayam Berkualitas", desc: "Dibuat dengan ayam segar dan bumbu khas." },
  { icon: <FaMotorcycle className="text-red-500 text-4xl" />, title: "Pengiriman Cepat", desc: "Pesanan Anda tiba dalam waktu singkat!" },
  { icon: <FaStar className="text-red-500 text-4xl" />, title: "Rasa Bintang 5", desc: "Dijamin lezat dan menggugah selera!" },
  { icon: <FaLeaf className="text-red-500 text-4xl" />, title: "Bahan Alami", desc: "Tanpa pengawet, hanya bahan terbaik." },
];

const Service = () => {
  return (
    <div id="service" className="py-20 bg-white">
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-red-500">Pelayanan Kami</h1>
        <p className="text-gray-700 text-lg lg:text-xl max-w-xl lg:max-w-2xl mx-auto break-words px-4 lg:px-10">
          Kami Selalu Memberikan Pelayanan Terbaik Untuk Pelanggan Kami 🌻.
        </p>

        <div
          style={{
            maskImage: 'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))',
            WebkitMaskImage: 'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))',
          }}
          className="lg:max-w-6xl mx-auto mt-10 py-2 flex gap-6 flex-nowrap overflow-hidden"
        >
          <div className="flex gap-6 loop-scroll">
            {services.map((service, index) => (
              <div key={index} className="shadow-orange-200 shadow-md p-6 w-64 bg-white rounded-lg text-center">
                {service.icon}
                <h2 className="mt-3 font-bold text-lg">{service.title}</h2>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-6 loop-scroll">
            {services.map((service, index) => (
              <div key={index} className="shadow-orange-200 shadow-md p-6 w-64 bg-white rounded-lg text-center">
                {service.icon}
                <h2 className="mt-3 font-bold text-lg">{service.title}</h2>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service