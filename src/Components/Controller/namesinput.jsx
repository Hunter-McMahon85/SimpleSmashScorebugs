import React, { useState } from "react";
import { Link } from "react-router-dom";
import Autocomplete from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
import entered_name from "./charnames";
import names_list_in_files from "./charfilenames";
import oauthConfig from "./oauthConfig";

function Names() {

  const [Char11_a, setChar11_a] = useState("");
  const [Char11_arr, setChar11_arr] = useState([
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
  ]);

  const [Char12_a, setChar12_a] = useState("");
  const [Char12_arr, setChar12_arr] = useState([
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
  ]);

  const [Char21_a, setChar21_a] = useState("");
  const [Char21_arr, setChar21_arr] = useState([
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
  ]);

  const [Char22_a, setChar22_a] = useState("");
  const [Char22_arr, setChar22_arr] = useState([
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
    "charicons/smashball.png",
  ]);

  // actual values that get updated in local storage
  const [P11, setP11] = useState("");
  const [P12, setP12] = useState("");
  const [P21, setP21] = useState("");
  const [P22, setP22] = useState("");

  const [Pronoun11, setPronoun11] = useState("");
  const [Pronoun12, setPronoun12] = useState("");
  const [Pronoun21, setPronoun21] = useState("");
  const [Pronoun22, setPronoun22] = useState("");

  const [RoundName, setRoundName] = useState("");
  const [PoolName, setPoolName] = useState("");

  const [Commie1, setCommie1] = useState("");
  const [Commie2, setCommie2] = useState("");
  const [Commie1p, setCommie1p] = useState("");
  const [Commie2p, setCommie2p] = useState("");

  const handlecommie1 = (event) => {
    setCommie1(event.target.value);
  };

  const handlecommie2 = (event) => {
    setCommie2(event.target.value);
  };

  const handlecommie1p = (event) => {
    setCommie1p(event.target.value);
  };

  const handlecommie2p = (event) => {
    setCommie2p(event.target.value);
  };

  const handleP11a = (event) => {
    setChar11_a(event);
  };

  const handleP12a = (event) => {
    setChar12_a(event);
  };

  const handleP21a = (event) => {
    setChar21_a(event);
  };

  const handleP22a = (event) => {
    setChar22_a(event);
  };

  const Update_Icon = (i, player) => {
    switch (player) {
      case 11:
        localStorage.setItem("Char11", Char11_arr[i]);
        break;
      case 12:
        localStorage.setItem("Char12", Char12_arr[i]);
        break;
      case 21:
        localStorage.setItem("Char21", Char21_arr[i]);
        break;
      case 22:
        localStorage.setItem("Char22", Char22_arr[i]);
        break;
      default:
        break;
    }
  };

  const UI_icons = (char, player) => {
    char = char.trim();
    if (entered_name.includes(char)) {
      console.log(char);
      let index = entered_name.indexOf(char);
      switch (player) {
        case 11:
          setChar11_arr([
            "charicons/" + names_list_in_files[index][0],
            "charicons/" + names_list_in_files[index][1],
            "charicons/" + names_list_in_files[index][2],
            "charicons/" + names_list_in_files[index][3],
            "charicons/" + names_list_in_files[index][4],
            "charicons/" + names_list_in_files[index][5],
            "charicons/" + names_list_in_files[index][6],
            "charicons/" + names_list_in_files[index][7],
          ]);

          break;
        case 12:
          setChar12_arr([
            "charicons/" + names_list_in_files[index][0],
            "charicons/" + names_list_in_files[index][1],
            "charicons/" + names_list_in_files[index][2],
            "charicons/" + names_list_in_files[index][3],
            "charicons/" + names_list_in_files[index][4],
            "charicons/" + names_list_in_files[index][5],
            "charicons/" + names_list_in_files[index][6],
            "charicons/" + names_list_in_files[index][7],
          ]);

          break;
        case 21:
          setChar21_arr([
            "charicons/" + names_list_in_files[index][0],
            "charicons/" + names_list_in_files[index][1],
            "charicons/" + names_list_in_files[index][2],
            "charicons/" + names_list_in_files[index][3],
            "charicons/" + names_list_in_files[index][4],
            "charicons/" + names_list_in_files[index][5],
            "charicons/" + names_list_in_files[index][6],
            "charicons/" + names_list_in_files[index][7],
          ]);

          break;
        case 22:
          setChar22_arr([
            "charicons/" + names_list_in_files[index][0],
            "charicons/" + names_list_in_files[index][1],
            "charicons/" + names_list_in_files[index][2],
            "charicons/" + names_list_in_files[index][3],
            "charicons/" + names_list_in_files[index][4],
            "charicons/" + names_list_in_files[index][5],
            "charicons/" + names_list_in_files[index][6],
            "charicons/" + names_list_in_files[index][7],
          ]);

          break;
        default:
          break;
      }
    }
  };

  const handleP11 = (event) => {
    setP11(event.target.value);
  };

  const handleP12 = (event) => {
    setP12(event.target.value);
  };

  const handleP21 = (event) => {
    setP21(event.target.value);
  };

  const handleP22 = (event) => {
    setP22(event.target.value);
  };

  const handlePronoun11 = (event) => {
    setPronoun11(event.target.value);
  };

  const handlePronoun12 = (event) => {
    setPronoun12(event.target.value);
  };

  const handlePronoun21 = (event) => {
    setPronoun21(event.target.value);
  };

  const handlePronoun22 = (event) => {
    setPronoun22(event.target.value);
  };

  const handleRound = (event) => {
    setRoundName(event.target.value);
  };

  const handlePool = (event) => {
    setPoolName(event.target.value);
  };

  function HandleEntry() {
    if (P11 !== "") {
      localStorage.setItem("p11", P11);
    }
    if (P12 !== "") {
      localStorage.setItem("p12", P12);
    }
    if (P21 !== "") {
      localStorage.setItem("p21", P21);
    }
    if (P22 !== "") {
      localStorage.setItem("p22", P22);
    }
    if (Pronoun11 !== "") {
      localStorage.setItem("Pronoun11", Pronoun11);
    }
    if (Pronoun12 !== "") {
      localStorage.setItem("Pronoun12", Pronoun12);
    }
    if (Pronoun21 !== "") {
      localStorage.setItem("Pronoun21", Pronoun21);
    }
    if (Pronoun22 !== "") {
      localStorage.setItem("Pronoun22", Pronoun22);
    }
    if (RoundName !== "") {
      localStorage.setItem("round", RoundName);
    }
    if (PoolName !== "") {
      localStorage.setItem("pool", PoolName);
    }
    if (Commie1 !== "") {
      localStorage.setItem("commie1", Commie1);
    }
    if (Commie2 !== "") {
      localStorage.setItem("commie2", Commie2);
    }
    if (Commie1p !== "") {
      localStorage.setItem("commiep1", Commie1p);
    }
    if (Commie2p !== "") {
      localStorage.setItem("commiep2", Commie2p);
    }
  }

  return (
    <>
      <h2>Manual Entry</h2>

      <input
        type="text"
        value={RoundName}
        placeholder="round"
        onChange={handleRound}
      />

      <input
        type="text"
        value={PoolName}
        placeholder="pool"
        onChange={handlePool}
      />

      <h3>Player/Duo 1:</h3>
      <input
        type="text"
        value={P11}
        placeholder="tag 11"
        onChange={handleP11}
      />
      <input
        type="text"
        value={Pronoun11}
        placeholder="Pronoun11"
        onChange={handlePronoun11}
      />

      <Autocomplete
        options={entered_name}
        trigger=""
        placeholder="p11char"
        matchAny={true}
        value={Char11_a}
        onChange={(newValue) => handleP11a(newValue)}
      />

      <button onClick={() => UI_icons(Char11_a, 11)}>Set P11 Icons</button>

      <div>
        <img src={Char11_arr[0]} alt="character icon" onClick={() => Update_Icon(0, 11)} />
        <img src={Char11_arr[1]} alt="character icon" onClick={() => Update_Icon(1, 11)} />
        <img src={Char11_arr[2]} alt="character icon" onClick={() => Update_Icon(2, 11)} />
        <img src={Char11_arr[3]} alt="character icon" onClick={() => Update_Icon(3, 11)} />
        <br />
        <img src={Char11_arr[4]} alt="character icon" onClick={() => Update_Icon(4, 11)} />
        <img src={Char11_arr[5]} alt="character icon" onClick={() => Update_Icon(5, 11)} />
        <img src={Char11_arr[6]} alt="character icon" onClick={() => Update_Icon(6, 11)} />
        <img src={Char11_arr[7]} alt="character icon" onClick={() => Update_Icon(7, 11)} />
      </div>

      <input type="text" value={P12} placeholder="tag12" onChange={handleP12} />
      <input
        type="text"
        value={Pronoun12}
        placeholder="Pronoun12"
        onChange={handlePronoun12}
      />

      <Autocomplete
        options={entered_name}
        trigger=""
        placeholder="p12char"
        matchAny={true}
        value={Char12_a}
        onChange={(newValue) => handleP12a(newValue)}
      />

      <button onClick={() => UI_icons(Char12_a, 12)}>Set P12 Icons</button>

      <div>
        <img src={Char12_arr[0]} alt="character icon" onClick={() => Update_Icon(0, 12)} />
        <img src={Char12_arr[1]} alt="character icon" onClick={() => Update_Icon(1, 12)} />
        <img src={Char12_arr[2]} alt="character icon" onClick={() => Update_Icon(2, 12)} />
        <img src={Char12_arr[3]} alt="character icon" onClick={() => Update_Icon(3, 12)} />
        <br />
        <img src={Char12_arr[4]} alt="character icon" onClick={() => Update_Icon(4, 12)} />
        <img src={Char12_arr[5]} alt="character icon" onClick={() => Update_Icon(5, 12)} />
        <img src={Char12_arr[6]} alt="character icon" onClick={() => Update_Icon(6, 12)} />
        <img src={Char12_arr[7]} alt="character icon" onClick={() => Update_Icon(7, 12)} />
      </div>

      <h3>Player/Duo 2:</h3>

      <input type="text" value={P21} placeholder="tag21" onChange={handleP21} />
      <input
        type="text"
        value={Pronoun21}
        placeholder="Pronoun21"
        onChange={handlePronoun21}
      />

      <Autocomplete
        options={entered_name}
        trigger=""
        placeholder="p21char"
        matchAny={true}
        value={Char21_a}
        onChange={(newValue) => handleP21a(newValue)}
      />

      <button onClick={() => UI_icons(Char21_a, 21)}>Set P21 Icons</button>

      <div>
        <img src={Char21_arr[0]} alt="character icon" onClick={() => Update_Icon(0, 21)} />
        <img src={Char21_arr[1]} alt="character icon" onClick={() => Update_Icon(1, 21)} />
        <img src={Char21_arr[2]} alt="character icon" onClick={() => Update_Icon(2, 21)} />
        <img src={Char21_arr[3]} alt="character icon" onClick={() => Update_Icon(3, 21)} />
        <br />
        <img src={Char21_arr[4]} alt="character icon" onClick={() => Update_Icon(4, 21)} />
        <img src={Char21_arr[5]} alt="character icon" onClick={() => Update_Icon(5, 21)} />
        <img src={Char21_arr[6]} alt="character icon" onClick={() => Update_Icon(6, 21)} />
        <img src={Char21_arr[7]} alt="character icon" onClick={() => Update_Icon(7, 21)} />
      </div>

      <input type="text" value={P22} placeholder="tag22" onChange={handleP22} />
      <input type="text" value={Pronoun22} placeholder="Pronoun22" onChange={handlePronoun22}/>

      <Autocomplete options={entered_name} trigger="" placeholder="p22char" matchAny={true} value={Char22_a} onChange={(newValue) => handleP22a(newValue)} />

      <button onClick={() => UI_icons(Char22_a, 22)}>Set P22 Icons</button>

      <div>
        <img src={Char22_arr[0]} alt="character icon" onClick={() => Update_Icon(0, 22)} />
        <img src={Char22_arr[1]} alt="character icon" onClick={() => Update_Icon(1, 22)} />
        <img src={Char22_arr[2]} alt="character icon" onClick={() => Update_Icon(2, 22)} />
        <img src={Char22_arr[3]} alt="character icon" onClick={() => Update_Icon(3, 22)} />
        <br />
        <img src={Char22_arr[4]} alt="character icon" onClick={() => Update_Icon(4, 22)} />
        <img src={Char22_arr[5]} alt="character icon" onClick={() => Update_Icon(5, 22)} />
        <img src={Char22_arr[6]} alt="character icon" onClick={() => Update_Icon(6, 22)} />
        <img src={Char22_arr[7]} alt="character icon" onClick={() => Update_Icon(7, 22)} />
      </div>

      <h2>Comentators</h2>
      <input type="text" value={Commie1} placeholder="commie1 Tag" onChange={handlecommie1} />

      <input type="text" value={Commie1p} placeholder="commie1 pronoun" onChange={handlecommie1p} />
      <br />

      <input type="text" value={Commie2} placeholder="commie2 Tag" onChange={handlecommie2} />

      <input type="text" value={Commie2p} placeholder="commie2 pronoun" onChange={handlecommie2p} />
      <br />
      <button onClick={HandleEntry()}>Enter</button>
    </>
  );
}

export default Names;
