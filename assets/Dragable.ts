import { _decorator, Component, EventTouch, Node, NodeEventType, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dragable')
export class Dragable extends Component {
    private _originPosition: Vec3;
    start() {
        this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }
    private _onTouchEnd(event: EventTouch) {
        this.node.position = this._originPosition;
    }
    private _onTouchMove(event: EventTouch) {
        var uidelta = event.getUIDelta();
        this.node.position = this.node.position.clone().add3f(uidelta.x, uidelta.y, 0);
    }

    private _onTouchStart() {
        this._originPosition = this.node.position.clone();
    }

    update(deltaTime: number) {
        
    }
}

