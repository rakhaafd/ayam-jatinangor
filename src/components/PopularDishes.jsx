import menu1 from "../assets/menu_1_pizza.png"
import menu2 from "../assets/menu_2_burger.png"
import menu3 from "../assets/menu_3_pasta.png"
import Card from "./Card"

const PopularDishes = () => {
    const menu = [
        {
            id: 1,
            dishes: menu1,
            name: "Indiana Pizza",
            desc: "Hidangan Pizza Special di Jatinangor, yang Pasti akan Memanjakan Lidah Anda Karena dibuat oleh Tangan Terampil dari India🤩",
            rating: 4
        },
        {
            id: 2,
            dishes: menu2,
            name: "Krabby Patty",
            desc: "Menu Special Penuh Cita Rasa yang Diimpor dari Bikini Bottom. Dibuat oleh Chef Terampil yang Pernah Bekerja di Krusty Crab! 🔥",
            rating: 4
        },
        {
            id: 3,
            dishes: menu3,
            name: "Mi Gacoan asli Italia",
            desc: "Mi Gacoan asli Italia, atau bisa disebut juga sebagai Pasta. Menu Limited Hanya di Bulan Ramadhan🌙. Yuk ajak teman kalian untuk BUKBER di Jatinangor!",
            rating: 4
        }
    ]
    return (
        <div className='py-10 px-5 lg:px-0 lg:py-20 bg-gray-800' id='menu'>
            <div className='text-center max-w-7xl mx-auto'>
                <h1 className='text-3xl lg:text-4xl font-bold text-red-500'>Menu Lainnya</h1>
                <p className='lg:text-xl text-lg pt-2 text-white'>Bosan dengan Hidangan Ayam? Dibawah ini Adalah Menu Andalan Kami Lainnya, Dijamin Enak dan Terjangkau. Yuk Cobain! ✨</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-11 gap-7'>
                    {
                        menu.map((item)=>{
                            return <Card key={item.id} menu={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularDishes