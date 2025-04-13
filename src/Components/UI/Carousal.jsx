import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousal = () => {
  const slides = [
    
    {
      url:'https://media-hosting.imagekit.io/10325c4d6d55421d/Screenshot%202025-04-13%20181544.png?Expires=1839156498&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u4MJryRmRNQp8cXsT5h3qQwcmkTkdFvAyZw7D1QPPhIjVbKDkgSvp8kyfG6E2CGnH2b6EKHe3en2K6bH1tjAdnUQPQJq5vXFpByfiNcZJtMpBhKJDViOipA2q1Agl0NYMOAi2SvKl3K476e1dp3o8axHI4Nz~tpZ~5Mcqj5672cTYlfMk7xRN82m8b9X7VlwHXKfiw0z93xdM5tIDnu7kLLxMujweikYs0RccF6IgCc-v~ZQuRPoMRWx63Sh~lcZ2-mLauZnzSYnG1200~6ACkkJgmDyfKK7Q9mCOAZmdlRCYdtO2x2Wt7rkI6CHrX~GtQFsqmog5Rot~kGnbGMNCg__'
    },
    {
      url:'https://media-hosting.imagekit.io/1571869b20c34622/Screenshot%202025-04-13%20184208.png?Expires=1839157942&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v-XrS8zSOWNA55g5t6Mr9CzUygxyzs4I3ou9nnN-Um0~CTSskSKrBjv~t1aqGGOd-Ah10DBtNHkLzNoWQDdwQhTMs2Zgi3xBvhcZXzxpOnyANowaDjyN20CsITnGKQjGbD-JlZuTtSeHPzJW~VhMQ9wAM7LxRKqcfJh~i-h8Tco6uAm9zC7FbX6r5ivsWxs-91CffFIXikAS2RMUc7xdIEK8pLB6TnVFQK60ec3SXf6iRM2NdHyPCCpysWGKD09Vf2HfA~TMRaensu4jzjmLpHglCuPBDb0pM8xaoFLyeM7eDbrM1XZDYA4dHwM-O0nwg04aS~H1JySfK2jv-kFeZg__'
    },
    {
      url:'https://media-hosting.imagekit.io/0fe0c6be20154c18/Screenshot%202025-04-13%20182404.png?Expires=1839156849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RPoZfB7u4Vy88Ga6GGWg7cKOCxgOcWbQbZQWFp0i4g3IVBsesF7qiGRsOuzzNb6aNXWganwVdnb6AGpmcwv~MqVASiy-wUVcO1zVCBPYjwHshW1-r2LoH5Lfl~VhGxSr~3o4Npkq2d2SHir~wRkNmOiot-OujSouaMoJ25W8mIWWDq29e4TkEE7XXeYWckYQF6Roc3DY1Zy6rLkM441pppl0FLfr1ibyzjVXqkOYSPM0qqtcbSxXlZYcNF4JX~EdMfB9xVpw4SxgzzalG2Bg3Y07V-eDm28SsYYE-UioEVLecFEjrk~eM~lhbWSu-g203XkKMOdO0Pdf6dTU51eDxA__'
    },
    {
      url :"https://media-hosting.imagekit.io/9efc01dabed74403/Screenshot%202025-04-13%20182730.png?Expires=1839157055&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=s9clPYW6xl5BRc3mNqOLRP~wHRvukQJiZMGsbWYgVXWFGWnNBDUHjIhM1WvjHZk3D64KMT3entiJT7sCFtpJLdRzGgwnkartQ8OZ7Vt0nYmcW0KDhjQ2hOL0HX5P1fkixEQlfbuvAgyc5ouk4lJHVe-UxKrBk6cg~AyPYqQLQN5Av8BJJkevoJv-fscRqCjAPo8kt4KIM2I1WqKzD3M08hp4tbbj-IUuQ1iAydevnMGuZEybG2snfkAR-4ulVa1yLAMvgfEaBR4ssZwnoLuMnUOsuR1P3j7geVBjJxV8OI6eTTfy6JEzm2cYlfIyT0wAcNihLOiOEK7ZMsd5rP~l7A__"
    },
    {
      url: 'https://media-hosting.imagekit.io/a33d1e32e16c4ca0/Screenshot%202025-04-13%20180644.png?Expires=1839155820&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g9kKN6EQ6967cgHPZoDeUuGknT-TNCg7i6NTUAP8gGu6z4b8G1MZRrRVr89hojRZvs3nj-op2xyg~rFkLtuq8oResmDuVAtTf5bXtOErtbB8st7mgSsio3I6S~UFo792s468yhJMgzHMAyy4npvv0yOpwPGqiRkzxsjBnS3VEn9B7imyhYMnDaoi5f1qnT-wJx6hLV4DKoOPNJjCI9dyzetY8CANb5Dwu13cJ4-Y-Nf9pmd6aehB-oDBpOudgxEq7e0rhl2uGqAuB7d2UDBLn9JO~6eJ4uBiXmwr6JtXuxdky-AzOQBP1zePi6VrQE8C3rUtNMIRRMa3O9a87LZmrg__',
    },
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
      >
        {/* Left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'
            }`}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousal;
