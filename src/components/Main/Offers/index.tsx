import { config } from "./config";
import { StyledOffers, Items, Item, Subtitle } from "./styles";
import { memo } from "react";

export const Offers = memo(() => {
  return (
    <StyledOffers className="container block">
      <h2 className="title">{config.title}</h2>
      <Items>
        {config.listItems.map(({ title, Image }) => (
          <Item key={title}>
            <Image className="item__icon" />
            <Subtitle>{title}</Subtitle>
          </Item>
        ))}
      </Items>
    </StyledOffers>
  );
});
