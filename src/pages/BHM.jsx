import React, { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { UI } from "./book/UI";
import { Experience } from "./book/Experience";
import logo from '/logoicon.png';



import i1 from './imgs/BHMcover.png';
import i2 from './imgs/HELPLogo.png';
import i3 from './imgs/AD.png';
import i4 from './imgs/emailicon.png';
import i5 from './imgs/Telicon.png';
import i6 from './imgs/phoneicon.png';
import i7 from './imgs/BBAF.png';
import i8 from './imgs/BITF.png';



const LoadingPage = () => {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen  text-white">
            <motion.img
                src={logo}
                alt="Logo"
                className="w-48 h-48 transform-origin-center"
                animate={{ rotateY: [0, 360] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            />
            <h2 className="mt-5 text-4xl font-bold">Loading{dots}</h2>
        </div>
    );
};

const semesterData = {
    Year1: {
        sem1: [
            "ACC102: Accounting for Hospitality & Tourism",
            "TRM101: Principles of Management for Hospitality & Tourism",
            "TRM103: Fundamental of Food & Beverage Service",
            "TRM200: Introduction to Tourism, Leisure and Hospitality Management",
            "TRM207: Room Division Management",
            "Non Credit Course | Case Study: MS Excel 101, Tally Software 101, Academic Writing 101",
            "Experiential Learning Programme: Visit to Different Hotels and Understanding Different Department Functions",
            "Soft Skills & Personal Development: Dressing Etiquettes, Communication Skill 101 – Goal Setting and Self Awareness",
            "Development Center Activities: Intra-College Sports Competition"
        ],
        sem2: [
            "ECO101: Principles of Micro-economics",
            "ITC101: Information Technology for Business",
            "MKT101: Principles of Marketing",
            "TRM205: Introduction to Kitchen Operations & Food and Beverage Services",
            "TRM214: Accommodation Operations Management",
            "Non Credit Course | Case Study: MS PowerPoint 101, Social Media Marketing 101",
            "Experiential Learning Programme: Introduction to ERP in Hotels, Introduction to PMS Software in Hotel, Community Home Stay",
            "Soft Skills & Personal Development: Com. Skill 102 – Effective Communication & Feedback, Body Language 101",
            "Development Center Activities: Inter-College Sports Competition"
        ]
    },
    Year2: {
        sem1: [
            "COM200: Managerial Communication",
            "QBM101: Business Statistics",
            "TRM202: Organizational Behaviour for Service Industry",
            "TRM231: Bar, Beverage and Barista Management",
            "TRM233: Hotel Operations Management",
            "Non Credit Course | Case Study: MS PowerPoint 102, SPSS 101",
            "Experiential Learning Programme: Content Writing 101, Data Analytics 101, Barista and Bar 101",
            "Soft Skills & Personal Development: Com. Skill 102 – Presentation Skills and Digital Literacy",
            "Development Center Activities: TedX (Simulation) @ Mid-Valley, Story Yeller College Edition, Student Mentorship Programme"
        ],
        sem2: [
            "MGT212: Business Analytics for Decision Making",
            "TRM204: Human Resource Management for the Hospitality and Tourism Industry",
            "TRM213: Hospitality Small Business Operations",
            "TRM304: Research Methodology for Hospitality Industry",
            "TRM316: Dining Etiquettes",
            "Non Credit Course | Case Study: Labour Law in Nepal 101, Business Model Canvas 101, SPSS 102",
            "Experiential Learning Programme: Data Analytics 102, Research Survey in Different Hotels, Banquet Management in a Hotel or Independent Banquet",
            "Soft Skills & Personal Development: Basic Financial Modeling 101, Business Model Canvas, Case Study – Booking Engine and Trivago, Case Study – Airbnb and Trip Advisor",
            "Development Center Activities: Speakers Forum (Simulation of Toast Masters), Mud and Music Mayhem"
        ]
    },
    Year3: {
        sem1: [
            "FIN201: Business Finance",
            "MGT204: Asian Entrepreneurship & Innovation",
            "MPU3243: Personal Branding and Career Management",
            "MPU3432: Co-curriculum – Event Management 2",
            "TRM317: Service Management & Customer Care in Hospitality Industry",
            "TRM400: Graduation Project (I)",
            "Non Credit Course | Case Study: Revenue Management and MIS Analysis 101",
            "Experiential Learning Programme: Shadow an Entrepreneur",
            "Soft Skills & Personal Development: Com. Skill 103 – Interview Skill, Com. Skill 104 – CV Preparation, Com. Skill 105 – Email Etiquettes",
            "Development Center Activities: Intra-College Business Idea Pitch Competition"
        ],
        sem2: [
            "TRM301: Food and Beverage Management",
            "TRM305: Leadership and Management in Hospitality Industry",
            "TRM306: Training & Development in Hospitality Industry",
            "TRM323: Contemporary Issues in the Hospitality and Tourism Industry",
            "TRM400: Graduation Project (II)",
            "Non Credit Course | Case Study: Business Model & Disruption in Hospitality Industry",
            "Experiential Learning Programme: Shadow A CEO | Senior Management in a Hotel, Training & Development Module for a Hotel",
            "Soft Skills & Personal Development: CV Preparation 2.0, Interview Skill 2.0, Elevator Pitching Workshop, Art of Negotiation",
            "Development Center Activities: Guidance Counselling"
        ]
    },
    Year4: {
        sem1: [
            "TRM330: Industry Placement Practicum (2 semesters)"
        ],
        sem2: []
    }
};



const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

function App() {
    const [activeYear, setActiveYear] = useState("Year1");

    const slideInLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 3.5,
                ease: "easeOut",
                delayChildren: 0.2, // This adds a slight delay before animations start
                staggerChildren: 0.1, // This will stagger child animations
            }
        }
    };

    const renderSubjects = (semester) => {
        return semesterData[activeYear][semester].map((subject, idx) => (
            <li key={idx} className="text-white text-lg mb-1">
                {subject}
            </li>
        ));
    };

    return (
        <div className="w-full font-sans">

            <div className="relative text-center overflow-hidden ">
                <div
                    className="relative lg:h-[650px] md:h-[350px] sm:h-[250px] overflow-hidden"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgb(172, 166, 166),rgb(232, 79, 13))",
                    }}
                >



                    {/* Foreground UI */}
                    <UI />
                    <Suspense fallback={<LoadingPage />}>
                        <Canvas
                            shadows
                            camera={{
                                position: [-0.5, 1, window.innerWidth > 500 ? 2.5 : 50],
                                fov: 45,
                            }}
                        >

                            <Experience />
                        </Canvas>
                    </Suspense>

                    {/* Text Overlay */}
                    <motion.div
                        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    >
                        Bachelor of Hotel Management (Hons)
                    </motion.div>
                </div>

            </div>

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

            {/* 70-30 Horizontal Split */}
            <div className="flex flex-col lg:flex-row mt-10">
                {/* Left Side (70%) */}
                <div className="w-full lg:w-[70%]">
                    <motion.h1
                        className="text-left text-[#F1592D] text-2xl sm:text-xl lg:text-4xl font-bold mt-1 sm:px-75 lg:pl-85 mb-6"
                        variants={slideInLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        Program Overview
                    </motion.h1>

                    <motion.div
                        className="bg-[#003044] text-white p-5 rounded-3xl text-left lg:w-[700px] sm:w-[500px] leading-6 px-6 sm:px-10 mt-1 mx-auto mb-6"
                        variants={slideInLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <p className="text text-base sm:text-xl lg:text-2xl">
                            Affiliated to: HELP University, Malaysia <br />
                            Course Duration: 4 years (8 semesters) <br />
                            Paid Internships: Available <br />
                            Pre-Requisite Tests: Not Required <br />
                            Total Credit: 127
                        </p>
                    </motion.div>

                    {/* Red Container - Affiliation */}
                    <motion.div
                        className="bg-[#DA2128] rounded-3xl px-6 sm:px-10 mt-1 mx-auto mb-6 w-full lg:w-[700px] sm:w-[500px] text-left"
                        initial={{ opacity: 0, x: -100 }} // Start off-screen and invisible
                        animate={{ opacity: 1, x: 0 }} // Move to position and become visible
                        transition={{ duration: 2.5, ease: "easeOut" }} // Slow animation duration
                    >
                        <div className="text-white text-2xl sm:text-xl lg:text-4xl font-bold flex items-center gap-4">
                            Affiliation:
                            <img src={i2} alt="Logo" className="w-32 sm:w-52 h-auto" />
                            <motion.div
                                className="text-white text-lg sm:text-sm md:text-xl select-none"
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <a
                                    href="https://help.edu.my/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-[#DA2128] px-4 sm:px-5 py-2 text-base sm:text-xl rounded-full mt-3 inline-block text-center"
                                >
                                    Details
                                </a>
                            </motion.div>



                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-[#003044] text-white p-5 rounded-3xl text-left lg:w-[700px] sm:w-[500px] leading-6 px-6 sm:px-10 mt-1 mx-auto mb-6"
                        variants={slideInLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <p className="text  text-base text-justify sm:text-xl lg:text-2xl">
                            At Mid-Valley International College, we go beyond shaping professionals we
                            cultivate well-rounded individuals who lead with purpose. Our Bachelor of Business
                            in Hospitality Management (BBHM) Hons program instills core values of
                            accountability, compassion, fantastic spirit, collaboration, continuous learning,
                            and a commitment to making a difference. We believe these values are essential to
                            creating future leaders who not only excel in their careers but also contribute
                            positively to the world around them.
                            Our curriculum blends industry-specific skills with personal development, ensuring
                            students are ready to thrive in dynamic fields like events, gaming, entertainment,
                            tourism, and guest relations. Graduates of our program are equipped to succeed in
                            top hospitality organizations, advancing quickly into managerial roles while staying
                            true to their values.
                            Join us at Nepal’s leading BBHM college and embark on a transformer journey
                            where you’ll gain professional expertise and become a better, more impact human
                            being—ready to unlock endless opportunities in the thriving hospitality industry.
                        </p>
                    </motion.div>

                    <div className="text-orange-600  sm:text-xl lg:text-3xl font-bold mt-50 flex items-center py-5 px-55">
                        HELP University's Hospitality Program :
                    </div>
                    <motion.div
                        className="bg-[#DA2128] rounded-3xl px-6 sm:px-10 mt-1 mx-auto mb-6 w-full lg:w-[700px] sm:w-[500px] text-left"
                        initial={{ opacity: 0, x: -100 }} // Start off-screen and invisible
                        animate={{ opacity: 1, x: 0 }} // Move to position and become visible
                        transition={{ duration: 2.5, ease: "easeOut" }} // Slow animation duration
                    >

                        <p>
                            <ul className="list-disc pl-5 text-white py-5 sm:text-xl lg:text-2xl text-left space-y-2">
                                <li>Highly regarded internationally for its global recognition in Hospitality-related programs.</li>
                                <li>Own Hospitality Lab for empowering students with culinary mastery and practical hotel operations insights.</li>
                                <li>Japan’s prestigious internship opportunity.</li>
                                <li>
                                    Credit Transfer availability in esteemed destinations like Australia, UK, UAE, and other Middle Eastern countries.
                                </li>
                            </ul>

                        </p>
                    </motion.div>

                    {/* Scope Section */}
                    <h1 className="text-left text-[#F1592D] text-2xl sm:text-2xl lg:text-4xl font-bold mt-40 px-4 sm:px-87  lg:pl-110 mb-6">
                        Scope
                    </h1>

                    <div className="bg-[#003044] text-white p-5 rounded-3xl text-left w-full lg:w-[700px] sm:w-[500px] h-auto leading-6 px-6 sm:px-10 mt-1 mx-auto mb-6">
                        <div className="space-y-8 text-justify text-base sm:text-xl lg:text-2xl">
                            {/* Job Opportunity */}
                            <div>
                                <h2 className="font-bold text-white py-5 text-2xl mb-2">Job Opportunity</h2>
                                <p>
                                    Earning a Hospitality Management (BHM) degree from Mid-Valley International College opens the door to a variety of career paths.
                                    You can participate in a 6-month paid internship in Japan, which includes airfare, accommodation, meals, and a monthly salary of Rs. 50,000.
                                    Furthermore, you'll receive a job offer with a monthly salary of Rs. 200,000, creating additional opportunities in Japan and internationally.
                                </p>
                                <p className="mt-4 font-semibold">Graduates can explore a wide range of sectors and positions, including:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>Hotels and resorts</li>
                                    <li>Event planning and management</li>
                                    <li>Restaurant and culinary services</li>
                                    <li>Guest services and relations</li>
                                    <li>Cruise ships</li>
                                </ul>
                            </div>

                            {/* Academic Opportunity */}
                            <div>
                                <h2 className="font-bold text-white text-left text-2xl py-5 ">Academic Opportunity</h2>
                                <p>
                                    Graduates of the Bachelor of Business (Hospitality Management) (Hons) (BHM) have outstanding opportunities to expand their knowledge and career prospects.
                                    Here are some paths they can explore:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>Master’s Degree</li>
                                    <li>Specialized Certifications</li>
                                    <li>Postgraduate Diplomas</li>
                                    <li>Research and Academia</li>
                                    <li>Professional Development Courses</li>
                                    <li>Entrepreneurship</li>
                                </ul>
                            </div>

                            {/* Entrepreneurship */}
                            <div>
                                <h2 className="font-bold text-white text-2xl py-6">Entrepreneurship</h2>
                                <p>
                                    The Bachelor of Hospitality Management (Hons) (BHM) program at MVIC cultivates industry expertise and an entrepreneurial mindset.
                                    Our curriculum provides students with a solid foundation in hospitality, entrepreneurship, and leadership, empowering them to identify market
                                    opportunities, create sustainable business models, and become visionary leaders who positively impact society.
                                </p>
                                <p className="mt-2">
                                    At MVIC, we also encourage students to embrace entrepreneurship and transform their creative ideas into successful ventures. They participate in global
                                    competitions like the EOGSEA (Global Student Entrepreneur Awards) showcasing their innovative projects and entrepreneurial skills. We offer mentorship
                                    and resources to help them compete on an international level and emerge as future leaders in the business world.
                                </p>
                                <p className="mt-2 font-semibold">
                                    Together, we inspire the next generation of entrepreneurs to make a meaningful difference in the world.
                                </p>
                            </div>
                        </div>

                    </div>

                    <h1 className="text-left  text-[#F1592D]  sm:text-2xl lg:text-4xl font-bold mt-40  lg:px-[22%] sm:px-[28%]  mb-10">
                        Our Very Own Hospitality Hub
                    </h1>

                    <div className="bg-[#003044] text-white p-5 rounded-3xl text-left w-full lg:w-[700px] sm:w-[500px] h-auto leading-6 px-6 sm:px-10 mt-1 mx-auto mb-6">
                        <div className="space-y-8 text-justify text-base sm:text-xl lg:text-2xl">
                            <p>
                                Experience hands-on learning in our Culinary Hub at MVIC, featuring modern facilities for a
                                comprehensive education in culinary arts and hospitality management. Master essential culinary
                                techniques in practical kitchens, bars, and a bakery kitchen, while also developing skills in
                                hospitality management, housekeeping, and restaurant operations. Explore various facets of hotel
                                management through dedicated labs and simulated environments, including front desk
                                management, housekeeping procedures, event planning, and guest services. This holistic approach
                                equips you for success in the dynamic hospitality industry.
                            </p>
                        </div>

                    </div>

                    {/* Course Structure Section */}
                    <h1 className="text-left text-[#F1592D] text-2xl sm:text-xl lg:text-4xl font-bold mt-50 sm:px-75  lg:pl-85 mb-6">
                        Course Structure
                    </h1>

                    {/* Top Buttons + Dynamic Semester Labels */}
                    <div className="bg-[#003044] text-white p-5 rounded-3xl text-left w-full lg:w-[1000px] sm:w-[500px] h-auto px-6  sm:px-10 mt-1 mx-auto mb-40">
                        <div className="flex flex-wrap gap-4 sm:gap-6 mb-10 justify-center">
                            {Object.keys(semesterData).map((year) => (
                                <motion.div
                                    className="text-white text-lg sm:text-sm md:text-xl select-none"
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                >


                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`px-6 sm:px-10 py-2 sm:py-3 rounded-full text-white font-semibold text-lg sm:text-xl ${activeYear === year ? "bg-[#F1592D]" : "bg-[#F1592D]/80"}`}
                                    >
                                        {year}
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Semester Sections */}
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="w-full md:w-1/2">
                                <div className="text-center text-lg sm:text-xl font-semibold text-white mb-2">
                                    <span>{getOrdinal((parseInt(activeYear.replace("Year", "")) - 1) * 2 + 1)} Semester</span>
                                </div>
                                <div className="bg-[#F1592D] p-4 sm:p-6 rounded-3xl">
                                    <ul className="list-disc pl-5">{renderSubjects("sem1")}</ul>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2">
                                <div className="text-center text-lg sm:text-xl font-semibold text-white mb-2">
                                    <span>{getOrdinal((parseInt(activeYear.replace("Year", "")) - 1) * 2 + 2)} Semester</span>
                                </div>
                                <div className="bg-[#F1592D] p-4 sm:p-6 rounded-3xl">
                                    <ul className="list-disc pl-5">{renderSubjects("sem2")}</ul>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-lg sm:text-xl font-semibold text-white m-10">Credit hr : 125</p>
                    </div>

                    <div className=" text-orange-700 py-12 px-6 sm:px-10 md:px-16 lg:px-32">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6">
                            Advance Your Career in the Booming Hospitality Industry
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-center mb-8">
                            With our innovative program designed to enhance your skills, drive operational excellence, and achieve new levels of success.
                        </p>
                        <div className="flex flex-col items-center gap-8">
                            <div className="bg-[#F1592D] text-white p-6 w-full sm:w-[80%] lg:w-[100%] rounded-3xl shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <p className="text-lg sm:text-xl text-left">
                                    <b>Master Global Hotel Operations:</b> <br /> Learn how to manage complex hotel operations, integrating global best practices in technology and operations for effective service delivery.
                                </p>
                            </div>

                            <div className="bg-[#F1592D] text-white p-6 w-full sm:w-[80%] lg:w-[100%] rounded-3xl shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <p className="text-lg sm:text-xl text-left">
                                    <b>Technology Integration and Effective Management:</b> <br /> Gain hands-on experience with modern hotel technology solutions while improving your management skills to lead diverse teams effectively.
                                </p>
                            </div>

                            <div className="bg-[#F1592D] text-white p-6 w-full sm:w-[80%] lg:w-[100%] rounded-3xl shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <p className="text-lg sm:text-xl text-left">
                                    <b>Dynamic Final-Year Projects and Internships:</b> <br /> Participate in dynamic final-year projects and internships that offer hands-on experience and develop essential industry-specific skills.
                                </p>
                            </div>
                        </div>



                        <p className="text-lg sm:text-xl lg:text-2xl text-center mt-8">
                            Our curriculum enhances technical knowledge with essential soft skills and non-credit courses for success in the global marketplace.
                        </p>
                    </div>
                </div>

                {/* Right Side (30%) */}
                <div className="w-full lg:w-[30%] flex flex-col items-center gap-10 mt-10 lg:mt-0">
                    <motion.div
                        className="w-full lg:w-[30%] flex flex-col items-center gap-10 mt-10 lg:mt-0"
                        initial={{ x: 100, opacity: 0 }} // Start from the right and invisible
                        animate={{ x: 0, opacity: 1 }}  // End at original position with full opacity
                        transition={{ duration: 1.5, ease: "easeOut" }} // Easing out
                    >
                        <Link to="/" >
                            <div className="bg-[#F1592D] w-[290px] h-[300px] rounded-3xl overflow-hidden flex justify-center items-center mt-5">
                                <img src={i3} alt="Sample" className="rounded-xl w-11/12 h-11/12 object-cover" />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Inquiry Section */}
                    <div className="bg-[#F1592D] text-center p-4 rounded-3xl overflow-hidden lg:mt-255 w-[290px]">
                        <h2 className="text-3xl font-bold text-[#fff7f7] mb-1">For Inquiry</h2>
                        <ul className="list-none p-0 m-5 flex flex-col items-start text-[#fff7f7]">
                            <li className="flex items-center gap-2 text-lg mb-1">
                                <img src={i4} alt="Email" className="w-6 h-6" />
                                <span>info@midvalley.edu.np</span>
                            </li>
                            <li className="flex items-center gap-2 text-lg mb-1">
                                <img src={i5} alt="Tel" className="w-6 h-6" />
                                <span>1-4535188,</span>
                            </li>
                            <li className="flex items-center gap-2 text-lg mb-1">
                                <img src={i5} alt="Tel" className="w-6 h-6" />
                                <span>4537188+</span>
                            </li>
                            <li className="flex items-center gap-2 text-lg mb-1">
                                <img src={i6} alt="Number" className="w-6 h-6" />
                                <span>977-9841232529</span>
                            </li>
                        </ul>
                        <motion.div
                            className="text-white text-lg sm:text-sm md:text-xl select-none"
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link to="/EnquiryForm" >
                                <button className="bg-[#003044] text-white px-5 py-2 text-lg rounded-full cursor-pointer hover:bg-white hover:text-[#003044]">
                                    Contact Us
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    <h1 className="text-left text-[#F1592D] text-2xl sm:text-3xl lg:text-4xl font-bold lg:mt-1015">Related Courses</h1>
                    <div className="relative w-64 h-64 bg-[#F1592D] rounded-2xl overflow-hidden group shadow-lg">
                        <img
                            src={i8}
                            alt="Clickable"
                            className="w-full h-full object-cover border-[10px] border-orange-600 rounded-2xl cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col justify-center items-center gap-3 px-4 text-center">
                            <h2 className="text-[#F1592D] text-2xl font-bold drop-shadow-[0_0_5px_white]">
                                Bachelor of Information Technology (Hons)
                            </h2>

                            <motion.div
                                className="text-white text-lg sm:text-sm md:text-xl select-none"
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Link to="/" >
                                    <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#003044] hover:text-white transition">
                                        Details
                                    </button>
                                </Link>
                            </motion.div>

                        </div>
                    </div>

                    <div className="relative w-64 h-64 bg-[#F1592D] rounded-2xl overflow-hidden group shadow-lg">
                        <img
                            src={i7}
                            alt="Clickable"
                            className="w-full h-full object-cover border-[10px] border-orange-600 rounded-2xl cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col justify-center items-center gap-3 px-4 text-center">
                            <h2 className="text-[#F1592D] text-2xl font-bold drop-shadow-[0_0_5px_white]">
                                Bachelor of Business (Hons)
                            </h2>

                            <motion.div
                                className="text-white text-lg sm:text-sm md:text-xl select-none"
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <Link to="/" >
                                    <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#003044] hover:text-white transition">
                                        Details
                                    </button>
                                </Link>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </div>



    );
}

export default App;



