import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export const HomeCardSwiper = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <div className="home-card-swiper">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="3"
        navigation="true"
        pagination="true"
      >
        <swiper-slide>Slide 1</swiper-slide>

      </swiper-container>
    </div>
  )
}