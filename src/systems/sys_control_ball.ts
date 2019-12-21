import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {normalize} from "../math/vec2.js";

const QUERY = Has.Transform2D | Has.ControlBall;

export function sys_control_ball(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let move = game.World.Move[entity];
    let transform = game.World.Transform2D[entity];

    if (transform.Translation[0] > game.ViewportWidth - 1 || transform.Translation[0] < 1) {
        move.Direction[0] *= -1;
    }
    if (transform.Translation[1] > game.ViewportHeight - 1 || transform.Translation[1] < 1) {
        move.Direction[1] *= -1;
    }

    normalize(move.Direction, move.Direction);
}
