varying vec2 vUv;
varying vec3 pos;
uniform float uTime;

vec2 rotate2D(vec2 value, float angle)
{
    float s = sin(angle);
    float c = cos(angle);
    mat2 m = mat2(c, s, -s, c);
    return m * value;
}

void main()
{
    vec3 newPosition = position;
    pos = position;

    // Final position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    
    // Varyings
    vUv = uv; 
} 