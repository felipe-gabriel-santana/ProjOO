
interface Bebida{
    get valor():number;
    get nome(): string;
}


export class CafeExpresso implements Bebida{
    private _valor = 4.50;
    private _nome = "Café expresso";

    get valor(): number{
        return this._valor;
    }

    get nome(): string{
        return this._nome
    }
}

export class Cha implements Bebida{
    private _valor = 6.50;
    private _nome = "Chá";

    get valor(): number{
        return this._valor;
    }

    get nome(): string{
        return this._nome
    }
}

export class Capputino implements Bebida{
    private _valor = 8.00;
    private _nome = "Capputino";

    get valor(): number{
        return this._valor;
    }

    get nome(): string{
        return this._nome
    }
}

export abstract class BebidaDecorator implements Bebida{
    constructor(protected bebida: Bebida) {}

    abstract get valor(): number;
    abstract get nome(): string;
}

export class Leite extends BebidaDecorator{
    private _valor = 2.00;
    private _nome = "Leite integral";

    get valor(): number{
        return this.bebida.valor + this._valor;
    }

    get nome(): string{
        return this.bebida.nome + " " + this._nome
    }
}

export class Chantilly extends BebidaDecorator{
    private _valor = 3.00;
    private _nome = "Chantilly";

    get valor(): number{
        return this.bebida.valor + this._valor;
    }

    get nome(): string{
        return this.bebida.nome + " " + this._nome
    }
}

export class Canela extends BebidaDecorator{
    private _valor = 1.00;
    private _nome = "Canela em pó";

    get valor(): number{
        return this.bebida.valor + this._valor;
    }

    get nome(): string{
        return this.bebida.nome + " " + this._nome
    }
}

export class CaldaDeChocolate extends BebidaDecorator{
    private _valor = 3.00;
    private _nome = "Calda de Chocolate";

    get valor(): number{
        return this.bebida.valor + this._valor;
    }

    get nome(): string{
        return this.bebida.nome + " " + this._nome
    }
}
function mainTest(){

    console.log("Pedido 1:");
    const pedido1 = new CafeExpresso; 
    console.log("Bebida: "+ pedido1.nome); // Bebida: Café expresso
    console.log("Total: "+ pedido1.valor.toFixed(2)); // Total: 4.50

    console.log("Pedido 2");
    const pedido2 = new Leite(new Chantilly(new CafeExpresso));
    console.log("Bebida: "+ pedido2.nome); // Bebida: Café expresso Chantilly Leite integral
    console.log("Total: "+ pedido2.valor.toFixed(2)); // Total: 9.50

    console.log("Pedido 3");
    const pedido3 = new Canela(new CaldaDeChocolate(new Capputino));
    console.log("Bebida: "+ pedido3.nome); // Bebida: Capputino Calda de Chocolate Canela em pó
    console.log("Total: "+ pedido3.valor.toFixed(2)); // Total: 12.00
}

mainTest();
