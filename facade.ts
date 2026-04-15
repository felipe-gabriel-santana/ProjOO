export class Tv{
   private ligada = false;

   ligarTv(){
       if (!this.ligada) {
           this.ligada = true;
           console.log("TV ligada");
       }
   }

   desligarTv(){
       if (this.ligada){
           this.ligada = false;
           console.log("TV Desligada");
       }
   }
}


export class Som{
   private volume = 15;
   private ligado = false;
   private modoDeSom = "Futebol";


   ligarSom(){
       if (!this.ligado) {
           this.ligado = true;
           console.log("Som ligado");
       }
   }

   desligarSom(){
       if (this.ligado){
           this.ligado = false;
           console.log("Som Desligado");
       }
   }

   alterarVolume(volume: number){
       if(this.ligado){
           this.volume = volume;
           console.log("Volume = " + this.volume);
       }
      
   }

   alterarModoDeSom(modo:string){
       if(this.ligado){
           this.modoDeSom = modo;
           console.log("Modo " + this.modoDeSom);
       }
   }
}


export class Luzes{
   private ligada = false;
   private luz = "branca";
   private intensidade = 10;
   private sincronizarSom = false;
   private sincronizarImagem = false;

   ligarLuz(){
       if (!this.ligada) {
           this.ligada = true;
           console.log("Luz ligada");
       }
   }

   desligarLuz(){
       if (this.ligada){
           this.ligada = false;
           console.log("Luz desligada");
       }
   }

   alterarCor(cor:string){
       if(this.ligada){
           this.luz = cor;
           console.log("Cor " + this.luz);
       }
   }

   alterarIntencidade(intensidade: number){
       if(this.ligada){
           this.intensidade = intensidade;
           console.log("Intensidade = " + this.intensidade);
       }
      
   }

   ligarSincronizarSom(){
       if (this.ligada && !this.sincronizarSom) {
           this.sincronizarSom = true;
           console.log("Luz Sincronizada ao som ligada");
       }
   }

   desligarSincronizarSom(){
       if (this.ligada) {
           this.sincronizarSom = false;
           console.log("Luz Sincronizada ao som desligada");
       }
   }

   ligarSincronizarImagem(){
       if (this.ligada && !this.sincronizarImagem) {
           this.sincronizarImagem = true;
           console.log("Luz Sincronizada a imagem ligada");
       }
   }
  
   desligarSincronizarImagem(){
       if (this.ligada) {
           this.sincronizarImagem = false;
           console.log("Luz Sincronizada a imagem desligada");
       }
   }
}


export class MediaPlayer{
   private ligado = false;
   private midia = "";
   private tipoMidia = "";

   ligarPlayer(){
       if (!this.ligado) {
           this.ligado = true;
           console.log("Player ligado");
       }
   }

   desligarLuz(){
       if (this.ligado){
           this.ligado = false;
           console.log("Player ligado");
       }
   }

   inicializarMedia(midia:string, tipoMidia:string){
       if (this.ligado){
           this.midia = midia;
           this.tipoMidia = tipoMidia;
           console.log("Mídia alterada para "+ this.tipoMidia+ " - " + this.midia);
       }
   }

   playMedia(){
       if (this.ligado){
           console.log("Inciando mídia " + this.tipoMidia+ " - " + this.midia);
       }
   }


}

export class HomeTheater{
   private static instancia: HomeTheater;
   private tv: Tv;
   private som: Som;
   private player: MediaPlayer;
   private luz: Luzes;


   private constructor(){
       this.tv = new Tv();
       this.som = new Som();
       this.player = new MediaPlayer();
       this.luz = new Luzes();


   }
  
   static getInstancia(): HomeTheater{
       if(!this.instancia){
           this.instancia = new HomeTheater();
       }
       return this.instancia;
   }


   assistirFilme(filme:string, tipoMidia:string){
       this.tv.ligarTv();
       this.som.ligarSom();
       this.som.alterarVolume(100);
      
       this.player.ligarPlayer();
       this.player.inicializarMedia(filme, tipoMidia);
       this.player.playMedia();
      
       this.luz.ligarLuz();
       this.luz.alterarCor("verde");
       this.luz.alterarIntencidade(100);
       this.luz.ligarSincronizarImagem();
   }


   ouvirMusica(musica:string, tipoMidia:string){
       this.som.ligarSom();
       this.som.alterarVolume(100);
     
       this.player.ligarPlayer();
       this.player.inicializarMedia(musica, tipoMidia);
       this.player.playMedia();

       this.luz.ligarLuz();
       this.luz.alterarCor("branca");
       this.luz.alterarIntencidade(100);
       this.luz.ligarSincronizarSom();
   }
}



function mainTest(){
    //instancia de HomeTheater
    const meuHomeTheater = HomeTheater.getInstancia();
    
    //cliente acessa apenas a facade para assistir o filme Sherek
    meuHomeTheater.assistirFilme("Sherek", "DVD");

    //cliente acessa apenas a facade para ouvid a música do Sherek
    meuHomeTheater.ouvirMusica("Smash Mouth - All Star", "mp3");
}

mainTest()
