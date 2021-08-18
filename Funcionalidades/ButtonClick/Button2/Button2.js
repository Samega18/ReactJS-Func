import './Button2Style.css';

import useWindowDimensions from '../../../Outros/Dimensions/Dimensions';

function Button2() {

  const { height, width } = useWindowDimensions();

  function teste(){
      console.log('Deu certo');
  }

    return (
      <div className="Button2">
          
      </div>
    );

}

export default Button2;