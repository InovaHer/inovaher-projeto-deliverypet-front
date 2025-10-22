package com.generation.deliverypet.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table (name="tb_categorias")
public class Categoria{
	
	@Id //Primary key (id)
	@GeneratedValue(strategy = GenerationType.IDENTITY)//auto_increment
	private Long id;//Id da categoria

	@Column(length = 255)
    @NotBlank(message = "O atributo nome é obrigatório!")
    @Size(min = 2, message = "O atributo nome deve conter no mínimo 2 caracteres")
    private String nome;//Nome da categoria
	
	@Column(length = 255)
    @NotBlank(message = "O atributo descrição é obrigatório!")
    @Size(min = 8, message = "O atributo descrição deve conter no mínimo 8 caracteres")
	private String descricao;//Descrição da categoria
	
	
	@Column(name = "data_criacao", updatable = false)
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataCriacao;

	//Relacionamento com a tabela Produto
	@OneToMany(fetch = FetchType.LAZY,mappedBy ="categoria",cascade=CascadeType.REMOVE)
	@JsonIgnoreProperties (value = "categoria",allowSetters=true)
	private List<Produto> produto;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	//Verificando se não atualização, uma fez o atributo criado não pode ser modificado
	public void setDataCriacao(LocalDate data_criacao) {
	    if (this.dataCriacao != null) {
	        throw new UnsupportedOperationException(
	            "❌ O campo 'dataCriacao' não pode ser alterado após a criação do registro."
	        );
	    }
	    this.dataCriacao = LocalDate.now();
	}

	public List<Produto> getProduto() {
		return produto;
	}

	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}

}
	
	
