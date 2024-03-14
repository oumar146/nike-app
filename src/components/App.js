import "../styles/App.css";
import NavBar from "./NavBar";
import NikeInvincibleSection from "./NikeInvincibleSection";
import DefilterImage from "./DefilterImage";
import SectionOurUniverses from "./SectionOurUniverses";
import SportsSection from "./SportsSection";
import MembreAcces from "./MembreAcces";
import Button from "./Button";
import Footer from "./Footer";
function App() {
  const trendy_product = [
    {
      id: 1,
      name: "Nike Air max",
      price: "114.99 €",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fabffc20-6600-4860-8169-f5052cb7f2db/chaussure-air-max-plus-pour-ado-NGV34z.png",
    },
    {
      id: 2,
      name: "Nike Structure 25",
      price: "120 €",
      image:
"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/514ad05c-be23-44e5-beeb-f67ce325accf/chaussure-de-running-sur-route-structure-25-pour-dcJ7Xk.png"
    },
    {
      id: 3,
      name: "Nike Sportswear V2K RUN - Baskets basses",
      price: "99.99 €",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/chaussure-v2k-run-ZzTJRD.png",
    },
    {
      id: 4,
      name: "Nike Air Force 1'07",
      price: "150 €",
      image:
        "https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/871ea72c-a2f4-493c-a6f4-3be31a86c73b/chaussure-air-force-1-07-pour-QMx6sn.png",
    },
  ];

  const new_product = [
    {
      id: 1,
      name: "Nike Air Max Dn",
      price: "199.99 €",
      image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f50070d2-77a3-4213-aebf-9371d9759548/chaussure-air-max-dn-pour-rZwC5C.png"
    },
    {
      id: 2,
      name: "Nike P-6000",
      price: "125.99 €",
      image:
"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a7682303-1804-4ba9-8183-457f0597ef4f/chaussure-p-6000-16n7zz.png"
    },
    {
      id: 3,
      name: "Nike Air Max Plus",
      price: "110 €",
      image:
"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/36d2734f-7938-44cf-89ef-80517591ae5a/chaussure-air-max-plus-pour-Nm7dWT.png"
    },
    {
      id: 4,
      name: "Nike Air Max Puls",
      price: "160 €",
      image:
"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/48d07380-244b-4fa4-99d7-133e2ca64d5f/chaussure-air-max-pulse-pour-lgFPkM.png"    },
  ];

  return (
    <div className="App">
      <NavBar />
      <NikeInvincibleSection />
      <DefilterImage products={trendy_product} title={"En ce moment"} />
      <DefilterImage
        products={new_product}
        title={"Nouveau cette semaine"}
      />
      <SectionOurUniverses />
      <SportsSection />
      <MembreAcces/>
      <Footer />
    </div>
  );
}

export default App;
