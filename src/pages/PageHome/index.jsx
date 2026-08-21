import { useState } from 'react'
import { Header } from '../../components/Header'
import { HomeHero } from '../../components/HomeHero'
import './page-home.css'
import { HomeVisualizar } from '../../components/HomeVisualizar'



export function PageHome() {
    let [produtos, setProduto] = useState([])

    function adicionarProduto(novo_produto) {
        setProduto(produtos.concat(novo_produto))
    }

    function produtoComprado(i) {
        const nova_lista_produto = produtos.map((produto, indice) => {
            if (i == indice){
                return {...produto, comprado: true}
            }
            return produto
        })
        setProduto(nova_lista_produto) 
    }


    return (
        <>
            <Header />

            <HomeHero adicionarProduto={adicionarProduto} idProduto={produtos.length} />

            <HomeVisualizar produtos={produtos} produtoComprado={produtoComprado} />
        </>
    )
}