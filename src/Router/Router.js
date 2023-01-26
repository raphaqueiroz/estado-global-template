import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";
import frutaria from "../frutaria.json";


export default function Router() {
    
    // Estado elevado para ser usado em ambos componentes.
    const [carrinho, setCarrinho] = useState ([])
    const [frutas, setFrutas] = useState(frutaria.frutaria);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Mercadinho carrinho={carrinho} setCarrinho={setCarrinho} frutas={frutas}/>} // Array será preenchido com o valor do produto.
                />
                <Route
                    path="/cart"
                    element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/>} /// Array vai aparecer na tela.
                />
                <Route
                path="/cadastro" element={<Cadastro  frutas={frutas} setFrutas={setFrutas}/>}
                />


            </Routes>
        </BrowserRouter>
    );
}