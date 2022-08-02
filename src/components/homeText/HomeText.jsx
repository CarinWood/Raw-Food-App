import "./homeText.css";

const HomeText = () => {
  return (
    <section className="home-text">
     
      <p className="home-title">Raw Food Recept</p>
      <p className="home-subtext">
        Det här är en receptsamling med raw food recept. Raw food är en
        kosthållning där man äter råa livsmedel som t.ex. frukt, grönsaker,
        frön, nötter, torkad frukt eller sjögräs. Raw food bör inte värmas över
        42°C, eftersom mängden enzymer då kommer att ändras, vilket leder till
        sämre matsmältningsförmåga och upptag av näring i maten.
      </p>
      <p className="home-subtext">
        Man brukar även välja ekologiska råvaror för att undvika kemikalier och
        bekämpningsmedel. Med andra ord kan man säga att raw food innebär att man
        äter så rent och naturligt som möjligt.
      </p>
      {/* <p className="carin-wood">Created and built by Carin Wood</p> */}
    </section>
  );
};

export default HomeText;
