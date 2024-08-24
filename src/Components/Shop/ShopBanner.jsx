import shopBanner from "../../assets/images/shopBanner.jpg";

export function ShopBanner() {
  return (
    <div>
      <div
        className="relative bg-contain bg-center bg-no-repeat h-96 "
        style={{ backgroundImage: `url(${shopBanner})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center  ">
          <p className="text-dark-blue text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            SUPPORTA IL NOSTRO RIFUGIO
          </p>
          <p className="text-light-blue text-2xl sm:text-3xl md:text-4xl font-bold">
            ogni aiuto è prezioso!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center my-10">
      {/*   <p className="text-4xl font-bold text-dark-green py-10">
          HOUSE OF PAWS SHOP
        </p> */}
      </div>
    </div>
  );
}
