interface ProdutoRepository {
    listarTodos(): Produto[];
    buscarPorId(id: number): Produto;
    cadastrar(produto: Produto): void;
    atualizar(id: number, dadosAtualizados: Produto): void;
    deletar(id: number): void;
}
