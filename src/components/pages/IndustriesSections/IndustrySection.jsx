import { useState } from "react";
import { industries } from "./industryData";
import IndustryTabs from "./IndustryTabs";
import IndustryView from "./IndustryView";

export default function IndustrySection() {
  const [active, setActive] = useState("ecommerce");
  const current = industries.find((x) => x.id === active);

  return (
    <section className="w-full py-20 ">
      <div className="max-w-7xl mx-auto px-6">

        <IndustryTabs active={active} setActive={setActive} data={industries} />

        <IndustryView item={current} />

      </div>
    </section>
  );
}
