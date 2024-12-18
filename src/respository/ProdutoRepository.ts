import { Produto } from "../models/produto";
export interface ProdutoRepository {
    listarTodos(): Produto[];
    buscarPorId(id: number): Produto | undefined;
    cadastrar(produto: Produto): void;
    atualizar(id: number, dadosAtualizados: Produto ): void;
    deletar(id: number): void;
}
