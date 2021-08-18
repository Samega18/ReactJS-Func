import React, { useState, useEffect} from 'react';
import './CentralStyle.css';
import {DivDimensions} from '../Outros/Dimensions/Dimensions';
import ScrolYX, {ScrollYXDiv} from '../Outros/ScrollYX/ScrollYX';

import Header from '../Funcionalidades/Header/Header';
import RedesSociais from '../Funcionalidades/RedesSociaisButtons/RedesSociais';
import BackToTop from '../Funcionalidades/BackToTop/BackToTop';
import Button1 from '../Funcionalidades/ButtonClick/Button1/Button1';
import SearchBar1 from '../Funcionalidades/SearchBar/SearchBar1';

import TranslateY from '../Funcionalidades/Dropdown/TranslateY/TranslateY';
import ScaleDrop from '../Funcionalidades/Dropdown/ScaleDrop/ScaleDrop';
import RotateX from '../Funcionalidades/Dropdown/RotateX/RotateX';
import TranslateZ from '../Funcionalidades/Dropdown/TranslateZ/TranslateZ';
import TranslateX from '../Funcionalidades/Dropdown/TranslateX/TranslateX';

import VideoAnim from '../Funcionalidades/VideoReact/VideoAnim/VideoAnim';

function Head(){
    return(
        <div className="HeadCentral">

          <SearchBar1/>

        </div>
    )
}

function Meio(){

  return(
    <div className="MeioCentral">
      <VideoAnim/>
    </div>
  )
}

function Footer(){
  return(
    <div className="FooterCentral">

          <text style={{color: 'white'}}>Footer</text>
          <BackToTop/>
    </div>
  )
}

function Central() {


  return (
    <div className="Central">
        <ScrollYXDiv/>
        <DivDimensions/>
        <Head/>
        <div className="LinhaDivs"/>
        <Meio/>
        <div className="LinhaDivs"/>
        <Footer/>
    </div>
  );
}

export default Central;