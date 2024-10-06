# Api-veiculos
 API de veiculos com o express desenvolvida no curso técnico de desenvolvimento de sistemas do senai que faz os métodos de:

Inserir

Atualizar por ID

Deletar por ID
Deletar por modelo


Selecionar todos
Selecionar por ID
Selecionar por Ano

Selecionar por cor 

# banco de dados
CREATE TABLE veiculos (
<br/>    id INT AUTO_INCREMENT PRIMARY KEY,
<br/>    marca VARCHAR(50) NOT NULL,
<br/>    modelo VARCHAR(50) NOT NULL,
<br/>    ano YEAR NOT NULL,
<br/>    proprietario VARCHAR(100) NOT NULL,
<br/>    cor VARCHAR(30) NOT NULL
<br/> );
