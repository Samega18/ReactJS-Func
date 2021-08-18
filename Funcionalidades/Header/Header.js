import './HeaderStyle.css';

import useWindowDimensions from '../../Outros/Dimensions/Dimensions';

import { AiFillAccountBook, AiFillAlert } from "react-icons/ai";

function Header() {

  const { height, width } = useWindowDimensions();

  if(width <= 600){
    return (
      <div className="Header">
        <AiFillAlert color="white" size="80px"/>
      </div>
    );
  }
  else{
    return (
      <div className="Header">
        <AiFillAccountBook color="white" size="80px"/>
      </div>
    );
  }

}

export default Header;