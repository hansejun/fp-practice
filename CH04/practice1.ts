import { Item } from "./item";
import { fromUndefined, getOrElse, isSome } from "./option";

const stockItem = (item: Item) => {
  const optionDiscountPrice = fromUndefined(item.discountPrice);
  const discountPrice = getOrElse(optionDiscountPrice, 0);

  let saleText = "";
  if (isSome(optionDiscountPrice)) {
    saleText = discountPrice + "원";
  }

  console.log(item.name);
  console.log(item.price);
  console.log(item.quantity);
  console.log("---------------------------");
};
