let urlVideo = (() => {
    function recibir(url, id){
        let frame = document.getElementById(id);
        frame.setAttribute("src",url);
    }
    
    return {
        cargarVideo: (url,id)=>{
            recibir(url,id);
        }
    }
})();

class Multimedia{
    constructor(url){
        this._url = url;
    }

    get url(){
        return this._url;
    }

    setInicio(){
        return `Este metodo es para realizar un cambio en la URL del video`;
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this._id = id;
    }
    playMultimedia(){
        return urlVideo.cargarVideo(this._url,this._id);
    }

    setInicio(t_inicio){
        this._url = `${this._url};start=${t_inicio}`;
    }
}



var musica1 = new Reproductor("https://www.youtube.com/embed/0jXTBAGv9ZQ?si=wJ_ziyTcorWNL89V&amp","musica");
musica1.setInicio("7");
musica1.playMultimedia();
var pelicula1 = new Reproductor("https://www.youtube.com/embed/YX_38eXDLl4?si=MgU22q9OmYiGHR-g&amp","peliculas");
pelicula1.setInicio("43");
pelicula1.playMultimedia();
var serie1 = new Reproductor("https://www.youtube.com/embed/oNm5Ry5SGPY?si=zNNMnzmziTnQD0Ql&amp","series");
serie1.setInicio("12");
serie1.playMultimedia();