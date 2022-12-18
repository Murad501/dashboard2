import LeftSide from "./LeftSide/LeftSide";
import Common from "./Common/Common";
import RightSide from "./RightSide/RightSide";

const Home = () => {

 

  return (
    <div className="px-4 py-2 bg-blue-50">
        <Common></Common>  
      <div className="grid grid-cols-3 gap-5">
        <LeftSide></LeftSide>
        {/* right side */}
        <div className="col-span-3 lg:col-span-1">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
