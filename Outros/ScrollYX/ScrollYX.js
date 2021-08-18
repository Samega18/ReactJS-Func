import React, { useState, useEffect } from 'react';
import './ScrollYXStyle.css';

export function getScrollYX() {
    const {pageXOffset: left, pageYOffset: top } = window;
    return {
        left,
        top
    };

}

export default function useScrollYX() {

    const [ScrollYX, setScrollYX] = useState(getScrollYX());
    
    useEffect(() => {
      function handleResize() {
        setScrollYX(getScrollYX());
      }

      window.addEventListener('scroll', handleResize);
      return () => window.removeEventListener('scroll', handleResize);
    }, []);

    return ScrollYX;
}

export function ScrollYXDiv(){

    const { left, top } = useScrollYX();

    return(
        <div className="ScrollYX">
            <text>X: {left}</text>
            <text>Y: {top}</text>
        </div>
    )
}