const enum Component {
    Collide,
    ControlPaddle,
    ControlBall,
    Move,
    Draw,
    Transform2D,
}

export const enum Has {
    Collide = 1 << Component.Collide,
    ControlPaddle = 1 << Component.ControlPaddle,
    ControlBall = 1 << Component.ControlBall,
    Move = 1 << Component.Move,
    Draw = 1 << Component.Draw,
    Transform2D = 1 << Component.Transform2D,
}
