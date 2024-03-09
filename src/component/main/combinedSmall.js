import SmallCard from "./smallCard";

function CombinedSmall({ data }) {
  if (data) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "white",
          border: "1px solid black",
          padding: "1rem",
        }}
      >
        <SmallCard Pic={data[0].Pic} name={data[0].text} url={data[0].url} />
        <SmallCard Pic={data[1].Pic} name={data[1].text} url={data[1].url} />
        <SmallCard Pic={data[2].Pic} name={data[2].text} url={data[2].url} />
        <SmallCard Pic={data[3].Pic} name={data[3].text} url={data[3].url} />
      </div>
    );
  }
}

export default CombinedSmall;
