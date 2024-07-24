import { useState } from "react";

export default function Profile() {
  const [nickname, setNickName] = useState("user");
  const [firstname, setfirstname] = useState("user's name");
  const [surname, setSurname] = useState("user's surname");
  const [bio, setBio] = useState("user's bio");
  const [icon, setIcon] = useState(
    "https://static.vecteezy.com/ti/vettori-gratis/t1/2534006-social-media-chat-online-immagine-profilo-vuoto-icona-testa-e-corpo-persone-in-piedi-icona-sfondo-grigio-gratuito-vettoriale.jpg"
  );

  return (
    <>
      <div className="profile-container">
        <div className="flex flex-col items-center justify-center profile-card">
          <h1>@{nickname}</h1>
          <img src={icon} alt="" />
          <p>
            {firstname} {surname}'s Profile{" "}
          </p>
          <h4>Bio</h4>
          <p>{bio}</p>
        </div>
      </div>
    </>
  );
}
