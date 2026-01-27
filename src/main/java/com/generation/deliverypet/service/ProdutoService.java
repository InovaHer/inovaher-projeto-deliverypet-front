package com.generation.deliverypet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.deliverypet.model.Produto;
import com.generation.deliverypet.repository.ProdutoRepository;

@Service
public class ProdutoService {
	 @Autowired
	    private ProdutoRepository produtoRepository;

	    public List<Produto> recomendarProdutosSaudaveis(String tipoPet, Double peso, Integer idade) {

	        // Define faixa etária aproximada
	        String faixaEtaria;
	        if (idade <= 1) faixaEtaria = "Filhote";
	        else if (idade <= 7) faixaEtaria = "Adulto";
	        else faixaEtaria = "Sênior";

	        // Busca produtos compatíveis
	        List<Produto> produtos = produtoRepository.findAllByTipoPetIgnoreCaseAndFaixaEtariaIgnoreCase(tipoPet, faixaEtaria);

	        // Exemplo simples: recomenda produtos abaixo de determinado preço para pets leves
	        if (peso < 10) {
	            return produtos.stream()
	                    .filter(p -> p.getPreco() < 100.0)
	                    .toList();
	        }

	        return produtos;
	    }
}
