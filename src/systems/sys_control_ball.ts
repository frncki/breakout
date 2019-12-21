import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {Vec2} from "../math/index.js";

const QUERY = Has.Transform2D | Has.ControlBall;

export function sys_control_ball(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let direction = <Vec2>[1, 1];
    let speed = 100;

    // const left = game.InputState.ArrowLeft;
    // const right = game.InputState.ArrowRight;
    // const up = game.InputState.ArrowUp;
    // const down = game.InputState.ArrowDown;

    // if (left) direction[0] -= 1;
    // if (right) direction[0] += 1;
    // if (up) direction[1] -= 1;
    // if (down) direction[1] += 1;

    let transform = game.World.Transform2D[entity];
    transform.Translation[0] += direction[0] * speed * delta;
    transform.Translation[1] += direction[1] * speed * delta;
    transform.Dirty = true;
}
