import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {normalize} from "../math/vec2.js";

const QUERY = Has.Transform2D | Has.ControlPaddle;

export function sys_control_paddle(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let move = game.World.Move[entity];
    move.Direction[0] = 0;
    move.Direction[1] = 0;

    const left = game.InputState.ArrowLeft;
    const right = game.InputState.ArrowRight;
    // const up = game.InputState.ArrowUp;
    // const down = game.InputState.ArrowDown;

    if (left) move.Direction[0] -= 1;
    if (right) move.Direction[0] += 1;
    // if (up) move.Direction[1] -= 1;
    // if (down) move.Direction[1] += 1;

    normalize(move.Direction, move.Direction);
}
