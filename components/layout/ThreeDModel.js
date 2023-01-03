// import { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Stars } from "@react-three/drei";
// import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { Breakpoints } from "../../styles/Breakpoints";
// import TextAnimation from "./TextAnimation";

// const Wrapper = styled.div`
//   display: flex;
//   margin-top: 80px;
//   justify-content: space-between;
//   align-items: center;
//   .container {
//   }
//   .model {
//     background-color: #fff;
//     min-height: 300px;
//     min-width: 260px;
//     height: 300px;
//   }

//   @media (max-width: ${Breakpoints.mobile_small}) {
//     flex-direction: column;
//     justify-content: center;
//     align-center: center;
//     .container {
//       display: flex;
//       flex-direction: column;
//       padding: 0px 20px;
//       justify-content: center;
//     }
//     .model {
//     }
//     .text-animation {
//       margin-top: 20px;
//       height: 100px;
//     }

//     .intro-video {
//       width: 92vw;
//       height: calc(92vw / 1.8);
//     }
//   }
// `;

function Model(props) {
  const { nodes, materials } = useGLTF("assets/scene.gltf");
  const group = useRef();

//   return (
//     <group ref={group} {...props} dispose={null} scale={1.3}>
//       <group position={[119.99, 60, -120.61]} rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           geometry={nodes["Box045_07_-_Default_0"].geometry}
//           material={materials["07_-_Default"]}
//         />
//         <mesh
//           geometry={nodes["Box045_01_-_Default_0"].geometry}
//           material={materials["01_-_Default"]}
//         />
//       </group>
//     </group>
//   );
// }

// function ThreeDModel() {
//   return (
//     <>
//       <Wrapper>
//         <div className="container">
//           <div className="model">
//             <Canvas camera={{ fov: 70, position: [2, 1, 600] }}>
//               <Suspense fallback={null}>
//                 <ambientLight />
//                 <directionalLight intensity={2} position={[0, 0, 50]} />
//                 <Model />
//                 <OrbitControls
//                   enablePan={true}
//                   enableZoom={false}
//                   enableRotate={true}
//                   makeDefault={true}
//                   autoRotate={true}
//                   autoRotateSpeed={8}
//                   minPolarAngle={Math.PI / 2.8}
//                   maxPolarAngle={Math.PI / 2.8}
//                 />
//               </Suspense>
//             </Canvas>
//           </div>
//           <iframe
//             className="intro-video"
//             src="https://www.youtube.com/embed/lC9IqTEs-TA?autoplay=1&mute=1"
//             title="Introducing TRUE DIMENSIONS | Virtual Tour Services"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;playsinline: 1"
//           ></iframe>
//         </div>
//         <div className="text-animation">
//           <TextAnimation />
//         </div>
//       </Wrapper>
//     </>
//   );
// }

// export default ThreeDModel;
