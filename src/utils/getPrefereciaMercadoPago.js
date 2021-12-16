import { mercadopago } from "../mercadopago/mercadoPagoConfing";

let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};


export const getPreferenciaMercadopago = async (preference) => {
    try {
      const preferenciaMercadoPago = await mercadopago.preferences.create(preference).then((response) => {
              // Este valor reemplazará el string "<%= global.id %>" en tu HTML
              global.id = response.body.id;
          })
  .catch((error) => {
          console.log(error);
  });
        return preferenciaMercadoPago;
  } catch (error) {
    console.log(error);
  }
};
