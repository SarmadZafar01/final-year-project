import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./toyota.css"
import { Link } from 'react-router-dom';
import sunrof from "./sunroof.png";
import back from "./back.jpeg"
import backk from "./backk.jpeg"
import backkk from "./backkk.jpeg"
import tiree from "./tiree.jpeg"
import tire from "./tire.jpeg"
import sticker from "./sticker.png"
import stickerr from "./stickerr.png"
import stickerrr from "./stickerrr.png"
import sideST from "./sideST.png"
import sidess from "./sidess.png"
import backs from "./backs.png"
import backst from "./backst.png"
import backstt from "./backstt.png"

function Model(props) {
    const { scene } = useGLTF("/toyotaredsticker.glb");
    return <primitive object={scene} scale={0.010} {...props} />;
}

const Toyotaredsticker = () => {
    return (
        <>
            <Canvas dpr={[1, 2]}  camera={{ fov: 45 }} style={{ "position": "absolute", "bottom": "220px", }}>
                <PresentationControls speed={1.5} global zoom={1.3} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={null} shadows={false}>
                        <Model />
                    </Stage>
                </PresentationControls>
            </Canvas>

            <div className="color">
            <p> Colours</p>
            
            <Link to="/toyota"> <div className="White">  </div></Link>

            
            <Link to="/toyotablue">   <div className="blue"></div></Link>
                <div className="Red"></div>
            </div>

            <div className="Top">
                <p>Top</p>
                
                <Link to="/Tsunroofred">
                <div className="Sunroof">
                <img src={sunrof}></img>

                </div>
                </Link>
            </div>

            <div className="back">
                <p>Back</p>
                
                <Link to="/toyotaredback">
                <div className="toyotaback">
                <img src={back}></img>

                </div>
</Link>
                

                <Link to="/toyotaredbackk">
                <div className="toyotabackk">
                <img src={backk}></img>

                </div>
                </Link>


                

                <Link to="/toyotaredbackkk">
                <div className="toyotabackkk">
                <img src={backkk}></img>

                </div>
                </Link>



            </div>

            <div className="Tire">
                <p>Tires</p>
                
                <Link to="/toyotaredtire">
                <div className="toyotatire">
                <img src={tiree}></img>

                </div>

                </Link>

                <Link to="/toyotaredtiree">
                <div className="toyotawhitetiree">
                <img src={tire}></img>

                </div>
                </Link>


            </div>

            <div className="Tirelight">
                <p>Tires Light</p>
                
                <Link to="/toyotaredtiregreen">
                <div className="toyotatirelight">
                

                </div>

                </Link>

                <Link to="/toyotaredtirepurple">
                <div className="toyotawhitetireelight">
                

                </div>
                </Link>


            </div>

            <div className="gastank">
                <p>Gas Tank Sticker</p>
                
                <Link to="/toyotaredgassticker">
                <div className="toyotagassticker">
                <img src={sticker}></img>

                </div>

                </Link>

                <Link to="/toyotaredgasstickerr">
                <div className="toyotagasstickerr">
                <img src={stickerr}></img>

                </div>
                </Link>

                
                <Link to="/toyotaredgasstickerrr">
                <div className="toyotagasstickerrr">
                <img src={stickerrr}></img>

                </div>
                </Link>


            </div>

            <div className="Sidesticker">
                <p>Sides Sticker</p>
                
                <Link to="/toyotaredsidesticker">
                <div className="toyotasidesticker">
                <img src={sideST}></img>
                

                </div>

                </Link>

                <Link to="/toyotaredsidestickerr">
                <div className="toyotasidestickerr">
                <img src={sidess}></img>
               

                </div>
                </Link>

                
                


            </div>


            <div className="backsticker">
                <p>Back Sticker</p>
                
                <Link to="/toyotaredbacksticker">
                <div className="toyotabacksticker">
                <img src={backs}></img>
               
                

                </div>

                </Link>

                <Link to="/toyotaredbackstickerr">
                <div className="toyotabackstickerr">
                <img src={backst}></img>
               

                </div>
                </Link>

            

                <Link to="/toyotaredbackstickerrr">
                <div className="toyotabackstickerrr">
                <img src={backstt}></img>
         
            
                </div>
                </Link>

                
                


            </div>



        </>
    );
}

export default Toyotaredsticker;
