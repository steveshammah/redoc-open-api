import logo from "./logo.svg";
import "./App.css";
import { RedocStandalone } from "redoc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <RedocStandalone
        specUrl="/openapi.yaml"
        options={{
          nativeScrollbars: true,
          theme: {
            colors: { primary: { main: "#66429C" } },
            typography: { headings: { fontWeight: "600" } },
            sidebar: {
              backgroundColor: "#fff",
              groupItems: { activeBackgroundColor: "#66429c33" },
              level1Items: {
                activeBackgroundColor: "#66429c33",
                activeTextColor: "#66429C",
              },
            },
            rightPanel: {
              backgroundColor: "#0A2540",
            },
          },
          scrollYOffset: 70,
          hideDownloadButton: true,
          // hideLoading: true,
        }}
      />
    </div>
  );
}

export default App;
