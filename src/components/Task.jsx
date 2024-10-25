import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'

import { Environment, OrbitControls } from '@react-three/drei';


import { Sphere } from './ssSphere';
import Loader from './Loading';

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
          height: "82.5vh",
          top: "46.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      
        switch (true) {
          case window.innerHeight < 400:
            styles.width = "152px";
           // styles.borderRadius = "62px";
            break;
          // case window.innerHeight < 410:
          //   styles.width = "150px";
          //  // styles.borderRadius = "62px";
          //   break;
          case window.innerHeight < 420:
            styles.width = "160px";
           styles.borderRadius = "21px";
            break;
          case window.innerHeight < 440:
            styles.width = "168px";
           styles.borderRadius = "21px";
            break;
          case window.innerHeight < 460:
            styles.width = "177px";
           styles.borderRadius = "21px";
            break;
          case window.innerHeight <= 479:
            styles.width = "184px";
           styles.borderRadius = "21px";
            break;
          case window.innerHeight <= 497:
            styles.width = "190px";
           styles.borderRadius = "23px";
            break;
          case window.innerHeight <= 510:
            styles.width = "200px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 530:
            styles.width = "209px";
           styles.borderRadius = "29px";
            break;
            case window.innerHeight <= 556:
              styles.width = "215px";
              // styles.borderRadius = "62px";
              break;
              case window.innerHeight <= 579:
                styles.width = "227px";
               // styles.borderRadius = "62px";
                break;
          case window.innerHeight <= 590:
            styles.width = "230px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 605:
            styles.width = "237px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 615:
            styles.width = "242px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 638:
            styles.width = "251px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 658:
            styles.width = "255px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 664:
            styles.width = "283px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 684:
            styles.width = "268px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 698:
            styles.width = "275px";
           // styles.borderRadius = "62px";
            break;

          case window.innerHeight <= 705:
            styles.width = "278px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 724:
            styles.width = "279px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 750:
            styles.width = "299px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 775:
            styles.width = "298px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight <= 785:
            styles.width = "302px";
           // styles.borderRadius = "47px";
            break;
          case window.innerHeight < 800:
            styles.width = "312px";
           // styles.borderRadius = "44px";
            break;
          case window.innerHeight < 811:
            styles.width = "315px";
           // styles.borderRadius = "44px";
            break;
          case window.innerHeight < 828:
            styles.width = "322px";
           // styles.borderRadius = "47px";
            break;
          case window.innerHeight < 850:
            styles.width = "332px";
           // styles.borderRadius = "47px";
            break;
          case window.innerHeight < 875:
            styles.width = "338px";
           // styles.borderRadius = "47px";
            break;
          case window.innerHeight < 907:
            styles.width = "350px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight < 947:
            styles.width = "368px";
           styles.borderRadius = "44px";
            break;
          case window.innerHeight < 966:
            styles.width = "363px";
           // styles.borderRadius = "49px";
            break;
          case window.innerHeight < 990:
            styles.width = "386px";
           // styles.borderRadius = "49px";
            break;
          case window.innerHeight < 1015:
            styles.width = "402px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight < 1030:
            styles.width = "398px";
           // styles.borderRadius = "62px";
            break;
          case window.innerHeight < 1050:
            styles.width = "408px";
           // styles.borderRadius = "68px";
            break;
          case window.innerHeight < 1085:
            styles.width = "445px";
           styles.borderRadius = "51px";
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
    <div>
      {
        loading ? (<Loader/>) : (
          <Suspense fallback={<Loader/>}>

         <Canvas
  style={responsiveStyles}
  camera={{
    position: [0, 0, 6  ], // Adjusted camera position
    fov: 3.4,  // Slightly wider field of view for better visibility
    near: 0.1, // Adjust near clipping plane
    far: 100 // Adjust far clipping plane
  }}
>
  <Environment preset="lobby" background={false} />
  <color attach="background" args={["lightblue"]} />
  <Sphere />
  <OrbitControls
    minDistance={12}  // Adjusted minimum distance
    maxDistance={15} // Adjusted maximum distance
    zoomSpeed={0.1}
  />
</Canvas>
                     </Suspense>
        )
      }
 
        
      </div>
  )
}

export default Task