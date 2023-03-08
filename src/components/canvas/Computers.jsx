import { Canvas } from "@react-three/fiber";
import {
    Environment,
    Grid,
    OrbitControls,
    Stage,
    Text,
    useAnimations,
    useGLTF,
    Preload,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import Loader from "../Loader";

export function Model(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/luna_robot/scene.gltf");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        actions["Take 001"].play();
    }, [actions]);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="20e6dc7bd6b648aeb929f5b068b85d25fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Drone_LP"
                                    position={[0, 110.62, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}
                                >
                                    <group name="Exhaust">
                                        <mesh
                                            name="Exhaust_Material_#18_0"
                                            geometry={
                                                nodes["Exhaust_Material_#18_0"]
                                                    .geometry
                                            }
                                            material={materials.Material_18}
                                        />
                                    </group>
                                    <group
                                        name="RamieA"
                                        position={[-0.29, 0.29, 1.85]}
                                        rotation={[0, -0.05, 2.29]}
                                    >
                                        <group
                                            name="RamieB"
                                            position={[0.39, 0, -0.01]}
                                        >
                                            <group
                                                name="Object_12"
                                                position={[-0.16, -0.49, -0.4]}
                                            >
                                                <mesh
                                                    name="RamieB_Material_#17_0"
                                                    geometry={
                                                        nodes[
                                                            "RamieB_Material_#17_0"
                                                        ].geometry
                                                    }
                                                    material={
                                                        materials.Material_17
                                                    }
                                                />
                                            </group>
                                        </group>
                                        <group
                                            name="Object_9"
                                            position={[0.23, -0.49, -0.41]}
                                        >
                                            <mesh
                                                name="RamieA_Material_#17_0"
                                                geometry={
                                                    nodes[
                                                        "RamieA_Material_#17_0"
                                                    ].geometry
                                                }
                                                material={materials.Material_17}
                                            />
                                        </group>
                                    </group>
                                    <group
                                        name="Box003"
                                        position={[0, 0.29, 1.85]}
                                    >
                                        <group
                                            name="Object_15"
                                            position={[0.46, -0.02, -0.4]}
                                        >
                                            <mesh
                                                name="Box003_Material_#17_0"
                                                geometry={
                                                    nodes[
                                                        "Box003_Material_#17_0"
                                                    ].geometry
                                                }
                                                material={materials.Material_17}
                                            />
                                        </group>
                                    </group>
                                    <group
                                        name="Box004"
                                        position={[-0.27, 0, 1.84]}
                                        rotation={[0, 0, Math.PI / 2]}
                                    >
                                        <group
                                            name="Object_18"
                                            position={[0.52, 0.19, -0.69]}
                                        >
                                            <mesh
                                                name="Box004_Material_#17_0"
                                                geometry={
                                                    nodes[
                                                        "Box004_Material_#17_0"
                                                    ].geometry
                                                }
                                                material={materials.Material_17}
                                            />
                                        </group>
                                    </group>
                                    <group
                                        name="Box005"
                                        position={[0.59, 0.34, 0.75]}
                                        rotation={[-0.01, 0.02, -2.58]}
                                    >
                                        <group
                                            name="Object001"
                                            position={[-0.02, 0.01, 0.01]}
                                        >
                                            <group
                                                name="Object002"
                                                position={[-0.39, 0, -0.01]}
                                            >
                                                <group
                                                    name="Box002"
                                                    position={[
                                                        -0.27, -0.02, -0.01,
                                                    ]}
                                                    rotation={[
                                                        0.05, 0.13, 1.49,
                                                    ]}
                                                >
                                                    <group
                                                        name="Object_30"
                                                        position={[
                                                            -0.58, 0.09, -0.2,
                                                        ]}
                                                    >
                                                        <mesh
                                                            name="Box002_Material_#17_0"
                                                            geometry={
                                                                nodes[
                                                                    "Box002_Material_#17_0"
                                                                ].geometry
                                                            }
                                                            material={
                                                                materials.Material_17
                                                            }
                                                        />
                                                    </group>
                                                </group>
                                                <group
                                                    name="Object_27"
                                                    position={[
                                                        0.39, -0.26, -0.19,
                                                    ]}
                                                >
                                                    <mesh
                                                        name="Object002_Material_#17_0"
                                                        geometry={
                                                            nodes[
                                                                "Object002_Material_#17_0"
                                                            ].geometry
                                                        }
                                                        material={
                                                            materials.Material_17
                                                        }
                                                    />
                                                </group>
                                            </group>
                                            <group
                                                name="Object_24"
                                                position={[0, -0.26, -0.2]}
                                            >
                                                <mesh
                                                    name="Object001_Material_#17_0"
                                                    geometry={
                                                        nodes[
                                                            "Object001_Material_#17_0"
                                                        ].geometry
                                                    }
                                                    material={
                                                        materials.Material_17
                                                    }
                                                />
                                            </group>
                                        </group>
                                        <group
                                            name="Object_21"
                                            position={[-0.02, -0.25, -0.2]}
                                        >
                                            <mesh
                                                name="Box005_Material_#17_0"
                                                geometry={
                                                    nodes[
                                                        "Box005_Material_#17_0"
                                                    ].geometry
                                                }
                                                material={materials.Material_17}
                                            />
                                        </group>
                                    </group>
                                    <mesh
                                        name="Drone_LP_Material_#17_0"
                                        geometry={
                                            nodes["Drone_LP_Material_#17_0"]
                                                .geometry
                                        }
                                        material={materials.Material_17}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/luna_robot/scene.gltf");

const Computers = () => {
    return (
        <Canvas
            gl={{ logarithmicDepthBuffer: true }}
            shadows
            camera={{ position: [-15, 0, 0], fov: 25 }} // here position [x, y, z] where x is the distance from the object and y is the height of the camera
            style={{ height: "100vh" }}
        >
            <Suspense fallback={<Loader />}>
                <Stage
                    intensity={0.5}
                    environment="city"
                    shadows={{ type: "accumulative", bias: -0.0001 }}
                    adjustCamera={false}
                    position={[0, 0, 0]}
                >
                    <Model
                        scale={0.01}
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                    />
                </Stage>

                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.05}
                    enableZoom={false}
                    makeDefault
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default Computers;
