import { _decorator, animation, Animation, AnimationClip, Component, Material, Node, Sprite, v3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    material: Material;
    percent: number = 0;
    percentDir: number = 1;
    blue: number = 1.0; // 蓝色通道的阈值
    index: number = 0;

    start() {
        this.init();
    }

    update(deltaTime: number) {
        
    }

    public init(): void {
        // 初始化玩家属性
        this.initProperty();
    }

    public initProperty(): void {
        this.material = this.getComponent(Sprite).material;
        
    }

}

