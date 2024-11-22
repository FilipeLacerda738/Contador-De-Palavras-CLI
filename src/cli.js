import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';
import { error } from 'console';

const program = new Command();
program.version('0.0.1').option('-t, --texto <string>', 'caminho do texto a ser processado', 
    
).option('-d --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
.action((options) => {
    const { texto, destino } = options;

    if(!texto || !destino){
        console.error(chalk.red('erro: favor inserir caminho de origem e destino'));
        program.help();
        return;
    }
    const caminhoTexto = path.resolve(texto);
    const caminhoDestino = path.resolve(destino);
    try {
        processaArquivo(caminhoTexto, caminhoDestino);
        console.log(chalk.green('texto processado com sucesso'));
        
    } catch (erro) {
        console.log(chalk.red('Erro no processamento', erro));
    }
})

program.parse();

function processaArquivo(texto, destino){
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro;
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino);
        } catch(erro) {
            trataErros(erro);
        }
    });

}


async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);

   try {
        // Verifique se o diretório existe; se não, cria um
      await fs.promises.mkdir(endereco, { recursive: true });
       await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log(chalk.green(`Arquivo criado`));
    } catch (erro) {
        throw erro;
    }
}


 