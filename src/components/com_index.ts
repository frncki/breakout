const enum Component {
    ControlPaddle,
    ControlBall,
    ControlBrick,
    Move,
    Draw,
    Transform2D,
    Collide,
}

export const enum Has {
    ControlPaddle = 1 << Component.ControlPaddle,
    ControlBall = 1 << Component.ControlBall,
    ControlBrick = 1 << Component.ControlBrick,
    Move = 1 << Component.Move,
    Draw = 1 << Component.Draw,
    Transform2D = 1 << Component.Transform2D,
    Collide = 1 << Component.Collide,
}
