import './Button1Style.css';

import useWindowDimensions from '../../../Outros/Dimensions/Dimensions';

function Button1() {

  const { height, width } = useWindowDimensions();

  function teste(){
      window.alert('Deu certo');
  }

    return (
      <div className="Button1">
          <div class="btnCad style-1Cad" onClick={() => teste()}>		
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>	
            <span>Cadastrar</span>
          </div>
      </div>
    );

}

export default Button1;