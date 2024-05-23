import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[
          { id: 1, title: "Title1", description: "Desc1" },
          { id: 1, title: "Title1", description: "Desc1" },
          { id: 1, title: "Title1", description: "Desc1" },
        ].map((item, idx) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
