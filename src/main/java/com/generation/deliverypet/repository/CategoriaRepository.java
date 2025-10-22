package com.generation.deliverypet.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.deliverypet.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
	
	//Busca por descricao da categoria
	public List<Categoria> findAllByDescricaoContainingIgnoreCase(String descricao);
	

	// Busca por período a criação da categoria
    public List<Categoria> findAllByDataCriacaoBetween(LocalDateTime dataInicio, LocalDateTime dataFim);
	
}
