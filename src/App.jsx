import React, { useRef, useEffect, useLayoutEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Sky, useGLTF, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Ground } from "./Ground";
import SaveIcon from '@mui/icons-material/Save';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import StraightenIcon from '@mui/icons-material/Straighten';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import WbShadeIcon from '@mui/icons-material/WbShade';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

export const App = () => {
  function Warehouse({ path, props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF(path);

    useEffect(() => {
      const box = new THREE.Box3().setFromObject(group.current);
      const height = box.max.y - box.min.y; // Get the height of the model
      console.log("Warehouse height:", height); // You can adjust the camera based on this

      if (group.current) {
        group.current.traverse((object) => {
          if (object.isMesh) {
            // Set a random color for each mesh
            object.material.color.set(0xffffff * Math.random());
          }
        });
      }
    }, []);

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

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div class="w-[64px] h-full bg-[#fff] fixed z-10 top-0 left-0 overflow-x-hidden py-[6px] leading-[0.9rem] text-[#757575] text-[0.7rem]" style={{fontWeight : "lighter"}}>
        <div class="py-[6px] menu-item " style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <SaveIcon />
          <div>Save <br/> Shed</div>
        </div>
        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <AddBoxIcon/>
          <div>New <br/> Shed</div>
        </div>
        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <FolderOpenIcon/> 
          <div>Open <br/> Shed</div>
        </div>
        <div style={{margin : "10px 5px", height : "1px", backgroundColor : "#aaa"}}></div>
        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <StraightenIcon/> 
          <div>Size &<br/> Bays</div>
        </div>
        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <ViewAgendaIcon/>
          <div>Walls &<br/> Slabs</div>
        </div>

        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <DoorSlidingIcon/>
          <div>Add<br/> thing</div>
        </div>

        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <FormatPaintIcon/>
          <div>Colours &<br/> Style</div>
        </div>

        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <WbShadeIcon/>
          <div>Awnings</div>
        </div>

        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <VisibilityIcon/>
          <div>Visibility</div>
        </div>

        <div style={{margin : "10px 5px", height : "1px", backgroundColor : "#aaa"}}></div>

        <div class="py-[6px] menu-item" style={{display : "flex", flexDirection:"column",  justifyContent : "center", alignItems : "center"}}>
          <RequestQuoteIcon/>
          <div>Quote</div>
        </div>
      </div>
      <div class="ml-[64px] h-full">
        <Canvas
          shadows
          camera={{ position: [13, 0, 18], fov: 55, near: 1, far: 1000 }}
        >
          <hemisphereLight intensity={1.5} color="white" groundColor="black" />
          <Sky sunPosition={[100, 80, 100]} />
          <ambientLight intensity={1.5} />
          <pointLight castShadow intensity={1.5} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>
            <Ground position={[0, 2, 0]} />
            <group position={[0, 2, 0]} scale={[0.011, 0.008, 0.011]}>
              <Warehouse path="/warehouse.gltf" />
            </group>
          </Physics>
          <OrbitControls
            autoRotateSpeed={0.85}
            zoomSpeed={0.75}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.55}
          />
        </Canvas>
      </div>
    </div>
  );
};
