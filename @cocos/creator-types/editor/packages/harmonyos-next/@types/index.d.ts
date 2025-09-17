/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';

import { IInternalBuildOptions, InternalBuildResult } from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { ITaskOption as INativeTaskOption } from '../../native/@types/index';

export type IOrientation = 'landscape' | 'portrait';

export interface ITaskOption extends INativeTaskOption {
    packages: {
        'harmonyos-next': IOptions;
    }
}

export type IAppABI = 'armeabi-v7a' | 'arm64-v8a';
export type IJsEngine = 'JSVM' | 'V8' | 'ARK';

export interface IOptions {
    packageName: string;
    orientation: {
        landscapeRight: boolean;
        landscapeLeft: boolean;
        portrait: boolean;
        upsideDown: boolean;
    },

    // apiLevel: number;
    sdkPath: string;
    ndkPath: string;
    appABIs: IAppABI[];

    renderBackEnd: {
        // vulkan: boolean;
        gles3: boolean;
        // gles2: boolean;
    };
    jsEngine: IJsEngine;
    useAotOptimization: boolean;
    //useV8: boolean;
}

export interface IBuildResult extends InternalBuildResult {
    userFrameWorks: boolean; // 是否使用用户的配置数据
}
