import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./toyota.css"
import { Link } from 'react-router-dom';
import sunrof from "./sunroof.png"

function Model(props) {
    const { scene } = useGLTF("/toyotabluesunroof.glb");
    return <primitive object={scene} scale={0.010} {...props} />;
}

const Toyotabluesunroof = () => {
    return (
        <>
            <Canvas dpr={[1, 2]}  camera={{ fov: 45 }} style={{ "position": "absolute", "bottom": "220px", }}>
                <PresentationControls speed={1.5} global zoom={1.0} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={null} shadows={false}>
                        <Model />
                    </Stage>
                </PresentationControls>
            </Canvas>

            <div className="color">
            <p> Colours</p>
            
            <Link to="/toyota"><div className="White">  </div></Link>

            
                <div className="blue"></div>
                <Link to="/toyotared"> <div className="Red"></div></Link>
            </div>

            <div className="Top">
                <p>Top</p>
                
                <Link to="/Tsunroof">
                <div className="Sunroof">
                <img src={sunrof}></img>

                </div>
                </Link>
            </div>
        </>
    );
}

export default Toyotabluesunroof;
