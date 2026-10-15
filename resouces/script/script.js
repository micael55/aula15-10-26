
let users = ["Pedro","Ana","Joana","Diego","Davi Messias","Cristiano"];

let searchUser = propt("Digite o nome do usuario que deseja");

// Lembrando que, meu usuário adm não pode mandar em branco a busca. chamamos isso de tratativa de erros.

if(searchUser === ""){
    console.log("não pode enviar em branco");
}
else{
    //Retorna usuário que for encontrado
    let user = user.filter(user =>
        user.tolowCase().incluides(searchUser.toLowerCase().trim())
    );
    //Devemos tratar também caso a busca não retorne nenhum resultado


    if(user.length === 0){
        i// Usuario não encontrado
        console .log("User not fund");
    }
    else{
        console.log("usuario encontrado:" .concat(user));
        //bucar indice du usuario
        let index = users.index0f(user);
        console.log(index)

        users[index] = "Ana Gabriella";


        // users.forEach(element => {
        //     //read
        //     console.log(element)
        
        // });
    }
};