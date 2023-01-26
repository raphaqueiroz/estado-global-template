import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleCadastro, handleCart} from "../Router/cordinator";
import CardFrutas from "../components/CardFrutas";
import styled from "styled-components";

export default function Mercadinho(props) {
    
    const navigate = useNavigate();

    function comprar(id) {
         const i = props.carrinho.findIndex((item) => item.id === id);
         console.log(i);
         if (i !== -1) {
           props.carrinho[i] = { ...props.carrinho[i], amount: props.carrinho[i].amount + 1 };// Adiciona mais um na quantidade de um mesmo produto quando clicado mais de uma vezes. O valor vai ser o mesmo da quantidade de vezes que o produto foi adicionado.
         } else {
           const frutaEncontrada = props.frutas.find((fruta) => fruta.id === id);
           const novaFruta = { ...frutaEncontrada, amount: 1 };
           const novaLista = [...props.carrinho, (props.carrinho[1] = novaFruta)];

           props.setCarrinho(novaLista);
           console.log("Carrinho de compras", props.carrinho)
    }
}

    
const frutasNaTela = props.frutas.map((fruta) => {
    return (
        <CardFrutas name={fruta.name} price={fruta.price} image={fruta.url} id={fruta.id} comprar={comprar}/>
    )
})

return (
    <MercadinhoContainer>
        <h1>Mercadinho</h1>
        <button onClick={() => handleCart(navigate)}>Vá para Carrinho </button>
        <button onClick={() => handleCadastro(navigate)}>Cadastro de Frutas </button>
        <FrutasContainer>
            {frutasNaTela}
        </FrutasContainer>
    </MercadinhoContainer>
);
}
const FrutasContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
const MercadinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
