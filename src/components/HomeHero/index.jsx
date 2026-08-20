import { useState } from 'react'
import { FormField } from '../FormField'
import './home-hero.css'


export function HomeHero({ adicionarProduto }) {

    function enviar( FormData ) {
        const novo_produto = {
            'nome': FormData.get('nome'),
            'quantidade': FormData.get('quantidade'),
            'comprado': false,
        }
        adicionarProduto(novo_produto)
    }

    return (
        <section className='section-home-hero'>
            <form className="form-compras" action={enviar}>
                <h2>Adicione um novo produto</h2>
                < FormField 
                    label='Nome do produto'
                    placeholder='Insira o nome do produto'
                    id='nome'
                    tipo='text'
                    name='nome'
                />
                < FormField 
                    label='Quantidade do produto'
                    placeholder='Insira a quantidade de produtos'
                    id='quantidade'
                    tipo='number'
                    name='quantidade'
                />

                <button type='submit'>Criar produto</button>
            </form>
        </section>
    )
}