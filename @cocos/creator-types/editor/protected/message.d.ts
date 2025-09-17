
import * as AssetDb from './../packages/asset-db/@types/protected/message';
import * as Builder from './../packages/builder/@types/protected/message';
import * as Engine from './../packages/engine/@types/protected/message';
import * as Preview from './../packages/preview/@types/protected/message';

declare global {
    interface EditorMessageContent {
        params: any[],
        result: any;
    }

    interface EditorMessageMap {
        [x: string]: EditorMessageContent;
    }

    interface EditorMessageMaps {
        [x: string]: EditorMessageMap;
        'asset-db': AssetDb.message;
        'builder': Builder.message;
        'engine': Engine.message;
        'preview': Preview.message;

    }
}
