#iChannel0 "./player.png"

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {

   
    vec2 uv = fragCoord.xy / iResolution.xy;

    vec4 texture = texture(iChannel0, uv);

    if(texture.a < 0.3) {
        discard;
    }

    vec4 colorOne = vec4(1.0, 1.0, 0.0, 0.0);
    vec4 colorSec = vec4(0.2, 0.5, 0.2, 0.0);
    
    vec3 color =  mix(texture.rgb, colorSec.rgb, 0.0);
    // float color =  dot(texture.rgb, colorSec.rgb);

    fragColor = vec4(vec3(color), 1.0);      
} 