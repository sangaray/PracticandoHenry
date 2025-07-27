import "./card.css";

export const CardWithCSS = () => {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://placehold.co/300"
        alt="Placeholder"
      />

      <div className="card-content">
        <div className="card-title">title</div>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          inventore quasi dolorem doloribus aspernatur, natus corporis iusto
          tenetur sapiente nostrum! Harum sapiente laudantium dicta neque
          repudiandae ex ratione praesentium ducimus.
        </p>
      </div>
      <div className="card-tags">
        <span className="card-tag">#tag1</span>
        <span className="card-tag">#tag2</span>
        <span className="card-tag">#tag3</span>
      </div>
    </div>
  );
};

export default CardWithCSS;
