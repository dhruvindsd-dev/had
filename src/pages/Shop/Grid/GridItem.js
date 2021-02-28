import React from "react";
import { Link } from "react-router-dom";

const GridItem = ({ img, title, linkName, figClass = "is-square" }) => {
  return (
    <div className="column">
      <div className="is-relative is-clipped">
        <Link
          to={`/search/?search=&catagory=${linkName}`}
          className="figure-black-gradient is-absolute"
        ></Link>
        <div className="is-absolute is-size-4 has-text-weight-bold m-3  has-text-white">
          {title}
        </div>
        <figure
          className={"image  bg-img " + figClass}
          style={{ backgroundImage: `url(${img})` }}
        ></figure>
      </div>
    </div>
  );
};

export default GridItem;
