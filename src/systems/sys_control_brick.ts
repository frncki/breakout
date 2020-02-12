import {Has} from "../components/com_index.js";
import {Entity, Game} from "../game.js";

const QUERY = Has.Transform2D | Has.ControlBrick;

export function sys_control_brick(game: Game, delta: number) {
    for (let i = 0; i < game.World.Mask.length; i++) {
        if ((game.World.Mask[i] & QUERY) == QUERY) {
            update(game, i, delta);
        }
    }
}
let acceleration = 0;
function update(game: Game, entity: Entity, delta: number) {
    let collide = game.World.Collide[entity];
    let transform = game.World.Transform2D[entity];
    let move = game.World.Move[entity];

    if (transform.Translation[1] > game.ViewportHeight) {
        game.Destroy(entity);
    }

    if (collide.Collisions.length) {
        move.Speed = 200;
        acceleration = 100;
        move.Direction = [0, 1];
        game.World.Mask[entity] &= ~Has.Collide;
        //game.Destroy(entity);
    }
    move.Speed += acceleration;
}
