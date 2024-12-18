import * as readline from "readline-sync";


export default class Menu {


    public exibirMenu(): void {
        let opcao: number;

        while (true) {
            console.clear();
            console.log('*****************************************************');
            console.log('                                                     ');
            console.log('                  🌐 CLOUDSHOP SYSTEM                 ');
            console.log('                                                     ');
            console.log('*****************************************************');
            console.log('                                                     ');
            console.log('            1 - Listar todos os serviços             ');
            console.log('            2 - Buscar serviço pelo ID               ');
            console.log('            3 - Cadastrar novo serviço               ');
            console.log('            4 - Atualizar serviço                    ');
            console.log('            5 - Deletar serviço                      ');
            console.log('            6 - Sair                                 ');
            console.log('                                                     ');
            console.log('*****************************************************');
            console.log('                                                     ');

            console.log('Escolha uma opção:');
            opcao = readline.questionInt('');

            if (opcao === 6) {
                console.log(
                    '\nCloudShop - Obrigado por usar nosso sistema!'
                );
                this.sobre();
                console.log('');
                process.exit(0);
            }

            switch (opcao) {
                case 1:
                    console.log('\n\n🔍 Listando todos os serviços...\n\n');

                    break;
                case 2:
                    console.log('\n\n🔎 Buscando serviço pelo ID...\n\n');
           
                    break;
                case 3:
                    console.log('\n\n✏️  Cadastrando novo serviço...\n\n');
                 
                    break;
                case 4:
                    console.log('\n\n♻️  Atualizando serviço...\n\n');
                  
                    break;
                case 5:
                    console.log('\n\n🗑️  Deletando serviço...\n\n');
                 
                    break;
                default:
                    console.log('\n\n❌ Opção inválida! Tente novamente.\n\n');
                    break;
            }

            this.keyPress();
        }
    }

    private sobre(): void {
        console.log('*****************************************************');
        console.log('Projeto Desenvolvido por: Eliseu Francisco de Souza');
        console.log('Generation Brasil - generation@generation.org');
        console.log('github.com/EliseuZz');
        console.log('*****************************************************');
    }

    private keyPress(): void {
        console.log('');
        console.log('\nPressione Enter para continuar...');
        readline.prompt();
    }
}
