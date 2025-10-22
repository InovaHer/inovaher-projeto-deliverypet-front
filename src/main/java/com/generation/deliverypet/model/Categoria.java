package com.generation.deliverypet.model;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
	
	
	@NotNull(message = "O atributo data é obrigatório!")
	@FutureOrPresent(message = "A data não pode estar no passado")
    private LocalDate data_criacao;// Data da criação da categoria
	
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

	public LocalDate getData() {
		return data_criacao;
	}

	public void setData(LocalDate data) {
		this.data_criacao = data;
	}

	public List<Produto> getProduto() {
		return produto;
	}

	public void setProduto(List<Produto> produto) {
		this.produto = produto;
	}

}
	
	
