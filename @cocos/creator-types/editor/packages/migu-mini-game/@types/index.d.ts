/// <reference path='../../../@types/index'/>
export * from '@cocos/creator-types/editor/packages/builder/@types/protected';
import { IInternalBuildOptions } from '@cocos/creator-types/editor/packages/builder/@types/protected';

export type IOrientation = 'landscape' | 'portrait';

export interface IOptions {
    package: string;
    icon: string;
    versionName: string;
    versionCode: string;
    minPlatformVersion: string;
    deviceOrientation: IOrientation;
    useDebugKey: boolean;
    logLevel: string;
    separateEngine: boolean;
    appid: string,
    appkey: string,

    subpackages?: { name: string, root: string }[];
    wasmSubpackage: boolean;
}

export interface ITaskOption extends IInternalBuildOptions {
    packages: {
        'migu-mini-game': IOptions;
    };
}