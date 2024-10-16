import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Sky, useGLTF, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Ground } from "./Ground";

import SizeAndBays from "./SizeAndBays";

import SaveIcon from "@mui/icons-material/Save";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import StraightenIcon from "@mui/icons-material/Straighten";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import WbShadeIcon from "@mui/icons-material/WbShade";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SettingsIcon from "@mui/icons-material/Settings";
import DescriptionIcon from "@mui/icons-material/Description";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import EditNoteIcon from '@mui/icons-material/EditNote';
import InfoIcon from '@mui/icons-material/Info';

export const App = () => {
  const [sizeandbars, setSizeAndBars] = useState(false);

  function Warehouse({ path, props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF(path);

    // useLayoutEffect(() => {
    //   const box = new THREE.Box3().setFromObject(group.current);
    //   const height = box.max.y - box.min.y; // Get the height of the model
    //   console.log("Warehouse height:", height); // You can adjust the camera based on this
    //   if (group.current) {
    //     group.current.traverse((object) => {
    //       if (object.isMesh) {
    //         // Log the object and material to check what is being traversed
    //         console.log("Object:", object);
    //         console.log("Material:", object.material);

    //         // Check if the material has a color property
    //         if (object.material && object.material.color) {
    //           // Set the color to red
    //           object.material.color.set(0xff0000); // Red color
    //           console.log("Color changed to red");
    //         } else {
    //           console.log("Material does not support color change.");
    //         }
    //       }
    //     });
    //   }
    // }, []);

    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_B.geometry}
          material={materials["Corrugated Metal"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_F.geometry}
          material={materials["Corrugated Metal"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_L.geometry}
          material={materials["Corrugated Metal"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_R.geometry}
          material={materials["Corrugated Metal"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vertical_Supports.geometry}
          material={materials.Steel}
          position={[500, 250, -300]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Horizontal_Supports.geometry}
          material={materials.Steel}
          position={[495.979, 486.905, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[100, 100, 55.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Roof_Support_(Main)"].geometry}
          material={materials.Steel}
          position={[0, 643.698, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[7.5, 750, 7.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Strut_B.geometry}
          material={materials.Steel}
          position={[0, 492.369, -300]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[500, 7.5, 7.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Strut_F.geometry}
          material={materials.Steel}
          position={[0, 492.369, 300]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[500, 7.5, 7.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Roof.geometry}
          material={materials.Roof}
          position={[0, 501, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[515, 771.652, 5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Floor.geometry}
          material={materials.Floor}
          position={[0, -0.252, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[102.84, 101.853, 102.111]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Bit.geometry}
          material={materials.Roof}
          position={[-37.458, 200, 760.436]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[5, 300, 200]}
        />
        <group
          position={[300, 156.177, 741.69]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={[3.713, 3.713, 1.183]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Base}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.Up}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.Down}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_3.geometry}
            material={materials.Stop}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_4.geometry}
            material={materials.Top}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Top_Bit.geometry}
          material={materials.Roof}
          position={[-37.458, 375.709, 734.535]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[25, 300, 25]}
        />
        <group
          position={[399.972, 109.574, 757.314]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[5, 50.748, 110]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.Frame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials.Door}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={materials.Metal_Shiny}
          />
        </group>
        <group
          position={[399.972, 109.574, -758.881]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[5, 50.748, 110]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.Frame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.Door}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={materials.Metal_Shiny}
          />
        </group>
        <group
          position={[-302.554, 556.732, 0.11]}
          rotation={[-Math.PI / 2, -0.269, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[-288.984, 546.751, -502.36]}
          rotation={[Math.PI, 0, 1.302]}
          scale={[10, 10, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[-302.554, 556.732, 525.069]}
          rotation={[-Math.PI / 2, -0.269, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[222, 579.476, 525.069]}
          rotation={[-Math.PI / 2, 0.285, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[222, 579.476, -6.386]}
          rotation={[-Math.PI / 2, 0.285, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
            material={materials.Emissive}
          />
        </group>
        <group
          position={[222, 579.476, -501.105]}
          rotation={[-Math.PI / 2, 0.285, Math.PI / 2]}
          scale={[106.902, 32.801, 106.902]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials.Emissive}
          />
        </group>
      </group>
    );
  }

  useGLTF.preload("/warehouse.gltf");

  const handleSizeAndBays = (open) => {
    if (sizeandbars == true) {
      setSizeAndBars(false);
      return;
    }
    setSizeAndBars(open);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        className="w-[64px] h-full fixed top-0 left-0 overflow-x-hidden py-[6px] leading-[0.9rem] text-[#757575] text-[0.7rem]"
        style={{
          fontWeight: "lighter",
          backgroundColor: "#f4f4f4",
          zIndex: "1300",
        }}
      >
        <div
          className="py-[6px]"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CloudOffIcon style={{ opacity: "0.6" }} />
        </div>
        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddBoxIcon />
          <div>
            New <br /> Shed
          </div>
        </div>
        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FolderOpenIcon />
          <div>
            Open <br /> Shed
          </div>
        </div>
        <div
          style={{ margin: "10px 5px", height: "1px", backgroundColor: "#aaa" }}
        ></div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LocalOfferIcon />
          <div>Tag</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleSizeAndBays(true)}
        >
          <StraightenIcon />
          <div>
            Size &<br /> Bays
          </div>
        </div>
        <SizeAndBays
          toggleState={sizeandbars}
          onClick={() => setSizeAndBars(false)}
        />
        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ViewAgendaIcon />
          <div>
            Walls &<br /> Slabs
          </div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DoorSlidingIcon />
          <div>
            Add
            <br /> thing
          </div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormatPaintIcon />
          <div>
            Colours
            <br />& Style
          </div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BuildIcon />

          <div>Structure</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WbShadeIcon />
          <div>Awnings</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EngineeringIcon />
          <div>Engineering</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <VisibilityIcon />
          <div>Visibility</div>
        </div>

        <div
          style={{ margin: "10px 5px", height: "1px", backgroundColor: "#aaa" }}
        ></div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SettingsIcon />
          <div>Setting</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DescriptionIcon />
          <div>Description</div>
        </div>


        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContentCopyIcon />
          <div>Copy Shed</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContentPasteIcon />
          <div>Paste Shed</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EditNoteIcon />
          <div>Flashing <br/> Editor</div>
        </div>

        <div
          className="py-[6px] menu-item"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InfoIcon />
          <div>App Info</div>
        </div>
      </div>
      <div className="ml-[64px] h-full">
        <Canvas
          shadows
          camera={{ position: [1.3, 0, 1.8], fov: 35, zoom: 0.9 }}
        >
          <hemisphereLight intensity={1.5} color="white" groundColor="black" />
          <Sky sunPosition={[100, 80, 100]} />
          <ambientLight intensity={1.5} />
          <pointLight castShadow intensity={1.5} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>
            <Ground position={[0, 0, 0]} />
            <group position={[0, 0, 0]} scale={[0.00085, 0.0006, 0.0008]}>
              <Warehouse path="/warehouse.gltf" />
            </group>
          </Physics>
          <OrbitControls
            minDistance={0.56}
            maxDistance={5}
            autoRotateSpeed={0.85}
            zoomSpeed={0.75}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Canvas>
      </div>
    </div>
  );
};
