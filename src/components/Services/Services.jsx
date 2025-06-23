import React from 'react'
import Fruits1 from "../../assets/fruits/fruits1.webp";
import Fruits2 from "../../assets/fruits/fruits2.png";
import Fruits3 from "../../assets/fruits/fruits3.png";

const ServicesData = [
    {
        id: 1,
        image: Fruits1,
        title: "Fresh Fruits",
        subtitle: "lorem ipsum amet, sim sim akima kumbayee",
        aosDelay: "300"
    },
    {
        id: 2,
        image: Fruits2,
        title: "Fresh Fruits",
        subtitle: "lorem ipsum amet, sim sim akima kumbayee",
        aosDelay: "500"
    },
    {
        id: 3,
        image: Fruits3,
        title: "Fresh Fruits",
        subtitle: "lorem ipsum amet, sim sim akima kumbayee",
        aosDelay: "700"
    }
]

const Services = () => {
    return (
        <div className='container my-16 space-y-4'>
            {/* Header Section */}
            <div className='text-center max-w-lg mx-auto space-y-2'>
                <h1 className='text-3xl font-bold text-dark'>Fresh and 
                    <span className='text-primary'>Tasty Fruits</span>{" "}
                </h1>
                <p className='text-sm opacity-50'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsum quis dolorem, asperiores 
                    dolores magnam minima accusantium
                    possimus illum? Et enim est impedit dolorum,
                    eligendi porro repudiandae dolores cupiditate illo expedita?
                </p>
            </div>

            {/* card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {ServicesData.map((service) => (
                    <div 
                        key={service.id}
                        data-aos="fade-up"
                        data-aos-delay={service.aosDelay}
                        className='p-4 text-center space-y-6'
                    >
                        <img
                            src={service.image} 
                            alt={service.title}
                            className='max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2'
                        />
                        <div className='space-y-2'>
                            <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                            <p className='text-dark'>{service.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;