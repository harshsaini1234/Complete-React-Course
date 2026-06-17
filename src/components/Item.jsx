import React from "react";

const Item = () => {
  const age = 20;
  const adhar= true;
  const gmail=true;
  return (
    <>
    <div>
      {age >= 18 ? (
        <>
          {" "}
                              {/* condition rendering using ternary operator  */}
          You can drive the car
        </>
      ) : (
        <>You cannot drive the car</>
      )}
    </div>

    {adhar && <h1>You can apply for adhar card</h1>} 
    {gmail && <h1>you can open you tube channel</h1> }
    </>

  );
};

export default Item;
