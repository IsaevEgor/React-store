import React, { useCallback, useEffect, useState } from "react";
import { fetchBasket } from "../../http/basket";
import { fetchBasketDevice } from "../../http/basketDevice";
import { fetchDevices } from "../../http/deviceApi";
import Footer from "../../UI/footer/Footer";
import Header from "../../UI/header/organisms/Header";
import cl from "./basket.module.css";

const Basket = () => {
  const [basketDevice, setBasketDevice]:any = useState([]);
	let devceIdArr:any[] = []

  const getDevice = useCallback((data: any) => {
    data.map((item: any) => {
      fetchDevices(null, null, null, null, false, item.deviceId).then(
        (data) => {

        }
      );
    });
  }, [basketDevice]);
  console.log(devceIdArr.slice(-1));

  const getBasketDevice = useCallback(
    (data: any) => {
      fetchBasketDevice(data.id).then((data) => {
        getDevice(data);
      });
    },
    [getDevice]
  );

  useEffect(() => {
    const userId = localStorage.userId;

    fetchBasket(userId).then((data) => {
      getBasketDevice(data);
    });
  }, [getBasketDevice]);

  //console.log("Массив устройств данной корзины");
  //console.log(basketDevice);
  //console.log(`Но его длина равняется ${basketDevice.length}`);

  return (
    <div className={cl.Container}>
      <Header />
      <div className={cl.Content}></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Basket;