class Banner{
    CriarBanner(Idalvo,ListaBanner){
        let Elemento = document.getElementById(Idalvo)
        Elemento.innerHTML +="<article></article>"
        Elemento.innerHTML +="<button id='btBannerAnterior'> < </button>"
        Elemento.innerHTML +="<button id='btBannerProximo'> > </button>"
       
    }
    ModificaBanner(Idalvo='',ListaBanner=[""],Index=0){
        let Banner = document.getElementById(Idalvo).getElementsByTagName("article")[0]
        console.log(Banner)
        Banner.innerHTML= ListaBanner[Index]

    }

}
export default Banner