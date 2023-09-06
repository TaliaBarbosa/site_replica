import navComponente from "./nav.js"
import Banner from "./banner.js"
import Card from "./cards.js"
import paginas from "./paginas.js"

let pag = new paginas()

function mainpage(){
let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();
let cardProduto = new Card()

nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B =new Banner();
let BannerInfo = ["<h1>compra rapida</h1> <br/> <h3> compre roupas mais rapido...</h3>","<h1>roupas da moda</h1> <br/><h3>moda</h3> <h1>roupa da moda</h1>","<h3>Roupa da marvel</h3"]
B.CriarBanner("banner_1",)
B.ModificaBanner("banner_1",BannerInfo,2)

let BannerIndex = 0
let bannerTime = setInterval(()=>{
    try {


    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
    BannerIndex+=1
}
catch{
    console.log("Banner foi parado por algum erro")
    clearInterval(bannerTime)
}

},9000)
document.getElementById("btBannerProximo").addEventListener("click",()=>{
    if(BannerIndex >= 2){
        BannerIndex = 0
    }
    else{ 
        BannerIndex+=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
})
document.getElementById("btBannerAnterior").addEventListener("click",()=>{
    if(BannerIndex <= 0){
        BannerIndex = 2
    }
    else{ 
        BannerIndex-=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
})
cardProduto.EscolherTipo("card sb")
cardProduto.CriarCards("Portacard1","Tênis Adidas","È um tenis de alta performace")
cardProduto.CriarCards("Portacard1","Tênis Adidas","È um tenis de alta performace")


let cardVenda = new Card()
cardVenda.EscolherTipo("cardProduto sb")
cardVenda.CriarCards("Portacard1","Produto a venda","Venda do produto")

let CardNovo = new Card()
CardNovo.EscolherTipo("card03 sb")
CardNovo.CriarCards("Portacard1","Estoque","ultimas peças")
}

mainpage()

function produtospage(){
    let pagina = document.getElementById("pagina")
    pagina.innerHTML = ""
    document.getElementsByClassName("localNav")[0].getElementsByTagName("h4")[0].innerHTML = "Produtos"
    pag.PaginaDeProduto()



}
let HomeMenu = document.getElementById("Menu_02").getElementsByTagName("li")[0].getElementsByTagName("a")[0]
HomeMenu.addEventListener("click",()=>{
    window.location.reload()

})
let ProdutoMenu = document.getElementById("Menu_02").getElementsByTagName("li")[1].getElementsByTagName("a")[0]
ProdutoMenu.addEventListener("click",produtospage)
