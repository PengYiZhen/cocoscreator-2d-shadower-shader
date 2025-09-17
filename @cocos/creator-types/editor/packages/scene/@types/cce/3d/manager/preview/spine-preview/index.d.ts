import { InteractivePreview } from '../Interactive-preview';
import { Scene } from 'cc';
interface ISpineData {
    loop: boolean;
    skin: {
        list: Record<string, string | number>;
        index: number;
    };
    animation: {
        list: Record<string, string | number>;
        index: number;
        durations: Array<number>;
    };
}
export declare class SpinePreview extends InteractivePreview {
    private lightComp;
    private skeletonComp;
    private _animUpdateInterval;
    private _fps;
    private spineData;
    private currentAnimationIndex;
    createNodes(scene: Scene): void;
    setSpine(uuid: string): Promise<ISpineData | null>;
    setSkinIndex(idx: number): void;
    play(idx: number): void;
    pause(): void;
    stop(): void;
    setLoop(loop: boolean): void;
    private clearUpdateListener;
    private addUpdateListener;
    private update;
}
export {};
//# sourceMappingURL=index.d.ts.map