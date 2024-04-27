

const AskQuestion = () => {
    return (
        <div className="my-[70px] lg:mx-[100px]">
            <h1 className="text-center font-bold text-5xl mb-[40px]">Frequently Asked Questions</h1>

            <div className="flex gap-[16px] justify-between ">


                <div className="flex gap-[10px]">
                     <img className="h-[350px] w-[280px]" src="https://i.ibb.co/7jxsG62/pexels-vlada-karpovich-7031624.jpg" alt="" />
                     <img className="h-[350px] w-[280px]" src="https://i.ibb.co/pdn9GJ3/pexels-daiangan-102127.jpg" alt="" />
                </div>

                <div>
                <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  What is the age range of painting  available in the store?
  </div>
  <div className="collapse-content"> 
    <p>All age range of  painting is available here in store </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Can I order painting online or do i need to visit the store?
  </div>
  <div className="collapse-content"> 
    <p>yes you can,, we are all time available for you and try to giving best our customer</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Are your painting environmentally friendly and sustainable?
  </div>
  <div className="collapse-content"> 
    <p>Yes,, our painting are environmentally friendly and sustainable</p>
  </div>
</div>
                </div>
                </div>


                
            
        </div>
    );
};

export default AskQuestion;