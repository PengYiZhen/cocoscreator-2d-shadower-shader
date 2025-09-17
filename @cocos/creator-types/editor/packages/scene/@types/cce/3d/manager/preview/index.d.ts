import { MaterialPreview } from '../material-preview';
import { MeshPreview } from '../mesh-preview';
import { MiniPreview } from '../mini-preview';
import { ModelPreview } from '../model-preview';
import { SkeletonPreview } from '../skeleton-preview';
import { MotionPreview } from '../animation-graph-preview/motion';
import { TransitionPreview } from '../animation-graph-preview/transition';
import { PreviewBase } from './preview-base';
import { PrefabPreview } from './prefab-preview';
import { SpinePreview } from './spine-preview';
export declare class PreviewManager {
    _previewMgrMap: Map<string, PreviewBase>;
    scenePreview: import("./scene-preview").ScenePreview;
    materialPreview: MaterialPreview;
    miniPreview: MiniPreview;
    modelPreview: ModelPreview;
    meshPreview: MeshPreview;
    skeletonPreview: SkeletonPreview;
    motionPreview: MotionPreview;
    transitionPreview: TransitionPreview;
    prefabPreview: PrefabPreview;
    spinePreview: SpinePreview;
    _electronIPC: any;
    init(): void;
    private initPreview;
    queryPreviewData(previewName: string, info: any): Promise<any>;
    callPreviewFunction(previewName: string, funcName: string, ...args: any[]): Promise<any>;
    private _register;
}
declare const previewMgr: PreviewManager;
export { previewMgr };
//# sourceMappingURL=index.d.ts.map