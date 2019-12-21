import {Entity, Game} from "../game.js";
import {Has} from "./com_index.js";

export interface Draw {
    xPos: number;
    yPos: number;
    Width: number;
    Height: number;
    Color: string;
}

export function draw_rect(
    xPos: number,
    yPos: number,
    Width: number,
    Height: number,
    Color: string
) {
    return (game: Game, entity: Entity) => {
        game.World.Mask[entity] |= Has.Draw;
        game.World.Draw[entity] = <Draw>{
            xPos,
            yPos,
            Width,
            Height,
            Color,
        };
    };
}
