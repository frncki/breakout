import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";
import {Vec2} from "../math/index.js";

const QUERY = Has.Transform2D | Has.Move;

export function sys_move(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}

function update(game: Game, entity: Entity, delta: number) {
    let direction = <Vec2>[
        game.World.Move[entity].Direction[0],
        game.World.Move[entity].Direction[1],
    ];
    let speed = game.World.Move[entity].Speed;

    let transform = game.World.Transform2D[entity];
    transform.Translation[0] += direction[0] * speed * delta;
    transform.Translation[1] += direction[1] * speed * delta;
    transform.Dirty = true;
}
