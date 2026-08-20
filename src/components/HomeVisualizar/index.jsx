import './home-visualizar.css'



export function HomeVisualizar({ produtos }) {
    return (
        <section className='section-visualizar'>
            <h2>Produtos :</h2>

            <div className='div-cards'>
                { produtos.map((produto, i) => {
                    return (
                        <div className='card' key={i}>
                            <h3>{ produto.nome }</h3>
                            <p>Quantidade : { produto.quantidade }</p>
                            <span>Já comprou? { produto.comprado }</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}