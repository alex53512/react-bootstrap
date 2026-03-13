import { Container, Row, Col } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"

import MenuVertical from "./MenuVertical.jSX"
import Inicio from "./inicio"
import InicioRB from "./InicioRB"
import CardRB from "./CardRB"

function App(){

  return(

    <Container fluid>

      <Row>

        <Col md={3} className="bg-dark text-white vh-100">
          <MenuVertical />
        </Col>

        <Col md={9} className="p-4">

          <Routes>

           
            <Route path="/" element={<Inicio />} />

            <Route path="/inicioRB" element={<InicioRB />} />

            <Route path="/cardRB" element={<CardRB />} />

          </Routes>

        </Col>

      </Row>

    </Container>

  )
}

export default App