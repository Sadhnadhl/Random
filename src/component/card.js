// import strangerThings from ".src/asset/images/strangerThings.jpg";
import React from "react";
class Card extends React.Component {
  constructor(props) {
    super(props);
  return (
    <div className="Cards">
      <div className="card">
        <img
          src={props.img}
          alt="images"
          className="card-image"
          width="200"
          height={200}
        />
      </div>
      <div className="card-info">
        <span className="category">{props.category}</span>
        <h3 className="title">{props.title}</h3>
        <a href={props.link} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
}
}
export default Card;
