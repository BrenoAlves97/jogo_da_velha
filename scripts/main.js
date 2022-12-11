// Seleção de elementos;
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer; //Segunda pessoa ou IA

//computar jogada
let player1 = 0;
let player2 = 0;

//adicionando evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    //quando alguem clica na caixa
    boxes[i].addEventListener('click', () => {

        let el = checkEl(player1, player2);

        //verificando se já possui x ou o
        if (boxes[i].childNodes.length == 0) {
            //clonando o elemento
            let clone = el.cloneNode(true);
            boxes[i].appendChild(clone); 
          
            //verificando se é x ou o
            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'ai-player') {
                    //jogada da maquina
                    computerPlay();
                    //incrementa automaticamente o segundo player
                    player2++;
                }
            } else {
                player2++;
            };                          
        };

        winnerCondition();
    });
}

// funcões

//evento para saber se são 2 players ou IA
for (let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click', () => {
        
        secondPlayer = buttons[i].getAttribute('id');
        
        document.querySelector('#buttons-container').style.display = 'none';

        setTimeout(function () {
            let container = document.querySelector('#container');
            container.classList.remove('hide');
        }, 500);
    });
}

//computar a vez de jogar
function checkEl(player1, player2) {
  
    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }
    return el;
};

//quem venceu?
function winnerCondition() {
 
    let b1 = document.querySelector('#block-1');
    let b2 = document.querySelector('#block-2');
    let b3 = document.querySelector('#block-3');
    let b4 = document.querySelector('#block-4');
    let b5 = document.querySelector('#block-5');
    let b6 = document.querySelector('#block-6');
    let b7 = document.querySelector('#block-7');
    let b8 = document.querySelector('#block-8');
    let b9 = document.querySelector('#block-9');


   //horizontal 
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o');
        }
    };

    //horizontal 
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x');         
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o');          
        }
    };

    //horizontal 
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o'); 
        }
    };

    //vertical 
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x')
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o'); 
        }
    };

    //vertical 

    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x')
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o'); 
        }
    };

    //vertical 

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o'); 
        }
    };

      //diagonal 

      if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o'); 
        }
    };

    //diagonal 

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declareWinner('x')
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o'); 
        }
    };

    //deu velha
    let index = 0;
    
    for (let i = 0; i < boxes.length; i++){
        if (boxes[i].childNodes[0] != undefined) {
            index++;
        }
    }
    //se o contador chegar até 9 quer dizer que não teve vencedor, não tendo, deu velha.
    if (index == 9) {
        declareWinner('Deu velha!');
    }

    //limpando os campos
    // cleanBoxes();
}

function declareWinner(winner) {
    
    let scoreboardX = document.querySelector('#scoreboard-1');
    let scoreboardO = document.querySelector('#scoreboard-2');
    let msg = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = 'O jogador 1 venceu!'
      
    } else if (winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = 'O jogador 2 venceu!'
    } else {
        msg = 'Deu velha!'
    }

    //exibir na tela   
    messageContainer.classList.remove('hide');
    messageText.innerHTML = msg;

    //esconder mensagem
    setTimeout(() => {
        messageContainer.classList.add('hide');
    }, 3000);

    //zerar jogadas
    player1 = 0;
    player2 = 0;

    //remove x e o
    let boxesToRemove = document.querySelectorAll('.box div');
    for (let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    };  
};

//executar a lógica da jogada da CPU
function computerPlay() {   
        let el = o;
        let clone = el.cloneNode(true);

        counter = 0;
        filled = 0;

        //só vou preeencher se a caixa estiver vazia
        for (let i = 0; i < boxes.length; i++) {
            let random = Math.floor(Math.random() * 5);
        
            if (boxes[i].childNodes[0] == undefined) {
                if (random <= 1) {
                    boxes[i].appendChild(clone);
                    counter++;
                    break;
                }
                //checagem de quantas estão preenchidas.
            } else {
                filled++;
            }
        }

        //função recursiva
        if (counter == 0 && filled < 9) {
            computerPlay();
        }
}