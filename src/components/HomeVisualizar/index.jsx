import './home-visualizar.css'



export function HomeVisualizar({ produtos, produtoComprado }) {
    return (
        <section className='section-visualizar'>
            <h2>Produtos :</h2>

            <div className='div-cards'>
                <div className="cards-filtrados">
                    { produtos
                        .filter(produto => {
                            return produto.comprado == false
                        })
                        .map((produto) => {
                        return (
                            <div className='card' key={produto.id}>
                                <h3>{ produto.nome }</h3>
                                <p>Quantidade : { produto.quantidade }</p>
                                <button className='button-comprou' onClick={ () => produtoComprado(produto.id) }>Comprei</button>
                            </div>
                        )
                    })}
                </div>
                <div className="cards-filtrados">
                    { produtos
                        .filter(produto => {
                            return produto.comprado == true
                        })
                        .map((produto) => {
                        return (
                            <div className='card' key={produto.id}>
                                <h3>{ produto.nome }</h3>
                                <p>Quantidade : { produto.quantidade }</p>
                                <button className='button-comprou comprado' disabled={true}>Comprado</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}