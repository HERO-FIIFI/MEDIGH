import React from 'react';
import aboutImg from '../../assets/images/doctors.jpg';
import aboutCardImg from '../../assets/images/about-card1.png';
import { Link } from 'react-router-dom';

const About = () => {
    return <section>
        <div className='container'>
            <div className="flex justify-between gap-[80px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row items-center">
                {/* ====== about img ========*/}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="MEDIGH medical professionals providing exceptional healthcare" className="w-full h-[400px] object-cover rounded-lg glass-card p-2" />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] glass-card p-2 rounded-xl">
                        <img src={aboutCardImg} alt="MEDIGH achievement badge" />
                    </div>
                </div>

                {/* ======== about content ======= */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 glass-card p-6 rounded-2xl">
                    <h2 className='heading'>Proud to be one of the nation's leading healthcare providers</h2>
                    <p className='text__para'>For over 30 years, MEDIGH has been at the forefront of medical innovation in Africa. Our commitment to excellence has made us a trusted name in healthcare across the continent.</p>
                    <p className='text__para mt-[30px]'>With state-of-the-art facilities and a team of highly skilled professionals, we continue to set the standard for quality medical care. Your health is our priority, and we treat every patient like family.</p>
                    <Link to='/'><button className='btn glass-button'>Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
};

export default About;