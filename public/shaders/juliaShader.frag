#version 300 es
precision mediump float;

uniform vec2 resolution;
uniform vec2 juliaC;
uniform float zoom;

out vec4 fragColor;

void main() {
    vec2 uv = (gl_FragCoord.xy / resolution.xy) * 2.0 - 1.0;
    uv.x *= resolution.x / resolution.y;
    uv *= zoom;
    
    vec2 z = uv;
    int maxIterations = 100;
    int n = 0;

    for (int i = 0; i < maxIterations; i++) {
        if (dot(z, z) > 4.0) break;
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + juliaC;
        n++;
    }

float colorValue = pow(float(n) / float(maxIterations), 2.0); 
    fragColor = vec4(vec3(colorValue), 1.0);
}

