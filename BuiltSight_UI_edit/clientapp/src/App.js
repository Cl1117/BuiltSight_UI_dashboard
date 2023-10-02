import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import FAQ from "./scenes/faq";
import Line from "./scenes/line";
import LoginComponent from "./components/LoginComponent";
import { useLocation } from "react-router-dom";


function App() {
    const [theme, colorMode] = useMode();
    const location = useLocation();
    const toggleColorMode = () => {
        colorMode.toggleColorMode();
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    {
                        location.pathname !== "/" && (
                            <>
                                <Sidebar />
                            </>
                        )
                    }
                    <main className="content">
                        {/*<Topbar />*/}
                        <Routes>
                            <Route path="/" element={<LoginComponent />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<FAQ />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
