import Page from "./pages/Page";
import URL from "./img/myPhoto.jpg";

function App() {
  return (
    <div className="App">
      <Page
        birth="11.08.2005"
        phone="0739870397"
        email="cofiyabondar8@gmail.com"
        city="Николаев"
        studies="Шаг"
        url={URL}
      />
    </div>
  );
}

export default App;
