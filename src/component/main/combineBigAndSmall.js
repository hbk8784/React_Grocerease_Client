import { BigCard, SmallCard } from "../main";
import Wrapper from "../../assets/wrapper/combineBigAndSmall";

function CombineBigAndSmall({ data }) {
  if (data) {
    return (
      <Wrapper>
        <div>
          <BigCard Pic={data[0].Pic} name={data[0].text} url={data[0].url} />
        </div>
        <div className="smallCard-container">
          <SmallCard Pic={data[1].Pic} name={data[1].text} url={data[1].url} />
          <SmallCard Pic={data[2].Pic} name={data[2].text} url={data[2].url} />
          <SmallCard Pic={data[3].Pic} name={data[3].text} url={data[3].url} />
          <SmallCard Pic={data[4].Pic} name={data[4].text} url={data[4].url} />
        </div>
      </Wrapper>
    );
  }
}

export default CombineBigAndSmall;
