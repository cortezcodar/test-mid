const fs = require('fs');

function contarPalavrasNoArquivo(caminhoArquivo) {
  try {
    const conteudoArquivo = fs.readFileSync(caminhoArquivo, 'utf-8');
    const palavras = conteudoArquivo
      .replace(/avaliação/g, '') // Remove todas as ocorrências da palavra "avaliação"
      .split(/\s+/)
      .filter(word => word !== ''); // Quebra o conteúdo do arquivo em palavras e remove espaços em branco

    return palavras.length;
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error.message);
    return -1;
  }
}

const caminhoDoArquivo = './src/arquivo.txt'; // Substitua pelo caminho do seu arquivo
const numeroPalavras = contarPalavrasNoArquivo(caminhoDoArquivo);

if (numeroPalavras >= 0) {
  console.log(`O arquivo "${caminhoDoArquivo}" contém ${numeroPalavras} palavra(s) (desconsiderando "avaliação" e espaços em branco).`);
}
