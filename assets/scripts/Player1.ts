import { _decorator, animation, Animation, AnimationClip, Component, Material, Node, Sprite, v3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    material: Material;
    percent: number = 0;
    percentDir: number = 1;
    blue: number = 1.0; // 蓝色通道的阈值
    ss: number = null;
    ySpeed: number = .2;

    start() {
        this.init();
    }

    update(deltaTime: number) {
        // this.clearTargetColor(deltaTime);
        this.node.setWorldPosition(this.node.worldPosition.add(v3(.1, this.ySpeed, 0)))
        // this.shadowerFlowSprite();
    }

    public init(): void {
        // 初始化玩家属性
        this.initProperty();
    }

    public initProperty(): void {
        this.material = this.getComponent(Sprite).material;
        this.ss = this.material.getProperty('u_shadowSkew') as number;
        const anim = this.getComponent(Animation);
        // const state = anim.getState("pao");
        // state.speed = .5;
        anim.clips[0].wrapMode = AnimationClip.WrapMode.Loop;
        anim.play("pao");



        setTimeout(() => {
            console.log(this.material.getProperty("u_shadowSkew"))
            console.log(this.ss)
        })
    }
    /**
     * @影子跟着Sprite
     */
    public shadowerFlowSprite(): void {
        const wdps = this.node.position;
        const y = this.material.getProperty("u_shadowXOffset") as any;
        const x = this.material.getProperty("u_shadowXOffset") as any;
        if (wdps.y > 0) {
            this.material.setProperty("u_shadowXOffset", -wdps.y / 1000)
            this.material.setProperty("u_shadowYOffset",  0.15 + wdps.y / 650)
        }else if(wdps.y < 0) {
            this.material.setProperty("u_shadowXOffset", -wdps.y /  1000)
            this.material.setProperty("u_shadowYOffset",  0.15 + wdps.y /  650)
        }
    }
    /**
     * @颜色混淆
     * @param deltaTime 
     */
    public colorMix(deltaTime: number): void {
        if (this.material) {
            this.percent += deltaTime * .5 * this.percentDir;
            if (this.percent >= 1) {
                this.percent = 1;
                this.percentDir = -1;
            } else if (this.percent <= 0) {
                this.percent = 0;
                this.percentDir = 1;
            }
            this.material.setProperty('percent', this.percent);
        }
    }
    /**
     * @指定颜色去除
     * @param deltaTime 
     */
    public clearTargetColor(deltaTime: number): void {
        if (this.material) {
            this.percent += deltaTime * .5 * this.percentDir;
            if (this.percent >= 1) {
                this.percent = 1;
                this.percentDir = -1;
            } else if (this.percent <= 0) {
                this.percent = 0;
                this.percentDir = 1;
            }
            this.material.setProperty('blue', this.percent);
        }
    }

    
}

