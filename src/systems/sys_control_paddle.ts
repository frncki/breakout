import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {Vec2} from "../math/index.js";
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
    let direction = <Vec2>[0, 0];
    let speed = 300;

    const left = game.InputState.ArrowLeft;
    const right = game.InputState.ArrowRight;
    const up = game.InputState.ArrowUp;
    const down = game.InputState.ArrowDown;

    if (left) direction[0] -= 1;
    if (right) direction[0] += 1;
    if (up) direction[1] -= 1;
    if (down) direction[1] += 1;

    normalize(direction, direction);

    let move = game.World.Move[entity];
    move.Direction[0] = direction[0];
    move.Direction[1] = direction[1];
}
