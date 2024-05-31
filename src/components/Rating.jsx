// Fill stars based on `rate` prop 
  //Display individual rating
  const Rating = ({ name, rate, content }) => {
    const filledStars = '★'.repeat(rate);
    const emptyStars = '☆'.repeat(5 - rate);
  
    return (
      <div className="ratings__item">
        <h3 className="head">{name}</h3>
        <p>{content}</p>
        <div>
          {filledStars.split('').map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          {emptyStars.split('').map((star, index) => (
            <span key={5 + index} className="empty">{star}</span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Rating;