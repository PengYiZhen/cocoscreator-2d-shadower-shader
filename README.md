# CocosCreator 2D 游戏精灵光影投射系统

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![CocosCreator](https://img.shields.io/badge/Cocos%20Creator-3.x%2B-green.svg)
![Platform](https://img.shields.io/badge/Platform-WebGL-orange.svg)

这是一个基于 Cocos Creator 的 2D 游戏精灵光影投射系统，可以实现精灵物体的动态光影效果，并支持调整影子的斜切、缩放、颜色和偏移等参数。

## 功能特性

- 🌓 动态生成 2D 精灵影子效果
- 🎛️ 可调节影子斜切、缩放、颜色和偏移
- 🎨 支持自定义影子颜色和透明度
- ⚡ 基于着色器的轻量级实现
- 📱 支持多种分辨率适配

## 作者

**小游码匠** - 微信公众号

![](demo.gif)

[2D游戏角色总飘在空中？一文教你手搓实时影子Shader，角色瞬间落地！](https://mp.weixin.qq.com/s/4nnDDJyHjvhjruGRzgIwug)

欢迎关注微信公众号【小游码匠】，获取更多游戏开发技巧和资源分享！

## 快速开始

### 环境要求

- Cocos Creator 3.x 或更高版本
- 支持 WebGL 的浏览器

### 安装方法

1. 克隆或下载本仓库到本地
2. 使用 Cocos Creator 打开项目文件夹
3. 在场景编辑器中查看示例效果

### 基本用法

1. 将 `ShadowEffect` 组件添加到需要产生影子的精灵节点上
2. 调整组件参数以获取理想的光影效果
3. 运行时可以通过代码动态修改影子属性

```typescript
// 获取影子组件
const shadowEffect = this.node.getComponent(ShadowEffect);

// 调整影子X方向斜切
shadowEffect.shadowSkew = 0.7;

// 调整影子Y方向压扁
shadowEffect.shadowScale = 0.4;

// 调整影子颜色和透明度
shadowEffect.shadowColor = new Color(0, 0, 0, 0.6);

// 调整影子X轴偏移
shadowEffect.shadowXOffset = 0.1;

// 调整影子Y轴偏移
shadowEffect.shadowYOffset = 0.1;
```

## 组件参数说明

| 参数 | 类型 | 说明 | 默认值 | 范围 |
|------|------|------|--------|------|
| shadowSkew | Number | X方向斜切程度 | 0.5 | [-1.0, 1.0] |
| shadowScale | Number | Y方向压扁程度 | 0.3 | [0.0, 1.0] |
| shadowColor | Color | 影子颜色和透明度 | (0, 0, 0, 0.5) | - |
| shadowXOffset | Number | X轴偏移量 | 0.0 | [-1.0, 1.0] |
| shadowYOffset | Number | Y轴偏移量 | 0.0 | [-1.0, 1.0] |

## 示例场景

项目中包含几个示例场景，展示不同设置下的光影效果：

`main` - 主要演示场景，包含多个可交互的精灵对象

## 着色器说明

本系统使用自定义着色器实现光影效果，主要参数：

```glsl
layout(set = 2, binding = 0) uniform shadow_params {
    float u_shadowSkew;      // X方向斜切
    float u_shadowScale;     // Y方向压扁
    vec4 u_shadowColor;      // 阴影颜色和透明度
    float u_shadowXOffset;   // Y轴偏移
    float u_shadowYOffset;   // Y轴偏移
};
```

## 自定义扩展

您可以扩展 `ShadowEffect` 组件来实现更复杂的光影效果：

```typescript
// 自定义动态影子效果
update(deltaTime: number) {
    // 实现随时间变化的影子效果
    this.shadowSkew = 0.5 + Math.sin(Date.now() * 0.001) * 0.2;
    this.updateShadow();
}
```

## 性能建议

- 对于移动设备，建议限制同时显示影子的对象数量
- 静态物体的影子可以烘焙为纹理以提高性能
- 使用合理的影子分辨率平衡效果和性能

## 常见问题

**Q: 影子显示不正确或位置偏移**
A: 检查精灵的锚点设置，确保锚点位置符合预期。

**Q: 性能较低**
A: 减少同时显示影子的对象数量，或降低影子纹理的分辨率。

**Q: 影子颜色不自然**
A: 调整影子的颜色和透明度参数，使其与环境更协调。

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 更新日志

### v1.0.0
- 初始版本发布
- 实现基于着色器的光影投射功能
- 支持调整斜切、缩放、颜色和偏移等参数

## 技术支持

如果您有任何问题或建议，请通过以下方式联系：
- 提交 GitHub Issue
- 关注微信公众号【小游码匠】获取更多技术支持

---

如果您觉得这个项目有帮助，请给它一个 ⭐ ！也欢迎关注我的微信公众号【小游码匠】获取更多游戏开发资源！