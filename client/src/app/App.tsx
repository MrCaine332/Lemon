import React from "react"
import Router from "@/router/Router";
import {Header} from "@modules/header";
import {Footer} from "@modules/footer";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Router />
            <Footer />
        </div>
    )
}

export default App;
