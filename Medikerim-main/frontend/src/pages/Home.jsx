import React from "react";

import heroImg011 from "../assets/images/doctor (1).jpg";
import heroImg022 from "../assets/images/doctor (2).jpg";
import heroImg033 from "../assets/images/blackman (1).jpg";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/doctors22.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/blackman (2).jpg";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About/About.jsx';
import ServiceList from '../components/Services/ServiceList';
import featureImg from "../assets/images/youngdoctor (1).jpg";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/faq/FaqList.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";



const Home = () => {
    return (<>

        {/* ======= hero section ======= */}
        <section className="hero__section pt-[60px] 2xl:h-[800px]">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

                    {/* ========= hero content ======== */}
                    <div>
                        <div className="lg:w-[570px]">
                            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[70px]">We help patients live healthy, longer lives.</h1>

                            <p className="text__para">No more waiting in line — you're in control of your time.</p>

                            <button className="btn glass-button">
                                Book Appointment
                            </button>
                        </div>

                        {/* =======hero counter ======= */}
                        <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5
                            lg:gap-[30px] ">

                            <div className="glass-card p-4 rounded-xl">
                                <h2 className="text-[36px] leading-3[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                    30+
                                </h2>
                                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                <p className="text__para">Years of Experience</p>
                            </div>

                            <div className="glass-card p-4 rounded-xl">
                                <h2 className="text-[36px] leading-3[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                    15+
                                </h2>
                                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                <p className="text__para">Clinic Centers</p>
                            </div>

                            <div className="glass-card p-4 rounded-xl">
                                <h2 className="text-[36px] leading-3[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                    100%
                                </h2>
                                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                <p className="text__para">Patient Satisfaction</p>
                            </div>

                        </div>
                    </div>


                    <div className="flex gap-[30px] justify-end">
                        <div className="glass-card p-2 rounded-xl">
                            <img className="w-full rounded-xl" src={heroImg011} alt="Doctor consulting with patient" />
                        </div>
                        <div className="mt-[30px] glass-card p-2 rounded-xl">
                            <img src={heroImg022} alt="Medical professionals in hospital" className="mb-[30px] w-2/3 rounded-xl" />
                            <img src={heroImg033} alt="Healthcare team" className="w-2/3 rounded-xl" />
                        </div>
                    </div>



                </div>
            </div>
        </section>
        {/* ======= hero section end ======= */}
        <section>
            <div className="container">
                <div className="lg:w-[470px] mx-auto">
                    <h2 className="heading text-center">Providing the Best Medical Services</h2>
                    <p className="text__para text-center">World-class care for everyone. Our healthcare system offers unmatched, quality medical services.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
                    <div className="py-[30px] px-5 glass-card rounded-2xl">
                        <div className="flex items-center justify-center"> <img src={icon01} alt="Find a doctor icon" /></div>


                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class care for everyone. Our healthcare system offers unmatched quality medical services. From the lab to the clinic.</p>
                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                            >
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />

                            </Link>


                        </div>

                    </div>

                    <div className="py-[30px] px-5 glass-card rounded-2xl">
                        <div className="flex items-center justify-center"> <img src={icon02} alt="Find clinic icon" /></div>


                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find Clinics</h2>
                            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class care for everyone. Our healthcare system offers unmatched quality medical services. From the lab to the clinic.</p>
                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                            >
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />

                            </Link>


                        </div>

                    </div>

                    <div className="py-[30px] px-5 glass-card rounded-2xl">
                        <div className="flex items-center justify-center"> <img src={icon03} alt="Book appointment icon" /></div>


                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class care for everyone. Our healthcare system offers unmatched quality medical services. From the lab to the clinic.</p>
                            <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                            >
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />

                            </Link>


                        </div>

                    </div>

                </div>

            </div>
        </section>

        <About />

        {/* ========== services section  ========= */}
        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">Our Medical Services</h2>
                    <p className="text__para text-center">World-class care for everyone.</p>
                </div>
                <ServiceList />
            </div>
        </section>
        {/* ========== services section end  ========= */}

        {/* ========= feature section ========== */}
        <section>
            <div className="container">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    {/* ======= feature content == */}
                    <div className="xl:w-[670px]">
                        <h2 className="heading">Get virtual <br /> care anytime.
                        </h2>
                        <ul className="pl-4">
                            <li className="text__para">
                                1. Schedule directly for an appointment.</li>
                            <li className="text__para">
                                2. Find a healthcare provider here and contact their office.</li>
                            <li className="text__para">
                                3. Meet doctors accepting new patients and use the online scheduler to select your appointment time.</li>
                        </ul>
                        <Link to='/'><button className="btn">Learn More</button></Link>
                    </div>

                    {/* ======== feature img ======== */}
                    <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ">
                        <img src={featureImg} className="w-3/4 glass-card p-2" alt="Doctor conducting virtual consultation" />
                        <div className="w-[150px] lg:w-[248px] glass-card absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] ">

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[6px] lg:gap-3">
                                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tuesday, 24</p>
                                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00</p>
                                </div>
                                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
                                    <img src={videoIcon} alt="Video call icon" />
                                </span>
                            </div>

                            <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">Consultation</div>

                            <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                                <img src={avatarIcon} alt="Patient avatar" />
                                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor ">Dr. Kwame Asante</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* ========= feature section end ========== */}



        {/* =========our greate doctors ======= */}
        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">Our Expert Doctors</h2>
                    <p className="text__para text-center">World-class care for everyone. Our healthcare system offers unmatched quality medical services.</p>
                </div>
                <DoctorList />
            </div>
        </section>
        {/* =========our great doctors end ======= */}

        {/* ======= faq section ========== */}
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-0 items-center">
                    <div className="w-1/2 hidden md:block">
                        <img src={faqImg} alt="MEDIGH doctors ready to answer your questions" className="w-full h-[400px] object-cover rounded-lg glass-card p-2" />
                    </div>

                    <div className="w-full md:w-1/2 glass-card p-6 rounded-2xl">
                        <h2 className="heading">Most questions by our beloved patients</h2>

                        <FaqList />
                    </div>
                </div>
            </div>
        </section>
        {/* ======= faq section end ========== */}

        {/* ======== testimonial ========== */}
        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto">
                    <h2 className="heading text-center">What Our Patients Say</h2>
                    <p className="text__para text-center">World-class care for everyone. Our healthcare system offers unmatched quality medical services.
                    </p>
                </div>
                <Testimonial />
            </div>
        </section>
        {/* ======== testimonial end ========== */}

        {/* ======= footer ======= */}


    </>
    );
};

export default Home;