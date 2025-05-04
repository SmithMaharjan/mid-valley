import React from 'react';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';




const partners = [
  { img: '/images/partner1.png', name: 'City & Guilds' },
  { img: '/images/partner2.png', name: 'HELP University' },
  { img: '/images/partner3.png', name: 'Galaxy Public School' },
  { img: '/images/partner4.png', name: 'PTE' },
  { img: '/images/partner5.png', name: 'PATA (Pacific Asia Travel Association)' },
  { img: '/images/partner6.png', name: 'SKILL LAB' },
  { img: '/images/partner7.png', name: 'Danphe link' },
  { img: '/images/partner8.png', name: 'CTEVT' },
  { img: '/images/partner9.png', name: 'Hotel Himalaya' },
  { img: '/images/partner10.png', name: 'Le Sherpa' },
  { img: '/images/partner11.png', name: 'Oskar Bar & Grill' },
  { img: '/images/partner12.png', name: 'Zen' },
  { img: '/images/partner13.png', name: 'Lead Nepal' },
  { img: '/images/partner14.png', name: 'Brewed Coffee' },
  { img: '/images/partner15.png', name: 'ALEMA Education & Migration' },
  { img: '/images/partner16.png', name: 'Global Nepalese Chef Federation' },
  { img: '/images/partner17.png', name: 'EMBASSY' },
  { img: '/images/partner18.png', name: 'Somewhere in Tamarind' },
  { img: '/images/partner19.png', name: 'Tamarind Khajaghar' },
  { img: '/images/partner20.png', name: 'World Association of Chefs Societies' },
  { img: '/images/partner21.png', name: 'Tamarind Restro & Bar' },
  { img: '/images/partner22.png', name: 'The Court House (Tamarind)' },
  { img: '/images/partner23.png', name: 'Fourth Valley Concierge' },
];

const teamMembers = [
  { name: "Reetal Rana", position: "Managing Director", img: "/public/founder2.png" },
  { name: "Pawan Pokhrel", position: "C.E.O", img: "/team/pawan.png" },
  { name: "Sudarshan Adhikari", position: "Administration & Operation Manager", img: "/team/sudarshan.png" },
  { name: "Devendra Timilsina", position: "Head of Marketing & Business Development", img: "/team/devendra.png" },
  { name: "Utkrishta Kharel", position: "Head of Admission & Student Services", img: "/team/utkrishta.png" },
  { name: "Sangeeta Kashichhwa", position: "HR Officer", img: "/team/sangeeta.png" },
  { name: "Gajendra Prasad Shah", position: "Academic Director / Program Leader - BBA", img: "/team/gajendra.png" },
  { name: "Rohit Mahato", position: "Program Leader (BIT)", img: "/team/rohit.png" },
  { name: "Prajwal Ratna RajBhandari", position: "Program Leader (BHM)", img: "/team/prajwal.png" },
  { name: "Lokesh Rohila", position: "DCA", img: "/team/lokesh.png" },
  { name: "Ronak Bastola", position: "IT Head", img: "/team/ronak.png" },
  { name: "Sapana Neupane", position: "Examinations Officer", img: "/team/sapana.png" },
  { name: "Bima Shrestha", position: "Finance Officer", img: "/team/bima.png" },
  { name: "Jyoti KC", position: "Accounts Officer", img: "/team/jyoti.png" },
  { name: "Niharika Poudyal", position: "Senior Officer - Admissions and Student Services", img: "/team/niharika.png" },
  { name: "Ayush Pudasaini", position: "Digital Marketing Strategist", img: "/team/ayush.png" },
  { name: "Bishal Thakuri", position: "Student Support Officer", img: "/team/bishal.png" },
  { name: "Anita Bhandari", position: "Front Office Executive", img: "/team/anita.png" },
  { name: "Himal Basnet", position: "PTE Test Administrator", img: "/team/himal.png" },
  { name: "Srijana Paudel", position: "Librarian / PTE Test Administrator", img: "/team/srijana.png"},
];   


const cards = [
  {
    src: "/public/founder1.png",
    title: "Ms. Geeta Rana ",
  },
  {
    src: "/public/founder2.png",
    title: "Ms. Reetal Rana",
  },
  {
    src: "/public/founder1.png",
    title: "Mr. Pawan Pokhrel",
  },
];

