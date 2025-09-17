#iChannel0 "./player.png"

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord.xy / iResolution.xy;
    
    // 获取原始纹理颜色
    vec4 textureColor = texture(iChannel0, uv);
    
    // 如果当前像素是透明的，检查周围像素寻找边缘
    if (textureColor.a < 0.3) {
        // 边缘检测参数
        float edgeThickness = 5.0; // 边缘厚度
        vec2 pixelSize = 2.0 / iResolution.xy;
        
        // 检查周围像素
        bool isEdge = false;
        for (float x = -edgeThickness; x <= edgeThickness; x++) {
            for (float y = -edgeThickness; y <= edgeThickness; y++) {
                if (x == 0.0 && y == 0.0) continue;
                
                vec2 offset = vec2(x, y) * pixelSize;
                vec4 neighbor = texture(iChannel0, uv + offset);
                
                // 如果周围有非透明像素，则当前像素是边缘
                if (neighbor.a > 0.3) {
                    isEdge = true;
                    break;
                }
            }
            if (isEdge) break;
        }
        
        // 如果是边缘，添加红色描边效果
        if (isEdge) {
            // 创建顺时针旋转效果
            float time = iTime * 3.0;
            vec2 center = vec2(0.5);
            vec2 dir = uv - center;
            float angle = atan(dir.y, dir.x);
            float dist = length(dir);
            
            // 计算旋转角度，基于时间和位置
            float rotation = sin(time * 2.0 + angle * 5.0) * .1;
            
            // 红色描边，带有动态效果
            vec3 redGlow = vec3(1.0, 0.0, 0.0) * (0.3 + 0.2 * sin(time * 4.0 + dist * 10.0));
            fragColor = vec4(redGlow, 1.0);
            return;
        } else {
            // 非边缘透明区域
            discard;
        }
    }
    
    // 非透明区域保持原色
    fragColor = textureColor;
}