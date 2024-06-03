import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./toyota.css"
import { Link } from 'react-router-dom';
import sunrof from "./sunroof.png"

function Model(props) {
    const { scene } = useGLTF("/toyotasunrooff.glb");
    return <primitive object={scene} scale={0.010} {...props} />;
}

const Toyotasunroof = () => {
    return (
        <>
            <Canvas dpr={[1, 2]}  camera={{ fov: 45 }} style={{ "position": "absolute", "bottom": "210px", }}>
                <PresentationControls speed={1.5} global zoom={1.0} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={null} shadows={false}>
                        <Model />
                    </Stage>
                </PresentationControls>
            </Canvas>

            <div className="color">
            <p> Colours</p>
           
            <Link to="/toyota">  <div className="White"></div>  </Link>
            
                <Link to="/toyotablue">   <div className="blue"></div> </Link>

                <Link to="/toyotared">   <div className="Red"> </div></Link>
            </div>


            <div className="Top">
                <p>Top</p>
                
               
                <div className="Sunroof">
                <img src={sunrof}></img>

                </div>
                
            </div>
        </>
    );
}

export default Toyotasunroof;
