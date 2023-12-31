/* eslint-disable react/prop-types */
function TitleScreen(props) {
  const { switchLevel } = props;
  return (
    <div
      style={{
        width: "800px",
        gap: "10px",
        height: "600px",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        top: "250px",
        flexDirection: "column",
        zIndex: "100",
      }}
    >
      <h1>
        <i
          style={{
            fontFamily: "sans-serif",
          }}
        >
          {" "}
          Geometric Rush
        </i>
      </h1>

      <button
        onMouseDown={() => switchLevel("level1")}
        style={{
          backgroundColor: "#9AFFC3",
          borderRadius: "20px",
          width: "100px",
          height: "50px",
          fontFamily: "sans-serif",
          fontSize: "20px",
          border: "0px",
        }}
      >
        {" "}
        Start{" "}
      </button>
    </div>
  );
}

export default TitleScreen;
