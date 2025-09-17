import { ModuleRenderConfig, IFeatureItem, BaseItem, CategoryInfo } from '@cocos/creator-types/engine/features';
import { type } from 'os';

export type IModuleItem = IFeatureItem | BaseItem;

export type IModules = Record<string, IModuleItem>;
export interface IDisplayModuleItem extends IModuleItem {
    _value: boolean;
    _option?: string;
    options?: Record<string, IDisplayModuleItem>;
}

export type IFlags = Record<string, boolean | number>;

export interface IDisplayModuleCache {
    _value: boolean;
    _option?: string; // 保存下拉选项的值
    _flags?: Record<string, IFlags>; // 保存下拉选项的值的联动开关
}

export interface CategoryDetail extends CategoryInfo {
    modules?: IModules;
}

export interface IModuleConfig {
    moduleTreeDump: {
        default: IModules;
        categories : Record<string, CategoryDetail>;
    },
    nativeCodeModules: string[];
    moduleDependMap: Record<string, string[]>;
    moduleDependedMap: Record<string, string[]>;
    features: IModules,
}
