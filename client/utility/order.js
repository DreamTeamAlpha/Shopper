export const calcTotal = function(products){
  let total = 0;
  products.forEach((prod) => {
    total += prod.orderProduct.price;
  });

  return total.toFixed(2);
};
