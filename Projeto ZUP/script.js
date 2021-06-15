const imagem  = document.querySelector('img');
const imagem2  = document.querySelector('.img2');
const imagem3  = document.querySelector('.img3');
const imagem4  = document.querySelector('.img4');
const nome1 = document.querySelector('.nome1');
const nome2 = document.querySelector('.nome2');
const nome3 = document.querySelector('.nome3');
const nome4 = document.querySelector('.nome4');


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 655);
    
}
gerarValorAleatorio2 = () => {
    return Math.floor(Math.random() * 655);
    
}
gerarValorAleatorio3 = () => {
    return Math.floor(Math.random() * 655);
    
}
gerarValorAleatorio4 = () => {
    return Math.floor(Math.random() * 655);
    
}
pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAleatorio}` , {
        method:'GET' ,
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        
        imagem.alt = data.name;
        nome1.innerHTML = data.name;

        
    });
    
    
}
pegarPersonagem2 = () => {
    let numeroAleatorio2 = gerarValorAleatorio2();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAleatorio2}` , {
        method:'GET' ,
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        
        imagem2.alt = data.name;
        nome2.innerHTML = data.name;
        
    });
    
    
}
pegarPersonagem3 = () => {
    let numeroAleatorio3 = gerarValorAleatorio3();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAleatorio3}` , {
        method:'GET' ,
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        
        imagem3.alt = data.name;
        nome3.innerHTML = data.name;
        
    });
    
    
}

pegarPersonagem4 = () => {
    let numeroAleatorio4 = gerarValorAleatorio4();
    return fetch (`https://rickandmortyapi.com/api/character/${numeroAleatorio4}` , {
        method:'GET' ,
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        
        imagem4.alt = data.name;
        nome4.innerHTML = data.name;
        
    });
    
    
}


