import { useState } from "react";

export default function Profile() {
  const [nickname, setNickName] = useState("USER");
  const [firstname, setfirstname] = useState("user's name");
  const [surname, setSurname] = useState("user's surname");
  const [bio, setBio] = useState("user's bio");
  const [icon, setIcon] = useState(
    "https://static.vecteezy.com/ti/vettori-gratis/t1/2534006-social-media-chat-online-immagine-profilo-vuoto-icona-testa-e-corpo-persone-in-piedi-icona-sfondo-grigio-gratuito-vettoriale.jpg"
  );

  return (
    <>
      <div className="profile-container bg-light-grey ">
        <div className="flex flex-col items-center justify-center profile-card bg-white mt-6">
          <h1 className=" font-semibold text-2xl text-dark-grey mb-3 "> @{nickname} </h1>
          <img className=" rounded-md object-cover   hover:" src={icon} alt="" />
          <p className=" text-gray-700 mt-4 ">
            {firstname} {surname}'s Profile{" "}
          </p>
          <h4 className=" font-semibold text-2xl text-dark-grey "> Bio </h4>
          <p className=" text-gray-700 "> {bio} </p>
        </div>
      </div>
    </>
  );
}
