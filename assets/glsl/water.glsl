#iChannel0 "./water.jpg"
#iChannel1 "./water.jpg"

const float uFreqY = 20.;
const float uFreqX = 10.;
const float uSpeed = 5.;
const float uAmplitude = 0.005;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / iResolution.xy;  
    vec2 uvs = vec2(.1) * uv;
   
    // vec4 textures = texture(iChannel0, uv);
    // fragColor = texture(iChannel0, uvs + vec2(sin(uFreqY*uv.y * uFreqX*uv.x + uSpeed*iTime) * uAmplitude));
    fragColor = texture(iChannel0, uvs + vec2(sin(uFreqY*uv.y * uFreqX*uv.x + uSpeed*iTime) * uAmplitude));
}
