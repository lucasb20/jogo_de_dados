let ctx = document.querySelector('canvas#canvas').getContext('2d')

let first_turn = true

let points = 0

let pontuacao = document.querySelector('span#pontos')

let estado_jogo = 0

let result = document.querySelector('span#result')

let botao = document.querySelector('button#but_throw')
botao.addEventListener('click',throw_dice)

function ger_num(){
    return Math.floor(Math.random()*6)+1
}

function draw_face(num){
    switch(num){
        case 1:
            draw1()
            break;
        case 2:
            draw2()
            break;
        case 3:
            draw3()
            break;
        case 4:
            draw4()
            break;
        case 5:
            draw5()
            break;
        case 6:
            draw6()
            break;
    }
}

function draw1(){}

function draw2(){}

function draw3(){}

function draw4(){}

function draw5(){}

function draw6(){}

function show_points(){
    pontuacao.innerHTML = `${points}.`
}

function reset_game(state){
    if(state == 1){
        result.innerHTML = 'Você venceu.'
        points = 0
        estado_jogo = 0
        first_turn = true
    }
    else if(state == -1){
        result.innerHTML = 'Você perdeu.'
        points = 0
        estado_jogo = 0
        first_turn = true
    }
    else{
        result.innerHTML = '-'
    }
}

function throw_dice(){
    let sum,a,b

    //Criar o primeiro dado
    a = ger_num()
    draw_face(a)

    //Criar o segundo dado
    b = ger_num()
    draw_face(b)

    sum = a + b

    if(first_turn){
        switch(sum){
            case 2:
                estado_jogo = -1
                break
            case 3:
                estado_jogo = -1
                break
            case 7:
                estado_jogo = 1
                break
            case 11:
                estado_jogo = 1
                break
            case 12:
                estado_jogo = -1
                break
            default:
                estado_jogo = 0
                points+=sum
                break
        }
        first_turn = false
        reset_game(estado_jogo)
    }
    else{
        switch(sum){
            case points:
                estado_jogo = 1
                break
            case 7:
                estado_jogo = -1
                break
        }
        reset_game(estado_jogo)
    }
    show_points()
}