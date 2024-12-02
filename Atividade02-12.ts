class Cliente {
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, dataNascimento: Date) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
}

class Conta {
    id: number;
    numero: string;
    saldo: number;
    cliente: Cliente | null;

    constructor(id: number, numero: string, saldo: number, cliente: Cliente | null = null) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): void {
        this.saldo -= valor;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Banco {
    contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserirConta(conta: Conta): void {
        if (this.contas.some(c => c.id === conta.id || c.numero === conta.numero)) {
            console.log("Conta com mesmo ID ou número já existe.");
        } else {
            this.contas.push(conta);
        }
    }

    inserirCliente(cliente: Cliente): void {
        if (this.clientes.some(c => c.id === cliente.id || c.cpf === cliente.cpf)) {
            console.log("Cliente com mesmo ID ou CPF já existe.");
        } else {
            this.clientes.push(cliente);
        }
    }

    consultar(numero: string): Conta | null {
        return this.contas.find(conta => conta.numero === numero) || null;
    }

    consultarCliente(cpf: string): Cliente | null {
        return this.clientes.find(cliente => cliente.cpf === cpf) || null;
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const cliente = this.consultarCliente(cpfCliente);
        const conta = this.consultar(numeroConta);
        if (cliente && conta) {
            if (!cliente.contas.includes(conta)) {
                cliente.contas.push(conta);
                conta.cliente = cliente;
            } else {
                console.log("A conta já está associada ao cliente.");
            }
        } else {
            console.log("Conta ou cliente não encontrado.");
        }
    }

    listarContasCliente(cpf: string): Conta[] {
        const cliente = this.consultarCliente(cpf);
        return cliente ? cliente.contas : [];
    }

    totalizarSaldoCliente(cpf: string): number {
        const cliente = this.consultarCliente(cpf);
        return cliente ? cliente.contas.reduce((total, conta) => total + conta.saldo, 0) : 0;
    }
}

// Exemplo de uso
const banco = new Banco();

const cliente1 = new Cliente(1, "Farya Silva", "123.456.789-00", new Date("2000-01-01"));
const cliente2 = new Cliente(2, "João Santos", "987.654.321-00", new Date("1995-05-15"));

const conta1 = new Conta(101, "111-1", 100);
const conta2 = new Conta(102, "222-2", 200);

banco.inserirCliente(cliente1);
banco.inserirCliente(cliente2);

banco.inserirConta(conta1);
banco.inserirConta(conta2);

banco.associarContaCliente("111-1", "123.456.789-00");
banco.associarContaCliente("222-2", "123.456.789-00");

console.log(banco.listarContasCliente("123.456.789-00"));
console.log(banco.totalizarSaldoCliente("123.456.789-00"));
