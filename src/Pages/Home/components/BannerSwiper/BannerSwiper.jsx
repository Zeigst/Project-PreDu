import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { banner_images } from '../../../../Data'
import { Autoplay } from 'swiper';
// register Swiper custom elements
register();

export const BannerSwiper = () => {
  const swiperElRef = useRef(null);

  // useEffect(() => {
  //   // listen for Swiper events using addEventListener
  //   swiperElRef.current.addEventListener('progress', (e) => {
  //     const [swiper, progress] = e.detail;
  //     console.log(progress);
  //   });

  //   swiperElRef.current.addEventListener('slidechange', (e) => {
  //     console.log('slide changed');
  //   });
  // }, []);

  return (
    <div className="banner-swiper">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="true"
        pagination="true"
        centered-slides="true"
        loop="true"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
      >
        {banner_images.map((img) => {
          return (
            <swiper-slide key={img}>
              <img src={img}></img>
            </swiper-slide>
          )
        })}

      </swiper-container>
    </div>
  )
}