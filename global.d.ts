declare namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      planeGeometry: any;
      primitive: any;
    }
  }

  declare module "@react-three/fiber" {
    interface ThreeElements {
      threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
    }
  }
  