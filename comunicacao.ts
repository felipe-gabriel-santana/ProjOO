export interface Notify{
    send(mensagem: string):void;
}

export class email implements Notify{
    send(mensagem: string): void {
        console.log("EMAIL", mensagem);
    }
}

export class sms implements Notify{
    send(mensagem: string) {
        console.log("SMS", mensagem);
    }
}

export class push implements Notify{
    send(mensagem: string) {
        console.log("PUSH", mensagem);
    }
}

export class NotifyFactory{
    static create():Notify{
        return new email();
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
    console.log('Teste Singleton - configurações devem ser iguais')
    const configuracao = Config.getInstancia();
    
    console.log("Config tentativa de instancia 1: ", configuracao.nomeApp, configuracao.servidor, configuracao.sendMax);
    
    const configuracao2 = Config.getInstancia();

    console.log("Config tentativa de instancia 2: ", configuracao2.nomeApp, configuracao2.servidor, configuracao2.sendMax);

    console.log('Teste Notify - deve ser enviado por email.');
    const notificacao = NotifyFactory.create();
    notificacao.send("Mensagem Enviada");
}

main();
