import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('KeepSameWorldPosition')
export class KeepSameWorldPosition extends Component {
    @property(Node)
    public target: Node;

    start() {

    }

    update(deltaTime: number) {
        this.node.worldPosition = this.target.worldPosition;
    }
}

