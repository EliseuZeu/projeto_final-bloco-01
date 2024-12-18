import { ProdutoController } from "./src/controllers/produtoController";
import { produtoDigital } from "./src/models/produtoDigital";
import readlinesync = require("readline-sync");

export class CloudShopMenu {
    private controller: ProdutoController = new ProdutoController();

    public exibirMenu(): void {
        let opcao: number;

        while (true) {
            console.clear();
            console.log("*****************************************************");
            console.log("                                                     ");
            console.log("                  🌐 CLOUDSHOP SYSTEM                 ");
            console.log("                                                     ");
            console.log("*****************************************************");
            console.log("                                                     ");
            console.log("            1 - Listar todos os serviços             ");
            console.log("            2 - Buscar serviço pelo ID               ");
            console.log("            3 - Cadastrar novo serviço               ");
            console.log("            4 - Atualizar serviço                    ");
            console.log("            5 - Deletar serviço                      ");
            console.log("            6 - Sair                                 ");
            console.log("                                                     ");
            console.log("*****************************************************");

            console.log("Escolha uma opção:");
            opcao = readlinesync.questionInt("");

            if (opcao === 6) {
                console.log("\nCloudShop - Obrigado por usar nosso sistema!");
                this.sobre();
                process.exit(0);
            }

            switch (opcao) {
                case 1:
                    this.listarTodos();
                    break;
                case 2:
                    this.buscarPorId();
                    break;
                case 3:
                    this.cadastrarProduto();
                    break;
                case 4:
                    this.atualizarProduto();
                    break;
                case 5:
                    this.deletarProduto();
                    break;
                default:
                    console.log("\n❌ Opção inválida! Tente novamente.\n");
                    break;
            }

            this.keyPress();
        }
    }

    // Implementação do metodos - utilizei eles fora dos switc por que achei mais bonito e facil de modificar quando  precisar.

    private listarTodos(): void {
        console.log("\n🔍 Listando todos os serviços...\n");
        const produtos = this.controller.listarTodos();
        if (produtos.length === 0) {
            console.log("⚠️ Nenhum produto cadastrado.");
        } else {
            produtos.forEach((produto) => produto.exibirDetalhes());
        }
    }

    private buscarPorId(): void {
        const id = readlinesync.questionInt("\n🔎 Digite o ID do produto: ");
        const produto = this.controller.buscarPorId(id);
        if (produto) {
            produto.exibirDetalhes();
        } else {
            console.log("\n❌ Produto não encontrado.");
        }
    }

    private cadastrarProduto(): void {
        console.log("\n✏️ Cadastro de novo produto...");
        const id = readlinesync.questionInt("Digite o ID do produto: ");

        // Verifica se o ID já existe
        if (this.controller.buscarPorId(id)) {
            console.log("\n❌ ID já existe! Tente novamente com outro ID.");
            return;
        }

        const nome = readlinesync.question("Digite o nome do produto: ");
        let preco: number;
        do {
            preco = readlinesync.questionFloat("Digite o preço do produto: ");
            if (preco <= 0) console.log("⚠️ O preço deve ser maior que zero!");
        } while (preco <= 0);

        let tamanhoArquivo: string;
        do {
            tamanhoArquivo = readlinesync.question("Digite o tamanho do arquivo (Ex: 1GB): ");
            
            // Validação sem regex ou endsWith
            const unidade = tamanhoArquivo.substring(tamanhoArquivo.length - 2);
            const numero = tamanhoArquivo.substring(0, tamanhoArquivo.length - 2);

            if ((unidade === "GB" || unidade === "MB") && !isNaN(Number(numero)) && Number(numero) > 0) {
                break;
            } else {
                console.log("⚠️ Formato inválido! Use algo como '1GB' ou '500MB'.");
            }
        } while (true);

        const produto = new produtoDigital(id, nome, preco, tamanhoArquivo);
        this.controller.cadastrar(produto);
    }

    private atualizarProduto(): void {
        const id = readlinesync.questionInt("\n♻️ Digite o ID do produto que deseja atualizar: ");
        const produtoExistente = this.controller.buscarPorId(id);

        if (produtoExistente) {
            const nome = readlinesync.question("Digite o novo nome do produto: ");
            let preco: number;
            do {
                preco = readlinesync.questionFloat("Digite o novo preço do produto: ");
                if (preco <= 0) console.log("⚠️ O preço deve ser maior que zero!");
            } while (preco <= 0);

            let tamanhoArquivo: string;
            do {
                tamanhoArquivo = readlinesync.question("Digite o novo tamanho do arquivo (Ex: 1GB): ");
                
                // Validação sem regex ou endsWith
                const unidade = tamanhoArquivo.substring(tamanhoArquivo.length - 2);
                const numero = tamanhoArquivo.substring(0, tamanhoArquivo.length - 2);

                if ((unidade === "GB" || unidade === "MB") && !isNaN(Number(numero)) && Number(numero) > 0) {
                    break;
                } else {
                    console.log("⚠️ Formato inválido! Use algo como '1GB' ou '500MB'.");
                }
            } while (true);

            const produtoAtualizado = new produtoDigital(id, nome, preco, tamanhoArquivo);
            this.controller.atualizar(id, produtoAtualizado);
        } else {
            console.log("\n❌ Produto não encontrado.");
        }
    }


    private deletarProduto(): void {
        const id = readlinesync.questionInt("\n🗑️ Digite o ID do produto que deseja deletar: ");
        this.controller.deletar(id);
    }

    private sobre(): void {
        console.log("*****************************************************");
        console.log("Projeto Desenvolvido por: Eliseu Francisco de Souza");
        console.log("Generation Brasil - generation@generation.org");
        console.log("github.com/EliseuZz");
        console.log("*****************************************************");
    }

    private keyPress(): void {
        console.log("");
        console.log("\nPressione Enter para continuar...");
        readlinesync.prompt();
    }
}

// Função principal que inicializa o menu
export function main() {
    const menu = new CloudShopMenu();
    menu.exibirMenu();
}

// Chamada da função principal
main();
