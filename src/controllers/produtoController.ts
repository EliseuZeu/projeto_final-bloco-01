import { Produto } from "../models/produto";
import { ProdutoRepository } from "../respository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    private produtos: Produto[] = [];

    listarTodos(): Produto[] {
        return this.produtos;
    }

    buscarPorId(id: number): Produto | undefined {
        return this.produtos.find(produto => produto.getId() === id);
    }

    cadastrar(produto: Produto): void {
        this.produtos.push(produto);
        console.log("\n✅ Produto cadastrado com sucesso!");
    }

    atualizar(id: number, dadosAtualizados: Produto): void {
        const indice = this.produtos.findIndex(produto => produto.getId() === id);
        if (indice !== -1) {
            // Remove o produto antigo do array
            this.produtos.splice(indice, 1);
    
            // Adiciona o produto atualizado no início da lista
            this.produtos.unshift(dadosAtualizados);
    
            console.log("\n♻️ Produto atualizado com sucesso e movido para o início da lista!");
        } else {
            console.log("\n❌ Produto não encontrado!");
        }
    }
    

    deletar(id: number): void {
        const tamanhoInicial = this.produtos.length;
        this.produtos = this.produtos.filter(produto => produto.getId() !== id);

        if (this.produtos.length < tamanhoInicial) {
            console.log("\n🗑️ Produto deletado com sucesso!");
        } else {
            console.log("\n❌ Produto não encontrado!");
        }
    }
}
