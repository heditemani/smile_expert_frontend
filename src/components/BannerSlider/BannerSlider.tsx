import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './BannerSlider.module.css';

// Define the shape of your props
interface BannerSliderProps {
  images: string[];
  title: string;
  subtitle: string;
  buttonText?: string;          // Optional: only renders if provided
  onButtonClick?: () => void;   // Optional: function to handle clicks
}

const BannerSlider = ({ images, title, subtitle, buttonText, onButtonClick }: BannerSliderProps) => {
  return (
    <div className={styles.bannerContainer}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className={styles.swiper}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="Banner" className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Overlay content */}
      <div className={styles.overlay}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        
        {/* Conditional rendering for the CTA button */}
        {buttonText && (
          <button className={styles.ctaButton} onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default BannerSlider;