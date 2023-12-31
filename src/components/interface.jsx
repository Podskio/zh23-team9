/* eslint-disable react/prop-types */
function Interface(props) {
  // eslint-disable-next-line react/prop-types
  const { shape, setShape, shapelimit, restartLevel } = props;

  return (
    <div
      style={{
        backgroundColor: "#D9D9D9",
        width: "800px",
        height: "115px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        onMouseDown={() => setShape("circle")}
        style={{
          backgroundColor: (shape == "circle" && "#C6C5C5") || "#D9D9D9",
          padding: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <img src={"/Circle.svg"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          x {shapelimit.circle || 0}
        </p>
      </div>
      <div
        onMouseDown={() => setShape("square")}
        style={{
          backgroundColor: (shape == "square" && "#C6C5C5") || "#D9D9D9",
          padding: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <img src={"/Square.svg"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          x {shapelimit.square || 0}
        </p>
      </div>
      <div
        onMouseDown={() => setShape("triangle")}
        style={{
          backgroundColor: (shape == "triangle" && "#C6C5C5") || "#D9D9D9",
          padding: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <img src={"/Triange.svg"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          x {shapelimit.triangle || 0}
        </p>
      </div>
      <div
        onMouseDown={() => setShape("bridge")}
        style={{
          backgroundColor: (shape == "bridge" && "#C6C5C5") || "#D9D9D9",
          padding: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <img src={"/Bridge.svg"} />
        <p style={{ fontFamily: "sans-serif", fontSize: "20px" }}>
          x {shapelimit.bridge || 0}
        </p>
      </div>
      <div
        onMouseDown={() => restartLevel()}
        style={{
          position: "absolute",
          right: "40px",
          top: "140px",
          transform: "scaleX(-1)",
        }}
      >
        <img src={"/restart.svg"} />
      </div>
    </div>
  );
}
export default Interface;
