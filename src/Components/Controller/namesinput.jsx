import React, { useState } from "react";
import Autocomplete from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
import entered_name from "./charnames";
import names_list_in_files from "./charfilenames";
import SQFetch from "./StreamQueFetch";
import "../../css/control.css";

function Names() {
  const [enterFields, setenterFields] = useState(false);
  const toggleSection = () => {
    setenterFields(!enterFields);
  };

  const [modComs, setmodComs] = useState(false);

  const toggleModComs = () => {
    setmodComs(!modComs);
  };

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

  const NewHandleEntry = (action) => {
    const Fields = {
      "p11": P11,
      "p12": P12,
      "p21": P21,
      "p22": P22,
      "Pronoun11": Pronoun11,
      "Pronoun12": Pronoun12,
      "Pronoun21": Pronoun21,
      "Pronoun22": Pronoun22,
      "round": RoundName,
      "pool": PoolName,
      "commie1": Commie1,
      "commie2": Commie2,
      "commiep1": Commie1p,
      "commiep2": Commie2p
    }

    if (action == "Update") {
      for (var Key in Fields) {
        if (Fields[Key] !== "") {
          localStorage.setItem(Key, Fields[Key]);
        }
      }
      if (Char11_a !== "") {
        UI_icons(Char11_a, 11)
      }
      if (Char12_a !== "") {
        UI_icons(Char12_a, 12)
      }
      if (Char21_a !== "") {
        UI_icons(Char21_a, 21)
      }
      if (Char22_a !== "") {
        UI_icons(Char22_a, 22)
      }
    }

    if (modComs) setmodComs(false);
    if (enterFields) setenterFields(false);
  }
  return (
    <>
      <h2>Scorebug Names</h2>
      <h2><button onClick={toggleModComs}>Change Commentator info</button></h2>
      <SQFetch />
      <h2><button onClick={toggleSection}>Manual Player/Round Info entry</button></h2>

      <div className="charchange">
        <div className="pair1">
          <h3>Player A: {P11}</h3>
          <div>
            <img src={Char11_arr[0]} alt="character icon" onClick={() => Update_Icon(0, 11)} />
            <img src={Char11_arr[1]} alt="character icon" onClick={() => Update_Icon(1, 11)} />
            <img src={Char11_arr[2]} alt="character icon" onClick={() => Update_Icon(2, 11)} />
            <img src={Char11_arr[3]} alt="character icon" onClick={() => Update_Icon(3, 11)} />
            <img src={Char11_arr[4]} alt="character icon" onClick={() => Update_Icon(4, 11)} />
            <img src={Char11_arr[5]} alt="character icon" onClick={() => Update_Icon(5, 11)} />
            <img src={Char11_arr[6]} alt="character icon" onClick={() => Update_Icon(6, 11)} />
            <img src={Char11_arr[7]} alt="character icon" onClick={() => Update_Icon(7, 11)} />
          </div>
          <h3>Player B: {P11}</h3>
          <div>
            <img src={Char12_arr[0]} alt="character icon" onClick={() => Update_Icon(0, 12)} />
            <img src={Char12_arr[1]} alt="character icon" onClick={() => Update_Icon(1, 12)} />
            <img src={Char12_arr[2]} alt="character icon" onClick={() => Update_Icon(2, 12)} />
            <img src={Char12_arr[3]} alt="character icon" onClick={() => Update_Icon(3, 12)} />
            <img src={Char12_arr[4]} alt="character icon" onClick={() => Update_Icon(4, 12)} />
            <img src={Char12_arr[5]} alt="character icon" onClick={() => Update_Icon(5, 12)} />
            <img src={Char12_arr[6]} alt="character icon" onClick={() => Update_Icon(6, 12)} />
            <img src={Char12_arr[7]} alt="character icon" onClick={() => Update_Icon(7, 12)} />
          </div>
        </div>

        <div className="pair2">
          <h3>Player C: {P21}</h3>
          <div>
            <img src={Char21_arr[0]} alt="character icon" onClick={() => Update_Icon(0, 21)} />
            <img src={Char21_arr[1]} alt="character icon" onClick={() => Update_Icon(1, 21)} />
            <img src={Char21_arr[2]} alt="character icon" onClick={() => Update_Icon(2, 21)} />
            <img src={Char21_arr[3]} alt="character icon" onClick={() => Update_Icon(3, 21)} />
            <img src={Char21_arr[4]} alt="character icon" onClick={() => Update_Icon(4, 21)} />
            <img src={Char21_arr[5]} alt="character icon" onClick={() => Update_Icon(5, 21)} />
            <img src={Char21_arr[6]} alt="character icon" onClick={() => Update_Icon(6, 21)} />
            <img src={Char21_arr[7]} alt="character icon" onClick={() => Update_Icon(7, 21)} />
          </div>
          <h3>Player D: {P22}</h3>
          <div>
            <img src={Char22_arr[0]} alt="character icon" onClick={() => Update_Icon(0, 22)} />
            <img src={Char22_arr[1]} alt="character icon" onClick={() => Update_Icon(1, 22)} />
            <img src={Char22_arr[2]} alt="character icon" onClick={() => Update_Icon(2, 22)} />
            <img src={Char22_arr[3]} alt="character icon" onClick={() => Update_Icon(3, 22)} />
            <img src={Char22_arr[4]} alt="character icon" onClick={() => Update_Icon(4, 22)} />
            <img src={Char22_arr[5]} alt="character icon" onClick={() => Update_Icon(5, 22)} />
            <img src={Char22_arr[6]} alt="character icon" onClick={() => Update_Icon(6, 22)} />
            <img src={Char22_arr[7]} alt="character icon" onClick={() => Update_Icon(7, 22)} />
          </div>
        </div>
      </div>

      {enterFields && (
        <div className="modcontain">
          <div className="mod">
            <h3 className="modtxt">ENTER OR MODIFY NEW MATCH INFO</h3>
            <p className="modtxt">Changes applied upon clicking Enter. Only fill fields A and C for singles</p>
            <input type="text" value={RoundName} placeholder="round" onChange={handleRound} />
            <input type="text" value={PoolName} placeholder="pool" onChange={handlePool} />
            <br /><br />

            <div className="TagEntry">
              <div className="pair1">
                <h3>Player/Duo 1:</h3>
                <input type="text" value={P11} placeholder="Partner A tag" onChange={handleP11} />
                <input type="text" value={P12} placeholder="Partner B tag" onChange={handleP12} />
                <br /><br />
                <input type="text" value={Pronoun11} placeholder="Partner A Pronoun" onChange={handlePronoun11} />
                <input type="text" value={Pronoun12} placeholder="Partner B Pronoun" onChange={handlePronoun12} />
                <br /><br />
                <Autocomplete options={entered_name} trigger="" placeholder="Partner A Character" matchAny={true} value={Char11_a} onChange={(newValue) => handleP11a(newValue)} />
                <Autocomplete options={entered_name} trigger="" placeholder="Partner B Character" matchAny={true} value={Char12_a} onChange={(newValue) => handleP12a(newValue)} />
              </div>
              <div className="pair2">
                <h3>Player/Duo 2:</h3>

                <input type="text" value={P21} placeholder="Partner C Tag" onChange={handleP21} />
                <input type="text" value={P22} placeholder="Partner D Tag" onChange={handleP22} />
                <br /><br />
                <input type="text" value={Pronoun21} placeholder="Partner C Pronoun" onChange={handlePronoun21} />
                <input type="text" value={Pronoun22} placeholder="Partner D Pronoun" onChange={handlePronoun22} />
                <br /><br />
                <Autocomplete options={entered_name} trigger="" placeholder="Partner C Character" matchAny={true} value={Char21_a} onChange={(newValue) => handleP21a(newValue)} />
                <Autocomplete options={entered_name} trigger="" placeholder="Partner D Character" matchAny={true} value={Char22_a} onChange={(newValue) => handleP22a(newValue)} />
              </div>
            </div>

            <br /><br />
            <button className="Cancel" onClick={() => NewHandleEntry()}>Cancel</button>
            <button onClick={() => NewHandleEntry("Update")}>Enter</button>
          </div>
        </div>
      )}

      {modComs && (
        <div className="modcontain">
          <div className="mod">
            <h3 className="modtxt">Comentator names</h3>
            <input type="text" value={Commie1} placeholder="commie1 Tag" onChange={handlecommie1} />

            <input type="text" value={Commie1p} placeholder="commie1 pronoun" onChange={handlecommie1p} />
            <br />

            <input type="text" value={Commie2} placeholder="commie2 Tag" onChange={handlecommie2} />

            <input type="text" value={Commie2p} placeholder="commie2 pronoun" onChange={handlecommie2p} />
            <br />
            <button className="Cancel" onClick={() => NewHandleEntry()}>Cancel</button>
            <button onClick={() => NewHandleEntry("Update")}>Enter</button>
          </div>
        </div>)}
    </>
  );
}

export default Names;
