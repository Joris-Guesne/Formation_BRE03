import "./assets/scss/common.scss";
import Header from "./assets/header/header";
import Footer from "./assets/footer/footer";
import CardTree from "./assets/card-tree/card-tree";

import imagePecher from "./assets/img/pecher.jpg";

function App() {
  return (
    <>
      <Header />
      <main>
        <CardTree imageSource={imagePecher} imageLabel="Un pêcher" />
      </main>

      <Footer />
    </>
  );
}

export default App;
