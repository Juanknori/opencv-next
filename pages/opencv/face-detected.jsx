import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Webcam from "react-webcam";
import { Typography } from '@mui/material';
import { MainLayout } from '../../components/layouts';
import cv from "@techstark/opencv-js";
import { loadHaarFaceModels, detectHaarFace } from "../../public/scripts/haarFaceDetection";

export default function Home() {

  const [modelLoaded, setModelLoaded] = React.useState(false);

  React.useEffect(() => {
    loadHaarFaceModels().then(() => {
      setModelLoaded(true);
    });
  }, []);

  const webcamRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const faceImgRef = React.useRef(null);

  React.useEffect(() => {
    if (!modelLoaded) return;

    const detectFace = async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) return;

      return new Promise((resolve) => {
        imgRef.current.src = imageSrc;
        imgRef.current.onload = () => {
          try {
            const img = cv.imread(imgRef.current);
            detectHaarFace(img);
            cv.imshow(faceImgRef.current, img);

            img.delete();
            resolve();
          } catch (error) {
            console.log(error);
            resolve();
          }
        };
      });
    };

    let handle;
    const nextTick = () => {
      handle = requestAnimationFrame(async () => {
        await detectFace();
        nextTick();
      });
    };
    nextTick();
    return () => {
      cancelAnimationFrame(handle);
    };
  }, [modelLoaded]);

  return (
    <MainLayout title={'Home'} pageDescription={'OpenCV con Next'}>
        <Typography variant='h1' component='h1'>Next</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>OpenCV</Typography>

        <h2>Real-time Face Detection</h2>
      <Webcam
        ref={webcamRef}
        className="webcam"
        mirrored
        screenshotFormat="image/jpeg"
      />
      <img className="inputImage" alt="input" ref={imgRef} />
      <canvas className="outputImage" ref={faceImgRef} />
      {!modelLoaded && <div>Loading Haar-cascade face model...</div>}
    </MainLayout>
    // <div className="App">
    //   <h2>Real-time Face Detection</h2>
    //   <Webcam
    //     ref={webcamRef}
    //     className="webcam"
    //     mirrored
    //     screenshotFormat="image/jpeg"
    //   />
    //   <img className="inputImage" alt="input" ref={imgRef} />
    //   <canvas className="outputImage" ref={faceImgRef} />
    //   {!modelLoaded && <div>Loading Haar-cascade face model...</div>}
    // </div>
  )
}
