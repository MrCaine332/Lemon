import React from "react"
import Router from "@/router/Router"
import { Header } from "@modules/common/header"
import { Footer } from "@modules/common/footer"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Router />
      <Footer />
    </div>
  )
}

export default App
