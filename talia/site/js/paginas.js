import card from "./cards.js"

class paginas{
    PaginaPrincipal = document.getElementById("pagina")
    cards = new card()
    PaginaDeProduto(){
        this.PaginaPrincipal.innerHTML = "ola mundo"
        this.InserirConteudo("<div id='VitrineProdutos'></div>")
        this.cards.CriarCards("VitrineProdutos","Tenis da Nike","Produtos novo da nike")
    }
    InserirConteudo(conteudo){
        this.PaginaPrincipal.innerHTML+=conteudo
    }

}
export default paginas