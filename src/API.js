export const getItems = () => {
  fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=24').then(
    (response) => response.json()
  );
};

export const getItem = (id) => {
  fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((response) =>
    response.json()
  );
};
