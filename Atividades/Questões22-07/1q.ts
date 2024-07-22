class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.largura * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

let retangulo = new Retangulo(5, 10);
console.log("Área do Retângulo:", retangulo.calcularArea());
console.log("Perímetro do Retângulo:", retangulo.calcularPerimetro());

class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio ** 2;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

let circulo = new Circulo(5);
console.log("Área do Círculo:", circulo.calcularArea());
console.log("Perímetro do Círculo:", circulo.calcularPerimetro());

class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    constructor(valorCreditos: number, valorDebitos: number) {
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    calcularSaldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacao = new SituacaoFinanceira(1000, 300);
console.log("Saldo:", situacao.calcularSaldo());

class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    public somar(): number {
        return this.operando1 + this.operando2;
    }

    public subtrair(): number {
        return this.operando1 - this.operando2;
    }
}

let calculadora = new Calculadora(10, 5);
console.log("Soma:", calculadora.somar());
console.log("Subtração:", calculadora.subtrair());



class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public getHora(): number {
        return this.hora;
    }

    public getMinutos(): number {
        return this.minutos;
    }

    public getSegundos(): number {
        return this.segundos;
    }

    public formatarHora(): string {
        const formatar = (valor: number): string => (valor < 10 ? '0' : '') + valor;
        return `${formatar(this.hora)}:${formatar(this.minutos)}:${formatar(this.segundos)}`;
    }
}

let horaAtual = new Hora(14, 30, 45);
console.log("Hora:", horaAtual.formatarHora());


