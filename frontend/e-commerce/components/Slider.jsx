import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <div className="mx-4 md:mx-32 my-8">
    <Carousel autoPlay>
      <div className="pb-32">
        <p className="text-gray-300 text-lg md:text-2xl px-4 md:px-64">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magnam qui impedit animi, eaque nostrum id corporis obcaecati
          omnis, praesentium inventore, esse voluptas? Hic, facere
          culpa.
        </p>
      </div>
      <div>
        <p className="text-gray-300 text-lg md:text-2xl px-4 md:px-64">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magnam qui impedit animi, eaque nostrum id corporis obcaecati
          omnis, praesentium inventore, esse voluptas? Hic, facere
          culpa.
        </p>
      </div>
      <div>
        <p className="text-gray-300 text-lg md:text-2xl px-4 md:px-64">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Magnam qui impedit animi, eaque nostrum id corporis obcaecati
          omnis, praesentium inventore, esse voluptas? Hic, facere
          culpa.
        </p>
      </div>
    </Carousel>
  </div>
  )
}
