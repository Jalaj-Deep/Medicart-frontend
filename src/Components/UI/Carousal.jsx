import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousal = () => {
  const slides = [
    
    {
      url: 'https://media-hosting.imagekit.io/065b25be40144c99/Screenshot%202025-04-13%20165808.png?Expires=1839151759&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qb9cwtmncrXrO929P4jlSP1zXDyvUl0BfRhqKViW1pzKm36B1gq-weF6d6dkaIcevE9rpW7Y2zUFcl0NSgvP-jTd1lqwl3jsesvj5VmWB3q-CeZ6mj0xdHlFl4FJ-j8ZZCiKpSoTkOfkZpAinhPv2EdVJYeWxzS3GfOOu6evdgcbZuhMuKZkzAsMP9Jdv874SjBYjB9GRN43muocEvhrd7-ln1GNehJ8blQPPpOfkZpGdBVgOCqbqpd8Q14HshDzZiSgokPsQTwBtYPWuzr~g5KA~iklsH8U2yoM-7BX4oHX4a7hiISZbWc004-GNipkL3~FER1maKpspYcIaa3Ijg__',
    },
    {
      url: 'https://media-hosting.imagekit.io/8ce2339b50af48a2/Screenshot%202025-04-13%20165154.png?Expires=1839151333&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=c~2ROy0--W9si7gI5KLbZkc5ndtvkE2vBcLRHgrllZdJFsL8CRP2OK1jigubUQSbzJTPazjFajDIJoorsOzK0FG9qu~9gywEWPWR3qh5Px3vCTQ3JCl8Sqko2Qvt9PtAtKcP~wqukiqRVTewEjoC7FPfqeAnMy4bPRMLYK92PoWUdfpy1lmlVcptVdrEp-4wzR61fpcGmRgSdWnFtgTs6SPJx1Ry1Gm~Nxyw9EESNPz8tk3Di1DPQIz34YksU6IM1e7TbYB5Z6ELjVz6dGTRhRzgX~KSRLCqSHZ-n1q0QzN~s4OZ6j3f~ho5cqOBmzl3vO4pMJjhY~HGLYBhrtGNyA__',
    },
    {
      url: 'https://media-hosting.imagekit.io/ecc5cc99eec04533/Screenshot%202025-04-13%20165408.png?Expires=1839151480&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W~g-~dz8r9yWFsKGq0V8-XTsYi0JPbnoZ~X8PHmYgATgusUp~rqPuAkVxc2t6C13CL7y9xvRxkeO3ByrYaBsM4MORTzEuv8QOQMvPNN5pd6asBBbrPQkCi-VPxVT1Su1MfSGE3bYMf8HmWuDt5q-LKSjvZeQ4EwqVQaEgBKcD39ghwnC3ruDcPerppHzcMRr05IlqN1N9Nc8T9PZLIDh0wNtv6IGIz6PSRWIbR-2mtmmwj5I4Fu91u7ivdI4qXzbh5EUs85zhJu9rdGj8z4OwykLialFNp4p6h1Y6nkjElNLtD1-kX~es2pa1OsgWUYi~W0DawEfDKDczXU9btwYlA__',
    },
    {
      url: 'https://media-hosting.imagekit.io/cc04075a017f4177/Screenshot%202025-04-13%20165431.png?Expires=1839151574&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oAMW7XG2XQ6Ad4bL1gWyMcP0-BArWOviX2ScJ1nSh3jgAazI7~ZqypNiHlo3EUvv89yHvOAaLJoM1NZF4~xuM11CTZkFbrRgvwmTqTTC2B~vTokcJV3QBNptEQc7mOw1dU0uYqvf7BoIY9-q2HFy1iCm~Uk7Xe7jhaSTc6q~AbnLtGnLf2mLt3wy4q4QfJQcV5Azq~ecY~NOIl6pt7ZK2wG~9oFUj-neAvX4WhDpH~27wgBPJOA-dw3ZYxYnlHhedIA-RcUbQW9Dzki2Dgy39nLJd1tG6GPX1SPH8-8H9Z~iqphejOaIAhz0LPPstrUINY77wBkqKNJoOqg8XK4jKw__',
    },
    {
      url: 'https://media-hosting.imagekit.io/9fc3ee04ec4c42fb/Screenshot%202025-04-13%20165749.png?Expires=1839151714&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g5wbh8aV6V32zRXrs8NNyP8WaYKhwD3YNfOwlExzmkal2POvXq6a1LbxYZnWD2B6c3TrUJwnPw1xNtMKPRpWAqFi1SUY9vCeYLC5lboTsc05QUijf3sW1WVDe2yABzeSsjSddpll6kfEljKFf7GvL17YWeUEIFZyyzLq1RE3zykGlshTZjrgJXJHzT-TXerN55h93WsILTfzS6ZULl-rPRncXs7TqQt9IsxMSBsgw3F-yh8ZrBJA56gIXKqYI1Roy9qKuJ3OFr9CyP6ME2xovzDjDb6zJnvJ~Fxxg5oxHRLuGxVQOS2S0aLn1n5IesIOtQf7exJUhRVTW7yyJzKwNA__',
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
