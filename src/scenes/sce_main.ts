import {control_ball} from "../components/com_control_ball.js";
import {control_paddle} from "../components/com_control_paddle.js";
import {draw_rect} from "../components/com_draw.js";
import {move} from "../components/com_move.js";
import {Game} from "../game.js";
import {World} from "../world.js";

export function scene_main(game: Game) {
    game.World = new World();

    game.Add({
        Translation: [game.ViewportWidth / 2, game.ViewportHeight - 20],
        Using: [control_paddle(), move(300, [0, 0]), draw_rect(83, 23, "#bada55")], // paletka
    });

    for (let i = 0; i < 2; i++) {
        game.Add({
            Translation: [
                Math.random() * (game.ViewportWidth - 23),
                Math.random() * (game.ViewportHeight - 23),
            ],
            Using: [
                control_ball(Math.random()),
                move(600, [Math.random(), Math.random()]),
                draw_rect(23, 23, "#f00ba4"),
            ], // pilka
        });
    }
}
