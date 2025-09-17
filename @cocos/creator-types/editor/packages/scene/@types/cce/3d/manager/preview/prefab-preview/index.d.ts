import { InteractivePreview } from '../Interactive-preview';
import { Scene } from 'cc';
export declare class PrefabPreview extends InteractivePreview {
    private lightComp;
    private canvasNode;
    protected is2D: boolean;
    createNodes(scene: Scene): void;
    setPrefab(uuid: string): Promise<null | undefined>;
}
//# sourceMappingURL=index.d.ts.map