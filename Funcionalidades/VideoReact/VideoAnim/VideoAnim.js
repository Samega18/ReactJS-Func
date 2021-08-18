import React, { useState, useEffect, useRef } from 'react';
import './VideoAnimStyle.css';

import MilosVideo from './Milos.mp4';
import { getElementError } from '@testing-library/dom';

import useScrollYX, {getScrollYX} from '../../../Outros/ScrollYX/ScrollYX';

/*
ATUALIZAÇÃO : a versão mais recente do navegador móvel no Android e iOS oferece suporte à 
função de reprodução automática. Mas só funciona se o vídeo estiver mudo ou não tiver canal 
de áudio
*/ 

const VideoMilos = () =>{
    return(
        <video id="MilosVideo2" width="400" loop="true" muted="true">
                <source src={MilosVideo} type="video/mp4"/>
                
                Your browser does not support HTML video.
        </video>
    )
}

function VideoAnim() {

    const { left, top } = useScrollYX();

    const DivVideo = document.getElementsByClassName("VideoAnim")

    const [showScroll, setShowScroll] = useState(false)
    const [teste, setTeste] = useState(true)
    const [value, setValue] = useState(getScrollYX())
    const [played, setPlayed] = useState('false')

    const VdMilos = useRef(null);

    useEffect(() => {

        function visibilityListener(){

           if(document.visibilityState === 'visible' ){
            VdMilos.current.play();
           }else{
            VdMilos.current.pause();
           }
        }
  
        document.addEventListener("visibilitychange", visibilityListener);
        return () => document.removeEventListener("visibilitychange", visibilityListener);
      }, [document.visibilityState]);

    const Comecar = () => {
        VdMilos.current.play();
    }

    const Parar = () => {
        VdMilos.current.pause();
    }

    function checkScroll() {
        if (played == 'false' && value.top > 300){
            Comecar()
            setPlayed('true')
        } else if (played == 'true' && value.top <= 300){
            Parar()
            setPlayed('false')
        }
    }
   
    return (
        <div className="VideoAnim">
            <video ref={VdMilos} width="400" loop="true" muted="true">
                <source src={MilosVideo} type="video/mp4"/>
                
                Your browser does not support HTML video.
            </video>
            {/* <iframe width="1080" height="720" src="https://www.youtube.com/embed/8krW_NGyLjQ?autoplay=1&mute=1&controls=0&loop=1"/> */}
            <div>
                <button onClick={() => Comecar()}>Play</button>
                <button onClick={() => Parar()}>Pause</button>
            </div>
            <text>{played}</text>
        </div>
  );
}

export default VideoAnim;