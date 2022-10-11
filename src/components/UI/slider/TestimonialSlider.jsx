import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Eco-conscious burger joint with great vegan and organic options along
          with bison burgers and shakes. They also have great happy hour deals
          on drinks. The food itself was just not that good not even considering
          the price. Maybe they need to use different seasonings or oil, idk. It
          was bland. All I know is I have had much better impossible burgers and
          my friend agreed with his bacon burger. The impossible nuggets were
          solid — cooked crispy with chipotle ranch and garlic aioli sauces."
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Jhon Wee</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "I chose this place because it has some vegan options. I wanted a
          classic American dinner atmosphere and I think I kinda found it there.
          Food was OK, and cheap. Music was nice, and the whole atmosphere was
          pleasant. Waitresses were really friendly and nice."
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Jenny Florwe</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
          "My favorite burger place in the city. The price is reasonable for the
          quality food they serve. The servers are friendly and attentive. My
          favorite is the truffle burger with a side of grilled baby Brussel
          sprout. My fave dessert is the vegan sundae. This place get really
          full during lunch and dinner time from tourists and theaters crowds
          because it's near Times Square."
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Steven Jone</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
