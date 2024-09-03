import { AdminAnimalList } from "./AdminAnimalList";
import { AdminProductList } from "./AdminProductList";
import { Visite } from "./Visite";
import AdminImage from "../../assets/images/Admin.png";
import { Newsletter } from "./Newsletter";

export function AdminProfile() {
  return (
    <div className="mt-10 mb-20">
      <p className="justify-center flex py-10 font-bold text-4xl text-light-blue">
        Pannello di controllo Admin
      </p>
      <div className="mx-20 my-10 flex flex-col items-center ">
        <img
          src={AdminImage}
          alt="immagine"
          className="rounded-full w-20 h-20 border-light-grey"
        />

        <div className="flex items-center gap-3 my-4 text-sm">
          <div className="h-3 w-3 rounded-full bg-light-green"></div>
          <p>Admin</p>
        </div>
      </div>

      <div className="flex gap-32 text-center justify-center">
        <div className="shadow-md p-4 rounded-xl">
          <p className="text-lg font-semibold text-dark-green mb-6">
            Registro prodotti
          </p>
          <AdminProductList />
          <p className="my-10">Vendite mensili: 40</p>
        </div>

        <div className="shadow-md p-4 rounded-xl">
          <p className="text-lg font-semibold text-dark-green mb-6">
            Registro animali
          </p>
          <AdminAnimalList />
        </div>
        <div className="shadow-md p-4 rounded-xl">
          {" "}
          <p className="text-lg font-semibold text-dark-green mb-6">
            Richieste di visita
          </p>
          <Visite />
        </div>
      </div>
      <div className="w-screen h-0.5 my-10 bg-soft-grey"></div>
      <div className=" justify-center mx-14 text-center">
        <p className="text-lg font-semibold text-dark-green mb-6">
          Newsletter users:
        </p>
        <Newsletter />
      </div>
    </div>
  );
}