const AboutPage = () => {
  const [hovered, setHovered] = useState(null); // 'left' or 'right'
  return (
    <div className="w-full">
      {/* <RippleEffect /> */}
      {/* Section 1: Hero with Video */}
      <section className="relative h-screen w-full flex items-end justify-center bg-[#003044] overflow-hidden">

           {/* Glassmorphed Hamburger */}
                    <motion.div
                        className="fixed top-4 right-4 sm:top-5 sm:right-16 backdrop-blur rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl border border-white/20 z-[1000] cursor-pointer "
                        style={{ backgroundColor: "#F1592D" }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        <motion.div
                            className="text-white text-lg sm:text-sm md:text-xl select-none"
                            whileTap={{ scale: 2 }}
                            whileHover={{ scale: 1.5, rotate: 1080 }}
                        >
                          <Link to="/" >☰</Link>
                            
                        </motion.div>
                    </motion.div>

        {/* Video Container with border radius */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-full overflow-hidden rounded-b-3xl shadow-2xl">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="./public/bgvedio.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay at Bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/82 to-black pointer-events-none" />
        </div>

        {/* Text Content on Top of Video */}
        <div className="relative z-10 mb-15 text-center px-6 text-white max-w-5xl">
          <p className="text-sm md:text-md text-orange-400 tracking-widest font-semibold mb-2">
            Mid-Valley International College (MVIC)
          </p>
          <h1 className="hi lg:text-9xl md:text-7xl font-extrabold mb-4 text-[#F1592D] leading-tight">
            About us
          </h1>


          <div className="flex flex-wrap justify-center gap-4 text-xl uppercase text-wgite tracking-widest mb-6">
            <span>➔ Mission</span>
            <span>➔ Vision</span>
            <span>➔ Values</span>
            <span>➔ Objectives</span>
          </div>

          <p className="text-sm md:text-base text-gray-300 mb-8">
          International College (MVIC), the best college in Nepal, offers a wide range of
            undergraduate and diploma programs in technical, management, hospitality, and finance.
            Recognized by the Nepalese Ministry of Education, MVIC stands as a top-rated institution in
            Kathmandu, providing quality education with international accreditation. With esteemed
            partnerships with City & Guilds in the UK and HELP University in Malaysia, MVIC offers
            globally recognized programs that ensure students receive an exceptional education experience.
            </p>

         
        </div>
      </section>

      {/* Section 2: Scrollable Content */}
      <section className="w-full bg-[#003044]  -z-10  py-20 px-8 text-center">
  <h2 className="text-3xl md:text-7xl font-bold text-white mb-12">Our Inspirition</h2>

  <div className="flex flex-wrap justify-center gap-8">
    {/* Card 1: Mission */}
  <div className="w-72 h-[28rem]  bg-orange-500 rounded-2xl shadow-lg flex flex-col p-5 overflow-hidden transform hover:scale-105 transition-all duration-300">
    <h3 className="text-4xl font-bold mb-4 text-white text-center">Mission</h3>
    <p className="text-lg text-white text-center overflow-auto leading-relaxed tracking-wide">
      Our Mission is to inspire minds and transform lives. MVIC is dedicated to leading the way in
      education, ensuring unparalleled excellence that is recognized worldwide.
    </p>
  </div>

  {/* Card 2: Vision */}
  <div className="w-72 h-[28rem] bg-orange-500 rounded-2xl shadow-lg flex flex-col p-5  overflow-hidden transform hover:scale-105 transition-all duration-300">
    <h3 className="text-4xl font-bold mb-4 text-white text-center">Vision</h3>
    <p className="text-lg text-white text-center overflow-auto leading-relaxed tracking-wide">
      At MVIC, our vision is to uplift the lives of every student while driving the economic growth
      of our nation. We strive to equip them with exceptional skills and knowledge, enabling them
      to meet the demands of businesses and industries as highly skilled professionals.
    </p>
  </div>

  {/* Card 3: Values */}
  <div className="w-72 h-[28rem] bg-orange-500 rounded-2xl shadow-lg flex flex-col p-5 overflow-hidden transform hover:scale-105 transition-all duration-300">
    <h3 className="text-4xl font-bold mb-4 text-white text-center">Values</h3>
    <div className="text-lg text-white text-left overflow-auto leading-relaxed tracking-wide">
      <p className="mb-2">Our values guide us in this pursuit:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Compassion</li>
        <li>Continuous Learning</li>
        <li>Accountability</li>
        <li>Funtastic</li>
        <li>Collaboration</li>
        <li>Making a Difference</li>
      </ul>
    </div>
  </div>

  {/* Card 4: Objectives */}
  <div className="w-72 h-[28rem] bg-orange-500 rounded-2xl shadow-lg flex flex-col p-5   overflow-hidden transform hover:scale-105 transition-all duration-300">
    <h3 className="text-4xl font-bold mb-4 text-white text-center">Objectives</h3>
    <div className="text-lg text-white  text-left overflow-auto leading-relaxed tracking-wide">
      <ul className="list-disc list-inside space-y-1">
        <li>Provide worldwide programs for real-world skills.</li>
        <li>Create a global employment network.</li>
        <li>Foster self-confidence and entrepreneurship.</li>
        <li>Support students in recognizing their talents.</li>
        <li>Raise ethical awareness in the workplace.</li>
      </ul>
    </div>
  </div>

  </div>
</section>

<section className="relative h-full w-full z-10 flex items-center justify-center bg-[#003044] overflow-hidden">

  

  {/* Content Container */}
  <div className="relative z-10 text-center text-white px-8 md:px-16">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">Message from Our Founders</h2>
    <p className="text-lg md:text-2xl mb-8 leading-relaxed tracking-wide">
      "At MVIC, we are committed to shaping the future of education. Our vision is to equip every student with the
      knowledge, skills, and confidence to succeed in a rapidly changing world. We believe in fostering a learning
      environment that inspires creativity, integrity, and lifelong growth."
    </p>

    {/* Button to show more details */}
   <Link to="/" >
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300">
        Learn More
      </button>
      </Link>
    <div className="flex flex-wrap justify-center gap-6 mt-16">
  {cards.map((card, index) => (
    <div key={index} className="w-72 flex flex-col items-center">
      {/* Image with overlay */}
      <div className="relative h-72 w-full overflow-hidden rounded-xl shadow-sm">
        <img
          src={card.src}
          alt={card.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003044] via-transparent to-transparent" />
        <div className="absolute bottom-2 left-20 text-white text-lg font-semibold z-10">
          {card.title}
        </div>
      </div>

      {/* Button below image */}
      <div className=" py-10">
      <Link to="/" >
        <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
          Details
        </button>
        </Link>
      </div>
    </div>
  ))}
</div>
</div>
   

</section>
<section className="bg-[#003044] py-20 px-4 text-white relative z-15">
  {/* <RippleEffect /> */}
  <h2 className="text-center text-4xl md:text-6xl font-bold mb-12">Our Team</h2>

  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    autoplay={{ delay: 2500 }}
    loop={true}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination]}
    className="w-full max-w-7xl mx-auto"
  >
    {teamMembers.map((member, index) => (
      <SwiperSlide key={index}>
        <div className="bg-[#012634] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-72 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-orange-400">{member.name}</h3>
            <p className="text-sm text-gray-300 mt-2">{member.position}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className="flex justify-center mt-10">
  <Link to="/" >
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300">
        Learn More
      </button>
      </Link>
</div>

</section>
<section className="bg-[#003044] py-20 px-4 text-white relative z-10">

  <h2 className="text-center text-4xl md:text-6xl font-bold mb-12">Our Partners</h2>

  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    autoplay={{ delay: 2500 }}
    loop={true}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination]}
    className="w-full max-w-7xl mx-auto"
  >
    {partners.map((partners, index) => (
      <SwiperSlide key={index} className="slide-in-left">
        <div className="bg-[#012634] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src={partners.img}
            alt={partners.name}
            className="w-full h-72 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-orange-400">{partners.name}</h3>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="flex justify-center mt-10">
  <Link to="/" >
      <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300">
        Learn More
      </button>
      </Link>
  </div>


</section>
<section
  className="w-full py-12 px-4 bg-[#003044]"
  style={{
    fontFamily: "sans-serif",
  }}
>
  <h2 className="text-4xl md:text-6xl font-bold text-center text-white py-5 mb-16">
    Recognition And Equivalency
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6 transition-all duration-500">
    {/* Left Image */}
    <div
      className={`transition-all duration-500 overflow-hidden rounded-md shadow-lg
        h-[300px] sm:h-[400px] md:h-[800px]
        ${hovered === "left" ? "md:w-[42%]" : hovered === "right" ? "md:w-[28%]" : "md:w-[35%] w-full"}
      `}
      onMouseEnter={() => setHovered("left")}
      onMouseLeave={() => setHovered(null)}
    >
      <img
        src="./public/rcognition.png"
        alt="Left"
        className="w-full h-full object-cover rounded-md"
      />
    </div>

    {/* Right Image */}
    <div
      className={`transition-all duration-500 overflow-hidden rounded-md shadow-lg
        h-[300px] sm:h-[400px] md:h-[800px]
        ${hovered === "right" ? "md:w-[42%]" : hovered === "left" ? "md:w-[28%]" : "md:w-[35%] w-full"}
      `}
      onMouseEnter={() => setHovered("right")}
      onMouseLeave={() => setHovered(null)}
    >
      <img
        src="./public/equivalency.png"
        alt="Right"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  </div>
</section>






    </div>
  );
};

export default AboutPage;
