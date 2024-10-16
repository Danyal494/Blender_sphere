import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'

import { Environment, OrbitControls } from '@react-three/drei';
import Loader from './Loading';
import { Bsphere } from './Bsphere';

const Task = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
    const getResponsiveStyles = () => {
        let styles = {
          position: "absolute",
          zIndex: 10,
          borderRadius: "38px",
          height: "81.5vh",
          top: "46.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      
        switch (true) {
          case window.innerHeight < 400:
            styles.width = "148px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight < 410:
            styles.width = "150px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight < 440:
            styles.width = "158px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight < 460:
            styles.width = "167px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 479:
            styles.width = "175px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 510:
            styles.width = "186px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 556:
            styles.width = "206px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 605:
            styles.width = "237px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 658:
            styles.width = "255px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 705:
            styles.width = "265px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 750:
            styles.width = "287px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 785:
            styles.width = "295px";
           // styles.borderRadius = "47px";
            break;
          case window.innerHeight < 800:
            styles.width = "297px";
           // styles.borderRadius = "44px";
            break;
          case window.innerHeight < 828:
            styles.width = "311px";
           // styles.borderRadius = "47px";
            break;
          case window.innerHeight < 875:
            styles.width = "330px";
           // styles.borderRadius = "47px";
            break;
          case window.innerHeight < 907:
            styles.width = "354px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight < 966:
            styles.width = "363px";
           // styles.borderRadius = "49px";
            break;
          case window.innerHeight < 1015:
            styles.width = "384px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight < 1050:
            styles.width = "398px";
           // styles.borderRadius = "68px";
            break;
          case window.innerHeight < 1085:
            styles.width = "400px";
           // styles.borderRadius = "61px";
            break;
          default:
            styles.width = "427px";
           // styles.borderRadius = "80px";  // Fallback for other cases
            break;
        }
      
        // Optionally, you can include width-based responsiveness here as well, as per your initial code
        // if (window.innerWidth < 500) {
        //   styles.width = "348.2px";
        // } else if (window.innerWidth < 768) {
        //   styles.width = "15.5%";
        // } else if (window.innerWidth < 1200) {
        //   styles.width = "357px";
        // } else {
        //   styles.width = "357px";
        // }
      
        return styles;
      };
      
      const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles());
      
      useEffect(() => {
        const handleResize = () => {
          setResponsiveStyles(getResponsiveStyles());
        };
      
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
  return (
    <div>{
      loading ? (<Loader/>) : (  <Canvas  style={responsiveStyles}
        camera={{ position: [0, 0, 10], fov: 3 }}>
        <Environment preset="city" background={false} /> 
           <color attach="background" args={["lightblue"]} />
          <Bsphere/>
           <OrbitControls 
           minDistance={19} maxDistance={28} 
           zoomSpeed={0.1}
           />
        </Canvas>)}

 
      </div>
  )
}

export default Task