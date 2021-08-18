import React, { useState, useEffect } from 'react';
import './DimensionsStyle.css';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export function DivDimensions (){
    
    const { height, width } = useWindowDimensions();

    return(
        <div className="Dimensions">
            <text>Width: {width}</text>
            <text>Height: {height}</text>
        </div>
    )
}