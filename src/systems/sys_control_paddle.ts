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
    let transform = game.World.Transform2D[entity];
    let collide = game.World.Collide[entity];
    let draw = game.World.Draw[entity];

    move.Direction[0] = 0;
    move.Direction[1] = 0;

    const left = game.InputState.ArrowLeft;
    const right = game.InputState.ArrowRight;

    if (left && transform.Translation[0] - draw.Width / 2 > 0) {
        move.Direction[0] -= 1;
    }
    if (right && transform.Translation[0] + draw.Width / 2 < game.ViewportWidth) {
        move.Direction[0] += 1;
    }

    if (collide.Collisions.length && draw.Width > 46) {
        draw.Width -= 5;
        collide.Size[0] -= 5;
        move.Speed += 10;
    }

    normalize(move.Direction, move.Direction);
}
