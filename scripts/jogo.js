const canvas = document.querySelector('#canvas')

const ctx = canvas.getContext('2d')

canvas.width = 800
canvas.height = 400

canvas.style.background = '#3e6363'

let first_turn = true

let points = 0

const pontuacao = document.querySelector('#pontos')

let estado_jogo = 0

let result = document.querySelector('#result')

let dice_x,dice_y,dice_tamx=200,dice_tamy=200;

let dice_num_x,dice_num_y

const botao = document.querySelector('#but_throw')
botao.addEventListener('click',throw_dice)

const ball_rad = 15

function ger_num(){
    return Math.floor(Math.random()*6)+1
}

function draw_face(num){
    ctx.fillStyle = 'white'
    ctx.fillRect(dice_x,dice_y,dice_tamx,dice_tamy)
    ctx.lineWidth = 2
    ctx.strokeRect(dice_x,dice_y,dice_tamx,dice_tamy)
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

function draw1(){
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x,dice_num_y,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()
}

function draw2(){
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x-35,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x+35,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()
}

function draw3(){
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x-35,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x,dice_num_y,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x+35,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()
}

function draw4(){
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x-35,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x+35,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x-35,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x+35,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()
}

function draw5(){
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x-35,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x+35,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x-35,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x+35,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x,dice_num_y,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()
}

function draw6(){
    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x-50,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x-50,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x+50,dice_num_y-35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = 'black'
    ctx.arc(dice_num_x+50,dice_num_y+35,ball_rad,0,2*Math.PI,false)
    ctx.fill()
    ctx.closePath()
}

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
    dice_x=80,dice_y=40
    dice_num_x=180,dice_num_y=140
    draw_face(a)

    //Criar o segundo dado
    b = ger_num()
    dice_x=500,dice_y=40
    dice_num_x=600,dice_num_y=140
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