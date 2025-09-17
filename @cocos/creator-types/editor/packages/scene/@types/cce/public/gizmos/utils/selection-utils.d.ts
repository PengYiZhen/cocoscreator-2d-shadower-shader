import { Node } from 'cc';
/**
 * 获取最符合的节点
 *
 * 规则只对 prefab 与 ui 组件进行处理
 * 1. ui 优先与 prefab
 * 2. ui 规则
 *    UI_GROUP_COMPONENTS 这里存的是每个 group 的组件，
 *    选中的第一个节点查询最近的父节点是这些组件中的一个，然后把它排到第一位
 * 3. prefab 规则
 *    如果选中的第一个节点时 prefab，就把他的 root 放到排到第一位
 *
 * @param rayResultNodes
 * @param selectionNodeUuid
 */
export declare function getSelectNode(rayResultNodes: Node[], selectionNodeUuid: string): Node;
//# sourceMappingURL=selection-utils.d.ts.map