import { useState } from 'react'
import { Header } from '../../components/Header'
import { HomeHero } from '../../components/HomeHero'
import './page-home.css'
import { HomeVisualizar } from '../../components/HomeVisualizar'



export function PageHome() {
    let [produtos, setProduto] = useState([])

    function adicionarProduto(novo_produto) {
        setProduto(produtos.concat(novo_produto))
        console.log(produtos)
    }


    return (
        <>
            <Header />

            <HomeHero adicionarProduto={adicionarProduto} />

            <HomeVisualizar produtos={produtos} />
        </>
    )
}