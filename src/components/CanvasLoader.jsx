// import React from "react";
// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();

//   const displayText = progress !== 0 ? `${progress.toFixed(2)}%` : "Loading...";

//   return (
//     <Html
//       as="div"
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <span className="canvas-loader" />
//       <p style={{ fontSize: 14, color: "#f1f1f1", fontWeight: 800 }}>
//         {displayText}
//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;

import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = React.memo(() => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p style={{ fontSize: 14, color: "#f1f1f1", fontWeight: 800 }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
});

export default CanvasLoader;
