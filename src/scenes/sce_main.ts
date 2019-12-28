import {collide} from "../components/com_collide.js";
import {control_ball} from "../components/com_control_ball.js";
import {control_brick} from "../components/com_control_brick.js";
import {control_paddle} from "../components/com_control_paddle.js";
import {draw_rect} from "../components/com_draw.js";
import {move} from "../components/com_move.js";
import {Game} from "../game.js";
import {World} from "../world.js";

export function scene_main(game: Game) {
    game.World = new World();

    addPaddle(game);
    addBall(game);
    addBricks(game);
}

function addPaddle(game: Game) {
    const paddleXsize = Math.ceil(Math.random() * 72) + 127;
    const paddleYsize = 17;
    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - 15],
        Using: [
            control_paddle(),
            collide([paddleXsize, paddleYsize]),
            move(666, [0, 0]),
            draw_rect(paddleXsize, paddleYsize, "#bada55"),
        ], // paletka
    });
}

function addBall(game: Game) {
    let ballX = 13; //Math.random() * (game.ViewportWidth - 23);
    let ballY = game.ViewportHeight / 2;
    let angle = Math.atan((game.ViewportWidth / 2 - ballX) / ballY); //Math.random() * Math.PI;
    console.log(Math.cos(angle) + " " + Math.sin(angle));

    for (let i = 0; i < 1; i++) {
        game.Add({
            Translation: [ballX, ballY],
            Using: [
                control_ball(),
                collide([23, 23]),
                move(400, [Math.cos(angle), Math.sin(angle)]),
                draw_rect(23, 23, "#f00ba4"),
            ], // pilka
        });
    }
}

function addBricks(game: Game) {
    const xBricks = 2 * Math.ceil(Math.random() * 4) + 1; // odd number plz
    const yBricks = Math.ceil(Math.random() * 6);
    const bricksXsize = 97;
    const bricksYsize = 31;
    const offset = 5;
    for (let i = 0; i < xBricks; i++) {
        let x = game.ViewportWidth / 2 - Math.floor(xBricks / 2) * (bricksXsize + offset);
        x += i * (bricksXsize + offset);
        for (let j = 0; j < yBricks; j++) {
            let y = game.ViewportHeight / (2 * yBricks);
            y += j * (bricksYsize + offset);
            game.Add({
                Translation: [x, y],
                Using: [
                    control_brick(),
                    collide([bricksXsize, bricksYsize]),
                    move(0, [0, 0]),
                    draw_rect(bricksXsize, bricksYsize, "#fab300"),
                ], // cegielka
            });
        }
    }
}
