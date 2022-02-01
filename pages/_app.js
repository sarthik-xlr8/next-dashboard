import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Layout from "../Components/Layout";
import { theme } from "../theme";
import "../styles/Home.scss";
import "../styles/globals.css";
import getStore from "../src/store";
import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  return (
    <Provider store={getStore()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
