import {Entity, Game} from "../game.js";
import {Has} from "./com_index.js";

export interface ControlBall {
    //Direction: Vec2;
}

export function control_ball() {
    return (game: Game, entity: Entity) => {
        game.World.Mask[entity] |= Has.ControlBall;
        game.World.ControlBall[entity] = <ControlBall>{
            //Direction: [Math.cos(angle), Math.sin(angle)],
        };
    };
}
