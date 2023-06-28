import React, { useEffect } from 'react';
import {bg1,bg2,bg3,bg4,bg5} from '../music/music'



const BackgroundMusic = () => {

  useEffect(() => {
    const audio = new Audio(bg1);
    audio.play();
    audio.loop = true;
    audio.volume = 0.5;
    console.log("started")

    return () => {
      audio.pause();
    };
  }, []);

  return null;
};

export default BackgroundMusic;