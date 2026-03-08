import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar1 from '../../assets/images/blackman (1).jpg'
import patientAvatar2 from '../../assets/images/blackman (2).jpg'
import patientAvatar3 from '../../assets/images/blackman (3).jpg'
import { HiStar } from 'react-icons/hi'

function Testimonial() {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>

            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-[13px]'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar1} alt="" width="100" height="100" className="rounded-full object-cover" />
                            <div className='text-[18px] leading-[30px] font-semibold text-headingColor '><h4>Kwame Mensah</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"MEDIGH changed my life. I used their medical services and the doctors are outstanding — they provide the very best in care and always make me feel at ease."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-[13px]'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar2} alt="" width="100" height="100" className="rounded-full object-cover" />
                            <div className='text-[18px] leading-[30px] font-semibold text-headingColor '><h4>Chidi Okonkwo</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"The online consultation was seamless. The doctor was professional and attentive. Highly recommend their services!"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-[13px]'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar3} alt="" width="100" height="100" className="rounded-full object-cover" />
                            <div className='text-[18px] leading-[30px] font-semibold text-headingColor '><h4>Jamal Williams</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"Excellent service! Booking an appointment was easy and the healthcare provider was very knowledgeable."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='py-[30px] px-5 rounded-[13px]'>
                        <div className='flex items-center gap-[13px]'>
                            <img src={patientAvatar1} alt="" width="100" height="100" className="rounded-full object-cover" />
                            <div className='text-[18px] leading-[30px] font-semibold text-headingColor '><h4>Kwame Mensah</h4>
                                <div className='flex items-center gap-[2px]'>
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"MEDIGH changed my life. I used their medical services and the doctors are outstanding — they provide the very best in care and always make me feel at ease."</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial