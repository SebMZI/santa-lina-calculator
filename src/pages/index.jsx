import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// Prix en €
const eau = 4;
const gaz = 1.5;
const elec = 0.5;

export default function Home() {
  const [elecStart, setElectStart] = useState();
  const [elecEnd, setElectEnd] = useState();
  const [gazStart, setGazStart] = useState();
  const [gazEnd, setGazEnd] = useState();
  const [eauStart, setEauStart] = useState();
  const [eauEnd, setEauEnd] = useState();
  const [totalEau, setTotalEau] = useState();
  const [totlaGaz, setTotalGaz] = useState();
  const [totalElec, setTotalElec] = useState();
  const [total, setTotal] = useState();
  const [msg, setMsg] = useState("");

  setTimeout(() => {
    if (msg) {
      setMsg("");
    }
  }, 3000);

  const handleCalculate = () => {
    if (
      !elecStart ||
      !elecEnd ||
      !gazStart ||
      !gazEnd ||
      !eauStart ||
      !eauEnd
    ) {
      return setMsg("Tous les champs sont obligatoires!");
    }
    setTotalEau();
    setTotalElec();
    setTotalGaz();
    setTotal();

    const eauArrDep = eauEnd - eauStart;
    const elecArrDep = elecEnd - elecStart;
    const gazArrDep = gazEnd - gazStart;
    const prixEau = eauArrDep * eau;
    const prixElec = elecArrDep * elec;
    const prixGaz = gazArrDep * gaz;
    const totalPrix = prixEau + prixElec + prixGaz;

    setTotalEau(prixEau);
    setTotalElec(prixElec);
    setTotalGaz(prixGaz);
    setTotal(totalPrix);
  };

  return (
    <>
      <Head>
        <title>Santa Lina</title>
        <meta
          name="description"
          content="Pour calculerr les différentes charges à payer pour l'appartement après séjour."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${styles.container}`}>
          <h1 className={`${styles.title}`}>Calculateur charges Santa Lina</h1>
          <p className={`${styles.info}`}>
            * Prendre uniquement en compte les chiffres dans la partie noire
          </p>

          <div className={`${styles.content}`}>
            <div className={`${styles.item}`}>
              <h2>Arrivée</h2>
              <label htmlFor="elecdep">Electricité</label>
              <input
                type="number"
                id="elecdep"
                min={0}
                onChange={(e) => setElectStart(e.target.value)}
                className={`${styles.input}`}
              />
              <label htmlFor="eaudep">Eau *</label>
              <input
                type="number"
                id="eaudep"
                min={0}
                onChange={(e) => setEauStart(e.target.value)}
                className={`${styles.input}`}
              />
              <label htmlFor="gazdep">Gaz *</label>
              <input
                type="number"
                min={0}
                onChange={(e) => setGazStart(e.target.value)}
                className={`${styles.input}`}
              />
            </div>
            <div className={`${styles.item}`}>
              <h2>Départ</h2>
              <label htmlFor="elecend">Electricité</label>
              <input
                type="number"
                id="elecend"
                min={0}
                onChange={(e) => setElectEnd(e.target.value)}
                className={`${styles.input}`}
              />
              <label htmlFor="eauend">Eau *</label>
              <input
                type="number"
                id="eauend"
                min={0}
                onChange={(e) => setEauEnd(e.target.value)}
                className={`${styles.input}`}
              />
              <label htmlFor="gazend">Gaz *</label>
              <input
                type="number"
                min={0}
                onChange={(e) => setGazEnd(e.target.value)}
                className={`${styles.input}`}
              />
            </div>
          </div>
          <div className={`${styles.validate}`}>
            <button
              className={`${styles.button}`}
              onClick={(e) => handleCalculate()}
            >
              Calculer
            </button>
            <p className={`${styles.msg}`}>{msg}</p>
          </div>
          <div className={`${styles.totaux}`}>
            <h2>Totaux:</h2>
            <p>Eau: {totalEau}€</p>
            <p>Gaz: {totlaGaz}€</p>
            <p>Elec: {totalElec}€</p>
            <p className={`${styles.total}`}>Total: {total}€ </p>
          </div>
          <p className={`${styles.author}`}>
            &copy; Développé par Sébastien Morazzani
          </p>
        </div>
      </main>
    </>
  );
}
