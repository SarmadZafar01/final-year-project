import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "./toyota.css"
import { Link } from 'react-router-dom';
import sunrof from "./sunroof.png"
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
    const { scene } = useGLTF("/civicwhitebackkk.glb");
    return <primitive object={scene} scale={0.009} {...props} />;
}

const Civicwhitebackkk = () => {
    return (
        <>
        <Canvas dpr={[1, 2]}  camera={{ fov: 45 }} style={{ "position": "absolute", "bottom": "180px" }}>
            
                <PresentationControls speed={1.5} global zoom={1.0} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={null} shadows={null}>
                        <Model />
                    </Stage>
                </PresentationControls>
            
        </Canvas>

        <div className="color">
            <p> Colours</p>
           
                <div className="White"></div>

         
            
                <Link to="/civicblue">  <div className="blue"> </div></Link>
            


                <Link to="/civicred"> <div className="Red"> </div></Link>
            </div>

            <div className="Top">
                <p>Top</p>
                
                <Link to="/CIsunroof">
                <div className="Sunroof">
                <img src={sunrof}></img>

                </div>
                </Link>
            </div>

            <div className="back">
                <p>Back</p>
                
                <Link to="/civicwhiteback">
                <div className="toyotaback">
                <img src={back}></img>

                </div>

                </Link>

                <Link to="/civicwhitebackk">
                <div className="toyotabackk">
                <img src={backk}></img>

                </div>
                </Link>


                

                <Link to="/civicwhitebackkk">
                <div className="toyotabackkk">
                <img src={backkk}></img>

                </div>
                </Link>



            </div>

            <div className="Tire">
                <p>Tires</p>
                
                <Link to="/civicwhitetire">
                <div className="toyotatire">
                <img src={tiree}></img>

                </div>

                </Link>

                <Link to="/civicwhitetiree">
                <div className="toyotawhitetiree">
                <img src={tire}></img>

                </div>
                </Link>


            </div>

            <div className="Tirelight">
                <p>Tires Light</p>
                
                <Link to="/civicwhitetiregreen">
                <div className="toyotatirelight">
                

                </div>

                </Link>

                <Link to="/civicwhitetirepurple">
                <div className="toyotawhitetireelight">
                

                </div>
                </Link>


            </div>

            <div className="gastank">
                <p>Gas Tank Sticker</p>
                
                <Link to="/civicwhitegassticker">
                <div className="toyotagassticker">
                <img src={sticker}></img>

                </div>

                </Link>

                <Link to="/civicwhitegasstickerr">
                <div className="toyotagasstickerr">
                <img src={stickerr}></img>

                </div>
                </Link>

                
                <Link to="/civicwhitegasstickerrr">
                <div className="toyotagasstickerrr">
                <img src={stickerrr}></img>

                </div>
                </Link>


            </div>

            <div className="Sidesticker">
                <p>Sides Sticker</p>
                
                <Link to="/civicwhitesidesticker">
                <div className="toyotasidesticker">
                <img src={sideST}></img>
                

                </div>

                </Link>

                <Link to="/civicwhitesidestickerr">
                <div className="toyotasidestickerr">
                <img src={sidess}></img>
               

                </div>
                </Link>

                
                


            </div>

            <div className="backsticker">
                <p>Back Sticker</p>
                
                <Link to="/civicwhitebacksticker">
                <div className="toyotabacksticker">
                <img src={backs}></img>
               
                

                </div>

                </Link>

                <Link to="/civicwhitebackstickerr">
                <div className="toyotabackstickerr">
                <img src={backst}></img>
               

                </div>
                </Link>

            

                <Link to="/civicwhitebackstickerrr">
                <div className="toyotabackstickerrr">
                <img src={backstt}></img>
         
            
                </div>
                </Link>

                
                


            </div>
            <div className="backsticker">
                <p>Back Sticker</p>
                
                <Link to="/civicwhitebacksticker">
                <div className="toyotabacksticker">
                <img src={backs}></img>
               
                

                </div>

                </Link>

                <Link to="/civicwhitebackstickerr">
                <div className="toyotabackstickerr">
                <img src={backst}></img>
               

                </div>
                </Link>

            

                <Link to="/civicwhitebackstickerrr">
                <div className="toyotabackstickerrr">
                <img src={backstt}></img>
         
            
                </div>
                </Link>

                
                


            </div>

        </>
    );
}

export default Civicwhitebackkk;
