import {Collide} from "./components/com_collide";
import {ControlBall} from "./components/com_control_ball";
import {ControlPaddle} from "./components/com_control_paddle";
import {Draw} from "./components/com_draw";
import {Move} from "./components/com_move";
import {Transform2D} from "./components/com_transform2d";

export class World {
    public Mask: Array<number> = [];
    public Move: Array<Move> = [];
    public ControlBall: Array<ControlBall> = [];
    public ControlPaddle: Array<ControlPaddle> = [];
    public Draw: Array<Draw> = [];
    public Transform2D: Array<Transform2D> = [];
    public Collide: Array<Collide> = [];
}
