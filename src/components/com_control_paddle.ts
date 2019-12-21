import {Entity, Game} from "../game.js";
import {Vec2} from "../math/index.js";
import {Has} from "./com_index.js";

export interface ControlPaddle {
    Direction: Vec2;
}

export function control_paddle() {
    return (game: Game, entity: Entity) => {
        game.World.Mask[entity] |= Has.ControlPaddle;
        game.World.ControlPaddle[entity] = <ControlPaddle>{
            Direction: [0, 0],
        };
    };
}
