'use client';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link: string;
  imageUrl: string;
};

interface Props {
  certifications: Certification[];
}

const CertificationSlider: React.FC<Props> = ({ certifications }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Swiper
        navigation
        pagination={{ type: 'bullets', clickable: true }}
        autoplay={{ delay: 4000 }}
        // loop={certifications.length > 1}
        loop
        modules={[Autoplay, Navigation, Pagination]}
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-[420px] sm:h-[450px] flex flex-col">
              {/* Gambar sertifikat */}
<div className="relative w-full h-[200px] sm:h-[250px] overflow-hidden rounded-t-2xl bg-white">
  <Image
    src={cert.imageUrl}
    alt={cert.title}
    // fill
    width={800}
    height={600}
    // className="object-contain"
    className="object-contain w-full h-auto max-h-[400px]"
    priority
  />
</div>

              {/* Detail sertifikat */}
              {/* <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-600 text-sm font-medium hover:underline"
                >
                  View Certificate
                </a>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CertificationSlider;
