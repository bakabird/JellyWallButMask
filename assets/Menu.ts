import { __private, _decorator, Button, Component, EventHandheld, EventHandler, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Menu')
export class Menu extends Component {
    @property(Button)
    public btn: Button;

    @property(Node)
    public hole: Node;
    @property({ type: [Node] })
    public cells: Node[] = [];

    // 0 空
    // 1 只有洞
    // 2 洞 + 1个
    // 3 洞 + 4个
    private _state: number = 0;

    start() {
        this.btn.node.on(Button.EventType.CLICK, this._click, this);
        this._state--;
        this._click(null);
    }

    private _click(button: Button) {
        this._state++;
        this._state %= 4;
        switch(this._state) {
            case 0:
                this.hole.active =false;
                this.cells.forEach($ => $.active = false);
                break;
            case 1:
                this.hole.active = true;
                this.cells.forEach($ => $.active = false);
                break;
            case 2:
                this.hole.active = true;
                this.cells.forEach($ => $.active = false);
                this.cells[0].active = true;
                break;
            case 3:
                this.hole.active = true;
                this.cells.forEach($ => $.active = true);
                break;
        }
    }
}

