

const HomeCard = ({craft}) => {
    console.log(craft);
    const{image,item,subcategory,price,
        rating, customization, time, stock, email, name, description}= craft;
    return (
        <div>
            <div className="card w-[350px] h-[400px] bg-base-100 shadow-xl mb-[16px]">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl w-[300px] h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn bg-[#FF497C] text-white font-bold">Show details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeCard;