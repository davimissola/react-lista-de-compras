import './home-visualizar.css'



export function HomeVisualizar({ produtos }) {
    function Comprado(i) {
        produtos.map((produto, indice) => {
            if (i == indice){
                return [...produto, comprado: true]
            }
            return produto
        }) 
    }

    return (
        <section className='section-visualizar'>
            <h2>Produtos :</h2>

            <div className='div-cards'>
                { produtos
                    .filter(produto => {
                        return produto.comprado == false
                    })
                    .map((produto, i) => {
                    return (
                        <div className='card' key={i}>
                            <h3>{ produto.nome }</h3>
                            <p>Quantidade : { produto.quantidade }</p>
                            <button class='button-comprou' onClick={ () => Comprado(i) }>Comprei</button>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}