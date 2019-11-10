import HeroSlider from 'src/components/HeroSlider';

const images = [
  'https://wallpapercave.com/wp/wp2570965.jpg',
  'https://www.freegreatpicture.com/files/147/18429-hd-color-background-wallpaper.jpg',
  'https://wallpapercave.com/wp/wp2634897.jpg'
];

const HeroSliderDemo = () => {
  return (
    <div>
      <HeroSlider images={images}>
        <h2>Hello</h2>
      </HeroSlider>
      <style jsx>{`
        div {
          position: relative;
          height: 200px;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default HeroSliderDemo;
