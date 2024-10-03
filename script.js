//ESTRUTURA DE REPETIÇÃO

for (let i=0; i<10;i++){
    // console.log(i)
}

//WHILE

let f =0;
while (f <10){
    // console.log(f)
    f++;
}

//DO WHILE
let w=0;

do{
    // console.log(w);
    w++;
}
while(w5);

//FUNÇÕES

function Ola(faculdade){
    console.log(`Seja bem vindo a ${faculdade}`)
    //alert(`Seja bem vindo a ${faculdade}`)
    write(`Seja bem vindo a ${faculdade}`)
}
//EXECUTANDO A FUNÇÃO OLA PASSANDO O VALOR
Ola("fiap")

//ARROW FUNCTION

const hello=()=>(console.log("função arro function"))

hello()

//ARRAY [], OBJETO {} E METODOS ()

let jogadores = [
    {nome:"Huginho",idade:17},
    {nome:"Zezinho",idade:18},
    {nome:"Luizinho",idade:19},
]

let listarJogadores = jogadores.map(function(item){
    return item.nome;
})
comsole.log(listarJogadores)