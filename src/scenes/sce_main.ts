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

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - 20],
        Using: [
            control_paddle(),
            collide([83, 23]),
            move(400, [0, 0]),
            draw_rect(83, 23, "#bada55"),
        ], // paletka
    });

    for (let i = 0; i < 1; i++) {
        game.Add({
            Translation: [Math.random() * (game.ViewportWidth - 23), game.ViewportHeight / 2],
            Using: [
                control_ball(Math.random()),
                collide([23, 23]),
                move(600, [Math.random(), Math.random()]),
                draw_rect(23, 23, "#f00ba4"),
            ], // pilka
        });
    }
    const xBricks = 6;
    const yBricks = 4;
    const x_size = 97;
    const y_size = 31;
    const offset = 5;
    for (let i = 0; i < xBricks; i++) {
        let x = game.ViewportWidth / 2 - Math.floor(xBricks / 2) * (x_size + offset);
        x += i * (x_size + offset);
        for (let j = 0; j < yBricks; j++) {
            let y = game.ViewportHeight / 5;
            y += j * (y_size + offset);
            game.Add({
                Translation: [x, y],
                Using: [
                    control_brick(),
                    collide([x_size, y_size]),
                    move(0, [0, 0]),
                    draw_rect(x_size, y_size, "#fab300"),
                ], // cegielka
            });
        }
    }
}
