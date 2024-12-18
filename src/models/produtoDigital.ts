class ProdutoDigital extends Produto {
    private tamanhoArquivo: string; // Exemplo: "1GB"

    constructor(id: number, nome: string, preco: number, tamanhoArquivo: string) {
        super(id, nome, preco);
        this.tamanhoArquivo = tamanhoArquivo;
    }

    public getTamanhoArquivo(): string {
        return this.tamanhoArquivo;
    }

    public setTamanhoArquivo(tamanhoArquivo: string): void {
        this.tamanhoArquivo = tamanhoArquivo;
    }

    public exibirDetalhes(): void {
        console.log(
            `Produto Digital - ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(
                2
            )}, Tamanho: ${this.tamanhoArquivo}`
        );
    }
}
