import {Entity, Game} from "../game.js";
import {Vec2} from "../math";
import {Has} from "./com_index.js";

export interface Move {
    Direction: Vec2;
    Speed: number;
}

export function move(Speed: number, Direction: Vec2) {
    return (game: Game, entity: Entity) => {
        game.World.Mask[entity] |= Has.Move;
        game.World.Move[entity] = <Move>{
            Direction,
            Speed,
        };
    };
}
