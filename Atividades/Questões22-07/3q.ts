class Conta:
    def __init__(self, numero, saldo=0):
        self.__numero = numero
        self.__saldo = saldo

    def depositar(self, valor):
        self.__saldo += valor

    def sacar(self, valor):
        if valor <= self.__saldo:
            self.__saldo -= valor
        else:
            print("Saldo insuficiente")

    def consultar_saldo(self):
        return self.__saldo

    def get_numero(self):
        return self.__numero

    def get_saldo(self):
        return self.__saldo


class Banco:
    def __init__(self):
        self.__contas = []

    def adicionar_conta(self, conta):
        self.__contas.append(conta)

    def remover_conta(self, numero):
        conta = self.__consulta_indice(numero)
        if conta:
            self.__contas.remove(conta)
        else:
            print("Conta não encontrada")

    def consultar_conta(self, numero):
        conta = self.__consulta_indice(numero)
        if conta:
            return conta
        else:
            print("Conta não encontrada")
            return None

    def listar_contas(self):
        return [conta.get_numero() for conta in self.__contas]

    def __consulta_indice(self, numero):
        for conta in self.__contas:
            if conta.get_numero() == numero:
                return conta
        return None


# Teste das classes

# Teste da classe Conta
conta1 = Conta(1, 1000)
conta2 = Conta(2, 2000)
assert conta1.get_numero() == 1
assert conta1.consultar_saldo() == 1000
conta1.depositar(500)
assert conta1.consultar_saldo() == 1500
conta1.sacar(300)
assert conta1.consultar_saldo() == 1200

# Teste da classe Banco
banco = Banco()
banco.adicionar_conta(conta1)
banco.adicionar_conta(conta2)
assert banco.listar_contas() == [1, 2]
conta = banco.consultar_conta(1)
assert conta.consultar_saldo() == 1200
banco.remover_conta(1)
assert banco.listar_contas() == [2]

# Verificando acesso a atributos privados
try:
    banco.__contas
except AttributeError:
    print("Acesso ao atributo privado __contas bloqueado")

try:
    banco.__consulta_indice(1)
except AttributeError:
    print("Acesso ao método privado __consulta_indice bloqueado")
