export interface Notify{
    send(mensagem: string):void;
}

class NotifyProxy implements Notify {
    constructor(private original: Notify) {}

    send(mensagem: string): void {
        console.log("[LOG] Enviando mensagem:", mensagem);
        this.original.send(mensagem);
    }
}

export class Email implements Notify{
    send(mensagem: string): void {
        console.log("EMAIL", mensagem);
    }
}

export class Sms implements Notify{
    send(mensagem: string) {
        console.log("SMS", mensagem);
    }
}

export class SmsLegado{
    enviarSMS(mensagem: string) {
        console.log("SMS LEGADO", mensagem);
    }
}

class AdaptadorSMSLegado implements Notify {
    private mensageiro: SmsLegado;

    constructor(mensageiro: SmsLegado) {
        this.mensageiro = mensageiro;
    }

    send(mensagem:string): void {
        mensagem = "Legado - "+mensagem;
        this.mensageiro.enviarSMS(mensagem);
    }
}

export class push implements Notify{
    send(mensagem: string) {
        console.log("PUSH", mensagem);
    }
}

export class NotifyFactory{
    static create():Notify{
        return new Email();
    }
}

export class Config{
    private static instancia: Config;
    
    public nomeApp: string = "default";
    public servidor: string = "1.1.1.1";
    public sendMax: number = 3;

    private constructor(){}
    
    static getInstancia(): Config{
        if(!this.instancia){
            this.instancia = new Config();
        }
        return this.instancia;
    }
}

function main(){

    //Exercício 1
    console.log('Teste Singleton - configurações devem ser iguais')
    const configuracao = Config.getInstancia();
    
    console.log("Config tentativa de instancia 1: ", configuracao.nomeApp, configuracao.servidor, configuracao.sendMax);
    
    const configuracao2 = Config.getInstancia();

    console.log("Config tentativa de instancia 2: ", configuracao2.nomeApp, configuracao2.servidor, configuracao2.sendMax);

    console.log('Teste Notify - deve ser enviado pelo tipo configurado no factory.');
    const notificacao = NotifyFactory.create();
    notificacao.send("Mensagem Enviada");

    //Exercício 2

    const mensageiroLegado = new AdaptadorSMSLegado(new SmsLegado());
    mensageiroLegado.send("Mensagem teste");

    const notificacaoProxy = new NotifyProxy(notificacao);
    notificacaoProxy.send("Mensagem com proxy");
}

main();
