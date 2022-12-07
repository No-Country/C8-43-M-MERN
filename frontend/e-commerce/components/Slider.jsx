import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="mx-2 md:mx-32 mt-32">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div className="pb-4">
          <Image
            src="/img/frame_1.png"
            width="1000"
            height="1000"
            alt="image"
            className="w-[300px] h-[200px] md:w-full md:h-full"
          />
        </div>
        <div>
          <div className="pb-4">
            <Image
              src="/img/frame_2.png"
              width="1000"
              height="1000"
              alt="image"
              className="w-[300px] h-[200px] md:w-full md:h-full"
            />
          </div>
        </div>
        <div>
          <div className="pb-4">
            <Image
              src="/img/frame_3.png"
              width="1000"
              height="1000"
              alt="image"
              className="w-[300px] h-[200px] md:w-full md:h-full"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
