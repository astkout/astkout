import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      center
      as="div"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
        background: "rgba(0, 0, 0, 0.6)",
        borderRadius: "1rem",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: "0.875rem",
          color: "#f1f1f1",
          fontWeight: 700,
          marginTop: "0.5rem",
        }}
      >
        {progress > 0 ? `${progress.toFixed(1)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
