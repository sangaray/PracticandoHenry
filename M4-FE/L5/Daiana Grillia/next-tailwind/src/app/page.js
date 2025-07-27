import Image from "next/image";
import CardWithCSS from "./CardWithCSS/CardWithCSS";
import CardWithTailwind from "./CardWithTailwind/CardWithTailwind";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <CardWithCSS />
      </div>
      <div>
        <CardWithTailwind />
      </div>
    </div>
  );
}

