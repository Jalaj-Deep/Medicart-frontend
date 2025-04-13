import React, { useState, useEffect } from 'react'; 
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const Carousal = () => {
  const slides = [
    
    {
      url:"https://media-hosting.imagekit.io/d6f9ff70ab774c33/Screenshot%202025-04-13%20193920.png?Expires=1839161372&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uP6AdzlUO9AMgGk8wv6YPbVep~EafygGnTemcZuiNtvmxURjEgq0E6sVRRii-NuHx7rFAhy3oOnJ9gMZ4zT9Alfclig-vKPp9eFfZA4ZlmIlYF~w6nVmBQzGIpk44raPxCbB5qutjRpH5mIyIZQwe6qj-nj5jWYH9MJqCYqr2sJZx1CW1tTc8rl2iLuhPchpoira6Fl7wMiwPOSToi4pa~VO-a3u~Aoh7zpb0lcLQvKk0qFXoWD0c2fx0VIZb9kBRMvHxn-Jxws~A74LdPfYefEUEom-PNz4oPDx5EJqx9PSZU5molHjwDyplY84DuCUH-4Ankb3YuLb5SazDIWFpQ__"
    },
    {
      url:'https://media-hosting.imagekit.io/7c4e32cdf46a4588/Screenshot%202025-04-13%20194158.png?Expires=1839161528&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FG1ObKX3Dj3rmimz39r2cfCsTCWjSJHb2~l9w~zF6HF9ZLl~bj81JkLPViYF2dG4nfZj1fXaSewjlW12iRqsr~h09mZ~JWTkt2IZugRCQT3v~JTjNDZT-u1xFpJC4-YREU3x6AGAucHb3XiqjiK~4Ih-DKbS29DifKie3MPJTJa-6rC8kRghqaunP1SP9Q9WMWrF4LI2oDF6vYPBBoXUrtgIhqnGrUd6kbBb1q-5bLJg6cQ~Ej5sMj4ZQLMPAyAoxx4Na9TIxjHHTJ4grq4Lj9Oo6gRRuXXgmGAE5FVkyRFIWgmdu68568zRJop0H2QeevYk2BiwIb5vXdnTknOiSA__'
    },
    {
      url:'https://media-hosting.imagekit.io/0fe0c6be20154c18/Screenshot%202025-04-13%20182404.png?Expires=1839156849&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RPoZfB7u4Vy88Ga6GGWg7cKOCxgOcWbQbZQWFp0i4g3IVBsesF7qiGRsOuzzNb6aNXWganwVdnb6AGpmcwv~MqVASiy-wUVcO1zVCBPYjwHshW1-r2LoH5Lfl~VhGxSr~3o4Npkq2d2SHir~wRkNmOiot-OujSouaMoJ25W8mIWWDq29e4TkEE7XXeYWckYQF6Roc3DY1Zy6rLkM441pppl0FLfr1ibyzjVXqkOYSPM0qqtcbSxXlZYcNF4JX~EdMfB9xVpw4SxgzzalG2Bg3Y07V-eDm28SsYYE-UioEVLecFEjrk~eM~lhbWSu-g203XkKMOdO0Pdf6dTU51eDxA__'
    },
    {
      url:"https://media-hosting.imagekit.io/3fdda1b446ee4e3f/Screenshot%202025-04-13%20194504.png?Expires=1839161712&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PXYmUunLPyrcj-IrDVlRhWA~49Qj6EwEpEsf8fuPOtU8T7-EgckXyySZavM39tSUSyuJ9iaTzNI1soa7FIXgJd3jFdk8oZ0gqzDVChqM4AHjYyRrQutl7RfgaM~UhJkcn0rqJ6XrSxCUUQHJwuY9xQ9iiMqc68fIP2fAxruBteNEh7Z-K8ON25HTZ0McUctDRQx-yNG6ygcEFHrDsa0ajcUv8jfGwek6VL8PYX87c25ZTH7xajU3nlexwSSyKs5Ofw1miUGQ73qpI3oF07UuvfUMDK0rkUL6vpkzQElqK5pR59HRBb0Vi0t5W2SRCLuBETkKSVtc9f9mSN0q4j2Sag__"
    },
    {
      url: 'https://media-hosting.imagekit.io/a33d1e32e16c4ca0/Screenshot%202025-04-13%20180644.png?Expires=1839155820&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g9kKN6EQ6967cgHPZoDeUuGknT-TNCg7i6NTUAP8gGu6z4b8G1MZRrRVr89hojRZvs3nj-op2xyg~rFkLtuq8oResmDuVAtTf5bXtOErtbB8st7mgSsio3I6S~UFo792s468yhJMgzHMAyy4npvv0yOpwPGqiRkzxsjBnS3VEn9B7imyhYMnDaoi5f1qnT-wJx6hLV4DKoOPNJjCI9dyzetY8CANb5Dwu13cJ4-Y-Nf9pmd6aehB-oDBpOudgxEq7e0rhl2uGqAuB7d2UDBLn9JO~6eJ4uBiXmwr6JtXuxdky-AzOQBP1zePi6VrQE8C3rUtNMIRRMa3O9a87LZmrg__',
    },
    {
      url:'https://media-hosting.imagekit.io/e8fee52f160a4e65/Screenshot%202025-04-13%20194814.png?Expires=1839161899&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=iw5pkm4rQPSfJ1hsbueQKszEJK~JwZfGJHZGh8KDDigV4ELsTXoE9RQczDs1brm45x2jgpnnAb3c-NjFgVYsqCv7bmsbkB8l77G-JINGWqpROunr1B3WH8y2jDondXa0vdg3WzKU6hMPtXAnghmcgxsK9RDMuOuYTs4dE7hD-1WLO2tXq4UqqeVorDmTjJkwqLr5as8r5Ze9yxmvxF6HcVdMVSmY1ZHukQi5BGjKidO~IzjmwwotXUdbsX9HtQbB6M5vQOFVVbXQc7ckvmOf~PrL7LjPNByTH8HOwF0fmv-i9c23TIsFBCrY6sc2Jd7i2qCDmlg5jsPWgWNW9rs5dg__'
    },
  {
    url:'https://media-hosting.imagekit.io/60f76efc73894651/Screenshot%202025-04-13%20195050.png?Expires=1839162056&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rB07io8u93t~e4wT5-xNBXcl6V0mOZx-Mr6UugJSKHhUltuCk8Jxq7W5efPaVsWsmrPPL31qsZIajlgSKL4c7NsPGVIHtXEEgfHlP6DxvMpurJ2eU~EL6A9k71GDkS8OjYg0xEoh3qDoWDYBrpLARDWxlSNF~yCYO23LfhbxcrAl40pP2R75o0wB9hLYDCLZVHGJQEGtZpQVLypsbejY7Dk8hzAXC4wUrtS8urJwCeED-eA7~VfRVmLvjGNTv-LeKTJUx-yxzxkXM-RJteLUNJucEOqpb44rCr8DGnB~b4teRqMiAR9vyvTQ~7zs7N~GgnumfFA09FLLIDy0YbiP3g__'

  },
  {
    url:'https://media-hosting.imagekit.io/e8eae8fd04c040b5/Screenshot%202025-04-13%20195552.png?Expires=1839162360&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DFUx4EELHXfoUIntVSozccQSmATe2Udd17ylfLGW-vHBZPllKtkN93hJ-~CbOC8jQsIPcUe1vsfj8nn46N5IqnLvSpffV39yRMa1QL8-tcacn0HU-S0GPCl5qNoAkWhulQgVoAtFa2P-Fa4Guh95fLW6YfBCk3nwJwPcrjclIdJvRl0pBNvnOjjKW~HimJGEErpp3Sm~fzxzgp3O5HGfjOQqfgxbVIK5wrUsUKWHMlFq3r5JhWsgiNAp~ZF4TYFA9uOE7kiePeLvXda0a8Y0370ExoeT~NwLye1twV2TRrVF65q8jDRErpkAzNDSPmQbTZqYAnslCgoW2zor5RYwjA__'
  }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);

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
