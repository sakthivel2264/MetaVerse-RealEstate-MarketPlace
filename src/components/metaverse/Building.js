import React from 'react';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

// Import Assets
import MetalMap from '@/assets/MetalMap.png';
import MetalNormalMap from '@/assets/MetalNormalMap.png';

const Building = ({ position, size, landId, landInfo, setLandName, setLandOwner, setHasOwner, setLandId }) => {
    // Resolve asset URLs for use with useLoader
    const [surface, color] = useLoader(TextureLoader, [MetalNormalMap.src, MetalMap.src]);

    // Click handler for the mesh
    const clickHandler = () => {
        setLandName(landInfo.name);
        setLandId(landId);

        if (landInfo.owner === '0x0000000000000000000000000000000000000000') {
            setLandOwner('No Owner');
            setHasOwner(false);
        } else {
            setLandOwner(landInfo.owner);
            setHasOwner(true);
        }
    };

    return (
        <mesh position={position} onClick={clickHandler}>
            <boxGeometry args={size} />
            <meshStandardMaterial map={color} normalMap={surface} metalness={20} />
        </mesh>
    );
};

export default Building;