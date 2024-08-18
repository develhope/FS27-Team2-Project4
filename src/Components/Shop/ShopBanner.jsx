import shopBanner from "../../assets/images/shopBanner.jpg";
export function ShopBanner (){
    return(
        <div>
        <div
          className="relative bg-contain bg-center bg-no-repeat h-96 "
          style={{ backgroundImage: `url(${shopBanner})` }}
        >
          <div className="absolute m-36 font-bold text-3xl  ">
            <p className="text-light-purple">SUPPORTA IL NOSTRO RIFUGIO </p>
            <p className="text-dark-purple">ogni aiuto è prezioso!</p>
          </div>
        </div>
        <div className="flex flex-col items-center my-10">
          <p className="text-4xl font-bold text-dark-green ">
            NomeRifugio MERCH
          </p>
        </div>
      </div>
    )
}