/*!
 * @ko-yelie/kgl v0.2.3
 * https://github.com/ko-yelie/kgl#readme
 *
 * @license
 * Copyright (c) 2019 Ko.Yelie
 * Released under the MIT License.
 *
 * Dependencies
 * https://www.npmjs.com/package/glsl-fast-gaussian-blur
 * https://www.npmjs.com/package/glsl-random
 */
var Kgl = function() {
    "use strict";
    var e = new function() {
            this.create = function() {
                return new Float32Array(16)
            }, this.identity = function(e) {
                return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
            }, this.multiply = function(e, t, r) {
                var i = e[0],
                    a = e[1],
                    o = e[2],
                    n = e[3],
                    s = e[4],
                    u = e[5],
                    c = e[6],
                    f = e[7],
                    h = e[8],
                    l = e[9],
                    d = e[10],
                    m = e[11],
                    v = e[12],
                    E = e[13],
                    p = e[14],
                    g = e[15],
                    b = t[0],
                    R = t[1],
                    T = t[2],
                    y = t[3],
                    _ = t[4],
                    F = t[5],
                    A = t[6],
                    x = t[7],
                    w = t[8],
                    D = t[9],
                    C = t[10],
                    U = t[11],
                    B = t[12],
                    S = t[13],
                    I = t[14],
                    L = t[15];
                return r[0] = b * i + R * s + T * h + y * v, r[1] = b * a + R * u + T * l + y * E, r[2] = b * o + R * c + T * d + y * p, r[3] = b * n + R * f + T * m + y * g, r[4] = _ * i + F * s + A * h + x * v, r[5] = _ * a + F * u + A * l + x * E, r[6] = _ * o + F * c + A * d + x * p, r[7] = _ * n + F * f + A * m + x * g, r[8] = w * i + D * s + C * h + U * v, r[9] = w * a + D * u + C * l + U * E, r[10] = w * o + D * c + C * d + U * p, r[11] = w * n + D * f + C * m + U * g, r[12] = B * i + S * s + I * h + L * v, r[13] = B * a + S * u + I * l + L * E, r[14] = B * o + S * c + I * d + L * p, r[15] = B * n + S * f + I * m + L * g, r
            }, this.scale = function(e, t, r) {
                return r[0] = e[0] * t[0], r[1] = e[1] * t[0], r[2] = e[2] * t[0], r[3] = e[3] * t[0], r[4] = e[4] * t[1], r[5] = e[5] * t[1], r[6] = e[6] * t[1], r[7] = e[7] * t[1], r[8] = e[8] * t[2], r[9] = e[9] * t[2], r[10] = e[10] * t[2], r[11] = e[11] * t[2], r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15], r
            }, this.translate = function(e, t, r) {
                return r[0] = e[0], r[1] = e[1], r[2] = e[2], r[3] = e[3], r[4] = e[4], r[5] = e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r[9] = e[9], r[10] = e[10], r[11] = e[11], r[12] = e[0] * t[0] + e[4] * t[1] + e[8] * t[2] + e[12], r[13] = e[1] * t[0] + e[5] * t[1] + e[9] * t[2] + e[13], r[14] = e[2] * t[0] + e[6] * t[1] + e[10] * t[2] + e[14], r[15] = e[3] * t[0] + e[7] * t[1] + e[11] * t[2] + e[15], r
            }, this.rotate = function(e, t, r, i) {
                var a = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
                if (!a) return null;
                var o = r[0],
                    n = r[1],
                    s = r[2];
                1 != a && (o *= a = 1 / a, n *= a, s *= a);
                var u = Math.sin(t),
                    c = Math.cos(t),
                    f = 1 - c,
                    h = e[0],
                    l = e[1],
                    d = e[2],
                    m = e[3],
                    v = e[4],
                    E = e[5],
                    p = e[6],
                    g = e[7],
                    b = e[8],
                    R = e[9],
                    T = e[10],
                    y = e[11],
                    _ = o * o * f + c,
                    F = n * o * f + s * u,
                    A = s * o * f - n * u,
                    x = o * n * f - s * u,
                    w = n * n * f + c,
                    D = s * n * f + o * u,
                    C = o * s * f + n * u,
                    U = n * s * f - o * u,
                    B = s * s * f + c;
                return t ? e != i && (i[12] = e[12], i[13] = e[13], i[14] = e[14], i[15] = e[15]) : i = e, i[0] = h * _ + v * F + b * A, i[1] = l * _ + E * F + R * A, i[2] = d * _ + p * F + T * A, i[3] = m * _ + g * F + y * A, i[4] = h * x + v * w + b * D, i[5] = l * x + E * w + R * D, i[6] = d * x + p * w + T * D, i[7] = m * x + g * w + y * D, i[8] = h * C + v * U + b * B, i[9] = l * C + E * U + R * B, i[10] = d * C + p * U + T * B, i[11] = m * C + g * U + y * B, i
            }, this.lookAt = function(e, t, r, i) {
                var a, o, n, s, u, c, f, h, l, d, m = e[0],
                    v = e[1],
                    E = e[2],
                    p = r[0],
                    g = r[1],
                    b = r[2],
                    R = t[0],
                    T = t[1],
                    y = t[2];
                return m == R && v == T && E == y ? this.identity(i) : (f = m - t[0], h = v - t[1], l = E - t[2], a = g * (l *= d = 1 / Math.sqrt(f * f + h * h + l * l)) - b * (h *= d), o = b * (f *= d) - p * l, n = p * h - g * f, (d = Math.sqrt(a * a + o * o + n * n)) ? (a *= d = 1 / d, o *= d, n *= d) : (a = 0, o = 0, n = 0), s = h * n - l * o, u = l * a - f * n, c = f * o - h * a, (d = Math.sqrt(s * s + u * u + c * c)) ? (s *= d = 1 / d, u *= d, c *= d) : (s = 0, u = 0, c = 0), i[0] = a, i[1] = s, i[2] = f, i[3] = 0, i[4] = o, i[5] = u, i[6] = h, i[7] = 0, i[8] = n, i[9] = c, i[10] = l, i[11] = 0, i[12] = -(a * m + o * v + n * E), i[13] = -(s * m + u * v + c * E), i[14] = -(f * m + h * v + l * E), i[15] = 1, i)
            }, this.perspective = function(e, t, r, i, a) {
                var o = r * Math.tan(e * Math.PI / 360),
                    n = o * t * 2,
                    s = 2 * o,
                    u = i - r;
                return a[0] = 2 * r / n, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * r / s, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = -(i + r) / u, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = -i * r * 2 / u, a[15] = 0, a
            }, this.ortho = function(e, t, r, i, a, o, n) {
                var s = t - e,
                    u = r - i,
                    c = o - a;
                return n[0] = 2 / s, n[1] = 0, n[2] = 0, n[3] = 0, n[4] = 0, n[5] = 2 / u, n[6] = 0, n[7] = 0, n[8] = 0, n[9] = 0, n[10] = -2 / c, n[11] = 0, n[12] = -(e + t) / s, n[13] = -(r + i) / u, n[14] = -(o + a) / c, n[15] = 1, n
            }, this.transpose = function(e, t) {
                return t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15], t
            }, this.inverse = function(e, t) {
                var r = e[0],
                    i = e[1],
                    a = e[2],
                    o = e[3],
                    n = e[4],
                    s = e[5],
                    u = e[6],
                    c = e[7],
                    f = e[8],
                    h = e[9],
                    l = e[10],
                    d = e[11],
                    m = e[12],
                    v = e[13],
                    E = e[14],
                    p = e[15],
                    g = r * s - i * n,
                    b = r * u - a * n,
                    R = r * c - o * n,
                    T = i * u - a * s,
                    y = i * c - o * s,
                    _ = a * c - o * u,
                    F = f * v - h * m,
                    A = f * E - l * m,
                    x = f * p - d * m,
                    w = h * E - l * v,
                    D = h * p - d * v,
                    C = l * p - d * E,
                    U = 1 / (g * C - b * D + R * w + T * x - y * A + _ * F);
                return t[0] = (s * C - u * D + c * w) * U, t[1] = (-i * C + a * D - o * w) * U, t[2] = (v * _ - E * y + p * T) * U, t[3] = (-h * _ + l * y - d * T) * U, t[4] = (-n * C + u * x - c * A) * U, t[5] = (r * C - a * x + o * A) * U, t[6] = (-m * _ + E * R - p * b) * U, t[7] = (f * _ - l * R + d * b) * U, t[8] = (n * D - s * x + c * F) * U, t[9] = (-r * D + i * x - o * F) * U, t[10] = (m * y - v * R + p * g) * U, t[11] = (-f * y + h * R - d * g) * U, t[12] = (-n * w + s * A - u * F) * U, t[13] = (r * w - i * A + a * F) * U, t[14] = (-m * T + v * b - E * g) * U, t[15] = (f * T - h * b + l * g) * U, t
            }
        },
        t = {
            position: {
                value: [-1, 1, -1, -1, 1, 1, 1, -1],
                size: 2
            }
        },
        r = function(e, t) {
            this.attributes = {}, this.uniforms = {}, this.textureIndexes = {};
            var r = e.gl;
            this.webgl = e;
            var i = t.vertexShaderId,
                a = t.vertexShader;
            void 0 === a && (a = i ? document.getElementById(i).textContent : "attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}");
            var o = t.fragmentShaderId,
                n = t.fragmentShader;
            void 0 === n && (n = document.getElementById(o).textContent);
            var s = t.attributes,
                u = t.instancedAttributes,
                c = t.uniforms,
                f = t.mode,
                h = t.drawType;
            void 0 === h && (h = "STATIC_DRAW");
            var l = t.isTransparent;
            void 0 === l && (l = !1);
            var d = t.isAdditive;
            void 0 === d && (d = !1);
            var m = t.isFloats;
            void 0 === m && (m = !1);
            var v = t.isCulling;
            void 0 === v && (v = !0);
            var E = t.isDepth;
            void 0 === E && (E = !1);
            var p = t.clearedColor,
                g = !m,
                b = t.hasResolution;
            void 0 === b && (b = g);
            var R = t.hasCamera;
            void 0 === R && (R = g);
            var T = t.hasLight;
            void 0 === T && (T = g);
            var y = t.isClear;
            void 0 === y && (y = g);
            var _ = !(t.vertexShaderId || t.vertexShader);
            if (this.mode = f, this.glMode = r[f || "TRIANGLE_STRIP"], this.drawType = h, this.isTransparent = l, this.isAdditive = d, this.hasResolution = b, this.hasCamera = R, this.hasLight = T, this.isClear = y, this.isCulling = v, this.isDepth = E, this.isInstanced = u, this.clearedColor = p || [0, 0, 0, 0], this.createProgram(a, n), this.use(), _) this.createWholeAttribute();
            else if (s && (this.createAttribute(s), this.isInstanced)) {
                if (this.instancedArraysExt = r.getExtension("ANGLE_instanced_arrays"), null == this.instancedArraysExt) return void alert("ANGLE_instanced_arrays not supported");
                this.createAttribute(u, !0)
            }
            c && this.createUniform(c)
        };
    r.prototype.createProgram = function(e, t) {
        var r = this.webgl.gl,
            i = r.createProgram();
        r.attachShader(i, this.createShader("VERTEX_SHADER", e)), r.attachShader(i, this.createShader("FRAGMENT_SHADER", t)), r.linkProgram(i), r.getProgramParameter(i, r.LINK_STATUS) ? i ? this.program = i : console.error('Failed to create program "' + key + '".') : console.error(r.getProgramInfoLog(i))
    }, r.prototype.createShader = function(e, t) {
        var r = this.webgl.gl,
            i = r.createShader(r[e]);
        if (r.shaderSource(i, t), r.compileShader(i), r.getShaderParameter(i, r.COMPILE_STATUS)) return i;
        console.error(r.getShaderInfoLog(i))
    }, r.prototype.createAttribute = function(e, t) {
        var r = this;
        Object.keys(e).forEach(function(i) {
            var a = e[i],
                o = a.value,
                n = a.size,
                s = a.isIndices;
            r.addAttribute(i, o, n, s, t)
        })
    }, r.prototype.addAttribute = function(e, t, r, i, a) {
        var o = this.webgl.gl,
            n = o.getAttribLocation(this.program, e),
            s = this.attributes[e] = {
                location: n,
                size: r,
                data: t,
                isInstanced: a
            };
        if (i) {
            var u = o.createBuffer();
            o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, u), o.bufferData(o.ELEMENT_ARRAY_BUFFER, new Int16Array(t), o[this.drawType]), s.ibo = u, this.indicesCount = this.indicesCount || t.length, this.glMode = o[this.mode || "TRIANGLES"]
        } else {
            var c = o.createBuffer();
            o.bindBuffer(o.ARRAY_BUFFER, c), o.bufferData(o.ARRAY_BUFFER, new Float32Array(t), o[this.drawType]), s.vbo = c, a && (this.instanceCount = this.instanceCount || t.length / r), this.count = this.count || t.length / r
        }
    }, r.prototype.setAttribute = function(e) {
        var t = this.webgl.gl,
            r = this.attributes[e],
            i = r.location,
            a = r.size,
            o = r.vbo,
            n = r.ibo,
            s = r.isInstanced;
        n ? t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n) : (t.bindBuffer(t.ARRAY_BUFFER, o), t.enableVertexAttribArray(i), t.vertexAttribPointer(i, a, t.FLOAT, !1, 0, 0), s && this.instancedArraysExt.vertexAttribDivisorANGLE(i, 1))
    }, r.prototype.updateAttribute = function(e, t, r) {
        var i = this.webgl.gl,
            a = this.attributes[e],
            o = a.vbo,
            n = a.data;
        n[t] = r, i.bindBuffer(i.ARRAY_BUFFER, o), i.bufferSubData(i.ARRAY_BUFFER, 0, new Float32Array(n))
    }, r.prototype.createWholeAttribute = function() {
        this.createAttribute(t)
    }, r.prototype.createUniform = function(e) {
        var t = this,
            r = Object.assign({}, e);
        this.hasResolution && !r.resolution && (r.resolution = [1, 1]), this.hasCamera && (r.mvpMatrix = new Float32Array(16), r.invMatrix = new Float32Array(16)), this.hasLight && (r.lightDirection || (r.lightDirection = [0, 0, 0]), r.eyeDirection || (r.eyeDirection = [0, 0, 0]), r.ambientColor || (r.ambientColor = [.1, .1, .1])), Object.keys(r).forEach(function(e) {
            t.addUniform(e, r[e])
        })
    }, r.prototype.addUniform = function(e, t) {
        var r, i, a = this,
            o = t,
            n = function(t, n) {
                switch (t) {
                    case "image":
                        r = "image", i = "1i", o = a.createTexture(e, n);
                        break;
                    case "framebuffer":
                        r = "framebuffer", i = "1i", o = n;
                        break;
                    default:
                        i = t, o = n
                }
            };
        switch (typeof t) {
            case "number":
                i = "1f";
                break;
            case "boolean":
                i = "1i";
                break;
            case "string":
                n(t);
                break;
            case "object":
                switch (t.constructor.name) {
                    case "Float32Array":
                    case "Array":
                        switch (t.length) {
                            case 16:
                                r = "matrix", i = "Matrix4fv";
                                break;
                            default:
                                i = t.length + "fv"
                        }
                        break;
                    case "HTMLImageElement":
                        i = "1i", o = this.createTexture(e, t);
                        break;
                    case "Object":
                        n(t.type, t.value)
                }
        }
        if (i) {
            var s, u = this.webgl.gl.getUniformLocation(this.program, e),
                c = "uniform" + i;
            switch (r) {
                case "image":
                    s = function(e) {
                        a.webgl.gl[c](u, a.textureIndexes[e])
                    };
                    break;
                case "framebuffer":
                    s = function(e) {
                        a.webgl.gl[c](u, a.webgl.framebuffers[e].textureIndex)
                    };
                    break;
                case "matrix":
                    s = function(e) {
                        a.webgl.gl[c](u, !1, e)
                    };
                    break;
                default:
                    s = function(e) {
                        a.webgl.gl[c](u, e)
                    }
            }
            Object.defineProperty(this.uniforms, e, {
                set: s
            }), void 0 !== o && (this.uniforms[e] = o)
        } else console.error('Failed to add uniform "' + e + '".')
    }, r.prototype.createTexture = function(e, t) {
        if (t) {
            var r = this.webgl.gl,
                i = r.createTexture(),
                a = this.textureIndexes[e] = ++this.webgl.textureIndex;
            return r.activeTexture(r["TEXTURE" + a]), r.bindTexture(r.TEXTURE_2D, i), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t), a
        }
    }, r.prototype.updateTexture = function(e, t) {
        var r = this.webgl.gl;
        r.activeTexture(r["TEXTURE" + this.textureIndexes[e]]), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t)
    }, r.prototype.use = function() {
        this.webgl.gl.useProgram(this.program)
    }, r.prototype.draw = function(e) {
        var t = this,
            r = this.webgl.gl;
        this.use(), this.isClear && (r.clearColor.apply(r, this.clearedColor), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT)), this.isTransparent ? (r.enable(r.BLEND), r.blendFunc(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA)) : this.isAdditive ? (r.enable(r.BLEND), r.blendFuncSeparate(r.SRC_ALPHA, r.ONE, r.ONE, r.ONE)) : r.disable(r.BLEND), this.isCulling ? r.enable(r.CULL_FACE) : r.disable(r.CULL_FACE), this.isDepth ? r.enable(r.DEPTH_TEST) : r.disable(r.DEPTH_TEST), e && Object.keys(e).forEach(function(r) {
            t.uniforms[r] = e[r]
        }), Object.keys(this.attributes).forEach(function(e) {
            t.setAttribute(e)
        }), this.isInstanced ? this.indicesCount ? this.instancedArraysExt.drawElementsInstancedANGLE(this.glMode, this.indicesCount, r.UNSIGNED_SHORT, 0, this.instanceCount) : this.instancedArraysExt.drawArraysInstancedANGLE(this.glMode, 0, this.count, this.instanceCount) : this.indicesCount ? r.drawElements(this.glMode, this.indicesCount, r.UNSIGNED_SHORT, 0) : r.drawArrays(this.glMode, 0, this.count)
    };
    var i = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D texture;\n\nvoid main() {\n  gl_FragColor = texture2D(texture, gl_FragCoord.st / resolution);\n}\n",
        a = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D texture;\nuniform vec2 resolution;\nuniform float radius;\nuniform bool isHorizontal;\n\nvec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n  vec4 color = vec4(0.0);\n  vec2 off1 = vec2(1.3846153846) * direction;\n  vec2 off2 = vec2(3.2307692308) * direction;\n  color += texture2D(image, uv) * 0.2270270270;\n  color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;\n  color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;\n  color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;\n  color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;\n  return color;\n}\n\nvoid main () {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec2 direction = isHorizontal ? vec2(1., 0.) : vec2(0., 1.);\n  direction *= radius;\n  gl_FragColor = blur9(texture, uv, resolution, direction);\n}\n",
        o = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D texture;\nuniform float threshold;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.st / resolution;\n  vec4 color = texture2D(texture, uv);\n  if (color.a == 0. || length(color.rgb) < threshold * 1.732) discard;\n  gl_FragColor = color;\n}\n",
        n = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform sampler2D specular;\n\nconst float brightness = 0.7;\nconst float spread = 0.3;\n\nvoid main() {\n  vec2 uv = gl_FragCoord.st / resolution;\n  vec4 specularColor = texture2D(specular, uv);\n  specularColor.rgb = pow(specularColor.rgb, vec3(1. - brightness));\n  specularColor.a = pow(specularColor.a, 1. - spread);\n  gl_FragColor = specularColor;\n  // gl_FragColor = vec4(vec3(specularColor.a), 1.); // * debug\n  // gl_FragColor = vec4(texture2D(specular, uv).rgb, 1.); // * debug\n}\n",
        s = "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D texture;\nuniform vec2 resolution;\nuniform float strength;\nuniform vec2 center;\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nconst float nFrag = 1. / 30.;\n\nvoid main () {\n  vec2 tFrag = 1. / resolution;\n  vec3 destColor = vec3(0.);\n  float randomValue = random(vec2(12.9898, 78.233));\n  vec2 fc = gl_FragCoord.st;\n  vec2 fcc = fc - center;\n  float totalWeight = 0.;\n\n  for (float i = 0.; i <= 30.; i++) {\n    float percent = (i + randomValue) * nFrag;\n    float weight = percent - percent * percent;\n    vec2 t = fc - fcc * percent * strength * nFrag;\n    destColor += texture2D(texture, t * tFrag).rgb * weight;\n    totalWeight += weight;\n  }\n  gl_FragColor = vec4(destColor / totalWeight, 1.);\n}\n",
        u = function(e) {
            function t(t) {
                var r = {
                    fragmentShader: a,
                    uniforms: {
                        texture: "framebuffer",
                        radius: 0,
                        isHorizontal: !1
                    },
                    hasCamera: !1,
                    hasLight: !1
                };
                e.call(this, t, r), this.radius = .5
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(t, r, i, a) {
                this.use();
                for (var o = 0; o < 8; o++) {
                    this.webgl.bindFramebuffer(a && o >= 7 ? null : r), this.uniforms.texture = t, this.uniforms.radius = (7 - o) * (void 0 !== i ? i : this.radius), this.uniforms.isHorizontal = o % 2 == 0, e.prototype.draw.call(this);
                    var n = r;
                    r = t, t = n
                }
            }, t
        }(r),
        c = function(e) {
            function t(t, r) {
                void 0 === r && (r = {});
                var i = r.threshold;
                void 0 === i && (i = .5);
                var a = {
                    fragmentShader: o,
                    uniforms: {
                        texture: "framebuffer",
                        threshold: i
                    }
                };
                e.call(this, t, a)
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(t, r, i) {
                this.webgl.bindFramebuffer(r), this.use(), this.uniforms.texture = t, void 0 !== i && (this.uniforms.threshold = i), e.prototype.draw.call(this)
            }, t
        }(r),
        f = function(e) {
            function t(t) {
                t.effects.bloomSpecular || (t.effects.bloomSpecular = new c(t, {
                    threshold: .3
                })), t.effects.bloomBlur || (t.effects.bloomBlur = new u(t)), t.effects.bloomBase || (t.effects.bloomBase = new e(t, {
                    fragmentShader: i,
                    uniforms: {
                        texture: "framebuffer"
                    }
                }));
                var r = {
                    fragmentShader: n,
                    uniforms: {
                        specular: "framebuffer"
                    },
                    isAdditive: !0,
                    isClear: !1
                };
                e.call(this, t, r), this.radius = .4
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(t, r, i, a, o) {
                this.webgl.effects.bloomSpecular.draw(t, r), this.webgl.effects.bloomBlur.draw(r, i, void 0 !== a ? a : this.radius), this.webgl.bindFramebuffer(o ? null : i);
                var n = this.webgl.effects.bloomBase;
                n.use(), n.uniforms.texture = t, n.draw(), this.use(), this.uniforms.specular = r, e.prototype.draw.call(this)
            }, t
        }(r),
        h = function(e) {
            function t(t) {
                var r = {
                    fragmentShader: s,
                    uniforms: {
                        texture: "framebuffer",
                        strength: 5,
                        center: [t.canvas.width / 2, t.canvas.height / 2]
                    }
                };
                e.call(this, t, r)
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(t, r, i, a, o) {
                this.webgl.bindFramebuffer(o ? null : r), this.use(), this.uniforms.texture = t, void 0 !== i && (this.uniforms.strength = i), void 0 !== a && (this.uniforms.center = a), e.prototype.draw.call(this)
            }, t
        }(r),
        l = function(e) {
            function t(t) {
                t.effects.godraySpecular || (t.effects.godraySpecular = new c(t, {
                    threshold: .75
                })), t.effects.godrayZoomblur || (t.effects.godrayZoomblur = new h(t)), t.effects.godrayBlur || (t.effects.godrayBlur = new u(t)), t.effects.godrayBase || (t.effects.godrayBase = new e(t, {
                    fragmentShader: i,
                    uniforms: {
                        texture: "framebuffer"
                    }
                }));
                var r = {
                    fragmentShader: i,
                    uniforms: {
                        texture: "framebuffer"
                    },
                    isAdditive: !0,
                    isClear: !1
                };
                e.call(this, t, r), this.radius = .02
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(t, r, i, a, o, n, s) {
                this.webgl.effects.godraySpecular.draw(t, i), this.webgl.effects.godrayZoomblur.draw(i, r, a, o), this.webgl.effects.godrayBlur.draw(r, i, void 0 !== n ? n : this.radius), this.webgl.bindFramebuffer(s ? null : i);
                var u = this.webgl.effects.godrayBase;
                u.use(), u.uniforms.texture = t, u.draw(), this.use(), this.uniforms.texture = r, e.prototype.draw.call(this)
            }, t
        }(r),
        d = function(e) {
            function t(t) {
                t.effects.godraySpecular || (t.effects.godraySpecular = new c(t, {
                    threshold: .75
                })), t.effects.godrayZoomblur || (t.effects.godrayZoomblur = new h(t)), t.effects.godrayBlur || (t.effects.godrayBlur = new u(t));
                var r = {
                    fragmentShader: i,
                    uniforms: {
                        texture: "framebuffer"
                    },
                    isAdditive: !0,
                    isClear: !1
                };
                e.call(this, t, r), this.radius = .02
            }
            return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.draw = function(t, r, i, a, o, n, s) {
                this.webgl.effects.godraySpecular.draw(t, i), this.webgl.effects.godrayZoomblur.draw(i, r, a, o), this.webgl.effects.godrayBlur.draw(r, i, void 0 !== n ? n : this.radius), this.webgl.bindFramebuffer(s ? null : i), this.use(), this.uniforms.texture = r, e.prototype.draw.call(this)
            }, t
        }(r),
        m = Object.freeze({
            Blur: u,
            Bloom: f,
            Zoomblur: h,
            Godray: l,
            GodrayLight: d
        }),
        v = function(t) {
            var r = this;
            this.programs = {}, this.effects = {}, this.framebuffers = {}, this.textureIndex = -1, this.mMatrix = e.identity(e.create()), this.vMatrix = e.identity(e.create()), this.pMatrix = e.identity(e.create()), this.vpMatrix = e.identity(e.create()), this.mvpMatrix = e.identity(e.create()), this.invMatrix = e.identity(e.create());
            var i = t.canvas,
                a = t.fov,
                o = t.near;
            void 0 === o && (o = .1);
            var n = t.far;
            void 0 === n && (n = 2e3);
            var s = t.cameraPosition;
            void 0 === s && (s = [0, 0, 30]);
            var u = t.cameraRotation;
            void 0 === u && (u = [0, 0]);
            var c = t.lightDirection;
            void 0 === c && (c = [-1, 1, 1]);
            var f = t.eyeDirection;
            void 0 === f && (f = s);
            var h = t.ambientColor;
            void 0 === h && (h = [.1, .1, .1]);
            var l = t.isClear;
            void 0 === l && (l = !0);
            var d = t.clearedColor,
                m = t.programs;
            void 0 === m && (m = {});
            var v = t.effects;
            void 0 === v && (v = []);
            var E = t.framebuffers;
            void 0 === E && (E = []);
            var p = t.framebufferFloats;
            void 0 === p && (p = {});
            var g = t.tick,
                b = t.onBefore,
                R = t.onResize,
                T = t.isAutoStart;
            switch (void 0 === T && (T = !0), this.initWebgl(i), this.fov = void 0 !== a ? a : Math.atan(this.canvas.clientHeight / 2 / s[2]) * (180 / Math.PI) * 2, this.near = o, this.far = n, this.cameraPosition = s, this.cameraRotation = u, this.lightDirection = c, this.eyeDirection = f, this.ambientColor = h, this.tick = g, this.onResize = R, this.isClear = l, this.clearedColor = this.isClear ? d || [0, 0, 0, 0] : null, Object.keys(m).forEach(function(e) {
                r.createProgram(e, m[e])
            }), v.forEach(function(e) {
                r.createEffect(e)
            }), this.initSize(), E.constructor.name) {
                case "Array":
                    E.forEach(function(e) {
                        r.createFramebuffer(e)
                    });
                    break;
                case "Object":
                    Object.keys(E).forEach(function(e) {
                        var t = E[e],
                            i = t.width,
                            a = t.height;
                        r.createFramebuffer(e, i, a)
                    })
            }
            Object.keys(p).forEach(function(e) {
                var t = p[e],
                    i = t.width,
                    a = t.height;
                r.createFramebufferFloat(e, i, a)
            }), b && b(), T && this.start()
        };
    return v.prototype.initWebgl = function(e) {
        "string" == typeof e ?
            this.canvas = document.querySelector(e) : "object" == typeof e && "HTMLCanvasElement" === e.constructor.name ? this.canvas = e : (this.canvas = document.createElement("canvas"),
                this.canvas.style.display = "block",
                this.canvas.style.width = "100%",
                this.canvas.style.height = "100%",
//		document.body.appendChild(this.canvas));
                document.getElementById("webgl").appendChild(this.canvas));
        var t = this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
        t.depthFunc(t.LEQUAL)
    }, v.prototype.createProgram = function(e, t) {
        this.programs[e] = new r(this, t)
    }, v.prototype.createEffect = function(e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        this.effects[e] = new m[t](this)
    }, v.prototype.createFramebuffer = function(e, t, r) {
        void 0 === t && (t = this.canvas.width), void 0 === r && (r = this.canvas.height);
        var i = this.gl,
            a = i.createFramebuffer();
        i.bindFramebuffer(i.FRAMEBUFFER, a);
        var o = i.createRenderbuffer();
        i.bindRenderbuffer(i.RENDERBUFFER, o), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_COMPONENT16, t, r), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, o);
        var n = i.createTexture(),
            s = ++this.textureIndex;
        i.activeTexture(i["TEXTURE" + s]), i.bindTexture(i.TEXTURE_2D, n), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, r, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, n, 0), i.bindRenderbuffer(i.RENDERBUFFER, null), i.bindFramebuffer(i.FRAMEBUFFER, null), this.framebuffers[e] = {
            framebuffer: a,
            textureIndex: s,
            depthRenderBuffer: o
        }
    }, v.prototype.resizeFramebuffer = function(e, t, r) {
        void 0 === t && (t = this.canvas.width), void 0 === r && (r = this.canvas.height);
        var i = this.gl,
            a = this.framebuffers[e],
            o = a.framebuffer,
            n = a.textureIndex,
            s = a.depthRenderBuffer;
        a.isFloat || (i.bindFramebuffer(i.FRAMEBUFFER, o), i.bindRenderbuffer(i.RENDERBUFFER, s), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_COMPONENT16, t, r), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, s), i.activeTexture(i["TEXTURE" + n]), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, r, 0, i.RGBA, i.UNSIGNED_BYTE, null))
    }, v.prototype.createFramebufferFloat = function(e, t, r) {
        void 0 === r && (r = t);
        var i = this.gl,
            a = i.getExtension("OES_texture_float"),
            o = i.getExtension("OES_texture_half_float");
        if (a || o) {
            var n = a ? i.FLOAT : o.HALF_FLOAT_OES,
                s = i.createFramebuffer(),
                u = i.createTexture(),
                c = ++this.textureIndex;
            i.bindFramebuffer(i.FRAMEBUFFER, s), i.activeTexture(i["TEXTURE" + c]), i.bindTexture(i.TEXTURE_2D, u), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, r, 0, i.RGBA, n, null), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, u, 0), i.bindFramebuffer(i.FRAMEBUFFER, null), this.framebuffers[e] = {
                framebuffer: s,
                textureIndex: c,
                isFloat: !0
            }
        } else console.error("float texture not support")
    }, v.prototype.bindFramebuffer = function(e) {
        var t = this.gl;
        t.bindFramebuffer(t.FRAMEBUFFER, e ? this.framebuffers[e].framebuffer : null)
    }, v.prototype.unbindFramebuffer = function() {
        var e = this.gl;
        e.bindFramebuffer(e.FRAMEBUFFER, null)
    }, v.prototype.setSize = function() {
        var e = this,
            t = this.gl,
            r = this.canvas.clientWidth,
            i = this.canvas.clientHeight;
        this.canvas.width = r, this.canvas.height = i, this.aspect = r / i, t.viewport(0, 0, r, i), Object.keys(this.programs).forEach(function(t) {
            var a = e.programs[t];
            a.hasResolution && (a.use(), a.uniforms.resolution = [r, i])
        }), Object.keys(this.effects).forEach(function(t) {
            var a = e.effects[t];
            a.hasResolution && (a.use(), a.uniforms.resolution = [r, i])
        }), Object.keys(this.framebuffers).forEach(function(t) {
            e.resizeFramebuffer(t)
        }), this.updateCamera(), this.updateLight(), this.onResize && this.onResize()
    }, v.prototype.initSize = function() {
        var e = this;
        this.setSize(), window.addEventListener("resize", function() {
            e.setSize()
        })
    }, v.prototype.updateCamera = function() {
        var t = this,
            r = this,
            i = r.fov,
            a = r.near,
            o = r.far,
            n = r.cameraPosition,
            s = r.cameraRotation,
            u = r.mMatrix,
            c = r.vMatrix,
            f = r.pMatrix,
            h = r.vpMatrix,
            l = r.mvpMatrix,
            d = r.invMatrix;
        this.eyeDirection = n, e.identity(u), e.lookAt(n, [n[0], n[1], 0], [0, 1, 0], c), e.perspective(i, this.aspect, a, o, f), e.multiply(f, c, h), s[0] = s[0] % (2 * Math.PI), s[1] = s[1] % (2 * Math.PI), e.rotate(u, s[0], [0, 1, 0], u), e.rotate(u, s[1], [-1, 0, 0], u), e.multiply(h, u, l), e.inverse(u, d), Object.keys(this.programs).forEach(function(e) {
            var r = t.programs[e];
            r.hasCamera && (r.use(), r.uniforms.mvpMatrix = l, r.uniforms.invMatrix = d)
        })
    }, v.prototype.updateLight = function() {
        var e = this,
            t = this.lightDirection,
            r = this.eyeDirection,
            i = this.ambientColor;
        Object.keys(this.programs).forEach(function(a) {
            var o = e.programs[a];
            o.hasLight && (o.use(), o.uniforms.lightDirection = t, o.uniforms.eyeDirection = r, o.uniforms.ambientColor = i)
        })
    }, v.prototype.start = function() {
        var e, t = this,
            r = this.gl;
        requestAnimationFrame(function(t) {
            e = t
        });
        var i = function(a) {
            var o = (a - e) / 1e3;
            t.isClear && (r.clearColor.apply(r, t.clearedColor), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT)), t.tick && t.tick(o), t.requestID = requestAnimationFrame(i)
        };
        this.requestID = requestAnimationFrame(i)
    }, v.prototype.stop = function() {
        this.requestID && (cancelAnimationFrame(this.requestID), this.requestID = null)
    }, v
}();
