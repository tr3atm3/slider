import { shortList, list, longList } from "./data";
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Carousel() {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((cur) => (cur - 1 + people.length) % people.length);
  };
  const nextSlide = () => {
    setCurrentPerson((cur) => (cur + 1) % people.length);
  };

  useEffect(
    function () {
      let sliderF = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(sliderF);
    },
    [currentPerson]
  );
  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slider"
            style={{
              opacity: index === currentPerson ? 1 : 0,
              transform: `translateX(${100 * (index - currentPerson)}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
