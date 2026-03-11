// src/helpers/utils/NamedBitsInBytes.ts
function i2hex(i) {
  return ("0" + i.toString(16)).slice(-2);
}
var __masks8 = [];
for (let i = 0; i < 8; i++) {
  __masks8[i] = 1 << i;
}
var NamedBitsInBytes = class {
  constructor(bytes, _names) {
    this.bytes = bytes;
    this._names = _names;
  }
  enableBit(name) {
    const i = this._names.indexOf(name);
    const ib = ~~(i / 8);
    const i8 = i % 8;
    this.bytes[ib] |= __masks8[i8];
  }
  disableBit(name) {
    const i = this._names.indexOf(name);
    const ib = ~~(i / 8);
    const i8 = i % 8;
    this.bytes[ib] &= ~__masks8[i8];
  }
  flipBit(name) {
    const i = this._names.indexOf(name);
    const ib = ~~(i / 8);
    const i8 = i % 8;
    this.bytes[ib] ^= __masks8[i8];
  }
  has(name) {
    const i = this._names.indexOf(name);
    const ib = ~~(i / 8);
    const i8 = i % 8;
    return (this.bytes[ib] & __masks8[i8]) !== 0;
  }
  toString() {
    return this.bytes.reduce((memo, i) => memo + i2hex(i), "");
  }
};

// src/helpers/utils/NamedBitsInNumber.ts
var __masks32 = [];
for (let i = 0; i < 32; i++) {
  __masks32[i] = 1 << i;
}
var NamedBitsInNumber = class _NamedBitsInNumber {
  constructor(value, _names) {
    this.value = value;
    this._names = _names;
  }
  enableBit(name) {
    this.value |= __masks32[this._names.indexOf(name)];
  }
  disableBit(name) {
    this.value &= ~__masks32[this._names.indexOf(name)];
  }
  flipBit(name) {
    this.value ^= __masks32[this._names.indexOf(name)];
  }
  has(name) {
    return (this.value & __masks32[this._names.indexOf(name)]) !== 0;
  }
  hasFast(mask) {
    return (this.value & mask) !== 0;
  }
  hasAnyFast(masks) {
    return masks.reduce((v2, i) => v2 || (this.value & i) !== 0, false);
  }
  makeFastMask(name) {
    return __masks32[this._names.indexOf(name)];
  }
  makeFastMultiMask(names) {
    return names.reduce(
      (val, name) => val + __masks32[this._names.indexOf(name)],
      0
    );
  }
  toString() {
    return this.value.toString(16);
  }
  clone() {
    return new _NamedBitsInNumber(this.value, this._names);
  }
};

// src/helpers/utils/NoiseHelper3D.ts
import { makeNoise3D } from "fast-simplex-noise";

// src/utils/random.ts
function sfc32(a, b, c, d) {
  return function deterministicRandom() {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    let t = a + b | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = c << 21 | c >>> 11;
    d = d + 1 | 0;
    t = t + d | 0;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  };
}
var genPhysics = sfc32(100, 200, 300, 444);
var genGraphics = sfc32(100, 200, 300, 444);
function detRandGraphics(min = 0, max = 1) {
  return genGraphics() * (max - min) + min;
}
var genGrass = sfc32(100, 200, 300, 444);
function detRandGrass(min = 0, max = 1) {
  return genGrass() * (max - min) + min;
}
var genLights = sfc32(100, 200, 300, 444);
var genRocks = sfc32(100, 200, 300, 444);
function detRandRocks(min = 0, max = 1) {
  return genRocks() * (max - min) + min;
}
var genTrees = sfc32(100, 200, 300, 444);
var genTreesMaple = sfc32(100, 200, 300, 444);
function detRandTreesMaple(min = 0, max = 1) {
  return genTreesMaple() * (max - min) + min;
}
var genTreesMapleStump = sfc32(100, 200, 300, 444);
function detRandTreesMapleStump(min = 0, max = 1) {
  return genTreesMapleStump() * (max - min) + min;
}
var genTreesMapleMature = sfc32(100, 200, 300, 444);
function detRandTreesMapleMature(min = 0, max = 1) {
  return genTreesMapleMature() * (max - min) + min;
}
var genTreesMapleStumpMature = sfc32(100, 200, 300, 444);
function detRandTreesMapleStumpMature(min = 0, max = 1) {
  return genTreesMapleStumpMature() * (max - min) + min;
}
var genTreesPine = sfc32(100, 200, 300, 444);
function detRandTreesPine(min = 0, max = 1) {
  return genTreesPine() * (max - min) + min;
}
var genTreesPineStump = sfc32(100, 200, 300, 444);
function detRandTreesPineStump(min = 0, max = 1) {
  return genTreesPineStump() * (max - min) + min;
}
var genTreesPineMature = sfc32(100, 200, 300, 444);
function detRandTreesPineMature(min = 0, max = 1) {
  return genTreesPineMature() * (max - min) + min;
}
var genTreesPineStumpMature = sfc32(100, 200, 300, 444);
function detRandTreesPineStumpMature(min = 0, max = 1) {
  return genTreesPineStumpMature() * (max - min) + min;
}
var genLogPine = sfc32(100, 200, 300, 444);
function detRandLogPine(min = 0, max = 1) {
  return genLogPine() * (max - min) + min;
}
var genWoodPlanks = sfc32(100, 152, 353, 504);
function detRandWoodPlanks(min = 0, max = 1) {
  return genWoodPlanks() * (max - min) + min;
}
var genWater = sfc32(100, 200, 300, 444);
function detRandWater(min = 0, max = 1) {
  return genWater() * (max - min) + min;
}
var genSand = sfc32(100, 200, 300, 444);
function detRandSand(min = 0, max = 1) {
  return genSand() * (max - min) + min;
}

// src/helpers/utils/NoiseHelper3D.ts
var NoiseHelper3D = class {
  constructor(_scale, _offsetX = 0, _offsetY = 0, _offsetZ = 0, seed = 0, _strength = 1, _offset = 0) {
    this._scale = _scale;
    this._offsetX = _offsetX;
    this._offsetY = _offsetY;
    this._offsetZ = _offsetZ;
    this._strength = _strength;
    this._offset = _offset;
    const randGenerator = sfc32(100 + seed, 200 + seed, 300 + seed, 444 + seed);
    this._noise = makeNoise3D(randGenerator);
  }
  getValue(x, y, z) {
    return this._noise(
      x * this._scale + this._offsetX,
      y * this._scale + this._offsetY,
      z * this._scale + this._offsetZ
    ) * this._strength + this._offset;
  }
  invalidate(x, y, z) {
  }
  setValue(x, y, z, value) {
  }
};

// src/meshes/factorySand.ts
import { BufferAttribute, Object3D as Object3D2 } from "three";
import { Mesh, PlaneBufferGeometry, Vector3 as Vector32 } from "three";

// src/utils/math.ts
import {
  Plane,
  Ray,
  Raycaster,
  Vector2,
  Vector3
} from "three";

// src/device.ts
var Device = class {
  constructor() {
    this.targetFPS = 60;
    this.listeners = /* @__PURE__ */ new Set();
    this.cachedPPCm = -1;
    this.handleChange = () => {
      this.useTouch = /Mobi|Android|iPhone|iPad|BlackBerry|Windows Phone|webOS/i.test(
        navigator.userAgent
      );
      if (this.width === window.innerWidth && this.height === window.innerHeight) {
        return;
      }
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.aspect = this.width / this.height;
      this.deviceHeight = Math.min(this.width, this.height);
      this.deviceWidth = Math.max(this.width, this.height);
      this.deviceAspect = this.deviceWidth / this.deviceHeight;
      this.pixelRatio = window.devicePixelRatio;
      this.orientation = this.aspect < 1 ? "portrait" : "landscape";
      this.type = this.useTouch ? this.deviceWidth < 1024 && this.deviceAspect > 1.6 ? "mobile" : "tablet" : "desktop";
      this.listeners.forEach((listener) => listener());
    };
    window.addEventListener("resize", () => {
      this.handleChange();
      setTimeout(this.handleChange, 50);
    });
    this.handleChange();
  }
  onChange(listener, firstOneForFree = false) {
    this.listeners.add(listener);
    if (firstOneForFree) {
      listener();
    }
    return () => this.listeners.delete(listener);
  }
  get isMobile() {
    return this.type === "mobile";
  }
  get isTablet() {
    return this.type === "tablet";
  }
  get isDesktop() {
    return this.type === "desktop";
  }
  get pixelsPerCm() {
    if (this.cachedPPCm === -1) {
      const div = document.createElement("div");
      div.style.height = "1in";
      const body = document.getElementsByTagName("body")[0];
      body.appendChild(div);
      const ppi = getComputedStyle(div, null).getPropertyValue("height");
      body.removeChild(div);
      this.cachedPPCm = parseFloat(ppi) * 2.54;
    }
    return this.cachedPPCm;
  }
  get screenHeightCms() {
    return this.height / this.pixelsPerCm;
  }
  get screenWidthCms() {
    return this.width / this.pixelsPerCm;
  }
  get screenShorterCms() {
    return Math.min(this.width, this.height) / this.pixelsPerCm;
  }
  setFPS(fps = 60) {
    this.targetFPS = fps;
  }
};
var device = new Device();
window.device = device;
var device_default = device;

// src/utils/math.ts
function clamp(val, min, max) {
  return Math.min(max, Math.max(min, val));
}
function wrap(val, min, max) {
  const range = max - min;
  return ((val - min) % range + range) % range + min;
}
var TWO_PI = 2 * Math.PI;
var RADIANS_TO_DEGREES = 180 / Math.PI;
var DEGREES_TO_RADIANS = Math.PI / 180;
var ray = new Ray();
var flatPlane = new Plane(new Vector3(0, -1, 0), 1);
var anyPlane = new Plane(new Vector3(0, -1, 0), 1);
var intersection = new Vector3();
var __v2 = new Vector2();
var __raycaster = new Raycaster();
function lerp(a, b, dt) {
  const out = a + dt * (b - a);
  return Math.abs(b - out) > 1e-5 ? out : b;
}
function unlerp(min, max, value) {
  return (value - min) / (max - min);
}
var tau = Math.PI * 2;
var tauAndHalf = Math.PI * 3;
function rand(min = 0, max = 1) {
  return Math.random() * (max - min) + min;
}
function rand2(scale = 1, offset = 0) {
  return (Math.random() * 2 - 1) * scale + offset;
}
function inferDirection(val, tolerance = 1e-5) {
  if (val < -tolerance) {
    return -1;
  } else if (val > tolerance) {
    return 1;
  } else {
    return 0;
  }
}
var phi = (Math.sqrt(5) + 1) * 0.5 - 1;
var ga = phi * Math.PI * 2;
function pointOnSphereFibonacci(index, total3) {
  return [ga * index, Math.asin(-1 + 2 * index / total3)];
}
function longLatToXYZ(longLat, radius) {
  const long = longLat[0];
  const lat = longLat[1];
  return [
    Math.cos(lat) * Math.cos(long) * radius,
    Math.sin(lat) * radius,
    Math.cos(lat) * Math.sin(long) * radius
  ];
}
function powerOfTwo(x) {
  return Math.log2(x) % 1 === 0;
}
function assertPowerOfTwo(x) {
  if (!powerOfTwo(x)) {
    throw new Error(`${x} is not a power of two`);
  }
}

// src/meshes/factorySand.ts
var skews = [];
var strengths = [];
var aOffsets = [];
var freqs = [];
var flips = [];
var total = 11;
detRandSand(-3, 3);
detRandSand(-3, 3);
detRandSand(-3, 3);
for (let step = 0; step < total; step++) {
  const ratio = step / (total - 1);
  strengths.push(1 - Math.pow(1 - ratio, 2));
  const freq = Math.round(lerp(1, 2, ratio));
  freqs.push(freq);
  const skew = Math.round(detRandSand(-3, 3)) / freq;
  skews.push(skew);
  aOffsets.push(detRandSand(0, Math.PI * 2));
  flips.push(detRandSand(0, 1) > 0.5);
}
var colorA = new Vector32(0.5, 0.3, 0.1);
var colorB = new Vector32(0.8, 0.7, 0.5);
var axis = new Vector32(0, 0, 1).normalize();
var tempVec3 = new Vector32();
var tempVec3B = new Vector32();
var originalVec3 = new Vector32();
var basis = 18;
var __protoGeos = /* @__PURE__ */ new Map();
function __getProtoGeo(uOffset, vOffset, maxStrength = 0.35) {
  const key = `${uOffset}:${vOffset}`;
  if (!__protoGeos.has(key)) {
    const geo = new PlaneBufferGeometry(basis, basis, basis * 2, basis * 2);
    const posAttr = geo.attributes.position;
    const posArr = posAttr.array;
    const colorArr = new Float32Array(posAttr.count * 3);
    const uvAttr = geo.attributes.uv;
    const uvArr = uvAttr.array;
    const localStrengths = strengths.map((v2) => lerp(maxStrength, 0.05, v2));
    for (let i = 0; i < posAttr.count; i++) {
      const i3 = i * 3;
      originalVec3.fromArray(posArr, i3);
      const resultVec3 = originalVec3.clone();
      for (let j = 0; j < skews.length; j++) {
        tempVec3.copy(originalVec3);
        tempVec3.x += uOffset;
        tempVec3.y += vOffset;
        if (flips[j]) {
          const x = tempVec3.x;
          tempVec3.x = -tempVec3.y;
          tempVec3.y = x;
        }
        const freq = freqs[j];
        const skew = skews[j];
        const strength = localStrengths[j];
        const ratioV = tempVec3.y / 32;
        let ratioU = tempVec3.x / 32;
        ratioU += skew * ratioV;
        const a = ratioU * freq * Math.PI * 2 + aOffsets[j] + maxStrength * (j + 4) * 0.5;
        tempVec3B.set(0, Math.cos(a) * strength, -Math.sin(a) * strength);
        tempVec3B.applyAxisAngle(
          axis,
          Math.atan2(skew, 1) + Math.PI * 0.5 + (flips[j] ? -Math.PI * 0.5 : 0)
        );
        resultVec3.add(tempVec3B);
      }
      resultVec3.toArray(posArr, i3);
      const colorSample = unlerp(-2, 1, resultVec3.z);
      resultVec3.lerpVectors(colorA, colorB, colorSample);
      resultVec3.toArray(colorArr, i3);
    }
    geo.setAttribute("color", new BufferAttribute(colorArr, 3));
    __protoGeos.set(key, geo);
  }
  return __protoGeos.get(key);
}
var CardinalStrings = [
  "c",
  "nw",
  "n",
  "ne",
  "e",
  "se",
  "s",
  "sw",
  "w"
];
var __offsets = [
  [-8, -8],
  [8, -8],
  [-8, 8],
  [8, 8]
];
var __quadMeshes = /* @__PURE__ */ new Map();
function makeSandQuad(id, quad, mat) {
  const tl = quad[0] ? 0 : 1;
  const tr = quad[1] ? 0 : 1;
  const bl = quad[2] ? 0 : 1;
  const br = quad[3] ? 0 : 1;
  const key = `${id}${tl}${tr}${bl}${br}`;
  if (!__quadMeshes.has(key)) {
    const offsets = __offsets[id];
    const geo = __getProtoGeo(offsets[0], offsets[1]).clone();
    const posAttr = geo.attributes.position;
    const posArr = posAttr.array;
    const uvAttr = geo.attributes.uv;
    const uvArr = uvAttr.array;
    const sink = tl === br && tr === bl && tl !== tr;
    for (let i = 0; i < posAttr.count; i++) {
      const i2 = i * 2;
      const i3 = i * 3;
      tempVec3.fromArray(posArr, i3);
      const u = uvArr[i2];
      const v2 = uvArr[i2 + 1];
      const t = lerp(tl, tr, u);
      const b = lerp(bl, br, u);
      let final = lerp(t, b, v2);
      if (sink) {
        const sinkDist = Math.pow(
          Math.sqrt(Math.pow((u - 0.5) * 2, 2) + Math.pow((v2 - 0.5) * 2, 2)),
          0.5
        );
        final += clamp(1 - sinkDist, 0, 1);
      }
      const sandy = detRandSand(0, 1);
      if (sandy < 0.3) {
        tempVec3.z += 0.2;
      }
      if (sandy > 0.99) {
        tempVec3.z += 0.7;
      }
      tempVec3.z += Math.pow(final, 2) * -4;
      tempVec3.toArray(posArr, i3);
    }
    geo.computeVertexNormals();
    const mesh = new Mesh(geo, mat);
    mesh.position.x = offsets[0];
    mesh.position.y = offsets[1];
    const pivot = new Object3D2();
    pivot.rotation.x = -Math.PI * 0.5;
    pivot.scale.z = 0.5;
    pivot.position.y = 1;
    pivot.add(mesh);
    __quadMeshes.set(key, pivot);
  }
  return __quadMeshes.get(key).clone();
}

// src/utils/LocalStorageMap.ts
var LocalStorageMap = class extends Map {
  constructor(_hydrator, _dehydrator) {
    super();
    this._hydrator = _hydrator;
    this._dehydrator = _dehydrator;
  }
  has(key) {
    return super.has(key) || !!localStorage.getItem(key);
  }
  get(key) {
    if (!super.has(key)) {
      const localV = localStorage.getItem(key);
      if (localV) {
        super.set(key, this._hydrator(localV));
      }
    }
    return super.get(key);
  }
  set(key, value) {
    const v2 = this._dehydrator(value);
    localStorage.setItem(key, v2);
    return super.set(key, value);
  }
  delete(key) {
    localStorage.removeItem(key);
    return super.delete(key);
  }
};

// src/rendering/tileMaker/mapTileMaker/JITTileSampler.ts
var NoiseHelper2D = class {
  constructor(scale, offsetX = 0, offsetY = 0, seed = 0, strength = 1, offset = 0) {
    this._helper = new NoiseHelper3D(
      scale,
      offsetX,
      offsetY,
      0,
      seed,
      strength,
      offset
    );
  }
  getValue(x, y) {
    return this._helper.getValue(x, y, 0);
  }
};
var StepHelper2D = class {
  constructor(_helper, _thresh = 0) {
    this._helper = _helper;
    this._thresh = _thresh;
  }
  getValue(x, y) {
    return this._helper.getValue(x, y) > this._thresh ? 1 : 0;
  }
};
var AdditiveGroupHelper2D = class {
  constructor(_helpers) {
    this._helpers = _helpers;
  }
  getValue(x, y) {
    let value = 0;
    for (const helper of this._helpers) {
      value += helper.getValue(x, y);
    }
    return value;
  }
};
var InvertHelper2D = class {
  constructor(_helper) {
    this._helper = _helper;
  }
  getValue(x, y) {
    return 1 - this._helper.getValue(x, y);
  }
};
var ClampHelper2D = class {
  constructor(_helper, _min = -1, _max = 1) {
    this._helper = _helper;
    this._min = _min;
    this._max = _max;
  }
  getValue(x, y) {
    const value = this._helper.getValue(x, y);
    return Math.min(this._max, Math.max(this._min, value));
  }
};
var BoxFilterHelper2D = class {
  constructor(_helper, _minX = -16, _maxX = 16, _minY = _minX, _maxY = _maxX) {
    this._helper = _helper;
    this._minX = _minX;
    this._maxX = _maxX;
    this._minY = _minY;
    this._maxY = _maxY;
  }
  getValue(x, y) {
    if (x < this._minX || x > this._maxX || y < this._minY || y > this._maxY) {
      return 0;
    }
    return this._helper.getValue(x, y);
  }
};
function simpleThreshNoise2D(scale, offsetX, offsetY, thresh, seed = 0, strength) {
  return new StepHelper2D(
    new NoiseHelper2D(scale, offsetX, offsetY, seed, strength),
    thresh
  );
}
var __animFrameTimes = ["0", "1", "2", "3"];
var metaTileStrings = [
  "water",
  "dirt",
  "sand",
  "beach",
  "floor",
  "logWall",
  "beam",
  "bricks",
  "drywall",
  "grass",
  "bush",
  "goldPile",
  "lampPost",
  "testObject",
  "pyramid",
  "rockyGround",
  "rocks",
  "goldOreForRocks",
  "silverOreForRocks",
  "ironOreForRocks",
  "copperOreForRocks",
  "harvested",
  "treePine",
  "maturePlant",
  "treeMaple",
  "window",
  "door"
];
var JITTileSampler = class {
  constructor(_tileMaker, _viewWidthInTiles, _viewHeightInTiles) {
    this._tileMaker = _tileMaker;
    this._viewWidthInTiles = _viewWidthInTiles;
    this._viewHeightInTiles = _viewHeightInTiles;
    this.indicesOfMadeTiles = /* @__PURE__ */ new Set();
    this.indicesOfNewlyMadeTiles = /* @__PURE__ */ new Set();
    this.dirty = true;
    this.metaRawCache = /* @__PURE__ */ new Map();
    //maybe change this caching mechanism for something more memory friendly. e.i. Map<number, <Map<number, number>> ?
    this.metaCache = new LocalStorageMap(
      (v2) => new NamedBitsInNumber(parseInt(v2), metaTileStrings),
      (v2) => v2.value.toString()
    );
    //maybe change this caching mechanism for something more memory friendly. e.i. Map<number, <Map<number, number>> ?
    this.dirtyMeta = /* @__PURE__ */ new Set();
    this.dirtyVis = /* @__PURE__ */ new Set();
    this._offsetsDirty = true;
    this._offsetX = 0;
    this._offsetY = 0;
    this._offsetXOld = 0;
    this._offsetYOld = 0;
    this._animFrame = 0;
    this.onTileMade = (index) => {
      this.indicesOfNewlyMadeTiles.add(index);
      this.dirty = true;
    };
    this._visPropsCache = /* @__PURE__ */ new Map();
    this._bottomAndTopIdsCache = /* @__PURE__ */ new Map();
    this._dirtyMetaProcessedListeners = [];
    this.bytesPerTile = Math.ceil(
      _tileMaker.visualPropertyLookupStrings.length / 8
    );
    const seed = 1;
    const floorNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(0.1, 0, 0, seed)),
      0.5
    );
    const sandNoise = simpleThreshNoise2D(0.1, -182, 237, 0.5, seed);
    const beachNoise = simpleThreshNoise2D(0.1, -182, 237, -0.2, seed);
    const waterBase = new AdditiveGroupHelper2D([
      new NoiseHelper2D(0.02, 0, 0, seed),
      new NoiseHelper2D(0.08, 0, 0, seed, 0.5)
    ]);
    const waterNoise = new StepHelper2D(waterBase);
    const dirtNoise = new StepHelper2D(new InvertHelper2D(sandNoise));
    const logWallNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(0.08, -100, -100, seed)),
      0.4
    );
    const beamNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(0.08, -100, -100, seed)),
      0.4
    );
    const bricksNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(0.06, -50, -50, seed)),
      0.5
    );
    const drywallNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(0.05, 20, 20, seed)),
      0.5
    );
    const grassNoise = new StepHelper2D(
      new AdditiveGroupHelper2D([
        new NoiseHelper2D(0.15, 100, 200, seed),
        new NoiseHelper2D(0.01, 100, 200, seed)
      ]),
      -0.5
    );
    const bushNoise = simpleThreshNoise2D(0.3, 300, 200, 0.25, seed);
    const goldNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(3, -300, 200, seed), -32, 32),
      0.75
    );
    const lampPostNoise = new StepHelper2D(
      new BoxFilterHelper2D(simpleThreshNoise2D(3, -1300, 200, 0, seed)),
      0.75
    );
    const testObjectNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(3, -100, -300, seed)),
      0.75
    );
    const pyramidNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(3, -204, -121, seed)),
      0.85
    );
    const rockyGroundNoise = simpleThreshNoise2D(3, 204, -121, 0.25, seed);
    const rocksNoiseBase = new AdditiveGroupHelper2D([
      new NoiseHelper2D(0.01, 604, -121, seed),
      new NoiseHelper2D(0.05, 604, -121, seed, 0.5)
    ]);
    const rocksNoise = new StepHelper2D(rocksNoiseBase, 0.7);
    const goldOreForRocksNoise = new StepHelper2D(
      new AdditiveGroupHelper2D([
        new ClampHelper2D(rocksNoiseBase),
        new NoiseHelper2D(0.8, 604, -121, seed, 0.2, -0.1)
      ]),
      1.07
    );
    const silverOreForRocksNoise = new StepHelper2D(
      new AdditiveGroupHelper2D([
        new ClampHelper2D(rocksNoiseBase),
        new NoiseHelper2D(0.8, -604, -121, seed, 0.2, -0.1)
      ]),
      1.05
    );
    const ironOreForRocksNoise = new StepHelper2D(
      new AdditiveGroupHelper2D([
        new ClampHelper2D(rocksNoiseBase),
        new NoiseHelper2D(0.8, 404, 121, seed, 0.2, -0.15)
      ]),
      0.95
    );
    const copperOreForRocksNoise = new StepHelper2D(
      new AdditiveGroupHelper2D([
        new ClampHelper2D(rocksNoiseBase),
        new NoiseHelper2D(0.8, 504, 121, seed, 0.2, -0.15)
      ]),
      0.97
    );
    const harvestedNoise = new StepHelper2D(
      new BoxFilterHelper2D(new NoiseHelper2D(0.08, -500, -100, seed)),
      0.35
    );
    const treePineNoise = simpleThreshNoise2D(0.3, -200, -400, 0.5, seed);
    const plantMatureNoise = simpleThreshNoise2D(3, -340, -460, 0.25, seed);
    const treeMapleNoise = simpleThreshNoise2D(0.3, 200, 400, 0.6, seed);
    this.metaNoiseGenerators = [
      waterNoise,
      dirtNoise,
      sandNoise,
      beachNoise,
      floorNoise,
      logWallNoise,
      beamNoise,
      bricksNoise,
      drywallNoise,
      grassNoise,
      bushNoise,
      goldNoise,
      lampPostNoise,
      testObjectNoise,
      pyramidNoise,
      rockyGroundNoise,
      rocksNoise,
      goldOreForRocksNoise,
      silverOreForRocksNoise,
      ironOreForRocksNoise,
      copperOreForRocksNoise,
      harvestedNoise,
      treePineNoise,
      plantMatureNoise,
      treeMapleNoise
    ];
  }
  get offsetX() {
    return this._offsetX;
  }
  set offsetX(value) {
    this._offsetsDirty = true;
    this.dirty = true;
    this._offsetX = value;
  }
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(value) {
    this._offsetsDirty = true;
    this.dirty = true;
    this._offsetY = value;
  }
  get tileMaker() {
    return this._tileMaker;
  }
  set tileMaker(value) {
    throw new Error("Cannot change tileMaker during runtime");
  }
  get animFrame() {
    return this._animFrame;
  }
  set animFrame(value) {
    if (value === this._animFrame) {
      return;
    }
    this._animFrame = value;
    this.dirty = true;
  }
  writeMeta(x, y, meta) {
    const key = x + ":" + y;
    this.validateMeta(meta, x, y);
    this.metaCache.set(key, meta);
    this.dirtyMeta.add(key);
  }
  sampleMetaRaw(x, y) {
    const key = x + ":" + y;
    if (this.metaRawCache.has(key)) {
      return this.metaRawCache.get(key);
    }
    const metaRaw = new NamedBitsInNumber(
      this.metaNoiseGenerators.reduce((accum, noise, j) => {
        return accum + (noise.getValue(x, y) << j);
      }, 0),
      metaTileStrings
    );
    this.metaRawCache.set(key, metaRaw);
    return metaRaw;
  }
  sampleMeta(x, y) {
    const key = x + ":" + y;
    if (this.metaCache.has(key)) {
      const metaProps = this.metaCache.get(key);
      this.emitDirtyMetaProcessed(x, y, metaProps);
      return metaProps;
    } else {
      const metaProps = new NamedBitsInNumber(
        this.sampleMetaRaw(x, y).value,
        metaTileStrings
      );
      this.validateMeta(metaProps, x, y);
      this.metaCache.set(key, metaProps);
      this.emitDirtyMetaProcessed(x, y, metaProps);
      return metaProps;
    }
  }
  validateMeta(val, x, y) {
    const hasRocks = val.has("rocks");
    const hasSand = val.has("sand");
    const hasBeach = val.has("beach");
    const hasDirt = val.has("dirt");
    const hasGold = val.has("goldOreForRocks");
    const hasSilver = val.has("silverOreForRocks");
    const hasIron = val.has("ironOreForRocks");
    const hasCopper = val.has("copperOreForRocks");
    if (val.has("water")) {
      val.value = 0;
      if (hasRocks) {
        val.enableBit("rocks");
      }
      if (this.sampleMetaRaw(x + 1, y).has("water") && this.sampleMetaRaw(x - 1, y).has("water") && this.sampleMetaRaw(x, y + 1).has("water") && this.sampleMetaRaw(x, y - 1).has("water") && this.sampleMetaRaw(x + 1, y + 1).has("water") && this.sampleMetaRaw(x + 1, y - 1).has("water") && this.sampleMetaRaw(x - 1, y + 1).has("water") && this.sampleMetaRaw(x - 1, y - 1).has("water")) {
        val.enableBit("water");
      } else {
        if (hasSand) {
          val.enableBit("sand");
        }
        if (hasDirt) {
          if (hasBeach) {
            val.enableBit("sand");
          } else {
            val.enableBit("dirt");
          }
        }
      }
    }
    if (val.has("sand")) {
      val.disableBit("dirt");
      val.disableBit("grass");
    }
    if (val.has("water")) {
      val.disableBit("floor");
      val.disableBit("logWall");
      val.disableBit("beam");
      val.disableBit("bricks");
    }
    if (val.has("floor")) {
      val.disableBit("grass");
      val.disableBit("sand");
      val.enableBit("dirt");
    }
    if (!val.has("floor") && val.has("beam")) {
      val.flipBit("beam");
    }
    if (!val.has("floor") && val.has("logWall")) {
      val.flipBit("logWall");
    }
    if (val.has("beam") && val.has("logWall")) {
      val.flipBit("logWall");
    }
    if (val.has("beam") && val.has("grass")) {
      val.flipBit("grass");
    }
    if (!val.has("beam") && val.has("bricks")) {
      val.flipBit("bricks");
    }
    if (val.has("floor") && val.has("grass")) {
      val.flipBit("grass");
    }
    if (val.has("floor") && val.has("bush")) {
      val.flipBit("bush");
    }
    if (!val.has("grass") && val.has("bush")) {
      val.flipBit("bush");
    }
    if (val.has("testObject") && (val.has("bush") || val.has("pyramid"))) {
      val.flipBit("testObject");
    }
    if (val.has("lampPost") && (val.has("beam") || val.has("logWall") || val.has("bush") || val.has("bricks") || val.has("goldPile") || val.has("testObject"))) {
      val.flipBit("lampPost");
    }
    if (val.has("pyramid") && (val.has("bush") || val.has("beam") || val.has("logWall") || val.has("lampPost") || val.has("grass") || !val.has("floor") || val.has("goldPile"))) {
      val.flipBit("pyramid");
    }
    if (val.has("rockyGround") && (val.has("beam") || val.has("logWall") || val.has("bush") || val.has("floor") || val.has("grass") || val.has("bricks") || val.has("goldPile") || val.has("testObject"))) {
      val.flipBit("rockyGround");
    }
    if (val.has("goldPile") && (val.has("bush") || val.has("beam") || val.has("logWall") || val.has("treePine") || val.has("treeMaple") || val.has("lampPost"))) {
      val.flipBit("goldPile");
    }
    if (hasRocks) {
      const wasHarvested = val.has("harvested");
      val.value = 0;
      if (val.has("sand")) {
        val.enableBit("sand");
      } else {
        val.enableBit("dirt");
      }
      val.flipBit("rocks");
      if (hasGold && !hasCopper && !hasIron) {
        val.flipBit("goldOreForRocks");
      }
      if (hasSilver && !hasCopper && !hasIron) {
        val.flipBit("silverOreForRocks");
      }
      if (hasIron) {
        val.flipBit("ironOreForRocks");
      }
      if (hasCopper) {
        val.flipBit("copperOreForRocks");
      }
      if (wasHarvested) {
        val.flipBit("harvested");
      }
    }
    const hasAnyTree = val.has("treePine") || val.has("treeMaple");
    if (hasAnyTree && val.has("bush")) {
      val.flipBit("bush");
    }
    if (hasAnyTree && val.has("goldPile")) {
      val.flipBit("goldPile");
    }
    if (hasAnyTree && val.has("testObject")) {
      val.flipBit("testObject");
    }
    if (val.has("lampPost") || !val.has("grass")) {
      if (val.has("treePine")) {
        val.flipBit("treePine");
      }
      if (val.has("treeMaple")) {
        val.flipBit("treeMaple");
      }
    }
    if (val.has("treePine") && val.has("treeMaple")) {
      val.flipBit("treeMaple");
    }
    return val;
  }
  sampleVisProps(x, y, time = "0") {
    const key = `${x}:${y}:${time}`;
    if (this._visPropsCache.has(key)) {
      return this._visPropsCache.get(key);
    } else {
      const metaPropsN = this.sampleMeta(x, y - 1);
      const metaPropsNE = this.sampleMeta(x + 1, y - 1);
      const metaPropsE = this.sampleMeta(x + 1, y);
      const metaPropsSE = this.sampleMeta(x + 1, y + 1);
      const metaPropsS = this.sampleMeta(x, y + 1);
      const metaPropsSW = this.sampleMeta(x - 1, y + 1);
      const metaPropsW = this.sampleMeta(x - 1, y);
      const metaPropsNW = this.sampleMeta(x - 1, y - 1);
      const metaProps = this.sampleMeta(x, y);
      const visProps = new NamedBitsInBytes(
        new Uint8Array(this.bytesPerTile),
        this.tileMaker.visualPropertyLookupStrings
      );
      this._visPropsCache.set(key, visProps);
      if (metaProps.has("floor")) {
        visProps.enableBit("floor");
      }
      let needsWater = false;
      const waterMask = metaProps.makeFastMask("water");
      const sandMask = metaProps.makeFastMask("sand");
      const dirtMask = metaProps.makeFastMask("dirt");
      const makeCardinalBits = (mask) => {
        const cardinalBits = new NamedBitsInNumber(0, CardinalStrings);
        if (metaProps.hasFast(mask)) {
          cardinalBits.enableBit("c");
          cardinalBits.enableBit("ne");
          cardinalBits.enableBit("se");
          cardinalBits.enableBit("nw");
          cardinalBits.enableBit("sw");
          cardinalBits.enableBit("n");
          cardinalBits.enableBit("s");
          cardinalBits.enableBit("e");
          cardinalBits.enableBit("w");
          if (!(metaPropsN.hasFast(mask) || metaPropsE.hasFast(mask))) {
            cardinalBits.disableBit("ne");
            needsWater = true;
          }
          if (!(metaPropsS.hasFast(mask) || metaPropsE.hasFast(mask))) {
            cardinalBits.disableBit("se");
            needsWater = true;
          }
          if (!(metaPropsN.hasFast(mask) || metaPropsW.hasFast(mask))) {
            cardinalBits.disableBit("nw");
            needsWater = true;
          }
          if (!(metaPropsS.hasFast(mask) || metaPropsW.hasFast(mask))) {
            cardinalBits.disableBit("sw");
            needsWater = true;
          }
        } else {
          needsWater = true;
          const majorN = metaPropsN.hasFast(mask);
          if (majorN) {
            cardinalBits.enableBit("n");
          }
          const majorS = metaPropsS.hasFast(mask);
          if (majorS) {
            cardinalBits.enableBit("s");
          }
          const majorE = metaPropsE.hasFast(mask);
          if (majorE) {
            cardinalBits.enableBit("e");
          }
          const majorW = metaPropsW.hasFast(mask);
          if (majorW) {
            cardinalBits.enableBit("w");
          }
          if (metaPropsNE.hasFast(mask) && (majorN || majorE)) {
            cardinalBits.enableBit("ne");
          }
          if (metaPropsSW.hasFast(mask) && (majorS || majorW)) {
            cardinalBits.enableBit("sw");
          }
          if (metaPropsSE.hasFast(mask) && (majorS || majorE)) {
            cardinalBits.enableBit("se");
          }
          if (metaPropsNW.hasFast(mask) && (majorN || majorW)) {
            cardinalBits.enableBit("nw");
          }
        }
        return cardinalBits;
      };
      const sandBits = makeCardinalBits(dirtMask);
      const dirtBits = makeCardinalBits(sandMask);
      for (const params of [
        ["dirt", dirtBits],
        ["sand", sandBits]
      ]) {
        const baseName = params[0];
        const cardinalBits = params[1];
        const quads = [
          [
            cardinalBits.has("nw"),
            cardinalBits.has("n"),
            cardinalBits.has("w"),
            cardinalBits.has("c")
          ],
          //nw
          [
            cardinalBits.has("n"),
            cardinalBits.has("ne"),
            cardinalBits.has("c"),
            cardinalBits.has("e")
          ],
          //ne
          [
            cardinalBits.has("w"),
            cardinalBits.has("c"),
            cardinalBits.has("sw"),
            cardinalBits.has("s")
          ],
          //sw
          [
            cardinalBits.has("c"),
            cardinalBits.has("e"),
            cardinalBits.has("s"),
            cardinalBits.has("se")
          ]
          //se
        ];
        for (let quadId = 0; quadId < quads.length; quadId++) {
          const quad = quads[quadId];
          const heightCode = (quad[0] ? 1 : 0) + (quad[1] ? 2 : 0) + (quad[2] ? 4 : 0) + (quad[3] ? 8 : 0);
          if (heightCode > 0) {
            const groundId = `${baseName}${quadId * 16 + heightCode}`;
            visProps.enableBit(groundId);
          }
        }
      }
      const maxWater = 8;
      if (needsWater || metaProps.hasFast(waterMask)) {
        let landDist = maxWater - 1;
        for (let i = 0; i < maxWater; i++) {
          const waterN = this.sampleMeta(x, y - i - 1);
          if (!waterN.hasFast(waterMask)) {
            landDist = i;
            break;
          }
          const waterS = this.sampleMeta(x, y + i + 1);
          if (!waterS.hasFast(waterMask)) {
            landDist = i;
            break;
          }
          const waterW = this.sampleMeta(x - i - 1, y);
          if (!waterW.hasFast(waterMask)) {
            landDist = i;
            break;
          }
          const waterE = this.sampleMeta(x + i + 1, y);
          if (!waterE.hasFast(waterMask)) {
            landDist = i;
            break;
          }
          const waterNE = this.sampleMeta(x + i + 1, y - i - 1);
          if (!waterNE.hasFast(waterMask)) {
            landDist = i;
            break;
          }
          const waterSW = this.sampleMeta(x - i - 1, y + i + 1);
          if (!waterSW.hasFast(waterMask)) {
            landDist = i;
            break;
          }
          const waterNW = this.sampleMeta(x - i - 1, y - i - 1);
          if (!waterNW.hasFast(waterMask)) {
            landDist = i;
            break;
          }
          const waterSE = this.sampleMeta(x + i + 1, y + i + 1);
          if (!waterSE.hasFast(waterMask)) {
            landDist = i;
            break;
          }
        }
        visProps.enableBit(`water${time}${landDist}`);
      }
      const propMaskGrass = metaProps.makeFastMask("grass");
      if (metaProps.hasFast(propMaskGrass)) {
        visProps.enableBit("grassC");
        if (metaPropsN.has("grass")) {
          visProps.enableBit("grassN");
        }
        if (metaPropsE.hasFast(propMaskGrass)) {
          visProps.enableBit("grassE");
        }
        if (metaPropsS.hasFast(propMaskGrass)) {
          visProps.enableBit("grassS");
        }
        if (metaPropsW.hasFast(propMaskGrass)) {
          visProps.enableBit("grassW");
        }
        if (metaPropsNE.hasFast(propMaskGrass) && metaPropsN.hasFast(propMaskGrass) && metaPropsE.hasFast(propMaskGrass)) {
          visProps.enableBit("grassNE");
        }
        if (metaPropsNW.hasFast(propMaskGrass) && metaPropsN.hasFast(propMaskGrass) && metaPropsW.hasFast(propMaskGrass)) {
          visProps.enableBit("grassNW");
        }
        if (metaPropsSE.hasFast(propMaskGrass) && metaPropsS.hasFast(propMaskGrass) && metaPropsE.hasFast(propMaskGrass)) {
          visProps.enableBit("grassSE");
        }
        if (metaPropsSW.hasFast(propMaskGrass) && metaPropsS.hasFast(propMaskGrass) && metaPropsW.hasFast(propMaskGrass)) {
          visProps.enableBit("grassSW");
        }
      }
      const propMaskBush = metaProps.makeFastMask("bush");
      if (metaProps.hasFast(propMaskBush)) {
        visProps.enableBit("bushC");
        if (metaPropsN.hasFast(propMaskBush)) {
          visProps.enableBit("bushN");
        }
        if (metaPropsE.hasFast(propMaskBush)) {
          visProps.enableBit("bushE");
        }
        if (metaPropsS.hasFast(propMaskBush)) {
          visProps.enableBit("bushS");
        }
        if (metaPropsW.hasFast(propMaskBush)) {
          visProps.enableBit("bushW");
        }
        if (metaPropsNE.hasFast(propMaskBush) && metaPropsN.hasFast(propMaskBush) && metaPropsE.hasFast(propMaskBush)) {
          visProps.enableBit("bushNE");
        }
        if (metaPropsNW.hasFast(propMaskBush) && metaPropsN.hasFast(propMaskBush) && metaPropsW.hasFast(propMaskBush)) {
          visProps.enableBit("bushNW");
        }
        if (metaPropsSE.hasFast(propMaskBush) && metaPropsS.hasFast(propMaskBush) && metaPropsE.hasFast(propMaskBush)) {
          visProps.enableBit("bushSE");
        }
        if (metaPropsSW.hasFast(propMaskBush) && metaPropsS.hasFast(propMaskBush) && metaPropsW.hasFast(propMaskBush)) {
          visProps.enableBit("bushSW");
        }
      }
      const propMaskBeam = metaProps.makeFastMask("beam");
      const beamC = metaProps.hasFast(propMaskBeam);
      const beamN = metaPropsN.hasFast(propMaskBeam);
      const beamE = metaPropsE.hasFast(propMaskBeam);
      const beamS = metaPropsS.hasFast(propMaskBeam);
      const beamW = metaPropsW.hasFast(propMaskBeam);
      if (beamC) {
        if (beamE && beamW && !beamS && !beamN) {
          visProps.enableBit("beamEW");
        } else if (!beamE && !beamW && beamS && beamN) {
          visProps.enableBit("beamNS");
        } else {
          visProps.enableBit("beamCenter");
          if (beamE) {
            visProps.enableBit("beamE");
          }
          if (beamW) {
            visProps.enableBit("beamW");
          }
          if (beamN) {
            visProps.enableBit("beamN");
          }
          if (beamS) {
            visProps.enableBit("beamS");
          }
        }
      }
      const propMaskLogWall = metaProps.makeFastMask("logWall");
      const logWallC = metaProps.hasFast(propMaskLogWall);
      const logWallN = metaPropsN.hasFast(propMaskLogWall);
      const logWallE = metaPropsE.hasFast(propMaskLogWall);
      const logWallS = metaPropsS.hasFast(propMaskLogWall);
      const logWallW = metaPropsW.hasFast(propMaskLogWall);
      if (logWallC) {
        let fullWall = false;
        if (logWallE && logWallW) {
          fullWall = true;
          if (metaProps.has("window")) {
            visProps.enableBit("logWindowEW");
          } else if (metaProps.has("door")) {
            visProps.enableBit("logDoorEW");
          } else {
            visProps.enableBit("logWallEW");
          }
        }
        if (logWallS && logWallN) {
          fullWall = true;
          if (metaProps.has("window")) {
            visProps.enableBit("logWindowNS");
          } else if (metaProps.has("door")) {
            visProps.enableBit("logDoorNS");
          } else {
            visProps.enableBit("logWallNS");
          }
        }
        if (!logWallE && !logWallW && !logWallN && !logWallS) {
          visProps.enableBit("logWallCenter");
        }
        if (!fullWall) {
          if (logWallE) {
            visProps.enableBit("logWallE");
          }
          if (logWallW) {
            visProps.enableBit("logWallW");
          }
          if (logWallN) {
            visProps.enableBit("logWallN");
          }
          if (logWallS) {
            visProps.enableBit("logWallS");
          }
        }
      }
      const propMaskBricks = metaProps.makeFastMask("bricks");
      if (metaProps.hasFast(propMaskBricks)) {
        const bricksS = metaPropsN.hasFast(propMaskBricks);
        const bricksE = metaPropsE.hasFast(propMaskBricks);
        const bricksN = metaPropsS.hasFast(propMaskBricks);
        const bricksW = metaPropsW.hasFast(propMaskBricks);
        if (bricksN) {
          visProps.enableBit("bricks0");
          visProps.enableBit("bricks1");
        } else if (!(beamC && beamS)) {
          visProps.enableBit("bricks8");
        }
        if (bricksE) {
          visProps.enableBit("bricks2");
          visProps.enableBit("bricks3");
        } else if (!(beamC && beamE)) {
          visProps.enableBit("bricks9");
        }
        if (bricksW) {
          visProps.enableBit("bricks7");
          visProps.enableBit("bricks6");
        } else if (!(beamC && beamW)) {
          visProps.enableBit("bricks11");
        }
        if (bricksS) {
          visProps.enableBit("bricks4");
          visProps.enableBit("bricks5");
        } else if (!(beamC && beamN)) {
          visProps.enableBit("bricks10");
        }
      }
      const propMaskGold = metaProps.makeFastMask("goldPile");
      if (metaProps.hasFast(propMaskGold)) {
        visProps.enableBit("goldPile");
      }
      const propMaskLampPost = metaProps.makeFastMask("lampPost");
      if (metaProps.hasFast(propMaskLampPost)) {
        visProps.enableBit("lampPost");
      }
      const propMaskTestObject = metaProps.makeFastMask("testObject");
      if (metaProps.hasFast(propMaskTestObject)) {
        visProps.enableBit("testObject");
      }
      const propMaskPyramid = metaProps.makeFastMask("pyramid");
      if (metaProps.hasFast(propMaskPyramid)) {
        visProps.enableBit("pyramid");
      }
      const propMaskRockyGround = metaProps.makeFastMask("rockyGround");
      if (metaProps.hasFast(propMaskRockyGround)) {
        visProps.enableBit("rockyGround");
      }
      const propMaskRocks = metaProps.makeFastMask("rocks");
      const propMaskHarvested = metaProps.makeFastMask("harvested");
      const isRocksC = metaProps.hasFast(propMaskRocks);
      const isHarvestedC = metaProps.hasFast(propMaskHarvested);
      const isGoldOre = metaProps.has("goldOreForRocks");
      const isSilverOre = metaProps.has("silverOreForRocks");
      const isIronOre = metaProps.has("ironOreForRocks");
      const isCopperOre = metaProps.has("copperOreForRocks");
      if (isRocksC) {
        const isRocksN = metaPropsN.hasFast(propMaskRocks);
        const isHarvestedN = metaPropsN.hasFast(propMaskHarvested);
        const isRocksE = metaPropsE.hasFast(propMaskRocks);
        const isHarvestedE = metaPropsE.hasFast(propMaskHarvested);
        const isRocksS = metaPropsS.hasFast(propMaskRocks);
        const isHarvestedS = metaPropsS.hasFast(propMaskHarvested);
        const isRocksW = metaPropsW.hasFast(propMaskRocks);
        const isHarvestedW = metaPropsW.hasFast(propMaskHarvested);
        const isRocksNE = metaPropsNE.hasFast(propMaskRocks);
        const isHarvestedNE = metaPropsNE.hasFast(propMaskHarvested);
        const isRocksSE = metaPropsSE.hasFast(propMaskRocks);
        const isHarvestedSE = metaPropsSE.hasFast(propMaskHarvested);
        const isRocksSW = metaPropsSW.hasFast(propMaskRocks);
        const isHarvestedSW = metaPropsSW.hasFast(propMaskHarvested);
        const isRocksNW = metaPropsNW.hasFast(propMaskRocks);
        const isHarvestedNW = metaPropsNW.hasFast(propMaskHarvested);
        visProps.enableBit(isHarvestedC ? "rockCrumbsC" : "rocksC");
        if (isRocksN) {
          visProps.enableBit(
            isHarvestedN || isHarvestedC ? "rockCrumbsN" : "rocksN"
          );
        }
        if (isRocksS) {
          visProps.enableBit(
            isHarvestedS || isHarvestedC ? "rockCrumbsS" : "rocksS"
          );
        }
        if (isRocksE) {
          visProps.enableBit(
            isHarvestedE || isHarvestedC ? "rockCrumbsE" : "rocksE"
          );
        }
        if (isRocksW) {
          visProps.enableBit(
            isHarvestedW || isHarvestedC ? "rockCrumbsW" : "rocksW"
          );
        }
        if (isRocksW && isRocksN && isRocksNW) {
          visProps.enableBit(
            isHarvestedW || isHarvestedN || isHarvestedNW || isHarvestedC ? "rockCrumbsNW" : "rocksNW"
          );
        }
        if (isRocksE && isRocksN && isRocksNE) {
          visProps.enableBit(
            isHarvestedE || isHarvestedN || isHarvestedNE || isHarvestedC ? "rockCrumbsNE" : "rocksNE"
          );
        }
        if (isRocksW && isRocksS && isRocksSW) {
          visProps.enableBit(
            isHarvestedW || isHarvestedS || isHarvestedSW || isHarvestedC ? "rockCrumbsSW" : "rocksSW"
          );
        }
        if (isRocksE && isRocksS && isRocksSE) {
          visProps.enableBit(
            isHarvestedE || isHarvestedS || isHarvestedSE || isHarvestedC ? "rockCrumbsSE" : "rocksSE"
          );
        }
        if (!isHarvestedC) {
          if (isRocksN && isRocksE && isRocksS && isRocksW && !isHarvestedN && !isHarvestedE && !isHarvestedS && !isHarvestedW) {
            visProps.enableBit("rocksCBig");
            if (isGoldOre) {
              visProps.enableBit("goldOreForBigRocks");
            }
            if (isSilverOre) {
              visProps.enableBit("silverOreForBigRocks");
            }
            if (isIronOre) {
              visProps.enableBit("ironOreForBigRocks");
            }
            if (isCopperOre) {
              visProps.enableBit("copperOreForBigRocks");
            }
          } else {
            if (isGoldOre) {
              visProps.enableBit("goldOreForRocks");
            }
            if (isSilverOre) {
              visProps.enableBit("silverOreForRocks");
            }
            if (isIronOre) {
              visProps.enableBit("ironOreForRocks");
            }
            if (isCopperOre) {
              visProps.enableBit("copperOreForRocks");
            }
          }
        }
      }
      const propMaskMaturePlant = metaProps.makeFastMask("maturePlant");
      const propMaskTreePine = metaProps.makeFastMask("treePine");
      if (metaProps.hasFast(propMaskTreePine) && !metaProps.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaProps.hasFast(propMaskMaturePlant) ? "Mature" : ""}C`
        );
      }
      if (metaPropsE.hasFast(propMaskTreePine) && !metaPropsE.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaPropsE.hasFast(propMaskMaturePlant) ? "Mature" : ""}E`
        );
      }
      if (metaPropsW.hasFast(propMaskTreePine) && !metaPropsW.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaPropsW.hasFast(propMaskMaturePlant) ? "Mature" : ""}W`
        );
      }
      if (metaPropsN.hasFast(propMaskTreePine) && !metaPropsN.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaPropsN.hasFast(propMaskMaturePlant) ? "Mature" : ""}N`
        );
      }
      if (metaPropsS.hasFast(propMaskTreePine) && !metaPropsS.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaPropsS.hasFast(propMaskMaturePlant) ? "Mature" : ""}S`
        );
      }
      if (metaPropsNE.hasFast(propMaskTreePine) && !metaPropsNE.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaPropsNE.hasFast(propMaskMaturePlant) ? "Mature" : ""}NE`
        );
      }
      if (metaPropsSW.hasFast(propMaskTreePine) && !metaPropsSW.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaPropsSW.hasFast(propMaskMaturePlant) ? "Mature" : ""}SW`
        );
      }
      if (metaPropsNW.hasFast(propMaskTreePine) && !metaPropsNW.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaPropsNW.hasFast(propMaskMaturePlant) ? "Mature" : ""}NW`
        );
      }
      if (metaPropsSE.hasFast(propMaskTreePine) && !metaPropsSE.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePine${metaPropsSE.hasFast(propMaskMaturePlant) ? "Mature" : ""}SE`
        );
      }
      if (metaProps.hasFast(propMaskTreePine) && metaProps.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treePineStump${metaProps.hasFast(propMaskMaturePlant) ? "Mature" : ""}`
        );
      }
      const propMaskTreeMaple = metaProps.makeFastMask("treeMaple");
      if (metaProps.hasFast(propMaskTreeMaple) && !metaProps.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaProps.hasFast(propMaskMaturePlant) ? "Mature" : ""}C`
        );
      }
      if (metaPropsE.hasFast(propMaskTreeMaple) && !metaPropsE.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaPropsE.hasFast(propMaskMaturePlant) ? "Mature" : ""}E`
        );
      }
      if (metaPropsW.hasFast(propMaskTreeMaple) && !metaPropsW.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaPropsW.hasFast(propMaskMaturePlant) ? "Mature" : ""}W`
        );
      }
      if (metaPropsN.hasFast(propMaskTreeMaple) && !metaPropsN.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaPropsN.hasFast(propMaskMaturePlant) ? "Mature" : ""}N`
        );
      }
      if (metaPropsS.hasFast(propMaskTreeMaple) && !metaPropsS.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaPropsS.hasFast(propMaskMaturePlant) ? "Mature" : ""}S`
        );
      }
      if (metaPropsNE.hasFast(propMaskTreeMaple) && !metaPropsNE.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaPropsNE.hasFast(propMaskMaturePlant) ? "Mature" : ""}NE`
        );
      }
      if (metaPropsSW.hasFast(propMaskTreeMaple) && !metaPropsSW.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaPropsSW.hasFast(propMaskMaturePlant) ? "Mature" : ""}SW`
        );
      }
      if (metaPropsNW.hasFast(propMaskTreeMaple) && !metaPropsNW.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaPropsNW.hasFast(propMaskMaturePlant) ? "Mature" : ""}NW`
        );
      }
      if (metaPropsSE.hasFast(propMaskTreeMaple) && !metaPropsSE.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMaple${metaPropsSE.hasFast(propMaskMaturePlant) ? "Mature" : ""}SE`
        );
      }
      if (metaProps.hasFast(propMaskTreeMaple) && metaProps.hasFast(propMaskHarvested)) {
        visProps.enableBit(
          `treeMapleStump${metaProps.hasFast(propMaskMaturePlant) ? "Mature" : ""}`
        );
      }
      return visProps;
    }
  }
  sampleVisIds(x, y, time = "0") {
    const key = `${x}:${y}:${time}`;
    if (!this._bottomAndTopIdsCache.has(key)) {
      const visProps = this.sampleVisProps(x, y, time);
      const bottomAndTopIds = this.sampleVisIdsByVisProps(visProps);
      this._bottomAndTopIdsCache.set(key, bottomAndTopIds);
      return bottomAndTopIds;
    } else {
      return this._bottomAndTopIdsCache.get(key);
    }
  }
  sampleVisIdsByVisProps(visProps) {
    const idBottom = this._tileMaker.getTileId(visProps.bytes);
    const visProps2 = visProps.bytes.slice();
    visProps2[0] |= 1;
    const idTop = this._tileMaker.getTileId(visProps2);
    const bottomAndTopIds = {
      idBottom,
      idTop
    };
    return bottomAndTopIds;
  }
  sampleVis(x, y, time = "0") {
    return this.sampleVisIds(x, y, time);
  }
  updateMeta() {
    if (this.dirtyMeta.size > 0) {
      for (const v2 of this.dirtyMeta) {
        const coords = v2.split(":").map((coord) => Number.parseInt(coord, 10));
        const x = coords[0];
        const y = coords[1];
        const meta = this.sampleMeta(x, y);
        this.validateMeta(meta, x, y);
        this.emitDirtyMetaProcessed(x, y, meta);
        for (let cY = -1; cY <= 2; cY++) {
          for (let cX = -1; cX <= 1; cX++) {
            const visKey = `${x + cX}:${y + cY}`;
            this.dirtyVis.add(visKey);
            this._bottomAndTopIdsCache.delete(visKey + ":0");
            this._visPropsCache.delete(visKey + ":0");
          }
        }
      }
      this.dirtyMeta.clear();
      return true;
    } else {
      return false;
    }
  }
  onDirtyMetaProcessed(cb) {
    this._dirtyMetaProcessedListeners.push(cb);
  }
  emitDirtyMetaProcessed(x, y, meta) {
    for (const cb of this._dirtyMetaProcessedListeners) {
      cb(x, y, meta);
    }
  }
  updateVis(bottomPointsGeo, topPointsGeo) {
    if (this._offsetsDirty) {
      this._offsetsDirty = false;
      if (this._offsetX !== this._offsetXOld) {
        let xMin = this._offsetX < this._offsetXOld ? this._offsetX : this._offsetXOld;
        let xMax = this._offsetX > this._offsetXOld ? this._offsetX : this._offsetXOld;
        if (this._offsetX === xMax) {
          xMin += this._viewWidthInTiles;
          xMax += this._viewWidthInTiles;
        }
        for (let iCol = xMin; iCol < xMax; iCol++) {
          for (let iRow = 0; iRow < this._viewHeightInTiles; iRow++) {
            const x = iCol;
            const y = this._offsetY + iRow;
            const key = `${x}:${y}`;
            this.dirtyVis.add(key);
          }
        }
      }
      if (this._offsetY !== this._offsetYOld) {
        let yMin = this._offsetY < this._offsetYOld ? this._offsetY : this._offsetYOld;
        let yMax = this._offsetY > this._offsetYOld ? this._offsetY : this._offsetYOld;
        if (this._offsetY === yMax) {
          yMin += this._viewHeightInTiles;
          yMax += this._viewHeightInTiles;
        }
        for (let iRow = yMin; iRow < yMax; iRow++) {
          for (let iCol = 0; iCol < this._viewWidthInTiles; iCol++) {
            const x = this._offsetX + iCol;
            const y = iRow;
            const key = `${x}:${y}`;
            this.dirtyVis.add(key);
          }
        }
      }
      this._offsetXOld = this._offsetX;
      this._offsetYOld = this._offsetY;
    }
    if (this.indicesOfNewlyMadeTiles.size > 0) {
      for (let iCol = 0; iCol < this._viewWidthInTiles; iCol++) {
        for (let iRow = 0; iRow < this._viewHeightInTiles; iRow++) {
          const x = this._offsetX + iCol;
          const y = this._offsetY + iRow;
          const time = this.sampleMeta(x, y).has("water") ? __animFrameTimes[this._animFrame % __animFrameTimes.length] : void 0;
          const sampledVis = this.sampleVisIds(x, y, time);
          if (this.indicesOfNewlyMadeTiles.has(sampledVis.idBottom)) {
            this.indicesOfMadeTiles.add(sampledVis.idBottom);
            this.dirtyVis.add(`${x}:${y}`);
          }
          if (this.indicesOfNewlyMadeTiles.has(sampledVis.idTop)) {
            this.dirtyVis.add(`${x}:${y}`);
          }
        }
      }
      this.indicesOfNewlyMadeTiles.forEach(
        (index) => this.indicesOfMadeTiles.add(index)
      );
      this.indicesOfNewlyMadeTiles.clear();
    }
    for (let iCol = 0; iCol < this._viewWidthInTiles; iCol++) {
      for (let iRow = 0; iRow < this._viewHeightInTiles; iRow++) {
        const x = this._offsetX + iCol;
        const y = this._offsetY + iRow;
        const meta = this.sampleMeta(x, y);
        if (meta.has("water")) {
          this.dirtyVis.add(`${x}:${y}`);
        }
      }
    }
    this.indicesOfNewlyMadeTiles.forEach(
      (index) => this.indicesOfMadeTiles.add(index)
    );
    this.indicesOfNewlyMadeTiles.clear();
    this.dirty = false;
    if (this.dirtyVis.size > 0) {
      const xyBottomAttr = bottomPointsGeo.getAttribute("xy");
      const xyBottomArr = xyBottomAttr.array;
      const idBottomAttr = bottomPointsGeo.getAttribute("id");
      const idBottomArr = idBottomAttr.array;
      const xyTopAttr = topPointsGeo.getAttribute("xy");
      const xyTopArr = xyTopAttr.array;
      const idTopAttr = topPointsGeo.getAttribute("id");
      const idTopArr = idTopAttr.array;
      const currentFrame = __animFrameTimes[this._animFrame % __animFrameTimes.length];
      for (const v2 of this.dirtyVis) {
        const coords = v2.split(":").map((coord) => Number.parseInt(coord, 10));
        const i = bottomPointsGeo.drawRange.count;
        const i2 = i * 2;
        const x = coords[0];
        const y = coords[1];
        const xWrapped = wrap(x, 0, this._viewWidthInTiles);
        const yWrapped = wrap(y, 0, this._viewHeightInTiles);
        xyBottomArr[i2] = xWrapped;
        xyBottomArr[i2 + 1] = yWrapped;
        xyBottomArr[i2 + 2] = xWrapped;
        xyBottomArr[i2 + 3] = yWrapped + 1;
        xyTopArr[i2] = xWrapped;
        xyTopArr[i2 + 1] = yWrapped;
        xyTopArr[i2 + 2] = xWrapped;
        xyTopArr[i2 + 3] = yWrapped + 1;
        const frame = this.sampleMeta(x, y).has("water") ? currentFrame : void 0;
        const sampleDown = this.sampleVisIds(x, y - 1);
        const sampleCenter = this.sampleVisIds(x, y, frame);
        const sampleUp = this.sampleVisIds(x, y + 1);
        idBottomArr[i] = this.indicesOfMadeTiles.has(sampleCenter.idBottom) ? sampleCenter.idBottom : 0;
        idBottomArr[i + 1] = this.indicesOfMadeTiles.has(sampleUp.idBottom) ? sampleUp.idBottom : 0;
        idTopArr[i] = this.indicesOfMadeTiles.has(sampleDown.idTop) ? sampleDown.idTop : 0;
        idTopArr[i + 1] = this.indicesOfMadeTiles.has(sampleCenter.idTop) ? sampleCenter.idTop : 0;
        bottomPointsGeo.drawRange.count += 2;
        topPointsGeo.drawRange.count += 2;
      }
      xyBottomAttr.needsUpdate = true;
      idBottomAttr.needsUpdate = true;
      xyTopAttr.needsUpdate = true;
      idTopAttr.needsUpdate = true;
      this.dirtyVis.clear();
      return true;
    } else {
      return false;
    }
  }
};

// src/rendering/tileMaker/mapTileMaker/MapTileMaker.ts
import {
  BoxBufferGeometry as BoxBufferGeometry2,
  Mesh as Mesh18,
  Object3D as Object3D19,
  Raycaster as Raycaster3,
  SphereGeometry,
  TorusKnotBufferGeometry,
  Vector3 as Vector315,
  Vector4 as Vector44
} from "three";

// src/geometries/FibonacciSphereGeometry.ts
import triangulate from "delaunay-triangulate";
import { BufferAttribute as BufferAttribute2, BufferGeometry, Vector3 as Vector33 } from "three";
var FibonacciSphereGeometry = class extends BufferGeometry {
  constructor(radius, total3) {
    super();
    radius = radius !== void 0 ? radius : 20;
    total3 = total3 !== void 0 ? total3 : 20;
    const verticeArrays = [];
    const vertices = [];
    let i;
    let hash;
    let uniqueIndex;
    for (i = 0; i < total3; i++) {
      const longLat = pointOnSphereFibonacci(i, total3);
      const long = longLat[0];
      const lat = longLat[1];
      const vertArr = [
        Math.cos(lat) * Math.cos(long) * radius,
        Math.sin(lat) * radius,
        Math.cos(lat) * Math.sin(long) * radius
      ];
      verticeArrays.push(vertArr);
      vertices.push(new Vector33().fromArray(vertArr));
    }
    const tetras = triangulate(verticeArrays);
    const triangles = [];
    for (i = 0; i < tetras.length; i++) {
      const tetra = tetras[i];
      triangles.push(tetra[0], tetra[1], tetra[3]);
      triangles.push(tetra[0], tetra[2], tetra[1]);
      triangles.push(tetra[0], tetra[3], tetra[2]);
      triangles.push(tetra[3], tetra[1], tetra[2]);
    }
    const uniques = [];
    const counts = [];
    let tempTri = [];
    function uniqueTriOrderSort(a, b) {
      return a - b;
    }
    for (i = 0; i < triangles.length; i += 3) {
      tempTri[0] = triangles[i];
      tempTri[1] = triangles[i + 1];
      tempTri[2] = triangles[i + 2];
      tempTri = tempTri.sort(uniqueTriOrderSort);
      hash = tempTri[0] + "," + tempTri[1] + "," + tempTri[2];
      uniqueIndex = uniques.indexOf(hash);
      if (uniqueIndex === -1) {
        uniqueIndex = uniques.length;
        uniques.push(hash);
        counts.push(0);
      }
      counts[uniqueIndex]++;
    }
    const indices = [];
    for (i = 0; i < triangles.length; i += 3) {
      tempTri[0] = triangles[i];
      tempTri[1] = triangles[i + 1];
      tempTri[2] = triangles[i + 2];
      tempTri = tempTri.sort(uniqueTriOrderSort);
      hash = tempTri[0] + "," + tempTri[1] + "," + tempTri[2];
      uniqueIndex = uniques.indexOf(hash);
      if (counts[uniqueIndex] === 1) {
        indices.push(triangles[i]);
        indices.push(triangles[i + 2]);
        indices.push(triangles[i + 1]);
      }
    }
    const positionArray = new Float32Array(verticeArrays.length * 3);
    for (let i2 = 0; i2 < verticeArrays.length; i2++) {
      const i3 = i2 * 3;
      const vertArr = verticeArrays[i2];
      positionArray[i3] = vertArr[0];
      positionArray[i3 + 1] = vertArr[1];
      positionArray[i3 + 2] = vertArr[2];
    }
    this.setAttribute("position", new BufferAttribute2(positionArray, 3));
    this.setIndex(indices);
    this.computeVertexNormals();
  }
};

// src/geometries/GrassGeometry.ts
import {
  BufferGeometry as BufferGeometry4,
  Float32BufferAttribute,
  Mesh as Mesh3,
  MeshBasicMaterial,
  Object3D as Object3D4,
  Uint16BufferAttribute as Uint16BufferAttribute2,
  Vector3 as Vector36
} from "three";

// src/utils/geometry.ts
import {
  PlaneGeometry,
  SphereBufferGeometry,
  Vector3 as Vector34
} from "three";
function getChamferedBoxGeometry(width, height, depth, chamfer = 5e-3) {
  const geo = new SphereBufferGeometry(0.02, 8, 5, Math.PI * 0.125);
  const posArr = geo.attributes.position.array;
  const normArr = geo.attributes.normal.array;
  const tempVec = new Vector34();
  const tempPos = new Vector34();
  const halfWidth = width * 0.5 - chamfer;
  const halfHeight = height * 0.5 - chamfer;
  const halfDepth = depth * 0.5 - chamfer;
  for (let i3 = 0; i3 < normArr.length; i3 += 3) {
    tempVec.fromArray(normArr, i3);
    tempPos.fromArray(posArr, i3);
    tempVec.round();
    if (tempVec.y === 1) {
      tempVec.set(0, 1, 0);
    }
    if (tempVec.y === -1) {
      tempVec.set(0, -1, 0);
    }
    tempVec.toArray(normArr, i3);
    tempVec.multiplyScalar(chamfer);
    tempVec.x += halfWidth * inferDirection(tempPos.x);
    tempVec.y += halfHeight * inferDirection(tempPos.y);
    tempVec.z += halfDepth * inferDirection(tempPos.z);
    tempVec.toArray(posArr, i3);
  }
  return geo;
}
var __cachedOffsetChamferedBoxGeometry = /* @__PURE__ */ new Map();
var __cachedChamferedBoxGeometry = /* @__PURE__ */ new Map();
function getCachedChamferedBoxGeometry(width, height, depth, chamfer = 5e-3, offsetX = 0, offsetY = 0, offsetZ = 0) {
  const key = `${width};${height};${depth};${chamfer};`;
  if (!__cachedChamferedBoxGeometry.has(key)) {
    __cachedChamferedBoxGeometry.set(
      key,
      getChamferedBoxGeometry(width, height, depth, chamfer)
    );
  }
  if (offsetX === 0 && offsetY === 0 && offsetZ === 0) {
    return __cachedChamferedBoxGeometry.get(key);
  }
  const key2 = `${key}${offsetX};${offsetY};${offsetZ}`;
  if (!__cachedOffsetChamferedBoxGeometry.has(key2)) {
    const geo = __cachedChamferedBoxGeometry.get(key);
    const geoOffset = __cachedChamferedBoxGeometry.get(key).clone();
    geoOffset.attributes.uv = geo.attributes.uv;
    geoOffset.attributes.normal = geo.attributes.normal;
    const posArr = geoOffset.attributes.position.array;
    for (let i3 = 0; i3 < posArr.length; i3 += 3) {
      posArr[i3] += offsetX;
      posArr[i3 + 1] += offsetY;
      posArr[i3 + 2] += offsetZ;
    }
    __cachedOffsetChamferedBoxGeometry.set(key2, geoOffset);
  }
  return __cachedOffsetChamferedBoxGeometry.get(key2);
}
var __cachedSphereGeometry = /* @__PURE__ */ new Map();
function getCachedSphereGeometry(radius, segsX, segsY) {
  const key = `${radius};${segsX};${segsY}`;
  if (!__cachedSphereGeometry.has(key)) {
    __cachedSphereGeometry.set(
      key,
      new SphereBufferGeometry(radius, segsX, segsY)
    );
  }
  return __cachedSphereGeometry.get(key);
}
var __sharedRectangleGeometry;
function getSharedRectangleGeometry() {
  if (!__sharedRectangleGeometry) {
    __sharedRectangleGeometry = new PlaneGeometry(2, 2);
  }
  return __sharedRectangleGeometry;
}

// src/utils/mergeMeshes.ts
import {
  BufferAttribute as BufferAttribute3,
  BufferGeometry as BufferGeometry3,
  Matrix4,
  Mesh as Mesh2,
  Uint16BufferAttribute,
  Vector2 as Vector22,
  Vector3 as Vector35
} from "three";
import { Object3D as Object3D3 } from "three";
var __tempVec3 = new Vector35();
var __tempVec2 = new Vector22();
var __tempMat4 = new Matrix4();
function mergeMeshes(pivot) {
  const pivotClone = new Object3D3();
  const similarMeshesByMat = /* @__PURE__ */ new Map();
  pivot.updateMatrixWorld(true);
  pivot.traverse((n) => {
    if (n instanceof Mesh2) {
      if (!similarMeshesByMat.has(n.material)) {
        similarMeshesByMat.set(n.material, [n]);
      } else {
        similarMeshesByMat.get(n.material).push(n);
      }
    }
  });
  for (const mat of similarMeshesByMat.keys()) {
    const mergedGeo = new BufferGeometry3();
    const attrNames = Object.keys(
      similarMeshesByMat.get(mat)[0].geometry.attributes
    );
    const similarMeshes = similarMeshesByMat.get(mat);
    for (const attrName of attrNames) {
      const totalCount = similarMeshes.reduce((p, c, i) => {
        return p + c.geometry.getAttribute(attrName).count;
      }, 0);
      const itemSize = similarMeshes[0].geometry.getAttribute(attrName).itemSize;
      const buffArr = new Float32Array(totalCount * itemSize);
      let cursor = 0;
      for (const m of similarMeshes) {
        const sourceAttr = m.geometry.getAttribute(attrName);
        const sourceArr = sourceAttr.array;
        switch (attrName) {
          case "position":
            for (let i = 0; i < sourceAttr.count; i++) {
              __tempVec3.fromArray(sourceArr, i * itemSize);
              __tempVec3.applyMatrix4(m.matrixWorld);
              __tempVec3.toArray(buffArr, (cursor + i) * itemSize);
            }
            break;
          case "normal":
            __tempMat4.extractRotation(m.matrixWorld);
            for (let i = 0; i < sourceAttr.count; i++) {
              __tempVec3.fromArray(sourceArr, i * itemSize);
              __tempVec3.applyMatrix4(__tempMat4);
              __tempVec3.toArray(buffArr, (cursor + i) * itemSize);
            }
            break;
          case "uv":
            for (let i = 0; i < sourceAttr.count; i++) {
              __tempVec2.fromArray(sourceArr, i * itemSize);
              __tempVec2.toArray(buffArr, (cursor + i) * itemSize);
            }
            break;
        }
        cursor += sourceAttr.count;
      }
      mergedGeo.setAttribute(attrName, new BufferAttribute3(buffArr, itemSize));
    }
    try {
      const indexCount = similarMeshes.reduce((p, c, i) => {
        return p + c.geometry.index.count;
      }, 0);
      const indexArr = new Uint16Array(indexCount);
      let indexOffset = 0;
      let vertexOffset = 0;
      for (const m of similarMeshes) {
        const sourceIndices = m.geometry.index;
        const sourceArr = sourceIndices.array;
        for (let i = 0; i < sourceArr.length; i++) {
          indexArr[i + indexOffset] = sourceArr[i] + vertexOffset;
        }
        vertexOffset += m.geometry.getAttribute("position").count;
        indexOffset += sourceIndices.count;
      }
      const mergedIndices = new Uint16BufferAttribute(indexArr, 1);
      mergedGeo.setIndex(mergedIndices);
    } catch (e) {
      debugger;
    }
    const mesh = new Mesh2(mergedGeo, mat);
    mesh.frustumCulled = false;
    pivotClone.add(mesh);
  }
  return pivotClone;
}

// src/geometries/GrassGeometry.ts
var grassScale = 1;
var GrassGeometry = class extends BufferGeometry4 {
  constructor(count = 200, balls = false) {
    super();
    const pos = new Vector36();
    const offset = new Vector36();
    if (balls) {
      const pivot = new Object3D4();
      const sphereProto = new Mesh3(
        getCachedSphereGeometry(4, 7, 5),
        new MeshBasicMaterial()
      );
      for (let i = 0; i < count; i++) {
        const angle = detRandGrass(-Math.PI, Math.PI);
        offset.x = Math.cos(angle) * 2 * grassScale;
        offset.z = Math.sin(angle) * 2 * grassScale;
        const i9 = i * 9;
        const polarAngle = detRandGrass(-Math.PI, Math.PI);
        const polarDistance = (1 - Math.pow(1 - detRandGrass(0, 1), 2)) * 13;
        pos.set(
          Math.cos(polarAngle) * polarDistance,
          detRandGrass(-3, -1),
          Math.sin(polarAngle) * polarDistance
        );
        const sphere = sphereProto.clone();
        pivot.add(sphere);
        sphere.position.copy(pos);
      }
      const merged = mergeMeshes(pivot);
      const mergedGeo = merged.children[0].geometry;
      this.setAttribute("position", mergedGeo.getAttribute("position"));
      this.setAttribute("normal", mergedGeo.getAttribute("normal"));
      this.setIndex(mergedGeo.getIndex());
    } else {
      const itemSize = 3;
      const posArr = new Float32Array(count * 3 * itemSize);
      const normalArr = new Float32Array(count * 3 * itemSize);
      const posA = new Vector36();
      const posB = new Vector36();
      const normalUp = new Vector36(0, 1, 0);
      const normal = new Vector36(0, 1, 0);
      const ab = new Vector36(0, 1, 0);
      for (let i = 0; i < count; i++) {
        const angle = detRandGrass(-Math.PI, Math.PI);
        offset.x = Math.cos(angle) * 2 * grassScale;
        offset.z = Math.sin(angle) * 2 * grassScale;
        const i9 = i * 9;
        const polarAngle = detRandGrass(-Math.PI, Math.PI);
        const polarDistance = (1 - Math.pow(1 - detRandGrass(0, 1), 2)) * 15;
        pos.set(
          Math.cos(polarAngle) * polarDistance,
          0,
          Math.sin(polarAngle) * polarDistance
        );
        posA.copy(pos).add(offset);
        posB.copy(pos).sub(offset);
        pos.y += detRandGrass(3, 5) * grassScale;
        posA.toArray(posArr, i9);
        pos.toArray(posArr, i9 + 3);
        posB.toArray(posArr, i9 + 6);
        normal.subVectors(posA, posB);
        ab.subVectors(pos, posA);
        normal.cross(ab);
        normal.normalize();
        normalUp.set(0, 1, 0);
        normalUp.lerp(normal, 0);
        normalUp.normalize();
        normalUp.toArray(normalArr, i9);
        normalUp.toArray(normalArr, i9 + 6);
        normalUp.lerp(normal, 0.1);
        normalUp.normalize();
        normalUp.toArray(normalArr, i9 + 3);
      }
      const indexArr = new Uint16Array(count * 3);
      const count3 = count * 3;
      for (let i = 0; i < count3; i++) {
        indexArr[i] = i;
      }
      const posAttr = new Float32BufferAttribute(posArr, itemSize);
      this.setAttribute("position", posAttr);
      const normalAttr = new Float32BufferAttribute(normalArr, itemSize);
      this.setAttribute("normal", normalAttr);
      const index = new Uint16BufferAttribute2(indexArr, 1);
      this.setIndex(index);
    }
  }
};

// src/geometries/PyramidGeometry.ts
import { BufferGeometry as BufferGeometry5, Vector3 as Vector37 } from "three";
var PyramidGeometry = class extends BufferGeometry5 {
  constructor() {
    super();
    const vc = new Vector37(0, 1, 0);
    const vlt = new Vector37(-0.5, 0, -0.5);
    const vlb = new Vector37(-0.5, 0, 0.5);
    const vrb = new Vector37(0.5, 0, 0.5);
    const vrt = new Vector37(0.5, 0, -0.5);
    const pts = [vc, vlt, vlb, vc, vlb, vrb, vc, vrb, vrt, vc, vrt, vlt];
    this.setFromPoints(pts);
    this.computeVertexNormals();
  }
};

// src/helpers/materials/materialLib.ts
import {
  Color,
  DoubleSide as DoubleSide4,
  Material as Material3,
  Mesh as Mesh4,
  MeshDepthMaterial,
  MeshStandardMaterial,
  Vector4 as Vector43
} from "three";

// src/materials/BasicVec4MeshMaterial/index.ts
import { DoubleSide, RawShaderMaterial, Uniform, Vector4 } from "three";

// src/utils/jsUtils.ts
function NOOP() {
}
function buildParameters(defaults, options) {
  if (defaults === options) {
    return defaults;
  }
  const final = {};
  for (const key in defaults) {
    if (defaults[key] !== void 0) {
      final[key] = defaults[key];
    }
  }
  for (const key in options) {
    if (options[key] !== void 0) {
      final[key] = options[key];
    }
  }
  return final;
}
function defaultNumber(val, defVal) {
  return val !== void 0 ? val : defVal;
}

// src/materials/BasicVec4MeshMaterial/frag.glsl
var frag_default = `precision highp float;
uniform vec4 color;
#ifdef USE_VERTEX_COLOR
    varying vec3 vColor;
#endif

void main() {
	gl_FragColor = color;
    #ifdef USE_VERTEX_COLOR
        gl_FragColor.rgb *= vColor;
    #endif
}`;

// src/materials/BasicVec4MeshMaterial/vert.glsl
var vert_default = `precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;

#ifdef USE_VERTEX_COLOR
    attribute vec3 color;
    varying vec3 vColor;
#endif

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
 
    #ifdef USE_VERTEX_COLOR
        vColor = color;
    #endif
}`;

// src/materials/BasicVec4MeshMaterial/index.ts
var __defaultParams = {
  data: new Vector4(0.5, 0.5, 0.5, 0.5),
  wireframe: false,
  visible: true
};
var BasicVec4MeshMaterial = class extends RawShaderMaterial {
  constructor(options = {}) {
    const params = buildParameters(__defaultParams, options);
    const uniforms = {
      color: new Uniform(params.data)
    };
    const defines = {};
    if (params.vertexColors) {
      defines.USE_VERTEX_COLOR = true;
    }
    super({
      defines,
      uniforms,
      vertexShader: vert_default,
      fragmentShader: frag_default,
      // alphaTest: 0.5,
      // transparent: true,
      depthWrite: true,
      depthTest: true,
      side: DoubleSide,
      wireframe: params.wireframe,
      visible: params.visible
    });
  }
};

// src/materials/HeightMeshMaterial/index.ts
import { DoubleSide as DoubleSide2, RawShaderMaterial as RawShaderMaterial2, Uniform as Uniform2, Vector4 as Vector42 } from "three";

// src/materials/HeightMeshMaterial/frag.glsl
var frag_default2 = `precision highp float;
uniform vec4 color;
varying float vHeight;


void main() {
	gl_FragColor = color;
	gl_FragColor.HEIGHT_CHANNEL = vHeight * 0.5;
}`;

// src/materials/HeightMeshMaterial/vert.glsl
var vert_default2 = `precision highp float;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
varying float vHeight;

void main() {
    vec4 pos = vec4( position, 1.0 );
    vec4 mPosition = modelMatrix * pos;
    vec4 mvPosition = modelViewMatrix * pos;
    gl_Position = projectionMatrix * mvPosition;
    vHeight = mPosition.y / 32.0;
}`;

// src/materials/HeightMeshMaterial/index.ts
var __defaultParams2 = {
  data: new Vector42(0.5, 0.5, 0.5, 0.5),
  heightChannel: "b",
  wireframe: false,
  visible: true
};
var HeightMeshMaterial = class extends RawShaderMaterial2 {
  constructor(options = {}) {
    const params = buildParameters(__defaultParams2, options);
    const uniforms = {
      color: new Uniform2(params.data)
    };
    const defines = {
      HEIGHT_CHANNEL: params.heightChannel
    };
    super({
      uniforms,
      defines,
      vertexShader: vert_default2,
      fragmentShader: frag_default2,
      depthWrite: true,
      depthTest: true,
      side: DoubleSide2,
      wireframe: params.wireframe,
      visible: params.visible
    });
  }
};

// src/materials/WorldNormalMeshMaterial/index.ts
import { DoubleSide as DoubleSide3, Matrix3, RawShaderMaterial as RawShaderMaterial3, Uniform as Uniform3 } from "three";

// src/materials/WorldNormalMeshMaterial/frag.glsl
var frag_default3 = `precision highp float;
varying vec4 vColor;


void main() {
	gl_FragColor = vColor;
}`;

// src/materials/WorldNormalMeshMaterial/vert.glsl
var vert_default3 = `precision highp float;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 uModelNormalMatrix;
// uniform mat3 normalMatrix;
attribute vec3 normal;
attribute vec3 position;
varying vec4 vColor;

void main() {
    vec4 pos = vec4( position, 1.0 );
    vec3 mNormal = normalize(uModelNormalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * pos;
    gl_Position = projectionMatrix * mvPosition;
    vColor = vec4(mNormal * 0.5 + 0.5, 1.0);
}`;

// src/materials/WorldNormalMeshMaterial/index.ts
var __defaultParams3 = {
  wireframe: false,
  visible: true
};
var WorldNormalMeshMaterial = class extends RawShaderMaterial3 {
  constructor(options = {}) {
    const modelNormalMatrix = new Matrix3();
    modelNormalMatrix.elements[0] = Math.random();
    modelNormalMatrix.elements[1] = Math.random();
    modelNormalMatrix.elements[2] = Math.random();
    modelNormalMatrix.elements[3] = Math.random();
    modelNormalMatrix.elements[4] = Math.random();
    const params = buildParameters(__defaultParams3, options);
    const uniforms = {
      uModelNormalMatrix: new Uniform3(modelNormalMatrix)
    };
    super({
      uniforms,
      vertexShader: vert_default3,
      fragmentShader: frag_default3,
      depthWrite: true,
      depthTest: true,
      side: DoubleSide3,
      wireframe: params.wireframe,
      visible: params.visible
    });
    this.modelNormalMatrix = this.uniforms.uModelNormalMatrix.value;
  }
};

// src/helpers/typeHelpers.ts
function makeSafetyCheckFromConstStringArray(arr) {
  return function safe(x) {
    return Array.prototype.includes.call(arr, x);
  };
}

// src/helpers/materials/materialLib.ts
var CuratedMaterialTypeStrings = [
  "invisible",
  "ironBlack",
  "ground",
  "brick",
  "gold",
  "silver",
  "iron",
  "copper",
  "mortar",
  "drywall",
  "floor",
  "wood",
  "woodMaple",
  "bark",
  "barkMaple",
  "skin",
  "plastic",
  "grass",
  "bush",
  "leafMaple",
  "pineNeedle",
  "berry",
  "pants",
  "pantsRed",
  "rock",
  "cyberGlow",
  "cyberPanel",
  "water",
  "fleeceWhite",
  "fleeceBlack",
  "sheepNose",
  "shinyBlack",
  "pitchBlack",
  "zombieSkin",
  "bone",
  "snow"
];
var isCuratedMaterial = makeSafetyCheckFromConstStringArray(
  CuratedMaterialTypeStrings
);
var MaterialPassTypeStrings = [
  "beauty",
  "normals",
  "depth",
  "customColor",
  "customEmissive",
  // 'customNormal',
  "customRoughnessMetalnessHeight",
  "customTopDownHeight",
  "pointLights"
];
var isMaterialPass = makeSafetyCheckFromConstStringArray(
  MaterialPassTypeStrings
);
var standardMaterialParamLib = {
  invisible: {
    roughness: 1,
    color: new Color(1, 0, 0),
    visible: false
  },
  ground: {
    roughness: 1,
    color: new Color(1, 1, 1),
    vertexColors: true
  },
  brick: {
    roughness: 1,
    color: new Color(0.5, 0.2, 0.15),
    metalness: 0.3
  },
  gold: {
    roughness: 0.3,
    color: new Color(0.5, 0.4, 0),
    metalness: 1,
    emissive: new Color(0.05, 0, 0)
  },
  silver: {
    roughness: 0.3,
    color: new Color(0.5, 0.5, 0.5),
    metalness: 1,
    emissive: new Color(0, 0, 0)
  },
  iron: {
    roughness: 0.9,
    color: new Color(0.5, 0.1, 0),
    metalness: 1,
    emissive: new Color(0, 0, 0)
  },
  copper: {
    roughness: 0.9,
    color: new Color(0.1, 0.5, 0.2),
    metalness: 1,
    emissive: new Color(0, 0, 0)
  },
  ironBlack: {
    roughness: 0.1,
    color: new Color(0.01, 0.01, 0.015),
    metalness: 0.9
  },
  mortar: {
    roughness: 1,
    color: new Color(0.2, 0.2, 0.2)
  },
  drywall: {
    roughness: 1,
    color: new Color(0.8, 0.8, 0.8)
  },
  floor: {
    roughness: 1,
    color: new Color(0.4, 0.32, 0.25)
  },
  wood: {
    roughness: 1,
    color: new Color(0.6, 0.4, 0.3)
  },
  woodMaple: {
    roughness: 1,
    color: new Color(0.6, 0.4, 0.3).addScalar(0.1)
  },
  bark: {
    roughness: 1,
    metalness: 0.8,
    color: new Color(0.6, 0.4, 0.3).addScalar(-0.3)
  },
  barkMaple: {
    roughness: 1,
    metalness: 0.8,
    color: new Color(0.6, 0.4, 0.3).addScalar(-0.15)
  },
  skin: {
    roughness: 1,
    color: new Color(0.8, 0.4, 0.4)
  },
  plastic: {
    roughness: 0.5,
    color: new Color(0.2, 0.25, 0.4)
  },
  water: {
    roughness: 0.1,
    metalness: 0.05,
    color: new Color(1, 1, 1),
    vertexColors: true
  },
  rock: {
    roughness: 0.85,
    metalness: 0.95,
    color: new Color(0.2, 0.25, 0.2)
  },
  grass: {
    roughness: 1,
    metalness: 0.95,
    color: new Color(0.2, 0.55, 0.2),
    // emissive: new Color(0.2, 0.55, 0.05).multiplyScalar(0.05),
    wireframe: true,
    side: DoubleSide4,
    opacity: 0.5
  },
  bush: {
    roughness: 1,
    metalness: 0.95,
    color: new Color(0.125, 0.3, 0.125),
    // emissive: new Color(0.2, 0.55, 0.05).multiplyScalar(0.05),
    // wireframe: true,
    opacity: 0.5
  },
  leafMaple: {
    roughness: 1,
    metalness: 0.95,
    color: new Color(0.75, 0.5, 0.125),
    // emissive: new Color(0.2, 0.55, 0.05).multiplyScalar(0.05),
    // wireframe: true,
    opacity: 0.5
  },
  pineNeedle: {
    roughness: 0.8,
    metalness: 0.95,
    color: new Color(0.1, 0.3, 0.1),
    // emissive: new Color(0.1, 0.45, 0.05).multiplyScalar(0.05),
    // wireframe: true,
    opacity: 0.5
  },
  berry: {
    roughness: 0.25,
    metalness: 0.6,
    color: new Color(0.6, 0.05, 0.1325),
    opacity: 0.25
    // wireframe: true
  },
  pants: {
    roughness: 0.95,
    metalness: 0.95,
    color: new Color(0.1, 0.15, 0.4)
  },
  pantsRed: {
    roughness: 0.65,
    color: new Color(0.5, 0.1, 0.1)
  },
  cyberGlow: {
    roughness: 0.65,
    color: new Color(0.2, 0.2, 0.2),
    emissive: new Color(0.05, 0.55, 0.15)
  },
  cyberPanel: {
    roughness: 0.05,
    metalness: 0.7,
    color: new Color(0.1, 0.1, 0.1)
  },
  fleeceWhite: {
    roughness: 1,
    metalness: 0,
    color: new Color(1, 0.9, 0.8)
  },
  fleeceBlack: {
    roughness: 1,
    metalness: 0,
    color: new Color(0.2, 0.2, 0.2)
  },
  sheepNose: {
    roughness: 0.5,
    metalness: 0.5,
    color: new Color(1, 0.4, 0.4)
  },
  shinyBlack: {
    roughness: 0.3,
    color: new Color(0.1, 0.1, 0.1)
  },
  pitchBlack: {
    roughness: 0,
    metalness: 0,
    color: new Color(0, 0, 0)
  },
  zombieSkin: {
    roughness: 1,
    metalness: 0.95,
    color: new Color(0.1, 0.3, -0.1),
    // emissive: new Color(0.1, 0.45, 0.05).multiplyScalar(0.05),
    // wireframe: true,
    opacity: 0.5
  },
  bone: {
    roughness: 4,
    metalness: 0.95,
    color: new Color(0.5 * 2, 0.45 * 2, 0.3 * 2)
    // emissive: new Color(0.1, 0.45, 0.05).multiplyScalar(0.05),
    // wireframe: true,
  },
  snow: {
    roughness: 4,
    metalness: 0,
    color: new Color(2, 2, 2)
    // emissive: new Color(0.1, 0.45, 0.05).multiplyScalar(0.05),
    // wireframe: true,
  }
};
var materialCache = /* @__PURE__ */ new Map();
function __colorToVec4(color, opacity = 1) {
  const c = new Color(color);
  return new Vector43(c.r, c.g, c.b, opacity);
}
function __makeMeshMaterial(name, pass) {
  const standardParams = standardMaterialParamLib[name];
  switch (pass) {
    case "beauty":
      return new MeshStandardMaterial(standardParams);
    case "normals":
      return new WorldNormalMeshMaterial({
        wireframe: standardParams.wireframe,
        visible: standardParams.visible
      });
    case "depth":
      return new MeshDepthMaterial({
        wireframe: standardParams.wireframe,
        visible: standardParams.visible
      });
    case "customColor":
      return new BasicVec4MeshMaterial({
        data: __colorToVec4(standardParams.color, standardParams.opacity),
        wireframe: standardParams.wireframe,
        vertexColors: standardParams.vertexColors,
        visible: standardParams.visible
      });
    case "customEmissive":
      return new BasicVec4MeshMaterial({
        data: __colorToVec4(standardParams.emissive || 0, 1),
        wireframe: standardParams.wireframe,
        visible: standardParams.visible
      });
    case "customRoughnessMetalnessHeight":
      return new HeightMeshMaterial({
        data: new Vector43(
          defaultNumber(standardParams.roughness, 0.5),
          defaultNumber(standardParams.metalness, 0.5),
          1,
          1
        ),
        heightChannel: "b",
        wireframe: standardParams.wireframe,
        visible: standardParams.visible
      });
    case "customTopDownHeight":
      return new HeightMeshMaterial({
        data: new Vector43(0, 0, 0, 1),
        heightChannel: "b",
        wireframe: standardParams.wireframe,
        visible: standardParams.visible
      });
    default:
      throw new Error(`Please add implementation for ${pass}`);
  }
}
function getMeshMaterial(name, pass = "beauty") {
  const key = `${name}:${pass}`;
  if (!materialCache.has(key)) {
    const mat = __makeMeshMaterial(name, pass);
    mat.name = name;
    materialCache.set(key, mat);
  }
  return materialCache.get(key).clone();
}
function __onBeforeRenderDoUpdateWorldNormals(renderer, scene, camera, geometry, material, group) {
  const modelNormalMatrix = material.uniforms.uModelNormalMatrix.value;
  modelNormalMatrix.getNormalMatrix(this.matrixWorld);
}
function changeMeshMaterials(node, pass, visibleOnly = false) {
  if (!visibleOnly || visibleOnly && node.visible) {
    if (node instanceof Mesh4 && node.material instanceof Material3) {
      if (isCuratedMaterial(node.material.name)) {
        if (node.material instanceof WorldNormalMeshMaterial) {
          node.onBeforeRender = NOOP;
        }
        const mat = getMeshMaterial(node.material.name, pass);
        node.material = mat;
        if (node.material instanceof WorldNormalMeshMaterial) {
          node.onBeforeRender = __onBeforeRenderDoUpdateWorldNormals;
        }
      }
    }
    for (const child of node.children) {
      changeMeshMaterials(child, pass, visibleOnly);
    }
  }
}

// src/meshes/factoryRocks.ts
import { Mesh as Mesh5, Object3D as Object3D6, Vector3 as Vector38 } from "three";
var tiltRange = 0.2;
function makeRocks(mat, scale = 0, chamfer = 0.5) {
  const pivot = new Object3D6();
  const pos = new Vector38();
  for (let i = 0; i < 80; i++) {
    pos.set(detRandRocks(-1, 1), detRandRocks(0, 1), detRandRocks(-1, 1)).normalize();
    if (pos.x + pos.z > 1) {
      continue;
    }
    const size = ~~detRandRocks(6, 16) + scale * 0.5;
    const rocks = new Mesh5(
      getCachedChamferedBoxGeometry(size, 4, size * 0.5, chamfer),
      mat
    );
    rocks.rotation.z = Math.PI * -0.25;
    rocks.position.copy(pos);
    rocks.position.multiplyScalar(12);
    rocks.position.y += scale - 4;
    rocks.rotation.x += detRandRocks(-tiltRange, tiltRange);
    rocks.rotation.y += detRandRocks(-tiltRange, tiltRange);
    rocks.rotation.z += detRandRocks(-tiltRange, tiltRange);
    pivot.add(rocks);
  }
  pivot.rotation.y = Math.PI * -0.1;
  return mergeMeshes(pivot);
}

// src/meshes/factoryRockCrumbs.ts
import { Mesh as Mesh6, Object3D as Object3D7, Vector3 as Vector39 } from "three";
var tiltRange2 = 0.3;
function makeRockCrumbs(mat, chamfer = 0.5) {
  const pivot = new Object3D7();
  const pos = new Vector39();
  for (let i = 0; i < 20; i++) {
    pos.set(detRandRocks(-1, 1), 0, detRandRocks(-1, 1));
    if (pos.x + pos.z > 1) {
      continue;
    }
    const size = ~~detRandRocks(2, 5);
    const rocks = new Mesh6(
      getCachedChamferedBoxGeometry(size, 4, size * 0.5, chamfer),
      mat
    );
    rocks.rotation.z = Math.PI * -0.25;
    rocks.position.copy(pos);
    rocks.position.multiplyScalar(12);
    rocks.rotation.x += detRandRocks(-tiltRange2, tiltRange2);
    rocks.rotation.y += detRandRocks(-tiltRange2, tiltRange2);
    rocks.rotation.z += detRandRocks(-tiltRange2, tiltRange2);
    pivot.add(rocks);
  }
  pivot.rotation.y = Math.PI * -0.1;
  pivot.position.y = 1;
  return mergeMeshes(pivot);
}

// src/meshes/factoryTreePine.ts
import {
  CylinderBufferGeometry,
  Mesh as Mesh7,
  Object3D as Object3D8,
  Vector3 as Vector310
} from "three";
function makeTreePineStumpMature(matBark, matWood) {
  const tiltRange3 = 0.1;
  const height = 10;
  const baseRadius = 5;
  const pivot = new Object3D8();
  const wood = new Mesh7(
    new CylinderBufferGeometry(baseRadius, baseRadius, height, 16),
    matWood
  );
  pivot.add(wood);
  wood.position.y = height * 0.5;
  for (let i = 0; i < 80; i++) {
    const size = ~~detRandTreesPineStumpMature(6, 8);
    const bark = new Mesh7(getCachedChamferedBoxGeometry(2, size, 4, 1), matBark);
    bark.rotation.order = "YXZ";
    const y = Math.pow(detRandTreesPineStumpMature(), 2);
    const tiltAmt = Math.pow(1 - y, 4);
    const radius = baseRadius + tiltAmt * 8 + Math.round(detRandTreesPineStumpMature(0, 2));
    const angle = detRandTreesPineStumpMature(0, Math.PI * 2);
    bark.position.set(
      Math.cos(angle) * radius,
      y * height,
      Math.sin(angle) * radius
    );
    bark.rotation.y = -angle;
    bark.rotation.z = tiltAmt * 1;
    bark.rotation.x += detRandTreesPineStumpMature(-tiltRange3, tiltRange3);
    bark.rotation.y += detRandTreesPineStumpMature(-tiltRange3, tiltRange3);
    bark.rotation.z += detRandTreesPineStumpMature(-tiltRange3, tiltRange3);
    pivot.add(bark);
  }
  return mergeMeshes(pivot);
}
function makeTreePineStump(matBark, matWood) {
  const tiltRange3 = 0.1;
  const height = 5;
  const baseRadius = 3;
  const pivot = new Object3D8();
  const wood = new Mesh7(
    new CylinderBufferGeometry(baseRadius, baseRadius, height, 16),
    matWood
  );
  pivot.add(wood);
  wood.position.y = height * 0.5;
  for (let i = 0; i < 60; i++) {
    const size = ~~detRandTreesPineStump(3, 5);
    const bark = new Mesh7(getCachedChamferedBoxGeometry(2, size, 4, 1), matBark);
    bark.rotation.order = "YXZ";
    const y = Math.pow(detRandTreesPineStump(), 2);
    const tiltAmt = Math.pow(1 - y, 4);
    const radius = baseRadius + tiltAmt * 8 + Math.round(detRandTreesPineStump(0, 2));
    const angle = detRandTreesPineStump(0, Math.PI * 2);
    bark.position.set(
      Math.cos(angle) * radius,
      y * height,
      Math.sin(angle) * radius
    );
    bark.rotation.y = -angle;
    bark.rotation.z = tiltAmt * 1;
    bark.rotation.x += detRandTreesPineStump(-tiltRange3, tiltRange3);
    bark.rotation.y += detRandTreesPineStump(-tiltRange3, tiltRange3);
    bark.rotation.z += detRandTreesPineStump(-tiltRange3, tiltRange3);
    pivot.add(bark);
  }
  return mergeMeshes(pivot);
}
function makeTreePineMature(matBark, matLeaf, matWood) {
  const tiltRange3 = 0.1;
  const height = 32;
  const baseRadius = 5;
  const baseRadiusInner = baseRadius - 1;
  const pivot = new Object3D8();
  const wood = new Mesh7(
    new CylinderBufferGeometry(baseRadius, baseRadius, height, 16),
    matWood
  );
  pivot.add(wood);
  wood.position.y = height * 0.5;
  for (let i = 0; i < 260; i++) {
    const size = ~~detRandTreesPineMature(6, 8);
    const bark = new Mesh7(getCachedChamferedBoxGeometry(2, size, 4, 1), matBark);
    bark.rotation.order = "YXZ";
    const y = Math.pow(detRandTreesPineMature(), 2);
    const tiltAmt = Math.pow(1 - y, 4);
    const radius = baseRadius + tiltAmt * 8 + Math.round(detRandTreesPineMature(0, 2));
    const angle = detRandTreesPineMature(0, Math.PI * 2);
    bark.position.set(
      Math.cos(angle) * radius,
      y * height,
      Math.sin(angle) * radius
    );
    bark.rotation.y = -angle;
    bark.rotation.z = tiltAmt * 1;
    bark.rotation.x += detRandTreesPineMature(-tiltRange3, tiltRange3);
    bark.rotation.y += detRandTreesPineMature(-tiltRange3, tiltRange3);
    bark.rotation.z += detRandTreesPineMature(-tiltRange3, tiltRange3);
    pivot.add(bark);
  }
  const pineNeedleProto = new Mesh7(__getNeedleGeo(), matLeaf);
  const twigLength = 4;
  const twigProto = new Mesh7(__getTwigGeo(twigLength), matBark);
  __addPineNeedles(twigProto, pineNeedleProto, twigLength);
  const tLayer = 2;
  for (let iLayer = 0; iLayer < tLayer; iLayer++) {
    const lRatio = iLayer / tLayer;
    const tB = 7;
    for (let iB = 0; iB < tB; iB++) {
      const bRatio = (iB + lRatio) / tB;
      const aB = Math.PI * 2 * bRatio;
      const branch = new Object3D8();
      let lastTwig = branch;
      const tTwig = 9 - iLayer * 2;
      for (let iTwig = 0; iTwig < tTwig; iTwig++) {
        const twigTilt = 0.05 * iTwig;
        const newTwig = twigProto.clone();
        lastTwig.add(newTwig);
        newTwig.rotation.x = detRandTreesPineMature(-twigTilt, twigTilt);
        newTwig.rotation.z = detRandTreesPineMature(-twigTilt, twigTilt);
        newTwig.rotation.y = Math.PI;
        newTwig.position.y = twigLength;
        lastTwig = newTwig;
      }
      pivot.add(branch);
      branch.position.set(
        Math.cos(aB) * baseRadiusInner,
        25 + iLayer * 8,
        Math.sin(aB) * baseRadiusInner
      );
      branch.rotation.z = -Math.PI * 0.65;
      branch.rotation.y = aB;
    }
  }
  return mergeMeshes(pivot);
}
function makeTreePine(matBark, matLeaf) {
  const tiltRange3 = 0.1;
  const height = 32;
  const baseRadius = 0;
  const baseRadiusInner = baseRadius - 1;
  const pivot = new Object3D8();
  for (let i = 0; i < 160; i++) {
    const size = ~~detRandTreesPine(6, 8);
    const bark = new Mesh7(getCachedChamferedBoxGeometry(2, size, 4, 1), matBark);
    bark.rotation.order = "YXZ";
    const y = Math.pow(detRandTreesPine(), 2);
    const tiltAmt = Math.pow(1 - y, 4);
    const radius = baseRadius + tiltAmt * 8 + Math.round(detRandTreesPine(0, 2));
    const angle = detRandTreesPine(0, Math.PI * 2);
    bark.position.set(
      Math.cos(angle) * radius,
      y * height,
      Math.sin(angle) * radius
    );
    bark.rotation.y = -angle;
    bark.rotation.z = tiltAmt * 1;
    bark.rotation.x += detRandTreesPine(-tiltRange3, tiltRange3);
    bark.rotation.y += detRandTreesPine(-tiltRange3, tiltRange3);
    bark.rotation.z += detRandTreesPine(-tiltRange3, tiltRange3);
    pivot.add(bark);
  }
  const twigLength = 5;
  const pineNeedleProto = new Mesh7(__getNeedleGeo(), matLeaf);
  const twigProto = new Mesh7(__getTwigGeo(twigLength), matBark);
  __addPineNeedles(twigProto, pineNeedleProto, twigLength);
  const tLayer = 3;
  for (let iLayer = 0; iLayer < tLayer; iLayer++) {
    const lRatio = iLayer / tLayer;
    const tB = 9 - iLayer * 2;
    for (let iB = 0; iB < tB; iB++) {
      const bRatio = (iB + lRatio) / tB;
      const aB = Math.PI * 2 * bRatio;
      const branch = new Object3D8();
      branch.scale.multiplyScalar(0.75);
      let lastTwig = branch;
      const tTwig = 7 - iLayer * 2;
      for (let iTwig = 0; iTwig < tTwig; iTwig++) {
        const twigTilt = 0.05 * iTwig;
        const newTwig = twigProto.clone();
        lastTwig.add(newTwig);
        newTwig.rotation.x = detRandTreesPine(-twigTilt, twigTilt);
        newTwig.rotation.z = detRandTreesPine(-twigTilt, twigTilt);
        newTwig.rotation.y = Math.PI;
        newTwig.position.y = twigLength;
        lastTwig = newTwig;
      }
      pivot.add(branch);
      branch.position.set(
        Math.cos(aB) * baseRadiusInner,
        25 + iLayer * 8,
        Math.sin(aB) * baseRadiusInner
      );
      branch.rotation.z = -Math.PI * (0.75 + iLayer * 0.1);
      branch.rotation.y = aB;
    }
  }
  const topperPivot = new Object3D8();
  const topperProto = new Object3D8();
  __addPineNeedles(topperProto, pineNeedleProto, 0);
  pivot.add(topperPivot);
  topperPivot.position.y = height + 14;
  topperPivot.rotation.x = Math.PI;
  for (let i = 0; i < 3; i++) {
    const newTopper = topperProto.clone();
    newTopper.rotation.y = i * Math.PI;
    newTopper.position.y = i * 3;
    newTopper.scale.setScalar(0.5 + i * 0.3);
    topperPivot.add(newTopper);
  }
  return mergeMeshes(pivot);
}
var __needleGeo;
function __getNeedleGeo() {
  if (!__needleGeo) {
    __needleGeo = getChamferedBoxGeometry(2, 4, 2, 1);
    const posArr = __needleGeo.attributes.position.array;
    const vec = new Vector310();
    for (let i3 = 0; i3 < posArr.length; i3 += 3) {
      vec.fromArray(posArr, i3);
      vec.y = (vec.y + 2) * 3;
      vec.toArray(posArr, i3);
    }
  }
  return __needleGeo;
}
function __addPineNeedles(target, pineNeedleProto, offsetY) {
  const tNeedles = 5;
  const needleTilt = 0.5;
  for (let i = 0; i < tNeedles; i++) {
    const a = Math.PI * 2 * i / tNeedles;
    const x = Math.cos(a) * needleTilt;
    const y = Math.sin(a) * needleTilt;
    const pineNeedle = pineNeedleProto.clone();
    pineNeedle.position.y = offsetY;
    pineNeedle.rotation.x = x;
    pineNeedle.rotation.z = y;
    target.add(pineNeedle);
  }
}
var __twigGeos = /* @__PURE__ */ new Map();
function __getTwigGeo(twigLength) {
  if (!__twigGeos.has(twigLength)) {
    const twigGeo = new CylinderBufferGeometry(1, 1, twigLength, 8, 1);
    const twigPosArr = twigGeo.attributes.position.array;
    const vec = new Vector310();
    for (let i3 = 0; i3 < twigPosArr.length; i3 += 3) {
      vec.fromArray(twigPosArr, i3);
      vec.y += twigLength * 0.5;
      vec.toArray(twigPosArr, i3);
    }
    __twigGeos.set(twigLength, twigGeo);
  }
  return __twigGeos.get(twigLength);
}

// src/meshes/factoryTreeMaple.ts
import {
  CylinderBufferGeometry as CylinderBufferGeometry2,
  Mesh as Mesh8,
  Object3D as Object3D9,
  Quaternion,
  Vector3 as Vector311
} from "three";
function makeTreeMapleStumpMature(matBark, matWood) {
  const tiltRange3 = 0.1;
  const height = 10;
  const baseRadius = 5;
  const pivot = new Object3D9();
  const wood = new Mesh8(
    new CylinderBufferGeometry2(baseRadius, baseRadius, height, 16),
    matWood
  );
  pivot.add(wood);
  wood.position.y = height * 0.5;
  for (let i = 0; i < 80; i++) {
    const size = ~~detRandTreesMapleStumpMature(6, 8);
    const bark = new Mesh8(getCachedChamferedBoxGeometry(2, size, 4, 1), matBark);
    bark.rotation.order = "YXZ";
    const y = Math.pow(detRandTreesMapleStumpMature(), 2);
    const tiltAmt = Math.pow(1 - y, 4);
    const radius = baseRadius + tiltAmt * 8 + Math.round(detRandTreesMapleStumpMature(0, 2));
    const angle = detRandTreesMapleStumpMature(0, Math.PI * 2);
    bark.position.set(
      Math.cos(angle) * radius,
      y * height,
      Math.sin(angle) * radius
    );
    bark.rotation.y = -angle;
    bark.rotation.z = tiltAmt * 1;
    bark.rotation.x += detRandTreesMapleStumpMature(-tiltRange3, tiltRange3);
    bark.rotation.y += detRandTreesMapleStumpMature(-tiltRange3, tiltRange3);
    bark.rotation.z += detRandTreesMapleStumpMature(-tiltRange3, tiltRange3);
    pivot.add(bark);
  }
  return mergeMeshes(pivot);
}
function makeTreeMapleStump(matBark, matWood) {
  const tiltRange3 = 0.1;
  const height = 5;
  const baseRadius = 3;
  const pivot = new Object3D9();
  const wood = new Mesh8(
    new CylinderBufferGeometry2(baseRadius, baseRadius, height, 16),
    matWood
  );
  pivot.add(wood);
  wood.position.y = height * 0.5;
  for (let i = 0; i < 60; i++) {
    const size = ~~detRandTreesMapleStump(3, 5);
    const bark = new Mesh8(getCachedChamferedBoxGeometry(2, size, 4, 1), matBark);
    bark.rotation.order = "YXZ";
    const y = Math.pow(detRandTreesMapleStump(), 2);
    const tiltAmt = Math.pow(1 - y, 4);
    const radius = baseRadius + tiltAmt * 8 + Math.round(detRandTreesMapleStump(0, 2));
    const angle = detRandTreesMapleStump(0, Math.PI * 2);
    bark.position.set(
      Math.cos(angle) * radius,
      y * height,
      Math.sin(angle) * radius
    );
    bark.rotation.y = -angle;
    bark.rotation.z = tiltAmt * 1;
    bark.rotation.x += detRandTreesMapleStump(-tiltRange3, tiltRange3);
    bark.rotation.y += detRandTreesMapleStump(-tiltRange3, tiltRange3);
    bark.rotation.z += detRandTreesMapleStump(-tiltRange3, tiltRange3);
    pivot.add(bark);
  }
  return mergeMeshes(pivot);
}
function makeTreeMapleMature(matBark, matLeaf, matWood) {
  const tiltRange3 = 0.1;
  const height = 32;
  const baseRadius = 5;
  const baseRadiusInner = baseRadius - 1;
  const pivot = new Object3D9();
  const wood = new Mesh8(
    new CylinderBufferGeometry2(baseRadius, baseRadius, height, 16),
    matWood
  );
  pivot.add(wood);
  wood.position.y = height * 0.5;
  for (let i = 0; i < 260; i++) {
    const size = ~~detRandTreesMapleMature(6, 8);
    const bark = new Mesh8(getCachedChamferedBoxGeometry(2, size, 4, 1), matBark);
    bark.rotation.order = "YXZ";
    const y = Math.pow(detRandTreesMapleMature(), 2);
    const tiltAmt = Math.pow(1 - y, 4);
    const radius = baseRadius + tiltAmt * 8 + Math.round(detRandTreesMapleMature(0, 2));
    const angle = detRandTreesMapleMature(0, Math.PI * 2);
    bark.position.set(
      Math.cos(angle) * radius,
      y * height,
      Math.sin(angle) * radius
    );
    bark.rotation.y = -angle;
    bark.rotation.z = tiltAmt * 1;
    bark.rotation.x += detRandTreesMapleMature(-tiltRange3, tiltRange3);
    bark.rotation.y += detRandTreesMapleMature(-tiltRange3, tiltRange3);
    bark.rotation.z += detRandTreesMapleMature(-tiltRange3, tiltRange3);
    pivot.add(bark);
  }
  return mergeMeshes(pivot);
}
function makeTreeMaple(matBark, matLeaf) {
  const cylinderGeo = __getTwigGeo2(0.8, 1, 1, 16);
  function getChunk(radius, height2) {
    const cylinder = new Mesh8(cylinderGeo, matBark);
    cylinder.scale.set(radius, height2, radius);
    cylinder.rotation.x = Math.PI * 0.5;
    const cylinderPivot = new Object3D9();
    cylinderPivot.add(cylinder);
    return cylinderPivot;
  }
  const tiltRange3 = 0.05;
  const height = 32;
  const baseRadius = 0;
  const baseRadiusInner = baseRadius - 1;
  const leafProto = new Mesh8(__getLeafGeo(), matLeaf);
  const pivot = new Object3D9();
  const base = new Object3D9();
  const vec1 = new Vector311(0, 100, 0);
  base.lookAt(vec1);
  pivot.add(base);
  function grow(lastChunk, radius, length, growthEnergy = 0, isNew = false) {
    growthEnergy += 0.05;
    const tiltRangeLocal = tiltRange3 + growthEnergy;
    if (radius > 1) {
      radius -= 0.3;
      const newChunk = getChunk(radius, length);
      lastChunk.add(newChunk);
      if (!isNew) {
        newChunk.position.z = length - 1;
      }
      newChunk.rotation.x = detRandTreesMaple(-tiltRangeLocal, tiltRangeLocal);
      newChunk.rotation.y = detRandTreesMaple(-tiltRangeLocal, tiltRangeLocal);
      newChunk.rotation.z = detRandTreesMaple(0, Math.PI * 20);
      newChunk.updateMatrixWorld();
      const quat1 = new Quaternion();
      quat1.setFromEuler(newChunk.rotation);
      newChunk.lookAt(vec1);
      newChunk.quaternion.slerp(quat1, 0.85);
      grow(newChunk, radius, length, growthEnergy);
      if (detRandTreesMaple(0.05, 1) < growthEnergy - (radius - 4) * 0.2) {
        growthEnergy = -0.025;
        const newGrowth = new Object3D9();
        newGrowth.rotation.order = "XYZ";
        newGrowth.rotation.x = Math.PI * 0.25;
        newChunk.rotation.x = -Math.PI * 0.25;
        lastChunk.add(newGrowth);
        grow(newGrowth, radius, length, growthEnergy, true);
      }
    } else {
      __addLeaves(lastChunk, leafProto, length - 1);
    }
  }
  grow(base, 6.5, 7, 0, true);
  pivot.rotation.y = Math.PI * -0.4;
  pivot.scale.multiplyScalar(0.75);
  pivot.scale.y *= 0.7;
  return mergeMeshes(pivot);
}
var __twigGeos2 = /* @__PURE__ */ new Map();
function __getTwigGeo2(radiusTop, radiusBottom, length, radialSegs) {
  const key = `${radiusTop}:${radiusBottom}:${length}:${radialSegs}`;
  if (!__twigGeos2.has(key)) {
    const twigGeo = new CylinderBufferGeometry2(
      radiusTop,
      radiusBottom,
      length,
      radialSegs,
      1
    );
    const twigPosArr = twigGeo.attributes.position.array;
    const vec = new Vector311();
    for (let i3 = 0; i3 < twigPosArr.length; i3 += 3) {
      vec.fromArray(twigPosArr, i3);
      vec.y += length * 0.5;
      vec.toArray(twigPosArr, i3);
    }
    __twigGeos2.set(key, twigGeo);
  }
  return __twigGeos2.get(key);
}
var __leafGeo;
function __getLeafGeo() {
  if (!__leafGeo) {
    __leafGeo = getChamferedBoxGeometry(3, 3, 4, 1);
    const posArr = __leafGeo.attributes.position.array;
    const vec = new Vector311();
    for (let i3 = 0; i3 < posArr.length; i3 += 3) {
      vec.fromArray(posArr, i3);
      vec.z = (vec.z + 2) * 3;
      vec.toArray(posArr, i3);
    }
  }
  return __leafGeo;
}
function __addLeaves(target, leafProto, offsetY) {
  const tLeaves = 7;
  const leafTilt = 0.8;
  for (let i = 0; i < tLeaves; i++) {
    const a = Math.PI * 2 * i / tLeaves;
    const x = Math.cos(a) * leafTilt;
    const y = Math.sin(a) * leafTilt;
    const leaf = leafProto.clone();
    leaf.position.z = offsetY;
    leaf.rotation.x = x;
    leaf.rotation.y = y;
    target.add(leaf);
  }
}

// src/meshes/factoryGoldPile.ts
import { Mesh as Mesh9, Object3D as Object3D10, Vector3 as Vector312 } from "three";
function makeGoldPile(goldChunkGeo, goldMat, radius = 16, knobs = 170, y = -12) {
  const goldPile = new Object3D10();
  const goldChunk = new Mesh9(goldChunkGeo, goldMat);
  const pos = new Vector312();
  for (let i = 0; i < knobs; i++) {
    pos.fromArray(longLatToXYZ(pointOnSphereFibonacci(i, knobs), radius));
    if (pos.y > -y) {
      const goldCoin = goldChunk.clone();
      goldCoin.scale.y *= 0.2;
      goldCoin.position.copy(pos);
      goldCoin.rotation.set(rand2(0.2), rand2(0.2), rand2(0.2));
      goldPile.add(goldCoin);
    }
  }
  goldPile.position.y += y;
  return mergeMeshes(goldPile);
}

// src/meshes/factoryLampPost.ts
import {
  CylinderBufferGeometry as CylinderBufferGeometry3,
  Mesh as Mesh10,
  Object3D as Object3D11,
  TorusBufferGeometry
} from "three";
function makeLampPost(ironBlackMat) {
  const lampPost = new Object3D11();
  const ironCylinder = new Mesh10(
    new CylinderBufferGeometry3(0.5, 0.5, 1, 16, 1),
    ironBlackMat
  );
  const cylPosArr = ironCylinder.geometry.attributes.position.array;
  for (let i = 1; i < cylPosArr.length; i += 3) {
    cylPosArr[i] += 0.5;
  }
  const ring = new Mesh10(
    new TorusBufferGeometry(0.45, 0.1, 32, 16),
    ironBlackMat
  );
  const lampPole = ironCylinder.clone();
  lampPost.add(lampPole);
  lampPole.scale.set(6, 12, 6);
  const lampPole2 = ironCylinder.clone();
  lampPole2.scale.set(3, 39, 3);
  lampPost.add(lampPole2);
  const middleRing = ring.clone();
  middleRing.scale.set(8, 8, 8);
  middleRing.position.y = 12;
  middleRing.rotation.x = Math.PI * 0.5;
  lampPost.add(middleRing);
  const middleRing2 = middleRing.clone();
  middleRing2.position.y = 2;
  lampPost.add(middleRing2);
  const lampPole3 = lampPole2.clone();
  lampPole3.scale.set(2, 9, 2);
  lampPole3.position.y = 38;
  lampPole3.rotation.z = Math.PI * -0.25;
  lampPost.add(lampPole3);
  const lampPole4 = lampPole2.clone();
  lampPole4.scale.set(2, 6, 2);
  lampPole4.position.x = 6;
  lampPole4.position.y = 44;
  lampPole4.rotation.z = Math.PI * -0.5;
  lampPost.add(lampPole4);
  const lampShade = new Mesh10(getChamferedBoxGeometry(8, 4, 8, 2), ironBlackMat);
  lampShade.position.set(12, 43, 0);
  lampPost.add(lampShade);
  return mergeMeshes(lampPost);
}

// src/constants.ts
var sunSpeed = -1e-5;
var sunOffset = 0.25;
var verticalScale = Math.SQRT2 / 2;

// src/meshes/factoryBush.ts
import { Mesh as Mesh11, Object3D as Object3D12 } from "three";
var bushGeoA3;
function getBushGeoA3() {
  if (!bushGeoA3) {
    bushGeoA3 = new FibonacciSphereGeometry(2, 8);
  }
  return bushGeoA3;
}
var berryGeo;
function getBerryGeo() {
  if (!berryGeo) {
    berryGeo = new FibonacciSphereGeometry(3, 15);
  }
  return berryGeo;
}
var BushProps = class {
  constructor(radius1 = 7, radius2 = 4, knobs = 16, knobs2 = 30, y = 11) {
    this.radius1 = radius1;
    this.radius2 = radius2;
    this.knobs = knobs;
    this.knobs2 = knobs2;
    this.y = y;
  }
};
var defaultBushProps = new BushProps();
function makeRecursiveBush(bushMat, berryMat, bushProps = defaultBushProps) {
  const bushC = new Object3D12();
  const bushC2Proto = new Object3D12();
  const bushC3Proto = new Mesh11(getBushGeoA3(), bushMat);
  for (let i = 0; i < bushProps.knobs2; i++) {
    const bushC3 = bushC3Proto.clone();
    bushC3.position.fromArray(
      longLatToXYZ(
        pointOnSphereFibonacci(i, bushProps.knobs2),
        bushProps.radius2
      )
    );
    bushC3.rotation.set(
      detRandGraphics(-Math.PI, Math.PI),
      detRandGraphics(-Math.PI, Math.PI),
      detRandGraphics(-Math.PI, Math.PI)
    );
    bushC2Proto.add(bushC3);
  }
  for (let i = 0; i < bushProps.knobs; i++) {
    const bushC2 = bushC2Proto.clone(true);
    bushC2.position.fromArray(
      longLatToXYZ(
        pointOnSphereFibonacci(i, bushProps.knobs),
        bushProps.radius1
      )
    );
    bushC.add(bushC2);
  }
  bushC.traverse((obj) => {
    if (detRandGraphics() > 0.975 && obj instanceof Mesh11) {
      obj.geometry = getBerryGeo();
      obj.material = berryMat;
      obj.position.multiplyScalar(1.15);
    }
  });
  bushC.rotation.set(
    detRandGraphics(-Math.PI, Math.PI),
    detRandGraphics(-Math.PI, Math.PI),
    detRandGraphics(-Math.PI, Math.PI)
  );
  const bushBase = new Object3D12();
  bushBase.add(bushC);
  bushBase.scale.y *= verticalScale;
  bushC.position.y += bushProps.y;
  return mergeMeshes(bushBase);
}

// src/utils/memoizer.ts
function memoize(generator) {
  let result;
  return function getResult() {
    if (!result) {
      result = generator();
    }
    return result;
  };
}

// src/meshes/factoryBrickWall.ts
import { BoxBufferGeometry, Mesh as Mesh12, Object3D as Object3D13 } from "three";
function makeBrickWall(brickMat, mortarMat, colStart, colEnd) {
  const brickWidth = 7;
  const brickHeight = 3;
  const brickGap = 1;
  const brickSpacingX = brickWidth + brickGap;
  const brickSpacingY = brickHeight;
  const brickGeo = getChamferedBoxGeometry(brickWidth, brickHeight, 4.5, 1);
  const brickWallRoot = new Object3D13();
  for (let iRow = 0; iRow < 11; iRow++) {
    for (let iCol = -1; iCol < 1; iCol++) {
      const budge = iRow % 2 * 0.5 - 0.25;
      const brick = new Mesh12(brickGeo, brickMat);
      brick.position.set(
        (iCol + budge) * brickSpacingX + brickWidth * 0.5,
        (iRow + 0.5) * brickSpacingY,
        0
      );
      brickWallRoot.add(brick);
    }
  }
  const mortar = new Mesh12(
    new BoxBufferGeometry((colEnd - colStart) * brickSpacingX - 1, 32, 1),
    mortarMat
  );
  mortar.position.x = -1;
  mortar.position.y = 16;
  mortar.position.z = -0.75;
  brickWallRoot.add(mortar);
  return mergeMeshes(brickWallRoot);
}

// src/rendering/tileMaker/TileMaker.ts
import {
  BackSide,
  BoxGeometry,
  LinearEncoding,
  Mesh as Mesh13,
  MeshDepthMaterial as MeshDepthMaterial2,
  NearestFilter,
  Object3D as Object3D14,
  OrthographicCamera,
  Scene as Scene2,
  WebGLRenderTarget
} from "three";
var TileMaker = class {
  constructor(_pixelsPerTile = 32, pixelsPerCacheEdge = 2048, _passes = ["beauty"], indexedMeshMakers) {
    this._pixelsPerTile = _pixelsPerTile;
    this._passes = _passes;
    this._renderQueue = [];
    this._tileRegistry = [];
    this._tileHashRegistry = [];
    this._tileHashBirthday = [];
    this._scene = new Scene2();
    this._cameraTiltedBottom = new OrthographicCamera(
      -16,
      16,
      (0 * 32 + 16) * verticalScale,
      (0 * 32 - 16) * verticalScale,
      0,
      64
    );
    this._cameraTiltedTop = new OrthographicCamera(
      -16,
      16,
      (1 * 32 + 16) * verticalScale,
      (1 * 32 - 16) * verticalScale,
      0,
      64
    );
    this._cameraTopDown = new OrthographicCamera(-16, 16, 16, -16, -64, 64);
    this._renderTargets = /* @__PURE__ */ new Map();
    assertPowerOfTwo(_pixelsPerTile);
    assertPowerOfTwo(pixelsPerCacheEdge);
    this._tilesPerEdge = pixelsPerCacheEdge / _pixelsPerTile;
    this._maxTiles = Math.pow(this._tilesPerEdge, 2);
    for (const pass of _passes) {
      this._renderTargets.set(
        pass,
        new WebGLRenderTarget(pixelsPerCacheEdge, pixelsPerCacheEdge, {
          minFilter: NearestFilter,
          magFilter: NearestFilter,
          encoding: LinearEncoding,
          generateMipmaps: false
        })
      );
    }
    const scene = this._scene;
    scene.autoUpdate = false;
    this._cameraTiltedBottom.rotateX(Math.PI * -0.25);
    this._cameraTiltedBottom.position.set(0, 32, 32);
    scene.add(this._cameraTiltedBottom);
    this._cameraTiltedTop.rotateX(Math.PI * -0.25);
    this._cameraTiltedTop.position.set(0, 32, 32);
    scene.add(this._cameraTiltedTop);
    this._cameraTopDown.rotateX(Math.PI * -0.5);
    this._cameraTopDown.position.set(0, 0, 0);
    scene.add(this._cameraTopDown);
    const pivot = new Object3D14();
    scene.add(pivot);
    const memoScene = (generator) => {
      const memodGenerator = memoize(generator);
      return function generatorAndAdder() {
        const obj = memodGenerator();
        pivot.add(obj);
        obj.updateMatrix();
        obj.updateMatrixWorld(true);
        return obj;
      };
    };
    this._pivot = pivot;
    const zLimiter = new Mesh13(
      new BoxGeometry(32, 32, 32),
      new MeshDepthMaterial2({ side: BackSide, colorWrite: false })
    );
    zLimiter.position.y += 16;
    scene.add(zLimiter);
    scene.updateMatrix();
    scene.updateMatrixWorld(true);
    this._indexedMeshes = indexedMeshMakers.map(memoScene);
    this._indexedMeshesVisibility = new Array(indexedMeshMakers.length);
  }
  get passes() {
    return this._passes;
  }
  set passes(value) {
    throw new Error("You cannot change passes during runtime.");
  }
  getTexture(pass = "beauty") {
    if (this._renderTargets.has(pass)) {
      return this._renderTargets.get(pass).texture;
    } else {
      debugger;
      throw new Error(`pass "${pass}" not supported`);
    }
  }
  getTileId(tileDescription) {
    const hash = String.fromCharCode(...Array.from(tileDescription));
    let index = this._tileHashRegistry.indexOf(hash);
    if (index === -1) {
      index = this._tileRegistry.length;
      if (index >= this._maxTiles) {
        let oldestIndex = index - 1;
        let oldestTime = this._tileHashBirthday[index - 1];
        for (let i = 1; i < index; i++) {
          if (this._tileHashBirthday[i] < oldestTime) {
            oldestIndex = i;
            oldestTime = this._tileHashBirthday[i];
          }
        }
        index = oldestIndex;
      }
      this._tileRegistry[index] = tileDescription;
      this._tileHashRegistry[index] = hash;
      this._renderQueue.push(index);
    }
    this._tileHashBirthday[index] = performance.now();
    return index;
  }
};

// src/rendering/tileMaker/DoubleCachedTileMaker.ts
import { ceilPowerOfTwo } from "three/src/math/MathUtils";
var DoubleCachedTileMaker = class extends TileMaker {
  constructor(pixelsPerTile = 32, pixelsPerCacheEdge = 2048, passes = ["beauty"], indexedMeshMakers) {
    super(pixelsPerTile, pixelsPerCacheEdge, passes, indexedMeshMakers);
    this._precacher = new TileMaker(
      pixelsPerTile,
      ceilPowerOfTwo(Math.sqrt(indexedMeshMakers.length)),
      passes,
      indexedMeshMakers
    );
  }
  getTileId(tileDescription) {
    const uniqueVisuals = /* @__PURE__ */ new Set();
    for (let j = 0; j < this._indexedMeshes.length; j++) {
      const jb = ~~(j / 8);
      const j8 = j % 8;
      const shouldShow = !!(tileDescription[jb] & 1 << j8);
      if (shouldShow) {
        uniqueVisuals.add(j);
      }
    }
    return super.getTileId(tileDescription);
  }
};

// src/meshes/factoryWater.ts
import { BufferAttribute as BufferAttribute4, Object3D as Object3D15 } from "three";
import { Mesh as Mesh14, PlaneBufferGeometry as PlaneBufferGeometry2, Vector3 as Vector313 } from "three";
var skews2 = [];
var strengths2 = [];
var aOffsets2 = [];
var freqs2 = [];
var flips2 = [];
var total2 = 12;
detRandWater(-3, 3);
detRandWater(-3, 3);
detRandWater(-3, 3);
detRandWater(-3, 3);
for (let step = 0; step < total2; step++) {
  const ratio = step / (total2 - 1);
  strengths2.push(1 - Math.pow(1 - ratio, 2));
  const freq = Math.round(lerp(1, 8, ratio));
  freqs2.push(freq);
  const skew = Math.round(detRandWater(-3, 3)) / freq;
  skews2.push(skew);
  aOffsets2.push(detRandWater(0, Math.PI * 2));
  flips2.push(detRandWater(0, 1) > 0.5);
}
var axis2 = new Vector313(0, 0, 1).normalize();
var tempVec32 = new Vector313();
var tempVec3B2 = new Vector313();
var originalVec32 = new Vector313();
var basis2 = 34;
function makeWater(mat, time = 0, maxStrength = 0.15) {
  const geo = new PlaneBufferGeometry2(basis2, basis2, basis2, basis2);
  const posAttr = geo.attributes.position;
  const posArr = posAttr.array;
  const normalAttr = geo.attributes.normal;
  const normalArr = normalAttr.array;
  const colorArr = new Float32Array(posAttr.count * 3);
  const localStrengths = strengths2.map((v2) => lerp(maxStrength, 0.05, v2));
  for (let i = 0; i < posAttr.count; i++) {
    const i3 = i * 3;
    originalVec32.fromArray(posArr, i3);
    const resultVec3 = originalVec32.clone();
    for (let j = 0; j < total2; j++) {
      tempVec32.copy(originalVec32);
      if (flips2[j]) {
        const x = tempVec32.x;
        tempVec32.x = -tempVec32.y;
        tempVec32.y = x;
      }
      const freq = freqs2[j];
      const skew = skews2[j];
      const strength = localStrengths[j];
      const ratioV = (tempVec32.y + 16) / 32;
      tempVec32.x += skew * 32 * ratioV;
      const ratioU = (tempVec32.x + 16) / 32;
      const a = (ratioU * freq + time) * Math.PI * 2 + aOffsets2[j] + maxStrength * (j + 4) * 0.5;
      tempVec3B2.set(0, Math.cos(a) * strength, -Math.sin(a) * strength);
      tempVec3B2.applyAxisAngle(
        axis2,
        Math.atan2(skew, 1) + Math.PI * 0.5 + (flips2[j] ? -Math.PI * 0.5 : 0)
      );
      resultVec3.add(tempVec3B2);
    }
    resultVec3.toArray(posArr, i3);
    const colorSample = unlerp(-2, 1, resultVec3.z);
    resultVec3.set(colorSample, lerp(0.5, 1, colorSample), 1);
    resultVec3.toArray(colorArr, i3);
    posArr[i3 + 2] *= 0.025;
  }
  geo.setAttribute("color", new BufferAttribute4(colorArr, 3));
  geo.computeVertexNormals();
  for (let i = 0; i < posAttr.count; i++) {
    const i3 = i * 3;
    tempVec32.fromArray(normalArr, i3);
    tempVec32.z *= 0.025;
    tempVec32.normalize();
    tempVec32.toArray(normalArr, i3);
  }
  const pivot = new Object3D15();
  pivot.rotation.x = -Math.PI * 0.5;
  const meshProto = new Mesh14(geo, mat);
  for (let ix = -1; ix <= 1; ix++) {
    for (let iy = -1; iy <= 1; iy++) {
      const mesh = meshProto.clone();
      mesh.position.x = ix * 32;
      mesh.position.y = iy * 32;
      pivot.add(mesh);
    }
  }
  pivot.position.y = 0.25;
  return pivot;
}

// src/rendering/tileMaker/mapTileMaker/MapTileMaker.ts
import { lerp as lerp2 } from "three/src/math/MathUtils";

// src/meshes/factoryDirt.ts
import { BufferAttribute as BufferAttribute5, Object3D as Object3D16 } from "three";
import { Color as Color2 } from "three";
import { Mesh as Mesh15, PlaneBufferGeometry as PlaneBufferGeometry3, Vector3 as Vector314 } from "three";

// src/helpers/utils/NoiseHelper4D.ts
import { makeNoise4D } from "fast-simplex-noise";
var NoiseHelper4D = class {
  constructor(_scale, seed = 0, _strength = 1, _offset = 0) {
    this._scale = _scale;
    this._strength = _strength;
    this._offset = _offset;
    const randGenerator = sfc32(100 + seed, 200 + seed, 300 + seed, 444 + seed);
    this._noise = makeNoise4D(randGenerator);
  }
  getValue(x, y, z, w) {
    return this._noise(
      x * this._scale,
      y * this._scale,
      z * this._scale,
      w * this._scale
    ) * this._strength + this._offset;
  }
};

// src/meshes/factoryDirt.ts
var __tempVec32 = new Vector314();
var __protoGeos2 = /* @__PURE__ */ new Map();
function __getProtoGeo2(uOffset, vOffset) {
  const key = `${uOffset}:${vOffset}`;
  if (!__protoGeos2.has(key)) {
    const workingColor = new Color2();
    const color = new Color2(0.05, 0.05, 0.05);
    const color2 = new Color2(0.16, 0.14, 0.13);
    const basis3 = 18;
    const geo = new PlaneBufferGeometry3(basis3, basis3, basis3 * 2, basis3 * 2);
    const posAttr = geo.attributes.position;
    const posArr = posAttr.array;
    const uvAttr = geo.attributes.uv;
    const uvArr = uvAttr.array;
    const colorArr = new Float32Array(posAttr.count * 3);
    const noise = new NoiseHelper4D(0.62, 1);
    const noise2 = new NoiseHelper4D(0.2, 1);
    for (let i = 0; i < posAttr.count; i++) {
      const i2 = i * 2;
      const i3 = i * 3;
      __tempVec32.fromArray(posArr, i3);
      const u = __tempVec32.x / 16 + 0.5;
      const v2 = __tempVec32.y / 16 + 0.5;
      uvArr[i2] = u;
      uvArr[i2 + 1] = v2;
      const subU = (__tempVec32.x + uOffset) / 32 + 0.5;
      const subV = (__tempVec32.y + vOffset) / 32 + 0.5;
      const angleU = subU * Math.PI * 2;
      const angleV = subV * Math.PI * 2;
      const x = Math.cos(angleU);
      const y = Math.sin(angleU);
      const z = Math.cos(angleV) * 1.5;
      const w = Math.sin(angleV) * 1.5;
      const sample = noise.getValue(x + 1.12, y + 7.582, z + 2.1845, w + 4.852);
      const sample2 = noise2.getValue(
        x + 1.12,
        y + 7.582,
        z + 2.1845,
        w + 4.852
      );
      const bouncedSample1 = 1 - Math.abs(sample);
      const bouncedSample2 = 1 - Math.abs(sample2);
      const bouncedSample = Math.max(bouncedSample1, bouncedSample2);
      __tempVec32.z = Math.pow(bouncedSample, 8) * 2 + 4;
      __tempVec32.toArray(posArr, i3);
      const colorSample = Math.pow(bouncedSample, 3);
      workingColor.lerpColors(color, color2, colorSample);
      __tempVec32.set(workingColor.r, workingColor.g, workingColor.b);
      __tempVec32.toArray(colorArr, i3);
    }
    geo.setAttribute("color", new BufferAttribute5(colorArr, 3));
    __protoGeos2.set(key, geo);
  }
  return __protoGeos2.get(key);
}
var __offsets2 = [
  [-8, -8],
  [8, -8],
  [-8, 8],
  [8, 8]
];
var __quadMeshes2 = /* @__PURE__ */ new Map();
function makeDirtQuad(id, quad, mat) {
  const tl = quad[0] ? 0 : 1;
  const tr = quad[1] ? 0 : 1;
  const bl = quad[2] ? 0 : 1;
  const br = quad[3] ? 0 : 1;
  const key = `${id}${tl}${tr}${bl}${br}`;
  if (!__quadMeshes2.has(key)) {
    const offsets = __offsets2[id];
    const geo = __getProtoGeo2(offsets[0], offsets[1]).clone();
    const posAttr = geo.attributes.position;
    const posArr = posAttr.array;
    const uvAttr = geo.attributes.uv;
    const uvArr = uvAttr.array;
    const sink = tl === br && tr === bl && tl !== tr;
    for (let i = 0; i < posAttr.count; i++) {
      const i2 = i * 2;
      const i3 = i * 3;
      __tempVec32.fromArray(posArr, i3);
      const u = uvArr[i2];
      const v2 = uvArr[i2 + 1];
      const t = lerp(tl, tr, u);
      const b = lerp(bl, br, u);
      let final = lerp(t, b, v2);
      if (sink) {
        const sinkDist = Math.pow(
          Math.sqrt(Math.pow((u - 0.5) * 2, 2) + Math.pow((v2 - 0.5) * 2, 2)),
          0.5
        );
        final += clamp(1 - sinkDist, 0, 1);
      }
      __tempVec32.z += Math.pow(final, 2) * -10;
      __tempVec32.toArray(posArr, i3);
    }
    geo.computeVertexNormals();
    const mesh = new Mesh15(geo, mat);
    mesh.position.x = offsets[0];
    mesh.position.y = offsets[1];
    const pivot = new Object3D16();
    pivot.rotation.x = -Math.PI * 0.5;
    pivot.scale.z = 0.1;
    pivot.add(mesh);
    __quadMeshes2.set(key, pivot);
  }
  return __quadMeshes2.get(key).clone();
}

// src/utils/isVisible.ts
import { Mesh as Mesh16 } from "three";
function findOnlyVisibleMeshes(node, results = []) {
  if (!node.visible) {
    return results;
  }
  if (node instanceof Mesh16) {
    results.push(node);
  }
  for (const child of node.children) {
    findOnlyVisibleMeshes(child, results);
  }
  return results;
}

// src/utils/location.ts
import { Color as Color4 } from "three";

// src/utils/colors.ts
import { Color as Color3, MeshBasicMaterial as MeshBasicMaterial2 } from "three";
var __whiteColor = new Color3(1, 1, 1);
var __tempColor = new Color3();

// src/utils/location.ts
var cache = /* @__PURE__ */ new Map();
function getSearchParam(param) {
  if (typeof window === "undefined") {
    return null;
  }
  return new URL(window.location.href).searchParams.get(param);
}
function getUrlParam(param) {
  if (cache.has(param)) {
    return cache.get(param);
  }
  queueParameterReminder(param);
  const value = getSearchParam(param);
  cache.set(param, value);
  return value;
}
function getUrlFlag(param) {
  const result = getUrlParam(param);
  return !!(result === "" || result && result !== "false");
}
var keysToRemember = [];
var reminderQueued = false;
function queueParameterReminder(name) {
  if (typeof window === "undefined" || keysToRemember.includes(name)) {
    return;
  }
  keysToRemember.push(name);
  if (reminderQueued) {
    return;
  }
  reminderQueued = true;
  setTimeout(() => {
    console.log("Nice Parameters to try: " + keysToRemember.join(", "));
    reminderQueued = false;
  }, 2e3);
}

// src/meshes/factoryLog.ts
import { CylinderBufferGeometry as CylinderBufferGeometry4, Mesh as Mesh17, Object3D as Object3D18 } from "three";
function makeLog(radius = 8, height = 40) {
  const radiusInner = radius * 0.75;
  const pivot = new Object3D18();
  const wood = new Mesh17(
    new CylinderBufferGeometry4(radiusInner, radiusInner, height, 16, 1),
    getMeshMaterial("wood")
  );
  pivot.add(wood);
  const matBark = getMeshMaterial("bark");
  const tiltRange3 = 0.1;
  const t = height * 5;
  for (let i = 0; i < t; i++) {
    const size = ~~detRandLogPine(radius * 0.75, radius);
    const bark = new Mesh17(
      getCachedChamferedBoxGeometry(1.5, size, 4, 0.5),
      matBark
    );
    bark.rotation.order = "YXZ";
    const y = i / t - 0.5;
    const angle = detRandLogPine(0, Math.PI * 2);
    bark.position.set(
      Math.cos(angle) * radius,
      y * height,
      Math.sin(angle) * radius
    );
    bark.rotation.y = -angle;
    bark.rotation.x += detRandLogPine(-tiltRange3, tiltRange3);
    bark.rotation.y += detRandLogPine(-tiltRange3, tiltRange3);
    bark.rotation.z += detRandLogPine(-tiltRange3, tiltRange3);
    wood.add(bark);
  }
  pivot.position.y = radius;
  wood.rotation.x = Math.PI * 0.5;
  return pivot;
}

// src/rendering/tileMaker/mapTileMaker/MapTileMaker.ts
var slicknessByName = {
  invisible: 0.3,
  ironBlack: 1,
  ground: 0.05,
  brick: 0.9,
  gold: 1,
  silver: 1,
  iron: 1,
  copper: 1,
  mortar: 1,
  drywall: 1,
  floor: 1,
  wood: 0.9,
  woodMaple: 0.9,
  bark: 0.9,
  barkMaple: 0.9,
  skin: 1,
  plastic: 0.8,
  grass: 0.9,
  bush: 0.95,
  leafMaple: 0.9,
  pineNeedle: 0.8,
  berry: 1,
  pants: 1,
  pantsRed: 1,
  rock: 0.94,
  cyberGlow: 1,
  cyberPanel: 1,
  water: 1,
  fleeceWhite: 1,
  fleeceBlack: 1,
  sheepNose: 1,
  shinyBlack: 1,
  pitchBlack: 1,
  zombieSkin: 1,
  bone: 1,
  snow: 1
};
function getSlickness(materialName) {
  if (isCuratedMaterial(materialName)) {
    return slicknessByName[materialName];
  } else {
    return 1;
  }
}
var mapTileVisualPropertyLookupStrings = [
  "layer2",
  "nothingness",
  "floor",
  "logWallCenter",
  "logWallN",
  "logWallE",
  "logWallS",
  "logWallW",
  "logWallNS",
  "logWallEW",
  "logDoorNS",
  "logDoorEW",
  "logWindowNS",
  "logWindowEW",
  "beamCenter",
  "beamN",
  "beamE",
  "beamS",
  "beamW",
  "beamNS",
  "beamEW",
  "bricks0",
  "bricks1",
  "bricks2",
  "bricks3",
  "bricks4",
  "bricks5",
  "bricks6",
  "bricks7",
  "bricks8",
  "bricks9",
  "bricks10",
  "bricks11",
  "grassC",
  "grassN",
  "grassNE",
  "grassE",
  "grassSE",
  "grassS",
  "grassSW",
  "grassW",
  "grassNW",
  "bushC",
  "bushN",
  "bushNE",
  "bushE",
  "bushSE",
  "bushS",
  "bushSW",
  "bushW",
  "bushNW",
  "goldPile",
  "lampPost",
  "pyramid",
  "rockyGround",
  "rocksC",
  "rocksCBig",
  "rocksN",
  "rocksNE",
  "rocksE",
  "rocksSE",
  "rocksS",
  "rocksSW",
  "rocksW",
  "rocksNW",
  "goldOreForRocks",
  "goldOreForBigRocks",
  "silverOreForRocks",
  "silverOreForBigRocks",
  "ironOreForRocks",
  "ironOreForBigRocks",
  "copperOreForRocks",
  "copperOreForBigRocks",
  "rockCrumbsC",
  "rockCrumbsN",
  "rockCrumbsNE",
  "rockCrumbsE",
  "rockCrumbsSE",
  "rockCrumbsS",
  "rockCrumbsSW",
  "rockCrumbsW",
  "rockCrumbsNW",
  "treePineC",
  "treePineN",
  "treePineNE",
  "treePineE",
  "treePineSE",
  "treePineS",
  "treePineSW",
  "treePineW",
  "treePineNW",
  "treePineMatureC",
  "treePineMatureN",
  "treePineMatureNE",
  "treePineMatureE",
  "treePineMatureSE",
  "treePineMatureS",
  "treePineMatureSW",
  "treePineMatureW",
  "treePineMatureNW",
  "treePineStump",
  "treePineStumpMature",
  "treeMapleC",
  "treeMapleN",
  "treeMapleNE",
  "treeMapleE",
  "treeMapleSE",
  "treeMapleS",
  "treeMapleSW",
  "treeMapleW",
  "treeMapleNW",
  "treeMapleMatureC",
  "treeMapleMatureN",
  "treeMapleMatureNE",
  "treeMapleMatureE",
  "treeMapleMatureSE",
  "treeMapleMatureS",
  "treeMapleMatureSW",
  "treeMapleMatureW",
  "treeMapleMatureNW",
  "treeMapleStump",
  "treeMapleStumpMature",
  "water00",
  "water10",
  "water20",
  "water30",
  "water01",
  "water11",
  "water21",
  "water31",
  "water02",
  "water12",
  "water22",
  "water32",
  "water03",
  "water13",
  "water23",
  "water33",
  "water04",
  "water14",
  "water24",
  "water34",
  "water05",
  "water15",
  "water25",
  "water35",
  "water06",
  "water16",
  "water26",
  "water36",
  "water07",
  "water17",
  "water27",
  "water37",
  "dirt0",
  "dirt1",
  "dirt2",
  "dirt3",
  "dirt4",
  "dirt5",
  "dirt6",
  "dirt7",
  "dirt8",
  "dirt9",
  "dirt10",
  "dirt11",
  "dirt12",
  "dirt13",
  "dirt14",
  "dirt15",
  "dirt16",
  "dirt17",
  "dirt18",
  "dirt19",
  "dirt20",
  "dirt21",
  "dirt22",
  "dirt23",
  "dirt24",
  "dirt25",
  "dirt26",
  "dirt27",
  "dirt28",
  "dirt29",
  "dirt30",
  "dirt31",
  "dirt32",
  "dirt33",
  "dirt34",
  "dirt35",
  "dirt36",
  "dirt37",
  "dirt38",
  "dirt39",
  "dirt40",
  "dirt41",
  "dirt42",
  "dirt43",
  "dirt44",
  "dirt45",
  "dirt46",
  "dirt47",
  "dirt48",
  "dirt49",
  "dirt50",
  "dirt51",
  "dirt52",
  "dirt53",
  "dirt54",
  "dirt55",
  "dirt56",
  "dirt57",
  "dirt58",
  "dirt59",
  "dirt60",
  "dirt61",
  "dirt62",
  "dirt63",
  "sand0",
  "sand1",
  "sand2",
  "sand3",
  "sand4",
  "sand5",
  "sand6",
  "sand7",
  "sand8",
  "sand9",
  "sand10",
  "sand11",
  "sand12",
  "sand13",
  "sand14",
  "sand15",
  "sand16",
  "sand17",
  "sand18",
  "sand19",
  "sand20",
  "sand21",
  "sand22",
  "sand23",
  "sand24",
  "sand25",
  "sand26",
  "sand27",
  "sand28",
  "sand29",
  "sand30",
  "sand31",
  "sand32",
  "sand33",
  "sand34",
  "sand35",
  "sand36",
  "sand37",
  "sand38",
  "sand39",
  "sand40",
  "sand41",
  "sand42",
  "sand43",
  "sand44",
  "sand45",
  "sand46",
  "sand47",
  "sand48",
  "sand49",
  "sand50",
  "sand51",
  "sand52",
  "sand53",
  "sand54",
  "sand55",
  "sand56",
  "sand57",
  "sand58",
  "sand59",
  "sand60",
  "sand61",
  "sand62",
  "sand63",
  "testObject"
];
var MapTileMaker = class extends DoubleCachedTileMaker {
  get visualPropertyLookupStrings() {
    return mapTileVisualPropertyLookupStrings;
  }
  constructor(pixelsPerTile = 32, pixelsPerCacheEdge = 2048, passes = ["beauty"]) {
    const dummy = memoize(() => new Object3D19());
    const cyberGlowMat = getMeshMaterial("cyberGlow");
    const cyberPanelMat = getMeshMaterial("cyberPanel");
    const nothingness = () => {
      const obj = new Mesh18(new BoxBufferGeometry2(32, 2, 32), cyberGlowMat);
      obj.position.y = -1;
      const protoPanel = new Mesh18(
        getChamferedBoxGeometry(15, 4, 15, 1),
        cyberPanelMat
      );
      for (let ix = -1; ix <= 1; ix += 2) {
        for (let iy = -1; iy <= 1; iy += 2) {
          const panel = protoPanel.clone();
          obj.add(panel);
          panel.position.x = 8 * ix + 0.5;
          panel.position.z = 8 * iy + 0.5;
        }
      }
      return obj;
    };
    const brickMat = getMeshMaterial("brick");
    const mortarMat = getMeshMaterial("mortar");
    const drywallMat = getMeshMaterial("drywall");
    const floorMat = getMeshMaterial("floor");
    const groundMat = getMeshMaterial("ground");
    const plasticMat = getMeshMaterial("plastic");
    const waterMat = getMeshMaterial("water");
    const grassMat = getMeshMaterial(getUrlFlag("snow") ? "invisible" : "grass");
    const rocksMat = getMeshMaterial("rock");
    const bushMat = getMeshMaterial("bush");
    const berryMat = getMeshMaterial("berry");
    const woodMat = getMeshMaterial("wood");
    const ball = new Mesh18(new SphereGeometry(16, 32, 16), plasticMat);
    ball.scale.y = Math.SQRT1_2;
    const floor = () => {
      const floorBoard = new Mesh18(
        getChamferedBoxGeometry(8, 4, 32, 1),
        floorMat
      );
      const floorBoardPair = new Object3D19();
      floorBoardPair.add(floorBoard);
      const floorBoard2 = floorBoard.clone();
      floorBoardPair.add(floorBoard2);
      floorBoard.position.z = -16;
      floorBoard2.position.z = 16;
      const floor2 = new Mesh18(new BoxBufferGeometry2(32, 2, 32), floorMat);
      detRandWoodPlanks();
      for (let i = 0; i < 4; i++) {
        const c = floorBoardPair.clone();
        c.position.x = i * 8 - 12;
        c.position.z = ~~detRandWoodPlanks(-14, 14);
        floor2.add(c);
      }
      floor2.position.y = 0;
      return floor2;
    };
    const drywall = new Mesh18(new BoxBufferGeometry2(32, 32, 2), drywallMat);
    const getBrickWall = memoize(
      () => makeBrickWall(brickMat, mortarMat, -1, 1)
    );
    const brickWallSectionSC = memoize(() => {
      const obj = getBrickWall().clone();
      obj.position.z = 8;
      obj.position.x = 0;
      return obj;
    });
    const brickWallSectionEC = memoize(() => {
      const obj = getBrickWall().clone();
      obj.position.x = 8;
      obj.rotation.y = Math.PI * 0.5;
      return obj;
    });
    const brickWallSectionNC = memoize(() => {
      const obj = getBrickWall().clone();
      obj.position.z = -8;
      obj.rotation.y = Math.PI;
      return obj;
    });
    const brickWallSectionWC = memoize(() => {
      const obj = getBrickWall().clone();
      obj.position.x = -8;
      obj.rotation.y = Math.PI * -0.5;
      return obj;
    });
    const moveRelX = (brickWall, amt) => {
      brickWall.position.x += Math.cos(brickWall.rotation.y) * amt;
      brickWall.position.z += Math.sin(brickWall.rotation.y) * amt;
    };
    const makeBrickWallSectionsL = (brickWallC) => {
      brickWallC.updateMatrixWorld();
      const brickWallL = brickWallC.clone(true);
      moveRelX(brickWallL, -16);
      return brickWallL;
    };
    const makeBrickWallSectionsR = (brickWallC) => {
      const brickWallR = brickWallC.clone(true);
      moveRelX(brickWallR, 16);
      return brickWallR;
    };
    const brickWallSectionSL = () => makeBrickWallSectionsL(brickWallSectionSC());
    const brickWallSectionSR = () => makeBrickWallSectionsR(brickWallSectionSC());
    const brickWallSectionWL = () => makeBrickWallSectionsL(brickWallSectionWC());
    const brickWallSectionWR = () => makeBrickWallSectionsR(brickWallSectionWC());
    const brickWallSectionNL = () => makeBrickWallSectionsL(brickWallSectionNC());
    const brickWallSectionNR = () => makeBrickWallSectionsR(brickWallSectionNC());
    const brickWallSectionEL = () => makeBrickWallSectionsL(brickWallSectionEC());
    const brickWallSectionER = () => makeBrickWallSectionsR(brickWallSectionEC());
    const woodLogGeo = getChamferedBoxGeometry(6, 32, 6, 2);
    const logWallCenter = () => {
      const height = 32 * 1.2;
      const obj = new Object3D19();
      for (let iy = -1; iy <= 1; iy += 2) {
        for (let ix = -1; ix <= 1; ix += 2) {
          const logWallCenter2 = makeLog(logWallLogRadius, height);
          logWallCenter2.rotation.x = Math.PI * 0.5;
          logWallCenter2.position.x = logWallLogRadius * ix;
          logWallCenter2.position.z = logWallLogRadius * iy;
          logWallCenter2.position.y = height * 0.5;
          obj.add(logWallCenter2);
        }
      }
      return obj;
    };
    const logWallHeight = 5;
    const logWallLogRadius = 4;
    const makeLogWallFullSectionEW = () => {
      const logWallFullSectionEW2 = new Object3D19();
      for (let i = 1; i < logWallHeight; i++) {
        const log = makeLog(logWallLogRadius, 32);
        log.rotation.y = Math.PI * 0.5;
        logWallFullSectionEW2.add(log);
        log.position.y = i * logWallLogRadius * 2;
      }
      return logWallFullSectionEW2;
    };
    const logWallFullSectionEW = makeLogWallFullSectionEW;
    const logWallFullSectionNS = () => {
      const obj = logWallFullSectionEW().clone(true);
      obj.rotation.y += Math.PI * 0.5;
      obj.position.y -= logWallLogRadius;
      return obj;
    };
    const excludeLogDoorIds = [1, 2, 3];
    const makeLogWallDoorSectionEW = () => {
      const logWallFullSectionEW2 = new Object3D19();
      for (let i = 1; i < logWallHeight; i++) {
        if (excludeLogDoorIds.includes(i)) {
          continue;
        }
        const log = makeLog(logWallLogRadius, 32);
        log.rotation.y = Math.PI * 0.5;
        logWallFullSectionEW2.add(log);
        log.position.y = i * logWallLogRadius * 2;
      }
      return logWallFullSectionEW2;
    };
    const logWallDoorSectionEW = makeLogWallDoorSectionEW;
    const logWallDoorSectionNS = () => {
      const obj = logWallDoorSectionEW().clone(true);
      obj.rotation.y += Math.PI * 0.5;
      obj.position.y -= logWallLogRadius;
      return obj;
    };
    const excludeLogWindowIds = [2, 3];
    const makeLogWallWindowSectionEW = () => {
      const logWallFullSectionEW2 = new Object3D19();
      for (let i = 1; i < logWallHeight; i++) {
        if (excludeLogWindowIds.includes(i)) {
          continue;
        }
        const log = makeLog(logWallLogRadius, 32);
        log.rotation.y = Math.PI * 0.5;
        logWallFullSectionEW2.add(log);
        log.position.y = i * logWallLogRadius * 2;
      }
      return logWallFullSectionEW2;
    };
    const logWallWindowSectionEW = makeLogWallWindowSectionEW;
    const logWallWindowSectionNS = () => {
      const obj = logWallWindowSectionEW().clone(true);
      obj.rotation.y += Math.PI * 0.5;
      obj.position.y -= logWallLogRadius;
      return obj;
    };
    const makeShortLogWall = memoize(() => {
      const shortLogWall = new Object3D19();
      for (let i = 1; i < logWallHeight; i++) {
        const log = makeLog(logWallLogRadius, 24);
        log.rotation.y = Math.PI * 0.5;
        shortLogWall.add(log);
        log.position.y = i * logWallLogRadius * 2;
      }
      return shortLogWall;
    });
    const logWallE = () => {
      const obj = new Object3D19();
      obj.add(makeShortLogWall().clone());
      obj.position.x = 4;
      return obj;
    };
    const logWallS = () => {
      const obj = new Object3D19();
      obj.add(makeShortLogWall().clone());
      obj.rotation.y = Math.PI * 0.5;
      obj.position.z = -4;
      obj.position.y -= logWallLogRadius;
      return obj;
    };
    const logWallW = () => {
      const obj = new Object3D19();
      obj.add(makeShortLogWall().clone());
      obj.rotation.y = Math.PI;
      obj.position.x = -4;
      return obj;
    };
    const logWallN = () => {
      const obj = new Object3D19();
      obj.add(makeShortLogWall().clone());
      obj.rotation.y = Math.PI * -0.5;
      obj.position.z = 4;
      obj.position.y -= logWallLogRadius;
      return obj;
    };
    const woodBeamGeo = getChamferedBoxGeometry(6, 32, 6, 1);
    const makeStud = memoize(() => {
      const woodStudGeo = getChamferedBoxGeometry(4, 32 - 6, 6, 1);
      const stud = new Mesh18(woodStudGeo, woodMat);
      stud.position.y = 16;
      return stud;
    });
    const beamCenter = () => {
      const beamCenter2 = new Mesh18(woodBeamGeo, woodMat);
      beamCenter2.position.y = 16;
      return beamCenter2;
    };
    const makeBeamFullSectionEW = () => {
      const woodPlateGeo = getChamferedBoxGeometry(36, 3, 6, 1);
      const bottomPlate = new Mesh18(woodPlateGeo, woodMat);
      bottomPlate.position.y = 1.5;
      const topPlate = new Mesh18(woodPlateGeo, woodMat);
      topPlate.position.y = 32 - 1.5;
      const beamFullSectionEW2 = new Object3D19();
      beamFullSectionEW2.add(bottomPlate);
      beamFullSectionEW2.add(topPlate);
      const stud = makeStud().clone();
      beamFullSectionEW2.add(stud);
      const stud2 = stud.clone();
      stud2.position.x -= 16;
      beamFullSectionEW2.add(stud2);
      const stud3 = stud.clone();
      stud3.position.x += 16;
      beamFullSectionEW2.add(stud3);
      return beamFullSectionEW2;
    };
    const beamFullSectionEW = makeBeamFullSectionEW;
    const beamFullSectionNS = () => {
      const obj = beamFullSectionEW().clone(true);
      obj.rotation.y = Math.PI * 0.5;
      return obj;
    };
    const makeShortBeam = memoize(() => {
      const woodPlateShortGeo = getChamferedBoxGeometry(15, 3, 6, 1);
      const bottomShortPlate = new Mesh18(woodPlateShortGeo, woodMat);
      bottomShortPlate.position.x = 1;
      bottomShortPlate.position.y = 1.5;
      const topShortPlate = new Mesh18(woodPlateShortGeo, woodMat);
      topShortPlate.position.x = 1;
      topShortPlate.position.y = 32 - 1.5;
      const shortBeam = new Object3D19();
      shortBeam.add(topShortPlate);
      shortBeam.add(bottomShortPlate);
      const stud4 = makeStud().clone();
      stud4.position.x = -4.5;
      const stud5 = makeStud().clone();
      stud5.position.x = 6.5;
      shortBeam.add(stud4);
      shortBeam.add(stud5);
      shortBeam.position.x = 16 - 13 * 0.5;
      return shortBeam;
    });
    const beamE = () => {
      const obj = new Object3D19();
      obj.add(makeShortBeam().clone());
      return obj;
    };
    const beamS = () => {
      const obj = new Object3D19();
      obj.add(makeShortBeam().clone());
      obj.rotation.y = Math.PI * 0.5;
      return obj;
    };
    const beamW = () => {
      const obj = new Object3D19();
      obj.add(makeShortBeam().clone());
      obj.rotation.y = Math.PI;
      return obj;
    };
    const beamN = () => {
      const obj = new Object3D19();
      obj.add(makeShortBeam().clone());
      obj.rotation.y = Math.PI * -0.5;
      return obj;
    };
    drywall.position.y = 16;
    drywall.position.z = -4;
    const useGrass = !getUrlFlag("snow");
    grassMat.visible = !useGrass;
    const grassGeoA = memoize(
      () => new GrassGeometry(useGrass ? 200 : 20, !useGrass)
    );
    const grassGeoH = memoize(
      () => new GrassGeometry(useGrass ? 200 : 20, !useGrass)
    );
    const grassGeoV = memoize(
      () => new GrassGeometry(useGrass ? 200 : 20, !useGrass)
    );
    const grassGeoCorner = memoize(
      () => new GrassGeometry(useGrass ? 200 : 20, !useGrass)
    );
    const grassC = () => new Mesh18(grassGeoA(), grassMat);
    const grassN = () => {
      const obj = new Mesh18(grassGeoV(), grassMat);
      obj.position.set(0, 0, 16);
      return obj;
    };
    const grassNE = () => {
      const obj = new Mesh18(grassGeoCorner(), grassMat);
      obj.position.set(16, 0, 16);
      return obj;
    };
    const grassE = () => {
      const obj = new Mesh18(grassGeoH(), grassMat);
      obj.position.set(16, 0, 0);
      return obj;
    };
    const grassSE = () => {
      const obj = new Mesh18(grassGeoCorner(), grassMat);
      obj.position.set(16, 0, -16);
      return obj;
    };
    const grassS = () => {
      const obj = new Mesh18(grassGeoV(), grassMat);
      obj.position.set(0, 0, -16);
      return obj;
    };
    const grassSW = () => {
      const obj = new Mesh18(grassGeoCorner(), grassMat);
      obj.position.set(-16, 0, -16);
      return obj;
    };
    const grassW = () => {
      const obj = new Mesh18(grassGeoH(), grassMat);
      obj.position.set(-16, 0, 0);
      return obj;
    };
    const grassNW = () => {
      const obj = new Mesh18(grassGeoCorner(), grassMat);
      obj.position.set(-16, 0, 16);
      return obj;
    };
    const bushC = () => makeRecursiveBush(bushMat, berryMat);
    const bushVProto = memoize(() => makeRecursiveBush(bushMat, berryMat));
    const bushHProto = memoize(() => makeRecursiveBush(bushMat, berryMat));
    const bushCornerProto = memoize(
      () => makeRecursiveBush(bushMat, berryMat, new BushProps(16, 8, 24, 60, 22))
    );
    const bushN = () => {
      const obj = bushVProto().clone(true);
      obj.position.set(0, 0, 16);
      return obj;
    };
    const bushNE = () => {
      const obj = bushCornerProto().clone(true);
      obj.position.set(16, 0, 16);
      return obj;
    };
    const bushE = () => {
      const obj = bushHProto().clone(true);
      obj.position.set(16, 0, 0);
      return obj;
    };
    const bushSE = () => {
      const obj = bushNE().clone(true);
      obj.position.set(16, 0, -16);
      return obj;
    };
    const bushS = () => {
      const obj = bushN().clone(true);
      obj.position.set(0, 0, -16);
      return obj;
    };
    const bushSW = () => {
      const obj = bushNE().clone(true);
      obj.position.set(-16, 0, -16);
      return obj;
    };
    const bushW = () => {
      const obj = bushHProto().clone(true);
      obj.position.set(-16, 0, 0);
      return obj;
    };
    const bushNW = () => {
      const obj = bushNE().clone(true);
      obj.position.set(-16, 0, 16);
      return obj;
    };
    const goldMat = getMeshMaterial("gold");
    const silverMat = getMeshMaterial("silver");
    const ironMat = getMeshMaterial("iron");
    const copperMat = getMeshMaterial("copper");
    const goldChunkGeo = new FibonacciSphereGeometry(4, 17);
    const goldPile = () => makeGoldPile(goldChunkGeo, goldMat);
    const ironBlackMat = getMeshMaterial("ironBlack");
    const lampPost = () => makeLampPost(ironBlackMat);
    const testObject = () => {
      const obj = new Mesh18(
        new TorusKnotBufferGeometry(10, 2, 48, 8),
        getMeshMaterial("plastic")
      );
      obj.position.y = 12;
      obj.rotation.x = Math.PI * 0.5;
      obj.scale.y *= verticalScale;
      return obj;
    };
    const pyramid = () => {
      const pyramidGeo = new PyramidGeometry();
      const obj = new Mesh18(pyramidGeo, getMeshMaterial("floor"));
      const pyramidTop = new Mesh18(pyramidGeo, getMeshMaterial("gold"));
      obj.add(pyramidTop);
      pyramidTop.scale.setScalar(0.2);
      pyramidTop.position.y = 0.82;
      obj.scale.set(30, 16, 30);
      return obj;
    };
    const rockyGround = () => {
      return makeRockCrumbs(getMeshMaterial("rock"));
    };
    const rocksA = memoize(() => makeRocks(rocksMat, 0));
    const rocksABig = memoize(() => makeRocks(rocksMat, 0));
    const rocksH = memoize(() => makeRocks(rocksMat, 4));
    const rocksV = memoize(() => makeRocks(rocksMat, 4));
    const rocksCorner = memoize(() => makeRocks(rocksMat, 8));
    const rocksC = () => rocksA();
    const rocksN = () => {
      const obj = rocksV().clone();
      obj.position.set(0, 0, 16);
      return obj;
    };
    const rocksNE = () => {
      const obj = rocksCorner().clone();
      obj.position.set(16, 0, 16);
      return obj;
    };
    const rocksE = () => {
      const obj = rocksH().clone();
      obj.position.set(16, 0, 0);
      return obj;
    };
    const rocksSE = () => {
      const obj = rocksCorner().clone();
      obj.position.set(16, 0, -16);
      return obj;
    };
    const rocksS = () => {
      const obj = rocksV().clone();
      obj.position.set(0, 0, -16);
      return obj;
    };
    const rocksSW = () => {
      const obj = rocksCorner().clone();
      obj.position.set(-16, 0, -16);
      return obj;
    };
    const rocksW = () => {
      const obj = rocksH().clone();
      obj.position.set(-16, 0, 0);
      return obj;
    };
    const rocksNW = () => {
      const obj = rocksCorner().clone();
      obj.position.set(-16, 0, 16);
      return obj;
    };
    const rocksCBig = () => {
      const obj = rocksABig().clone();
      obj.position.y += 12;
      return obj;
    };
    const goldOreForRocks = () => makeRocks(goldMat, 0, 2);
    const goldOreForBigRocks = () => makeRocks(goldMat, 10, 2);
    const silverOreForRocks = () => makeRocks(silverMat, 0, 2);
    const silverOreForBigRocks = () => makeRocks(silverMat, 10, 2);
    const ironOreForRocks = () => makeRocks(ironMat, 0, 2);
    const ironOreForBigRocks = () => makeRocks(ironMat, 10, 2);
    const copperOreForRocks = () => makeRocks(copperMat, 0, 2);
    const copperOreForBigRocks = () => makeRocks(copperMat, 10, 2);
    const rockCrumbsA = memoize(() => makeRockCrumbs(rocksMat));
    const rockCrumbsH = memoize(() => makeRockCrumbs(rocksMat));
    const rockCrumbsV = memoize(() => makeRockCrumbs(rocksMat));
    const rockCrumbsCorner = memoize(() => makeRockCrumbs(rocksMat));
    const rockCrumbsC = () => {
      const obj = rockCrumbsA().clone();
      return obj;
    };
    const rockCrumbsN = () => {
      const obj = rockCrumbsV().clone();
      obj.position.set(0, 0, 16);
      return obj;
    };
    const rockCrumbsNE = () => {
      const obj = rockCrumbsCorner().clone();
      obj.position.set(16, 0, 16);
      return obj;
    };
    const rockCrumbsE = () => {
      const obj = rockCrumbsH().clone();
      obj.position.set(16, 0, 0);
      return obj;
    };
    const rockCrumbsSE = () => {
      const obj = rockCrumbsCorner().clone();
      obj.position.set(16, 0, -16);
      return obj;
    };
    const rockCrumbsS = () => {
      const obj = rockCrumbsV().clone();
      obj.position.set(0, 0, -16);
      return obj;
    };
    const rockCrumbsSW = () => {
      const obj = rockCrumbsCorner().clone();
      obj.position.set(-16, 0, -16);
      return obj;
    };
    const rockCrumbsW = () => {
      const obj = rockCrumbsH().clone();
      obj.position.set(-16, 0, 0);
      return obj;
    };
    const rockCrumbsNW = () => {
      const obj = rockCrumbsCorner().clone();
      obj.position.set(-16, 0, 16);
      return obj;
    };
    const treePine = memoize(
      () => makeTreePine(getMeshMaterial("bark"), getMeshMaterial("pineNeedle"))
    );
    const treePineC = () => {
      const obj = treePine().clone();
      return obj;
    };
    const treePineN = () => {
      const obj = treePine().clone();
      obj.position.set(0, 0, 32);
      return obj;
    };
    const treePineS = () => {
      const obj = treePine().clone();
      obj.position.set(0, 0, -32);
      return obj;
    };
    const treePineE = () => {
      const obj = treePine().clone();
      obj.position.set(32, 0, 0);
      return obj;
    };
    const treePineW = () => {
      const obj = treePine().clone();
      obj.position.set(-32, 0, 0);
      return obj;
    };
    const treePineNE = () => {
      const obj = treePine().clone();
      obj.position.set(32, 0, 32);
      return obj;
    };
    const treePineSE = () => {
      const obj = treePine().clone();
      obj.position.set(32, 0, -32);
      return obj;
    };
    const treePineNW = () => {
      const obj = treePine().clone();
      obj.position.set(-32, 0, 32);
      return obj;
    };
    const treePineSW = () => {
      const obj = treePine().clone();
      obj.position.set(-32, 0, -32);
      return obj;
    };
    const treePineMature = memoize(
      () => makeTreePineMature(
        getMeshMaterial("bark"),
        getMeshMaterial("pineNeedle"),
        getMeshMaterial("wood")
      )
    );
    const treePineMatureC = () => {
      const obj = treePineMature().clone();
      return obj;
    };
    const treePineMatureN = () => {
      const obj = treePineMature().clone();
      obj.position.set(0, 0, 32);
      return obj;
    };
    const treePineMatureS = () => {
      const obj = treePineMature().clone();
      obj.position.set(0, 0, -32);
      return obj;
    };
    const treePineMatureE = () => {
      const obj = treePineMature().clone();
      obj.position.set(32, 0, 0);
      return obj;
    };
    const treePineMatureW = () => {
      const obj = treePineMature().clone();
      obj.position.set(-32, 0, 0);
      return obj;
    };
    const treePineMatureNE = () => {
      const obj = treePineMature().clone();
      obj.position.set(32, 0, 32);
      return obj;
    };
    const treePineMatureSE = () => {
      const obj = treePineMature().clone();
      obj.position.set(32, 0, -32);
      return obj;
    };
    const treePineMatureNW = () => {
      const obj = treePineMature().clone();
      obj.position.set(-32, 0, 32);
      return obj;
    };
    const treePineMatureSW = () => {
      const obj = treePineMature().clone();
      obj.position.set(-32, 0, -32);
      return obj;
    };
    const treePineStump = memoize(
      () => makeTreePineStump(getMeshMaterial("bark"), getMeshMaterial("wood"))
    );
    const treePineStumpMature = memoize(
      () => makeTreePineStumpMature(getMeshMaterial("bark"), getMeshMaterial("wood"))
    );
    const treeMaple = memoize(
      () => makeTreeMaple(getMeshMaterial("barkMaple"), getMeshMaterial("leafMaple"))
    );
    const treeMapleC = () => {
      const obj = treeMaple().clone();
      return obj;
    };
    const treeMapleN = () => {
      const obj = treeMaple().clone();
      obj.position.set(0, 0, 32);
      return obj;
    };
    const treeMapleS = () => {
      const obj = treeMaple().clone();
      obj.position.set(0, 0, -32);
      return obj;
    };
    const treeMapleE = () => {
      const obj = treeMaple().clone();
      obj.position.set(32, 0, 0);
      return obj;
    };
    const treeMapleW = () => {
      const obj = treeMaple().clone();
      obj.position.set(-32, 0, 0);
      return obj;
    };
    const treeMapleNE = () => {
      const obj = treeMaple().clone();
      obj.position.set(32, 0, 32);
      return obj;
    };
    const treeMapleSE = () => {
      const obj = treeMaple().clone();
      obj.position.set(32, 0, -32);
      return obj;
    };
    const treeMapleNW = () => {
      const obj = treeMaple().clone();
      obj.position.set(-32, 0, 32);
      return obj;
    };
    const treeMapleSW = () => {
      const obj = treeMaple().clone();
      obj.position.set(-32, 0, -32);
      return obj;
    };
    const treeMapleMature = memoize(
      () => makeTreeMapleMature(
        getMeshMaterial("barkMaple"),
        getMeshMaterial("leafMaple"),
        getMeshMaterial("woodMaple")
      )
    );
    const treeMapleMatureC = () => {
      const obj = treeMapleMature().clone();
      return obj;
    };
    const treeMapleMatureN = () => {
      const obj = treeMapleMature().clone();
      obj.position.set(0, 0, 32);
      return obj;
    };
    const treeMapleMatureS = () => {
      const obj = treeMapleMature().clone();
      obj.position.set(0, 0, -32);
      return obj;
    };
    const treeMapleMatureE = () => {
      const obj = treeMapleMature().clone();
      obj.position.set(32, 0, 0);
      return obj;
    };
    const treeMapleMatureW = () => {
      const obj = treeMapleMature().clone();
      obj.position.set(-32, 0, 0);
      return obj;
    };
    const treeMapleMatureNE = () => {
      const obj = treeMapleMature().clone();
      obj.position.set(32, 0, 32);
      return obj;
    };
    const treeMapleMatureSE = () => {
      const obj = treeMapleMature().clone();
      obj.position.set(32, 0, -32);
      return obj;
    };
    const treeMapleMatureNW = () => {
      const obj = treeMapleMature().clone();
      obj.position.set(-32, 0, 32);
      return obj;
    };
    const treeMapleMatureSW = () => {
      const obj = treeMapleMature().clone();
      obj.position.set(-32, 0, -32);
      return obj;
    };
    const treeMapleStump = () => makeTreeMapleStump(
      getMeshMaterial("barkMaple"),
      getMeshMaterial("woodMaple")
    );
    const treeMapleStumpMature = () => makeTreeMapleStumpMature(
      getMeshMaterial("barkMaple"),
      getMeshMaterial("woodMaple")
    );
    const indexedMeshes = [
      dummy,
      nothingness,
      floor,
      logWallCenter,
      logWallN,
      logWallE,
      logWallS,
      logWallW,
      logWallFullSectionNS,
      logWallFullSectionEW,
      logWallDoorSectionNS,
      logWallDoorSectionEW,
      logWallWindowSectionNS,
      logWallWindowSectionEW,
      beamCenter,
      beamN,
      beamE,
      beamS,
      beamW,
      beamFullSectionNS,
      beamFullSectionEW,
      brickWallSectionWR,
      brickWallSectionEL,
      brickWallSectionNR,
      brickWallSectionSR,
      brickWallSectionER,
      brickWallSectionWL,
      brickWallSectionSL,
      brickWallSectionNL,
      brickWallSectionNC,
      brickWallSectionEC,
      brickWallSectionSC,
      brickWallSectionWC,
      grassC,
      grassN,
      grassNE,
      grassE,
      grassSE,
      grassS,
      grassSW,
      grassW,
      grassNW,
      bushC,
      bushN,
      bushNE,
      bushE,
      bushSE,
      bushS,
      bushSW,
      bushW,
      bushNW,
      goldPile,
      lampPost,
      pyramid,
      rockyGround,
      rocksC,
      rocksCBig,
      rocksN,
      rocksNE,
      rocksE,
      rocksSE,
      rocksS,
      rocksSW,
      rocksW,
      rocksNW,
      goldOreForRocks,
      goldOreForBigRocks,
      silverOreForRocks,
      silverOreForBigRocks,
      ironOreForRocks,
      ironOreForBigRocks,
      copperOreForRocks,
      copperOreForBigRocks,
      rockCrumbsC,
      rockCrumbsN,
      rockCrumbsNE,
      rockCrumbsE,
      rockCrumbsSE,
      rockCrumbsS,
      rockCrumbsSW,
      rockCrumbsW,
      rockCrumbsNW,
      treePineC,
      treePineN,
      treePineNE,
      treePineE,
      treePineSE,
      treePineS,
      treePineSW,
      treePineW,
      treePineNW,
      treePineMatureC,
      treePineMatureN,
      treePineMatureNE,
      treePineMatureE,
      treePineMatureSE,
      treePineMatureS,
      treePineMatureSW,
      treePineMatureW,
      treePineMatureNW,
      treePineStump,
      treePineStumpMature,
      treeMapleC,
      treeMapleN,
      treeMapleNE,
      treeMapleE,
      treeMapleSE,
      treeMapleS,
      treeMapleSW,
      treeMapleW,
      treeMapleNW,
      treeMapleMatureC,
      treeMapleMatureN,
      treeMapleMatureNE,
      treeMapleMatureE,
      treeMapleMatureSE,
      treeMapleMatureS,
      treeMapleMatureSW,
      treeMapleMatureW,
      treeMapleMatureNW,
      treeMapleStump,
      treeMapleStumpMature
    ];
    const timeVariations = [0, 1, 2, 3].map((v2) => v2 / 4);
    const maxWater = 8;
    for (let i = 0; i < maxWater; i++) {
      const ratio = i / (maxWater - 1);
      const strength = lerp2(0.15, 1.2, ratio);
      for (const timeVariation of timeVariations) {
        indexedMeshes.push(() => makeWater(waterMat, timeVariation, strength));
      }
    }
    for (const quadMaker of [makeSandQuad, makeDirtQuad]) {
      const total3 = Math.pow(2, 6);
      for (let i = 0; i < total3; i++) {
        const quadId = ~~(i / 16);
        const tl = i % 2;
        const tr = ~~(i / 2) % 2;
        const bl = ~~(i / 4) % 2;
        const br = ~~(i / 8) % 2;
        const quads = [tl === 1, tr === 1, bl === 1, br === 1];
        indexedMeshes.push(() => quadMaker(quadId, quads, groundMat));
      }
    }
    indexedMeshes.push(testObject);
    super(pixelsPerTile, pixelsPerCacheEdge, passes, indexedMeshes);
    this._listenersForUpdatedTiles = [];
  }
  render(renderer) {
    if (this._renderQueue.length > 0) {
      const oldViewport = new Vector44();
      const oldScissor = new Vector44();
      renderer.setClearAlpha(0);
      renderer.getViewport(oldViewport);
      renderer.getScissor(oldScissor);
      let duration = 0;
      let count = 0;
      const backupPixelRatio = renderer.getPixelRatio();
      renderer.setPixelRatio(1);
      for (const index of this._renderQueue) {
        count++;
        const startTime = performance.now();
        const iCol = index % this._tilesPerEdge;
        const iRow = ~~(index / this._tilesPerEdge);
        const visualProps = this._tileRegistry[index];
        const layer2 = !!(visualProps[0] & 1);
        for (let j = 0; j < this._indexedMeshes.length; j++) {
          const jb = ~~(j / 8);
          const j8 = j % 8;
          const shouldShow = !!(visualProps[jb] & 1 << j8);
          if (this._indexedMeshesVisibility[j] && !shouldShow) {
            this._indexedMeshes[j]().visible = false;
          } else if (!this._indexedMeshesVisibility[j] && shouldShow) {
            this._indexedMeshes[j]().visible = true;
          }
          this._indexedMeshesVisibility[j] = shouldShow;
        }
        let mergedSnow;
        if (getUrlFlag("snow") && index > 0) {
          const snowPivot = new Object3D19();
          const matSnow = getMeshMaterial("snow");
          const snowBallProto = new Mesh18(
            getCachedSphereGeometry(2.5, 7, 5),
            matSnow
          );
          snowBallProto.scale.y = 1 / Math.sqrt(2) * 0.5;
          const snowBalls = [];
          const origin = new Vector315(0, 64, 0);
          const direction = new Vector315(0, -1, 0);
          const ray2 = new Raycaster3(origin, direction);
          this._scene.updateMatrixWorld();
          const colliders = findOnlyVisibleMeshes(this._scene);
          for (let ix = -18; ix <= 18; ix += 1) {
            for (let iz = -24; iz <= 24; iz += 1) {
              origin.x = ix;
              origin.z = iz;
              const intersections = ray2.intersectObjects(colliders, true);
              for (const intersection2 of intersections) {
                if (intersection2.object instanceof Mesh18) {
                  const slickness = getSlickness(
                    intersection2.object.material.name
                  );
                  if (intersection2.point.y > 0.5 && intersection2.face && intersection2.face.normal.y > slickness) {
                    const snowBall = snowBallProto.clone();
                    snowBall.position.copy(intersection2.point);
                    snowBalls.push(snowBall);
                  }
                  break;
                }
              }
            }
          }
          for (const snowBall of snowBalls) {
            snowPivot.add(snowBall);
          }
          mergedSnow = mergeMeshes(snowPivot);
          this._scene.add(mergedSnow);
          mergedSnow.updateMatrix();
          mergedSnow.updateWorldMatrix(false, true);
        }
        for (const pass of this._passes) {
          renderer.setRenderTarget(this._renderTargets.get(pass));
          const p = this._pixelsPerTile;
          const depthPass = pass === "customTopDownHeight";
          if (layer2 && depthPass) {
            continue;
          }
          renderer.setViewport(iCol * p, iRow * p, p, p);
          renderer.setScissor(iCol * p, iRow * p, p, p);
          renderer.setScissorTest(true);
          changeMeshMaterials(this._scene, pass, true);
          renderer.clear(true, true, false);
          renderer.render(
            this._scene,
            layer2 ? this._cameraTiltedTop : depthPass ? this._cameraTopDown : this._cameraTiltedBottom
          );
        }
        if (mergedSnow) {
          this._scene.remove(mergedSnow);
        }
        duration += performance.now() - startTime;
        this.notifyThatNewTileIsMade(index);
        if (duration > 100) {
          break;
        }
      }
      renderer.setPixelRatio(backupPixelRatio);
      renderer.setViewport(oldViewport);
      renderer.setScissor(oldScissor);
      renderer.setRenderTarget(null);
      renderer.setClearAlpha(1);
      renderer.setScissorTest(false);
      this._renderQueue.splice(0, count);
    }
  }
  notifyThatNewTileIsMade(index) {
    for (const l of this._listenersForUpdatedTiles) {
      l(index);
    }
  }
  listenForMadeTiles(listener) {
    this._listenersForUpdatedTiles.push(listener);
  }
  update(dt) {
  }
};

// src/helpers/utils/MapScrollingView.ts
import { Mesh as Mesh25 } from "three";

// src/materials/BasicTextureMaterial/index.ts
import { DoubleSide as DoubleSide5, RawShaderMaterial as RawShaderMaterial4, Uniform as Uniform4, Vector4 as Vector45 } from "three";

// src/utils/threeUtils.ts
import {
  DataTexture,
  NearestFilter as NearestFilter2,
  RGBAFormat,
  sRGBEncoding,
  TextureLoader,
  UnsignedByteType
} from "three";
var __tempTexture;
function getTempTexture() {
  if (!__tempTexture) {
    const s = 4;
    const total3 = s * s * 4;
    const data = new Uint8Array(total3);
    for (let i = 0; i < total3; i++) {
      data[i] = 0;
    }
    __tempTexture = new DataTexture(data, s, s, RGBAFormat, UnsignedByteType);
  }
  return __tempTexture;
}

// src/materials/BasicTextureMaterial/frag.glsl
var frag_default4 = `precision highp float;

uniform sampler2D uTexture;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 texel = texture2D(uTexture, vUv);
	gl_FragColor = texel;
}`;

// src/materials/BasicTextureMaterial/vert.glsl
var vert_default4 = `precision highp float;

uniform vec4 uUvST;
#ifndef CLIPSPACE_MODE
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
#endif
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
    #ifdef CLIPSPACE_MODE
        gl_Position = vec4( position, 1.0 );
    #else
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    #endif
    vUv = uv * uUvST.xy + uUvST.zw;
}`;

// src/materials/BasicTextureMaterial/index.ts
var __defaultParams4 = {
  uvST: new Vector45(1, 1, 0, 0),
  texture: getTempTexture(),
  clipspaceMode: false
};
var BasicTextureMaterial = class extends RawShaderMaterial4 {
  get texture() {
    return this._uTexture.value;
  }
  set texture(value) {
    this._uTexture.value = value;
  }
  constructor(options = {}) {
    const params = buildParameters(__defaultParams4, options);
    const uUvST = new Uniform4(params.uvST);
    const uTexture = new Uniform4(params.texture);
    const uniforms = {
      uUvST,
      uTexture
    };
    const defines = {
      CLIPSPACE_MODE: params.clipspaceMode
    };
    super({
      uniforms,
      defines,
      vertexShader: vert_default4,
      fragmentShader: frag_default4,
      // alphaTest: 0.5,
      // transparent: true,
      depthWrite: true,
      depthTest: true,
      side: DoubleSide5
    });
    this._uTexture = uTexture;
  }
};

// src/materials/FauxelMaterial/index.ts
import {
  Color as Color5,
  RawShaderMaterial as RawShaderMaterial5,
  Uniform as Uniform5,
  Vector2 as Vector23,
  Vector3 as Vector316,
  Vector4 as Vector46
} from "three";
import { lerp as lerp3 } from "three/src/math/MathUtils";

// src/materials/FauxelMaterial/frag.glsl
var frag_default5 = `precision highp float;

uniform sampler2D uTextureColor;
uniform sampler2D uTextureNormals;
uniform sampler2D uTextureEmissive;
uniform sampler2D uTextureRoughnessMetalnessHeight;
uniform sampler2D uTextureTopDownHeight;
uniform sampler2D uTexturePointLights;
uniform vec3 uColorLightAmbient;
uniform vec3 uColorDarkAmbient;
uniform vec3 uColorSun;
uniform vec3 uSunDirection;
uniform vec3 uSunDirectionForWater;
uniform vec3 uSunShadowDirection;
uniform sampler2D uTextureFog;
uniform vec2 uFogScroll;
varying vec2 vUv;

#ifdef USE_WATER
  uniform float uWaterHeight;
  varying vec2 vUvWater;
#endif

void main() {
  // gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
  vec4 texelRoughnessMetalnessHeight = texture2D(uTextureRoughnessMetalnessHeight, vUv);
  #ifdef USE_WATER
    vec2 waterUvs = vUvWater * 2.0 + vec2(0.0, uWaterHeight * -0.125);
    vec4 waterData = (texture2D(uTextureFog, waterUvs + uFogScroll) + texture2D(uTextureFog, waterUvs - uFogScroll) - vec4(1.0));
    float originalHeight = texelRoughnessMetalnessHeight.b * 2.0;
    float waterDepth = max(0.0, uWaterHeight - originalHeight);
    vec2 uv = vUv + (waterData.rg) * waterDepth * 0.03;
    texelRoughnessMetalnessHeight = texture2D(uTextureRoughnessMetalnessHeight, uv);
    float distortedWaterDepth = max(0.0, uWaterHeight - texelRoughnessMetalnessHeight.b * 2.0);
    float waterMask = smoothstep(uWaterHeight, uWaterHeight - 0.1, originalHeight) * mix(0.5, 1.0, distortedWaterDepth);
  #else 
    vec2 uv = vUv;  
    float originalHeight = texelRoughnessMetalnessHeight.b * 2.0;
  #endif

  vec4 texelColor = texture2D(uTextureColor, uv);
  #ifdef USE_WATER
    texelColor.rgb *= mix(vec3(1.0), vec3(-0.2, 0.3, 0.8), waterMask); //water color blue
  #endif

  vec2 pixelHN = vec2(RELATIVE_PIXEL_SIZE, 0.0);
  vec2 pixelVN = vec2(0.0, RELATIVE_PIXEL_SIZE);
  vec4 texelNormals = texture2D(uTextureNormals, uv) * 2.0 - 1.0;
  vec4 texelEmissive = texture2D(uTextureEmissive, uv);

  // vec4 texelTopDownHeight = texture2D(uTextureTopDownHeight, uv);
  float roughness = 2.0 / texelRoughnessMetalnessHeight.r;
  float metalness = texelRoughnessMetalnessHeight.g;
  vec3 surfaceNormal = texelNormals.rgb;
  float dotP = dot(surfaceNormal, uSunDirection) * (1.0 + metalness * 0.4);
  #ifdef USE_WATER
    float dotPWater = dot(waterData.rgb, uSunDirectionForWater);
    float waterRoughness = 2.0 / 0.3;
    dotPWater = mix(1.0 - 0.5 * (1.0-dotPWater), dotPWater, waterRoughness);
    float sunLightWaterStrength = pow(max(0.0, dotPWater), waterRoughness) * 1.75;
  #endif


  dotP = mix(1.0 - 0.5 * (1.0-dotP), dotP, roughness);
  // float invRMHb = 1.0 - texelRoughnessMetalnessHeight.b * 2.0;
  // float texelHeight = 1.0 - invRMHb * invRMHb;
  float texelHeight = texelRoughnessMetalnessHeight.b * 2.0;
  float ambientLight = texelNormals.g + texelHeight * 0.5;
  float sunLightStrength = pow(max(0.0, dotP), roughness);

  float floorYOffset = -texelHeight * RELATIVE_TILE_SIZE;
  texelHeight += RELATIVE_TILE_PIXEL_SIZE;
  float mixShadow = 1.0;
  vec2 flooredUv = uv + vec2(0, floorYOffset);
  #ifdef USE_SUN_SHADOWS
    for(float i = RELATIVE_PIXEL_SIZE; i < RELATIVE_TILE_SIZE * 2.0; i += RELATIVE_PIXEL_SIZE) {
      float newHeight = texture2D(uTextureTopDownHeight, flooredUv - (vec2(i) * uSunShadowDirection.xz)).b * 2.0;
      float newHeight2 = texture2D(uTextureRoughnessMetalnessHeight, uv + (vec2(0.0, i) + vec2(i) * -uSunShadowDirection.xz)).b * 2.0;
      mixShadow = min(mixShadow, max(step(newHeight, texelHeight), step(newHeight2, texelHeight)));
      // mixShadow = min(mixShadow, step(newHeight2, texelHeight));
      texelHeight += RELATIVE_TILE_PIXEL_SIZE;
    }
  #endif
  #ifdef USE_MIST
    float mistMask = max(0.0, 0.3 - texelRoughnessMetalnessHeight.b * 2.0) * max(texture2D(uTextureFog, uv + uFogScroll).b, texture2D(uTextureFog, uv + uFogScroll * 2.0).b);
    sunLightStrength *= mixShadow * (1.0-mistMask);
  #else
    sunLightStrength *= mixShadow;
  #endif
	// gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  vec3 sunLightColorHit = uColorSun * sunLightStrength;
  #ifdef USE_WATER
    sunLightColorHit *= mix(1.0, 0.5, waterMask);
  #endif
	gl_FragColor = vec4( texelColor.rgb * mix(uColorDarkAmbient, uColorLightAmbient, ambientLight), 1.0);

	gl_FragColor.rgb += mix(sunLightColorHit, sunLightColorHit * texelColor.rgb, vec3(metalness));
  gl_FragColor.rgb += texelEmissive.rgb;
  gl_FragColor.rgb = min(vec3(1.0), gl_FragColor.rgb);

  // gl_FragColor.rgb = sunLightColorHit * texelColor.rgb;
  #ifdef USE_WATER
    gl_FragColor.rgb += vec3(sunLightWaterStrength) * waterMask * uColorSun; //sun on water highlights
  #endif


  vec4 texelPointLights = texture2D(uTexturePointLights, uv);

  gl_FragColor.rgb += texelPointLights.rgb;
  gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(0.5454));

  //outlines
  #ifdef USE_OUTLINES
    vec2 pixelH = vec2(RELATIVE_PIXEL_SIZE, 0.0);
    vec2 pixelV = vec2(0.0, RELATIVE_PIXEL_SIZE);
    uv = vUv;
    float heightL = texture2D(uTextureRoughnessMetalnessHeight, uv - pixelH).b;
    float heightR = texture2D(uTextureRoughnessMetalnessHeight, uv + pixelH).b;
    float heightU = texture2D(uTextureRoughnessMetalnessHeight, uv + pixelV).b;
    float heightD = texture2D(uTextureRoughnessMetalnessHeight, uv - pixelV).b;
    float highestNeighbour = max(max(heightL, heightR), max(heightU, heightD)) * 2.0;
    float outline = smoothstep((highestNeighbour - 0.2),(highestNeighbour - 0.05), originalHeight);
  #endif

  #ifdef USE_MIST
    gl_FragColor.rgb += (vec3(1.0) - gl_FragColor.rgb) * mistMask * vec3(0.5);
  #endif
  #ifdef USE_WATER
    gl_FragColor.rgb *= mix(vec3(0.4, 0.3, 0.1), vec3(1.0), vec3(mix(1.0, outline, smoothstep(waterDepth-0.1, waterDepth, highestNeighbour)))); //outline
  #else
    #ifdef USE_OUTLINES
      gl_FragColor.rgb *= mix(vec3(0.4, 0.3, 0.1), vec3(1.0), outline); //outline
    #else
      // gl_FragColor.rgb *= mix(vec3(0.4, 0.3, 0.1), vec3(1.0), outline); //outline
    #endif
  #endif

  // gl_FragColor.rgb += texelPointLights.rgb;
  // gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(0.5454));


  // gl_FragColor.rgb = vec3(texelColor.a);
  // gl_FragColor.rgb = vec3(sin(floorYOffset * 1000.0) * 0.5 + 0.5);
	// gl_FragColor = texelColor * texelNormals;
  // gl_FragColor.rgb = vec3(outline);
  // gl_FragColor = texelPointLights;
  // gl_FragColor = texelEmissive;
  // gl_FragColor = texelNormals;
}`;

// src/materials/FauxelMaterial/vert.glsl
var vert_default5 = `precision highp float;

uniform vec4 uUvST;
uniform vec4 uUvSTWorldOffset;
#ifndef CLIPSPACE_MODE
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
#endif
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
#ifdef USE_WATER
  varying vec2 vUvWater;
#endif

void main() {
    #ifdef CLIPSPACE_MODE
        gl_Position = vec4( position, 1.0 );
    #else
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    #endif
    vUv = uv * uUvST.xy + uUvST.zw;
    #ifdef USE_WATER
        vUvWater = uv * uUvSTWorldOffset.xy + uUvSTWorldOffset.zw;
    #endif
}`;

// src/materials/FauxelMaterial/index.ts
var __defaultParams5 = {
  uvST: new Vector46(1, 1, 0, 0),
  uvSTWorldOffset: new Vector46(1, 1, 0, 0),
  textureColor: getTempTexture(),
  textureNormals: getTempTexture(),
  textureEmissive: getTempTexture(),
  textureRoughnessMetalnessHeight: getTempTexture(),
  textureTopDownHeight: getTempTexture(),
  texturePointLights: getTempTexture(),
  clipspaceMode: false,
  sunDirection: new Vector316(0, 1, 0),
  sunDirectionForWater: new Vector316(0, 1, 0),
  sunShadowDirection: new Vector316(0, 1, 0),
  colorLightAmbient: new Color5(0.2, 0.27, 0.7),
  colorDarkAmbient: new Color5(0.1, 0.15, 0.4),
  colorSun: new Color5(0.5, 0.45, 0.3),
  relativeTileSize: 1 / 16,
  //one over the number of tiles in view
  relativePixelSize: 1 / 512,
  //one over the number of pixels in view
  pixelsPerTile: 32,
  textureFog: getTempTexture(),
  fogScroll: new Vector23(),
  waterHeight: 0.5,
  useWater: false,
  useOutlines: false
};
var fakeA = 0;
var __sunDirectionForWaterFake = new Vector316(
  0,
  Math.cos(fakeA),
  Math.sin(fakeA)
);
var __tempVec33 = new Vector316();
var FauxelMaterial = class extends RawShaderMaterial5 {
  get useSunShadows() {
    return this._useSunShadows;
  }
  set useSunShadows(value) {
    if (value === this._useSunShadows) {
      return;
    }
    this.defines.USE_SUN_SHADOWS = value;
    this.needsUpdate = true;
    this._useSunShadows = value;
  }
  constructor(options = {}) {
    const params = buildParameters(__defaultParams5, options);
    const uUvST = new Uniform5(params.uvST);
    const uUvSTWorldOffset = new Uniform5(params.uvSTWorldOffset);
    const uTextureColor = new Uniform5(params.textureColor);
    const uTextureNormals = new Uniform5(params.textureNormals);
    const uTextureEmissive = new Uniform5(params.textureEmissive);
    const uTextureRoughnessMetalnessHeight = new Uniform5(
      params.textureRoughnessMetalnessHeight
    );
    const uTextureTopDownHeight = new Uniform5(params.textureTopDownHeight);
    const uTexturePointLights = new Uniform5(params.texturePointLights);
    const sunDirection = params.sunDirection;
    const uSunDirection = new Uniform5(sunDirection);
    const sunDirectionForWater = params.sunDirectionForWater;
    const uSunDirectionForWater = new Uniform5(sunDirectionForWater);
    const sunShadowDirection = params.sunShadowDirection;
    const uSunShadowDirection = new Uniform5(sunShadowDirection);
    const originalColorLightAmbient = params.colorLightAmbient.clone();
    const nightColorLightAmbient = new Color5(0.05, 0.1, 0.4).multiplyScalar(0.1);
    const colorLightAmbient = params.colorLightAmbient;
    const uColorLightAmbient = new Uniform5(colorLightAmbient);
    const originalColorDarkAmbient = params.colorDarkAmbient.clone();
    const nightColorDarkAmbient = new Color5(0, 0.05, 0.2).multiplyScalar(0.1);
    const colorDarkAmbient = params.colorDarkAmbient;
    const uColorDarkAmbient = new Uniform5(colorDarkAmbient);
    const colorSun = params.colorSun;
    const uColorSun = new Uniform5(colorSun);
    const uTextureFog = new Uniform5(params.textureFog);
    const uFogScroll = new Uniform5(params.fogScroll);
    const uWaterHeight = new Uniform5(params.waterHeight);
    const waterSunAngleY = 0.9;
    __sunDirectionForWaterFake.set(
      0,
      Math.cos(waterSunAngleY),
      Math.sin(waterSunAngleY)
    );
    sunDirectionForWater.copy(__sunDirectionForWaterFake);
    sunDirectionForWater.x += params.sunDirection.x * 0.4;
    __tempVec33.copy(sunDirectionForWater).normalize();
    sunDirectionForWater.lerp(__tempVec33, 0.4);
    sunDirectionForWater.multiplyScalar(
      lerp3(0.97, 1, 1 - Math.abs(sunDirection.x))
    );
    const uniforms = {
      uUvST,
      uUvSTWorldOffset,
      uTextureColor,
      uTextureNormals,
      uTextureEmissive,
      uTextureRoughnessMetalnessHeight,
      uTextureTopDownHeight,
      uTexturePointLights,
      uSunDirection,
      uSunDirectionForWater,
      uSunShadowDirection,
      uColorLightAmbient,
      uColorDarkAmbient,
      uColorSun,
      uTextureFog,
      uFogScroll,
      uWaterHeight
    };
    const defines = {
      CLIPSPACE_MODE: params.clipspaceMode,
      RELATIVE_TILE_SIZE: params.relativeTileSize,
      RELATIVE_PIXEL_SIZE: params.relativePixelSize,
      RELATIVE_TILE_PIXEL_SIZE: params.relativePixelSize / params.relativeTileSize,
      USE_WATER: params.useWater,
      USE_SUN_SHADOWS: true,
      USE_OUTLINES: params.useOutlines
    };
    super({
      uniforms,
      defines,
      vertexShader: vert_default5,
      fragmentShader: frag_default5,
      // alphaTest: 0.5,
      // transparent: true,
      depthWrite: false,
      depthTest: true
      // side: DoubleSide
    });
    this.setSunAngle = (sunAngle) => {
      this.useSunShadows = wrap(sunAngle, 0, Math.PI * 2) < Math.PI;
      sunDirection.set(Math.cos(sunAngle), 0.75, Math.sin(sunAngle));
      sunDirection.normalize();
      sunShadowDirection.copy(sunDirection);
      sunShadowDirection.x *= -1;
      sunShadowDirection.y = 0;
      sunShadowDirection.multiplyScalar(2);
      const bDay = Math.max(0, Math.sin(sunAngle));
      colorLightAmbient.lerpColors(
        nightColorLightAmbient,
        originalColorLightAmbient,
        bDay
      );
      colorDarkAmbient.lerpColors(
        nightColorDarkAmbient,
        originalColorDarkAmbient,
        bDay
      );
      colorSun.setRGB(Math.pow(bDay, 0.5), Math.pow(bDay, 1), Math.pow(bDay, 2));
    };
  }
};

// src/helpers/NoiseTextureMaker.ts
import {
  LinearEncoding as LinearEncoding2,
  Mesh as Mesh19,
  NearestFilter as NearestFilter3,
  OrthographicCamera as OrthographicCamera2,
  PlaneBufferGeometry as PlaneBufferGeometry4,
  RepeatWrapping,
  Scene as Scene3,
  Vector4 as Vector48,
  WebGLRenderTarget as WebGLRenderTarget2
} from "three";

// src/materials/SimplexNoiseMaterial/index.ts
import { Color as Color6, DoubleSide as DoubleSide7, RawShaderMaterial as RawShaderMaterial6, Uniform as Uniform6, Vector4 as Vector47 } from "three";

// src/materials/SimplexNoiseMaterial/frag.glsl
var frag_default6 = `// The MIT License
// Copyright \xA9 2013 Inigo Quilez
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


// Simplex Noise (http://en.wikipedia.org/wiki/Simplex_noise), a type of gradient noise
// that uses N+1 vertices for random gradient interpolation instead of 2^N as in regular
// latice based Gradient Noise.

// modified by Tomasz Dysinski 2021

precision lowp float;

uniform vec3 uColor;
varying vec2 vUv;


vec2 hash( vec2 p ) // replace this by something better
{
	p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
	return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise( in vec2 p )
{
  const float K1 = 0.366025404; // (sqrt(3)-1)/2;
  const float K2 = 0.211324865; // (3-sqrt(3))/6;

	vec2  i = floor( p + (p.x+p.y)*K1 );
  vec2  a = p - i + (i.x+i.y)*K2;
  float m = step(a.y,a.x); 
  vec2  o = vec2(m,1.0-m);
  vec2  b = a - o + K2;
	vec2  c = a - 1.0 + 2.0*K2;
  vec3  h = max( 0.5-vec3(dot(a,a), dot(b,b), dot(c,c) ), 0.0 );
	vec3  n = h*h*h*h*vec3( dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
  // return dot( n, vec3(70.0) );
  return abs(dot( n, vec3(70.0) ));
}

float sampleNoise(in vec2 uv)
{
	float f = 0.0;
  float strength = 0.5;
  mat2 m = mat2( 2.6,  1.2, -1.2,  2.6 );
  f  = strength * noise( uv ); uv *= m; strength *= 0.2;
  f += strength * noise( uv ); uv *= m; //strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f += strength * noise( uv ); uv *= m; strength *= 0.5;
  // f*=f;
  // f = min(1.0, max(0.0, f * 10.0)) - f;
  // float fi = abs(f);
  float fi = 1.0 - (f * 0.5 + 0.5);
	f = 1.0-fi*fi;
  return fi;
}

void main() {
  vec2 uv = vUv * 12.0 * vec2(1.0, 1.6);

  // uv *= 5.0;
  float f = sampleNoise(uv);

	#ifdef MODE_NORMALS
    vec2 dx = vec2(0.01, 0.0);
    vec2 dy = vec2(0.0, 0.01);
    float fL = sampleNoise(uv + dx);
    float fR = sampleNoise(uv - dx);
    float fU = sampleNoise(uv + dy);
    float fD = sampleNoise(uv - dy);
    float strength = 10.0;
    vec3 normal = vec3(-(fL-fR) * strength, (fU-fD) * strength, f);
    
  	gl_FragColor = vec4( normalize(normal) * vec3(0.5) + vec3(0.5), 1.0 );
  #else
  	gl_FragColor = vec4( vec3(f) * uColor, 1.0 );
  #endif
}`;

// src/materials/SimplexNoiseMaterial/vert.glsl
var vert_default6 = `precision lowp float;

uniform vec4 uUvST;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    vUv = uv * uUvST.xy + uUvST.zw;
}`;

// src/materials/SimplexNoiseMaterial/index.ts
var __defaultParams6 = {
  mode: "normals",
  uvST: new Vector47(0.2, 0.2, 0, 0),
  color: new Color6(1, 1, 1)
};
var SimplexNoiseMaterial = class extends RawShaderMaterial6 {
  constructor(options = {}) {
    const params = buildParameters(__defaultParams6, options);
    const uUvST = new Uniform6(params.uvST);
    const uColor = new Uniform6(params.color);
    const uniforms = {
      uUvST,
      uColor
    };
    const defines = {
      MODE_NORMALS: params.mode === "normals"
    };
    super({
      uniforms,
      defines,
      vertexShader: vert_default6,
      fragmentShader: frag_default6,
      // alphaTest: 0.5,
      // transparent: true,
      depthWrite: true,
      depthTest: true,
      side: DoubleSide7
    });
  }
};

// src/helpers/NoiseTextureMaker.ts
var NoiseTextureMaker = class {
  constructor(res = 256) {
    const geo = new PlaneBufferGeometry4(2, 2);
    const uvST = new Vector48(1, 1, 0, 0);
    const mesh = new Mesh19(
      geo,
      new SimplexNoiseMaterial({
        uvST
      })
    );
    const scene = new Scene3();
    const camera = new OrthographicCamera2(-1, 1, -1, 1, -1, 1);
    const renderTarget = new WebGLRenderTarget2(res, res, {
      minFilter: NearestFilter3,
      magFilter: NearestFilter3,
      encoding: LinearEncoding2,
      wrapS: RepeatWrapping,
      wrapT: RepeatWrapping,
      generateMipmaps: false
    });
    scene.add(camera);
    scene.add(mesh);
    this._renderTarget = renderTarget;
    this.texture = renderTarget.texture;
    this._scene = scene;
    this._camera = camera;
  }
  render(renderer) {
    renderer.setRenderTarget(this._renderTarget);
    renderer.render(this._scene, this._camera);
    renderer.setRenderTarget(null);
  }
};

// src/rendering/tileMaker/spriteMaker/SpriteMaker.ts
import {
  Material as Material18,
  Mesh as Mesh23,
  Object3D as Object3D23,
  Vector4 as Vector49
} from "three";

// src/meshes/factorySheep.ts
import { Mesh as Mesh20, Object3D as Object3D20, SphereBufferGeometry as SphereBufferGeometry4 } from "three";

// src/animation/Easing.ts
var Easing = {
  Linear(k) {
    return k;
  },
  Quadratic: {
    In(k) {
      return k * k;
    },
    Out(k) {
      return k * (2 - k);
    },
    InOut(k) {
      k *= 2;
      if (k < 1) {
        return 0.5 * k * k;
      }
      return -0.5 * (--k * (k - 2) - 1);
    }
  },
  Cubic: {
    In(k) {
      return k * k * k;
    },
    Out(k) {
      return --k * k * k + 1;
    },
    InOut(k) {
      k *= 2;
      if (k < 1) {
        return 0.5 * k * k * k;
      }
      k -= 2;
      return 0.5 * (k * k * k + 2);
    }
  },
  Quartic: {
    In(k) {
      return k * k * k * k;
    },
    Out(k) {
      return 1 - --k * k * k * k;
    },
    InOut(k) {
      k *= 2;
      if (k < 1) {
        return 0.5 * k * k * k * k;
      }
      k -= 2;
      return -0.5 * (k * k * k * k - 2);
    }
  },
  Quintic: {
    In(k) {
      return k * k * k * k * k;
    },
    Out(k) {
      return --k * k * k * k * k + 1;
    },
    InOut(k) {
      k *= 2;
      if (k < 1) {
        return 0.5 * k * k * k * k * k;
      }
      k -= 2;
      return 0.5 * (k * k * k * k * k + 2);
    }
  },
  Sinusoidal: {
    In(k) {
      return 1 - Math.cos(k * Math.PI / 2);
    },
    Out(k) {
      return Math.sin(k * Math.PI / 2);
    },
    InOut(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
  },
  Exponential: {
    In(k) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    Out(k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    InOut(k) {
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      k *= 2;
      if (k < 1) {
        return 0.5 * Math.pow(1024, k - 1);
      }
      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    }
  },
  Circular: {
    In(k) {
      return 1 - Math.sqrt(1 - k * k);
    },
    Out(k) {
      return Math.sqrt(1 - --k * k);
    },
    InOut(k) {
      k *= 2;
      if (k < 1) {
        return -0.5 * (Math.sqrt(1 - k * k) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    }
  },
  Elastic: {
    In(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p * Math.asin(1 / a) / (2 * Math.PI);
      }
      return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
    },
    Out(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p * Math.asin(1 / a) / (2 * Math.PI);
      }
      return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
    },
    InOut(k) {
      let s;
      let a = 0.1;
      const p = 0.4;
      if (k === 0) {
        return 0;
      }
      if (k === 1) {
        return 1;
      }
      if (!a || a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = p * Math.asin(1 / a) / (2 * Math.PI);
      }
      k *= 2;
      if (k < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
      }
      return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
    }
  },
  Back: {
    In(k) {
      const s = 1.70158;
      return k * k * ((s + 1) * k - s);
    },
    Out(k) {
      const s = 1.70158;
      return --k * k * ((s + 1) * k + s) + 1;
    },
    InOut(k) {
      const s = 1.70158 * 1.525;
      k *= 2;
      if (k < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }
      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    }
  },
  Bounce: {
    In(k) {
      return 1 - Easing.Bounce.Out(1 - k);
    },
    Out(k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    },
    InOut(k) {
      if (k < 0.5) {
        return Easing.Bounce.In(k * 2) * 0.5;
      }
      return Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
    }
  }
};

// src/meshes/factorySheep.ts
var C1_1 = Math.PI * 2;
var C1_4 = Math.PI * 0.5;
var C1_8 = Math.PI * 0.25;
function makeSheep(matFleecePrimary, matFleeceSecondary, matNose, matEyes, time = 0, runStrength = 1) {
  const pivot = new Object3D20();
  const body = new Mesh20(
    getCachedChamferedBoxGeometry(24, 26, 34, 8),
    matFleecePrimary
  );
  const angle = time * C1_1;
  const phaseBody = angle * 0.5 - C1_4;
  body.position.y = 18 + Easing.Quadratic.Out(Math.cos(phaseBody)) * 30 * runStrength;
  const bodyAngle = Easing.Quadratic.In(time) * C1_1;
  body.rotation.x = Math.sin(-bodyAngle) * 0.4 * runStrength;
  const legBack = new Mesh20(
    getCachedChamferedBoxGeometry(10, 20, 14, 4),
    matFleecePrimary
  );
  legBack.position.x = -10;
  legBack.position.z = 7;
  legBack.position.y = Math.cos(angle + 1) * 4 * runStrength;
  const legBackAngle = Math.sin(Easing.Quadratic.InOut((time + 1.5) % 1) * C1_1) * 1.3;
  legBack.rotation.x = Math.PI * 0.125 + legBackAngle * runStrength;
  body.add(legBack);
  const shinBack = new Mesh20(
    getCachedChamferedBoxGeometry(5, 20, 7, 2),
    matFleeceSecondary
  );
  shinBack.position.y = -10;
  shinBack.position.z = 4;
  shinBack.rotation.x = Math.PI * -0.25;
  legBack.add(shinBack);
  const legBack2 = legBack.clone();
  legBack2.position.x *= -1;
  body.add(legBack2);
  const legFront = new Mesh20(
    getCachedChamferedBoxGeometry(10, 20, 14, 4),
    matFleecePrimary
  );
  legFront.position.x = -8;
  legFront.position.z = -7 + Math.sin(angle - 1) * 4 * runStrength;
  legBack.position.y = Math.cos(angle) * 4 * runStrength;
  const legFrontAngle = Math.sin(Easing.Quadratic.InOut((time + 0.6) % 1) * C1_1) * 1.3;
  legFront.rotation.x = Math.PI * -0.125 + (legFrontAngle + 0.25) * runStrength;
  body.add(legFront);
  const shinFront = new Mesh20(
    getCachedChamferedBoxGeometry(5, 20, 7, 2),
    matFleeceSecondary
  );
  shinFront.position.y = -10;
  shinFront.position.z = -4;
  shinFront.rotation.x = Math.PI * 0.25;
  legFront.add(shinFront);
  const legFront2 = legFront.clone();
  legFront2.position.x *= -1;
  body.add(legFront2);
  const tail = new Mesh20(
    getCachedChamferedBoxGeometry(8, 12, 10, 3),
    matFleecePrimary
  );
  tail.position.z = 17;
  const tailPhase = Math.sin(angle + 2.5) * 0.5 + 0.5;
  tail.position.y = 4 + tailPhase * 6 * runStrength;
  tail.rotation.x = Math.PI * -0.125 - tailPhase * 2 * runStrength;
  body.add(tail);
  const head = new Mesh20(
    getCachedChamferedBoxGeometry(12, 20, 12, 4),
    matFleecePrimary
  );
  const headPhase = Math.sin(angle - 0.5) * 0.5 + 0.5;
  const headPhase2 = Math.sin(angle + 1) * 0.5 + 0.5;
  head.position.z = -17 + headPhase2 * -4 * runStrength;
  head.position.y = 10 + headPhase * 4 * runStrength;
  head.rotation.x = Math.PI * 0.25 + headPhase * 1.5 * runStrength;
  body.add(head);
  const earContainer = new Object3D20();
  const ear = new Mesh20(
    getCachedChamferedBoxGeometry(8, 2, 8, 1),
    matFleecePrimary
  );
  ear.position.x = -8;
  ear.rotation.y = Math.PI * 0.25;
  earContainer.position.y = 4;
  earContainer.rotation.x = Math.PI * 0.125;
  earContainer.scale.z = 0.5;
  const ear2Container = earContainer.clone();
  earContainer.add(ear);
  const ear2 = ear.clone();
  ear2.position.x *= -1;
  ear2Container.add(ear2);
  const earPhase = Math.sin(angle - 2) * 0.5 + 0.5;
  earContainer.position.x = earPhase * -3 * runStrength;
  earContainer.rotation.z = -earPhase * runStrength;
  earContainer.rotation.x = -earPhase * runStrength;
  ear2Container.position.x = earPhase * 3 * runStrength;
  ear2Container.rotation.z = earPhase * runStrength;
  ear2Container.rotation.x = -earPhase * runStrength;
  head.add(earContainer);
  head.add(ear2Container);
  const eyeGeo = new SphereBufferGeometry4(2, 16, 8);
  const eye = new Mesh20(eyeGeo, matEyes);
  eye.position.x = -6;
  eye.position.y = -1;
  eye.position.z = -2;
  const eye2 = eye.clone();
  eye2.position.x *= -1;
  head.add(eye2);
  head.add(eye);
  const nose = new Mesh20(getCachedChamferedBoxGeometry(6, 4, 4, 1), matNose);
  nose.position.z = -4;
  nose.position.y = -7;
  nose.rotation.x = Math.PI * 0.25;
  head.add(nose);
  body.rotation.y = Math.PI;
  pivot.add(body);
  return mergeMeshes(pivot);
}

// src/meshes/factorySkeleton.ts
import { Mesh as Mesh21, Object3D as Object3D21 } from "three";
var C1_12 = Math.PI * 2;
var C1_2 = Math.PI;
var C1_42 = Math.PI * 0.5;
var C1_82 = Math.PI * 0.25;
var C1_16 = Math.PI * 0.125;
function makeSkeleton(matSkin, matBlack, matPants, time = 0, runStrength = 1) {
  const pivot = new Object3D21();
  const hips = new Mesh21(getCachedChamferedBoxGeometry(8, 4, 6, 2), matPants);
  hips.position.set(0, 22, 0);
  hips.rotation.y = Math.PI;
  const torso = new Mesh21(
    getCachedChamferedBoxGeometry(3, 7, 2, 1, 0, 2, 0),
    matSkin
  );
  torso.position.set(0, 4, 0);
  torso.rotation.z = Math.sin(time * C1_12) * 0.3 * runStrength;
  torso.rotation.x = -C1_16 * 0.5;
  hips.add(torso);
  const torso2 = new Mesh21(
    getCachedChamferedBoxGeometry(10, 7, 6, 1, 0, 2, -1),
    matBlack
  );
  torso2.position.set(0, 4, 0);
  torso2.rotation.x = -C1_16 + (Math.sin(time * C1_12 * 2 - 2) * 0.5 + 0.5) * -0.3 * runStrength;
  torso2.rotation.z = Math.sin(time * C1_12) * 0.3 * runStrength;
  torso.add(torso2);
  const neck = new Mesh21(
    getCachedChamferedBoxGeometry(3, 5, 3, 1, 0, 4, 0),
    matSkin
  );
  neck.position.set(0, 4, 0);
  neck.rotation.x = -C1_16 * 0.5;
  torso2.add(neck);
  const head = new Mesh21(
    getCachedChamferedBoxGeometry(10, 10, 10, 3, 0, 5, 0),
    matSkin
  );
  head.scale.setScalar(1.5);
  head.position.set(0, 4, -2);
  head.rotation.x = C1_82;
  head.rotation.y = -Math.cos(time * C1_12 + 3.5) * 0.75 * runStrength;
  head.rotation.z = Math.sin(time * C1_12 + 3.5) * 0.75 * runStrength;
  neck.add(head);
  const headInner = new Mesh21(
    getCachedChamferedBoxGeometry(9, 9, 9, 3, 0, 3.5, -1.5),
    matBlack
  );
  head.add(headInner);
  const headDetails = new Object3D21();
  head.add(headDetails);
  const jawDetails = new Object3D21();
  head.add(jawDetails);
  const mandibleMiddle = new Mesh21(
    getCachedChamferedBoxGeometry(3, 3, 1.5, 0.6),
    matSkin
  );
  mandibleMiddle.position.set(0, -1, -7);
  jawDetails.add(mandibleMiddle);
  jawDetails.rotation.x = -Math.abs(Math.sin(time * C1_12 - 4)) * 0.5 * runStrength;
  jawDetails.rotation.y = Math.sin(time * C1_12 + 5) * 0.25 * runStrength;
  for (let s = -1; s <= 1; s += 2) {
    const brow = new Mesh21(
      getCachedChamferedBoxGeometry(5, 2, 4, 1, 2 * s, 0, 0),
      matSkin
    );
    brow.position.set(1 * s, 6, -4);
    brow.rotation.z = C1_16 * s;
    brow.rotation.x = -C1_16 * 0.5;
    headDetails.add(brow);
    const brow2 = new Mesh21(
      getCachedChamferedBoxGeometry(5, 2, 4, 1, 2 * s, 0, 0),
      matSkin
    );
    brow2.position.set(1 * s, 3, -4);
    brow2.rotation.x = -C1_16 * 0.5;
    brow2.rotation.z = -C1_16 * s;
    headDetails.add(brow2);
    const eyeHoleEdge = new Mesh21(
      getCachedChamferedBoxGeometry(5, 1.5, 4, 0.6, 2 * s, 0, 0),
      matSkin
    );
    eyeHoleEdge.position.set(4.5 * s, 6.5, -3.5);
    eyeHoleEdge.rotation.x = C1_16 * -0.5;
    eyeHoleEdge.rotation.z = -C1_12 * s * 0.25;
    headDetails.add(eyeHoleEdge);
    const nose = new Mesh21(
      getCachedChamferedBoxGeometry(5, 1.5, 4, 0.6, 2 * s, 0, 0),
      matSkin
    );
    nose.position.set(0.5 * s, 6, -4);
    nose.rotation.x = C1_16 * 0.5;
    nose.rotation.z = -C1_12 * s * 0.2;
    headDetails.add(nose);
    const maxilla = new Mesh21(
      getCachedChamferedBoxGeometry(4, 3, 1.5, 0.6),
      matSkin
    );
    maxilla.position.set(1.2 * s, 1, -6);
    maxilla.rotation.y = -C1_82 * s;
    headDetails.add(maxilla);
    const jawSide = new Mesh21(
      getCachedChamferedBoxGeometry(1.5, 6, 3, 0.6, 0, 0, 0),
      matSkin
    );
    jawSide.position.set(5 * s, 1, -1);
    jawSide.rotation.x = C1_82;
    jawDetails.add(jawSide);
    const mandible = new Mesh21(
      getCachedChamferedBoxGeometry(7, 3, 1.5, 0.6),
      matSkin
    );
    mandible.position.set(3 * s, -1, -5);
    mandible.rotation.y = -C1_82 * s;
    jawDetails.add(mandible);
    const leg = new Mesh21(
      getCachedChamferedBoxGeometry(3, 14, 3, 1, 0, -5, 0),
      matPants
    );
    leg.position.set(-3 * s, 0, 0);
    leg.rotation.z = (-0.25 - C1_16 - Math.sin(time * C1_12 + s * C1_42)) * s * 0.5 * runStrength;
    leg.rotation.x = C1_16 + Math.sin(time * C1_12 + s * C1_42) * runStrength;
    hips.add(leg);
    const shin = new Mesh21(
      getCachedChamferedBoxGeometry(4, 14, 4, 1.5, 0, -5, 0),
      matPants
    );
    leg.add(shin);
    shin.position.y = -11;
    shin.rotation.x = -C1_82 + Math.sin(time * C1_12 + s * C1_42 - 2) * runStrength;
    const foot = new Mesh21(
      getCachedChamferedBoxGeometry(5, 10, 4, 1.5, 0, -3, 0),
      matSkin
    );
    shin.add(foot);
    foot.position.y = -11;
    foot.rotation.x = C1_42 + C1_16;
    for (let i = 0; i < 3; i++) {
      const rib1 = new Mesh21(
        getCachedChamferedBoxGeometry(6 + i * 0.5, 1.5, 6, 0.6, 0, 0, 0),
        matSkin
      );
      rib1.position.y = -2 + 3 * i;
      rib1.position.x = -2 * s + i * -s * 0.5;
      rib1.rotation.z = C1_16 * s;
      torso2.add(rib1);
    }
    const bicep = new Mesh21(
      getCachedChamferedBoxGeometry(3, 12, 3, 1, 0, -5, 0),
      matSkin
    );
    bicep.position.set(-5 * s, 4, 1);
    bicep.rotation.order = "YXZ";
    bicep.rotation.x = C1_2 * 0.7;
    bicep.rotation.y = C1_42 * s;
    bicep.rotation.z = C1_82 * s + Math.sin(time * 2 * C1_12 * s + 3) * 0.2 * runStrength;
    bicep.rotation.z -= Math.sin(-time * C1_12 + 3) * 0.6 * runStrength;
    if (runStrength === 0) {
      bicep.rotation.y = 0;
      bicep.rotation.z = -s * 0.25;
      bicep.rotation.x = 0;
    }
    torso2.add(bicep);
    const forearm = new Mesh21(
      getCachedChamferedBoxGeometry(4, 14, 4, 1.5, 0, -5, 0),
      matSkin
    );
    bicep.add(forearm);
    forearm.rotation.order = "XYZ";
    forearm.position.y = -11;
    forearm.rotation.z = s;
    forearm.rotation.y = s * 2;
    const hand = new Mesh21(
      getCachedChamferedBoxGeometry(5, 5, 2.5, 1, 0, -2, 0),
      matSkin
    );
    forearm.add(hand);
    hand.position.y = -11;
    const finger = new Mesh21(
      getCachedChamferedBoxGeometry(1, 3, 1, 0.3, 0, -1.5, 0),
      matSkin
    );
    hand.add(finger);
    finger.position.y = -3;
    finger.rotation.x = -0.25;
    const fingerB = finger.clone();
    fingerB.position.y = -2;
    finger.add(fingerB);
    const fingerC = finger.clone();
    fingerC.position.y = -2;
    fingerB.add(fingerC);
    finger.position.x = s * 0.5;
    const fingerPointer = finger.clone();
    hand.add(fingerPointer);
    fingerPointer.position.x = 1.5 * s;
    fingerPointer.scale.setScalar(0.8);
    const fingerRing = finger.clone();
    hand.add(fingerRing);
    fingerRing.position.x = -1 * s;
    fingerRing.scale.setScalar(0.8);
    const fingerPinky = finger.clone();
    hand.add(fingerPinky);
    fingerPinky.position.x = -2 * s;
    fingerPinky.scale.setScalar(0.65);
    const thumb = finger.clone();
    hand.add(thumb);
    thumb.position.set(s * 2, -1, 0);
    thumb.scale.set(1, 0.5, 1);
    thumb.rotation.order = "ZXY";
    thumb.rotation.set(-C1_82, s * -C1_42, C1_82 * s);
  }
  pivot.add(hips);
  pivot.scale.setScalar(1.2);
  return mergeMeshes(pivot);
}

// src/meshes/factoryWheelBarrow.ts
import {
  LatheBufferGeometry,
  Mesh as Mesh22,
  Object3D as Object3D22,
  Vector2 as Vector24
} from "three";
var C1_13 = Math.PI * 2;
var C1_43 = Math.PI * 0.5;
var C1_83 = Math.PI * 0.25;
var C1_162 = Math.PI * 0.125;
function makeWheelBarrow(matWood, matWood2, time = 0, runStrength = 1) {
  const axelWidth = 38;
  const wheelRadius = 12;
  const pivot = new Object3D22();
  pivot.rotation.y = Math.PI;
  const u = 0.5;
  const u2 = u + 0.5;
  const v2 = 1.5;
  const v22 = v2 + 0.5;
  const points = [
    [u, -v22],
    [u2, -v2],
    [u2, v2],
    [u, v22],
    [-u, v22],
    [-u2, v2],
    [-u2, -v2],
    [-u, -v22]
  ].map((v3) => new Vector24(v3[0] + wheelRadius, v3[1]));
  points.push(points[0]);
  const geometry = new LatheBufferGeometry(points, 32);
  const wheel = new Mesh22(geometry, matWood);
  const axel = new Mesh22(
    getCachedChamferedBoxGeometry(axelWidth, 3, 3, 1),
    matWood
  );
  axel.rotation.x = time * -Math.PI * 2 * runStrength;
  const axelHousing = new Mesh22(
    getCachedChamferedBoxGeometry(8, 6, 8, 1),
    matWood
  );
  axelHousing.add(axel);
  pivot.add(axelHousing);
  axel.add(wheel);
  axelHousing.position.set(0, wheelRadius + 2, 0);
  wheel.position.x = axelWidth * 0.5 - 3;
  wheel.rotation.x = Math.PI * 0.5;
  wheel.rotation.z = Math.PI * 0.5 + 0.05;
  const spokeProto = new Mesh22(
    getCachedChamferedBoxGeometry(wheelRadius, 2, 2, 0.6, -wheelRadius * 0.5),
    matWood2
  );
  const totalSpokes = 8;
  for (let i = 0; i < totalSpokes; i++) {
    const ratio = i / totalSpokes;
    const spoke = spokeProto.clone();
    spoke.rotation.y = ratio * Math.PI * 2;
    wheel.add(spoke);
  }
  const wheel2 = wheel.clone();
  wheel2.rotation.x += Math.PI * 0.75;
  wheel2.position.x *= -1;
  axel.add(wheel2);
  const plankWidth = 4;
  const basketLength = 32;
  const basketWidth = 16;
  const wallHeight = 10;
  function buildWall(width, length, crossBraceOffset) {
    const wallPivot = new Object3D22();
    const crossBraceProto = new Mesh22(
      getCachedChamferedBoxGeometry(4, 2, width + crossBraceOffset, 0.6),
      matWood
    );
    crossBraceProto.rotation.y = Math.PI * 0.5;
    for (let i = -0.25; i <= 0.25; i += 0.5) {
      const crossBrace = crossBraceProto.clone();
      wallPivot.add(crossBrace);
      crossBrace.position.set(0, -1, i * length);
    }
    const spacing = 1;
    const plankProto = new Mesh22(
      getCachedChamferedBoxGeometry(plankWidth, 2, length, 0.6),
      matWood
    );
    for (let i = width * -0.5; i <= width * 0.5; i += plankWidth + spacing) {
      const plank = plankProto.clone();
      plank.position.set(i, 1, 0);
      wallPivot.add(plank);
    }
    return wallPivot;
  }
  const floor = buildWall(basketWidth, basketLength, 8);
  floor.position.y = 4;
  axelHousing.add(floor);
  const sideWall = buildWall(wallHeight, basketLength, 4);
  sideWall.position.set(basketWidth * 0.5 + 4, wallHeight * 0.5 + 2, 0);
  sideWall.rotation.z = Math.PI * 0.42;
  floor.add(sideWall);
  const sideWall2 = sideWall.clone();
  sideWall2.position.x *= -1;
  sideWall2.rotation.z *= -1;
  floor.add(sideWall2);
  floor.rotation.z = Math.cos(time * Math.PI * 2) * 0.05 * runStrength;
  floor.rotation.x = Math.sin(time * Math.PI * 2) * 0.05 * runStrength;
  const backWall = buildWall(wallHeight, basketLength * 0.75, 4);
  backWall.position.set(0, wallHeight * 0.5 + 2, basketLength * 0.5);
  backWall.rotation.y = Math.PI * -0.5;
  backWall.rotation.z = Math.PI * 0.42;
  floor.add(backWall);
  const handle = new Mesh22(getCachedChamferedBoxGeometry(3, 3, 60, 1), matWood2);
  handle.position.set(basketWidth * 0.5, 2, -16);
  const handle2 = handle.clone();
  handle2.position.x *= -1;
  axelHousing.add(handle2);
  axelHousing.add(handle);
  axelHousing.rotation.z = Math.sin(time * Math.PI * 4) * 0.05 * runStrength;
  axelHousing.position.y += Math.cos(time * Math.PI * 4) * 0.5 * runStrength;
  return mergeMeshes(pivot);
}

// src/rendering/tileMaker/spriteMaker/materialNames.ts
var skeletonMaterialNames = {
  skin: "bone",
  black: "pitchBlack",
  pants: "pants"
};
var wheelBarrowMaterialNames = {
  wood: "wood",
  wood2: "woodMaple"
};

// src/rendering/tileMaker/spriteMaker/SpriteMaker.ts
var SpriteMaker = class extends TileMaker {
  constructor(pixelsPerTile = 32, pixelsPerCacheEdge = 2048, passes = ["beauty"]) {
    const dummy = () => new Object3D23();
    const bodyMaker = memoize(() => {
      const bodyGeo = getChamferedBoxGeometry(20, 14, 10, 3);
      const obj = new Mesh23(bodyGeo, getMeshMaterial("pants"));
      obj.position.y = 17;
      const headGeo = getChamferedBoxGeometry(16, 16 * verticalScale, 16, 4);
      const head = new Mesh23(headGeo, getMeshMaterial("skin"));
      head.position.y = 16;
      obj.add(head);
      const legGeo = getChamferedBoxGeometry(6, 12 * verticalScale, 6, 2);
      const leg = new Mesh23(legGeo, getMeshMaterial("pants"));
      leg.position.x = -6;
      leg.position.y = -12;
      obj.add(leg);
      const leg2 = leg.clone();
      leg2.position.x *= -1;
      obj.add(leg2);
      const armGeo = getChamferedBoxGeometry(4, 20 * verticalScale, 4, 1.25);
      const arm = new Mesh23(armGeo, getMeshMaterial("pants"));
      arm.position.x = -12;
      arm.rotation.z = Math.PI * -0.125;
      arm.position.y = -1;
      obj.add(arm);
      const arm2 = arm.clone();
      arm2.rotation.z *= -1;
      arm2.position.x *= -1;
      obj.add(arm2);
      return obj;
    });
    const body = () => bodyMaker();
    const body2 = () => {
      const obj = bodyMaker().clone(true);
      obj.traverse((node) => {
        if (node instanceof Mesh23 && node.material instanceof Material18 && node.material.name === "pants") {
          node.material = getMeshMaterial("pantsRed");
        }
      });
      return obj;
    };
    const hat = () => {
      const obj = new Mesh23(
        getChamferedBoxGeometry(18, 16 * verticalScale, 16, 3),
        getMeshMaterial("gold")
      );
      obj.position.z = -4;
      obj.position.y = 35;
      obj.scale.y *= verticalScale;
      return obj;
    };
    const sword = () => {
      const obj = new Mesh23(
        getChamferedBoxGeometry(2, 4, 16, 2),
        getMeshMaterial("gold")
      );
      obj.position.x = -14;
      obj.position.z = 10;
      obj.position.y = 11;
      return obj;
    };
    const shield = () => {
      const obj = new Mesh23(
        getChamferedBoxGeometry(12, 12, 2, 2),
        getMeshMaterial("gold")
      );
      obj.position.x = 12;
      obj.position.y = 16;
      obj.position.z = 6;
      obj.rotation.y = Math.PI * 0.125;
      return obj;
    };
    const itemLog = makeLog;
    const sheep = () => {
      return makeSheep(
        getMeshMaterial("fleeceWhite"),
        getMeshMaterial("fleeceBlack"),
        getMeshMaterial("sheepNose"),
        getMeshMaterial("shinyBlack"),
        0,
        0
      );
    };
    const indexedMeshes = [
      dummy,
      body,
      body2,
      hat,
      sword,
      shield,
      itemLog,
      sheep
    ];
    const t = 8;
    for (let i = 0; i < t; i++) {
      const time = i / t;
      const sheepRunFrame = () => {
        return makeSheep(
          getMeshMaterial("fleeceWhite"),
          getMeshMaterial("fleeceBlack"),
          getMeshMaterial("sheepNose"),
          getMeshMaterial("shinyBlack"),
          time
        );
      };
      indexedMeshes.push(sheepRunFrame);
    }
    const skeleton = () => {
      return makeSkeleton(
        getMeshMaterial(skeletonMaterialNames.skin),
        getMeshMaterial(skeletonMaterialNames.black),
        getMeshMaterial(skeletonMaterialNames.pants),
        0,
        0
      );
    };
    indexedMeshes.push(skeleton);
    for (let i = 0; i < t; i++) {
      const time = i / t;
      const skeletonRunFrame = () => {
        return makeSkeleton(
          getMeshMaterial(skeletonMaterialNames.skin),
          getMeshMaterial(skeletonMaterialNames.black),
          getMeshMaterial(skeletonMaterialNames.pants),
          time
        );
      };
      indexedMeshes.push(skeletonRunFrame);
    }
    const wheelBarrow = () => {
      return makeWheelBarrow(
        getMeshMaterial(wheelBarrowMaterialNames.wood),
        getMeshMaterial(wheelBarrowMaterialNames.wood2),
        0,
        0
      );
    };
    indexedMeshes.push(wheelBarrow);
    for (let i = 0; i < t; i++) {
      const time = i / t;
      const wheelBarrowRunFrame = () => {
        return makeWheelBarrow(
          getMeshMaterial(wheelBarrowMaterialNames.wood),
          getMeshMaterial(wheelBarrowMaterialNames.wood2),
          time
        );
      };
      indexedMeshes.push(wheelBarrowRunFrame);
    }
    super(pixelsPerTile, pixelsPerCacheEdge, passes, indexedMeshes);
    this._angleRegistry = [];
    this._pivot.scale.multiplyScalar(0.5);
  }
  getTileId(tileDescription) {
    throw new Error("Needs angle. Use getTileIdAtAngle()");
    return 0;
  }
  getTileIdAtAngle(tileDescription, angle) {
    const hash = `${tileDescription.toString()}@${angle}`;
    let index = this._tileHashRegistry.indexOf(hash);
    if (index === -1) {
      index = this._tileRegistry.length;
      if (index >= this._maxTiles) {
        console.error(`no more room for tiles! (${index})`);
      }
      this._tileRegistry.push(tileDescription);
      this._angleRegistry.push(angle);
      this._tileHashRegistry.push(hash);
      this._renderQueue.push(index);
    }
    return index;
  }
  render(renderer) {
    if (this._renderQueue.length > 0) {
      const oldViewport = new Vector49();
      const oldScissor = new Vector49();
      renderer.getViewport(oldViewport);
      renderer.getScissor(oldScissor);
      this._scene.updateMatrixWorld(true);
      for (const pass of this._passes) {
        renderer.setRenderTarget(this._renderTargets.get(pass));
        const p = this._pixelsPerTile / renderer.getPixelRatio();
        const depthPass = pass === "customTopDownHeight";
        for (const index of this._renderQueue) {
          const iCol = index % this._tilesPerEdge;
          const iRow = ~~(index / this._tilesPerEdge);
          const angle = this._angleRegistry[index];
          if (this._pivot.rotation.y !== angle) {
            this._pivot.rotation.y = angle;
            this._pivot.updateMatrixWorld(true);
          }
          const visualProps = this._tileRegistry[index];
          const layer2 = !!(visualProps[0] & 1);
          if (layer2 && depthPass) {
            continue;
          }
          for (let j = 0; j < this._indexedMeshes.length; j++) {
            const jb = ~~(j / 8);
            const j8 = j % 8;
            const shouldShow = !!(visualProps[jb] & 1 << j8);
            if (this._indexedMeshesVisibility[j] && !shouldShow) {
              this._indexedMeshes[j]().visible = false;
            } else if (!this._indexedMeshesVisibility[j] && shouldShow) {
              this._indexedMeshes[j]().visible = true;
            }
            this._indexedMeshesVisibility[j] = shouldShow;
          }
          renderer.setViewport(iCol * p, iRow * p, p, p);
          renderer.setScissor(iCol * p, iRow * p, p, p);
          changeMeshMaterials(this._scene, pass, true);
          renderer.render(
            this._scene,
            layer2 ? this._cameraTiltedTop : depthPass ? this._cameraTopDown : this._cameraTiltedBottom
          );
        }
      }
      renderer.setViewport(oldViewport);
      renderer.setScissor(oldScissor);
      renderer.setRenderTarget(null);
      this._renderQueue.length = 0;
    }
  }
};

// src/rendering/tileMaker/spriteMaker/JITSpriteSampler.ts
var masks32 = [];
for (let i = 0; i < 32; i++) {
  masks32[i] = 1 << i;
}
var __animFrameTimes2 = ["0", "1", "2", "3", "4", "5", "6", "7"];
var metaSpriteStrings = [
  "body",
  "body2",
  "hat",
  "sword",
  "shield",
  "itemLog",
  "sheep",
  "skeleton",
  "wheelBarrow",
  "animRun",
  "animTime1",
  "animTime2",
  "animTime4"
];
var visualSpriteStrings = [
  "layer2",
  "body",
  "body2",
  "hat",
  "sword",
  "shield",
  "itemLog",
  "sheep",
  "sheepRun0",
  "sheepRun1",
  "sheepRun2",
  "sheepRun3",
  "sheepRun4",
  "sheepRun5",
  "sheepRun6",
  "sheepRun7",
  "skeleton",
  "skeletonRun0",
  "skeletonRun1",
  "skeletonRun2",
  "skeletonRun3",
  "skeletonRun4",
  "skeletonRun5",
  "skeletonRun6",
  "skeletonRun7",
  "wheelBarrow",
  "wheelBarrowRun0",
  "wheelBarrowRun1",
  "wheelBarrowRun2",
  "wheelBarrowRun3",
  "wheelBarrowRun4",
  "wheelBarrowRun5",
  "wheelBarrowRun6",
  "wheelBarrowRun7"
];
var masks8 = [];
for (let i = 0; i < 8; i++) {
  masks8[i] = 1 << i;
}
var SpriteController = class {
  constructor(x, y, id, angle, metaBytes) {
    this.x = x;
    this.y = y;
    this.id = id;
    this.angle = angle;
    this.metaBytes = metaBytes;
    this._animTime = 0;
    this._animFrame = 0;
    this.z = 0;
  }
  get animTime() {
    return this._animTime;
  }
  set animTime(value) {
    if (value === 0) {
      this.metaBytes.disableBit("animRun");
    } else {
      this.metaBytes.enableBit("animRun");
    }
    this._animTime = value;
    this.animFrame = ~~(value * 8);
  }
  get animFrame() {
    return this._animFrame;
  }
  set animFrame(value) {
    if (value === this._animFrame) {
      return;
    }
    this._animFrame = value;
    if ((this.animFrame & 1) !== 0) {
      this.metaBytes.enableBit("animTime1");
    } else {
      this.metaBytes.disableBit("animTime1");
    }
    if ((this.animFrame & 2) !== 0) {
      this.metaBytes.enableBit("animTime2");
    } else {
      this.metaBytes.disableBit("animTime2");
    }
    if ((this.animFrame & 4) !== 0) {
      this.metaBytes.enableBit("animTime4");
    } else {
      this.metaBytes.disableBit("animTime4");
    }
  }
};
var __id = 0;
var JITSpriteSampler = class {
  //maybe change this caching mechanism for something more memory friendly. e.i. Map<number, <Map<number, number>> ?
  constructor(_spriteMaker, _pixelsPerTile, _viewWidth, _viewHeight) {
    this._spriteMaker = _spriteMaker;
    this._pixelsPerTile = _pixelsPerTile;
    this._viewWidth = _viewWidth;
    this._viewHeight = _viewHeight;
    this._sprites = [];
    this.offsetX = 0;
    this.offsetY = 0;
    this.metaCache = /* @__PURE__ */ new Map();
    this.bytesPerTile = Math.ceil(visualSpriteStrings.length / 8);
  }
  makeSprite(x, y, angle) {
    const id = __id;
    const meta = this.getMeta(id);
    const sprite = new SpriteController(x, y, id, angle, meta);
    __id++;
    this._sprites.push(sprite);
    return sprite;
  }
  get spriteMaker() {
    return this._spriteMaker;
  }
  set spriteMaker(value) {
    throw new Error("Cannot change spriteMaker during runtime");
  }
  getMeta(id) {
    const key = id.toString();
    if (this.metaCache.has(key)) {
      return this.metaCache.get(key);
    }
    const metaProps = new NamedBitsInNumber(0, metaSpriteStrings);
    this.validateMeta(metaProps);
    this.metaCache.set(key, metaProps);
    return metaProps;
  }
  validateMeta(val) {
    if (val.has("body") && val.has("body2")) {
      val.disableBit("body2");
    }
    if (val.has("sheep") || val.has("skeleton")) {
      val.disableBit("body2");
      val.disableBit("body");
      val.enableBit("animRun");
    } else if (val.has("animRun")) {
      val.disableBit("animRun");
    }
    if (val.has("sheep")) {
      val.disableBit("skeleton");
    }
    return val;
  }
  sampleVisProps(metaProps) {
    const visProps = new NamedBitsInBytes(
      new Uint8Array(this.bytesPerTile),
      visualSpriteStrings
    );
    function getSuffix() {
      let suffix = "";
      if (metaProps.has("animRun")) {
        const time = (metaProps.has("animTime1") ? 1 : 0) + (metaProps.has("animTime2") ? 2 : 0) + (metaProps.has("animTime4") ? 4 : 0);
        suffix = "Run" + time;
      }
      return suffix;
    }
    if (metaProps.has("sheep")) {
      visProps.enableBit("sheep" + getSuffix());
    } else if (metaProps.has("skeleton")) {
      visProps.enableBit("skeleton" + getSuffix());
    } else if (metaProps.has("wheelBarrow")) {
      visProps.enableBit("wheelBarrow" + getSuffix());
    } else {
      if (metaProps.has("body")) {
        visProps.enableBit("body");
      }
      if (metaProps.has("body2")) {
        visProps.enableBit("body2");
      }
      if (metaProps.has("hat")) {
        visProps.enableBit("hat");
      }
      if (metaProps.has("sword")) {
        visProps.enableBit("sword");
      }
      if (metaProps.has("shield")) {
        visProps.enableBit("shield");
      }
      if (metaProps.has("itemLog")) {
        visProps.enableBit("itemLog");
      }
    }
    return visProps;
  }
  sampleVisIds(sprite, time = "0") {
    const visProps = this.sampleVisProps(sprite.metaBytes);
    const bottomAndTopIds = this.sampleVisIdsByVisProps(
      visProps,
      sprite.angle
    );
    return bottomAndTopIds;
  }
  sampleVisIdsByVisProps(visProps, angle) {
    const idBottom = this._spriteMaker.getTileIdAtAngle(visProps.bytes, angle);
    const visProps2 = visProps.bytes.slice();
    visProps2[0] |= 1;
    const idTop = this._spriteMaker.getTileIdAtAngle(visProps2, angle);
    const bottomAndTopIds = {
      idBottom,
      idTop
    };
    return bottomAndTopIds;
  }
  updateVis(bottomPointsGeo, topPointsGeo) {
    if (this._sprites.length > 0) {
      const ppt = this._pixelsPerTile;
      const xyzBottomAttr = bottomPointsGeo.getAttribute("xyz");
      const xyzBottomArr = xyzBottomAttr.array;
      const idBottomAttr = bottomPointsGeo.getAttribute("id");
      const idBottomArr = idBottomAttr.array;
      const xyzTopAttr = topPointsGeo.getAttribute("xyz");
      const xyzTopArr = xyzTopAttr.array;
      const idTopAttr = topPointsGeo.getAttribute("id");
      const idTopArr = idTopAttr.array;
      bottomPointsGeo.drawRange.count = 0;
      topPointsGeo.drawRange.count = 0;
      let j = 0;
      for (let i = 0; i < this._sprites.length; i++) {
        const sprite = this._sprites[i];
        const currentFrame = __animFrameTimes2[sprite.animFrame % __animFrameTimes2.length];
        const x = sprite.x - this.offsetX;
        const y = sprite.y - this.offsetY;
        const z = sprite.z;
        if (x < 0 || x > this._viewWidth || y < 0 || y > this._viewHeight) {
          continue;
        }
        const xSnap = Math.round(wrap(x, 0, this._viewWidth) * ppt) / ppt;
        const ySnap = Math.round(wrap(y, 0, this._viewHeight) * ppt) / ppt;
        const zSnap = Math.round(z * ppt) / ppt;
        const j3 = j * 3;
        xyzBottomArr[j3] = xSnap;
        xyzBottomArr[j3 + 1] = ySnap;
        xyzBottomArr[j3 + 2] = zSnap;
        xyzTopArr[j3] = xSnap;
        xyzTopArr[j3 + 1] = ySnap + 1;
        xyzTopArr[j3 + 2] = zSnap;
        const frame = sprite.metaBytes.has("animRun") ? currentFrame : void 0;
        const sample = this.sampleVisIds(sprite, frame);
        idBottomArr[j] = sample.idBottom;
        idTopArr[j] = sample.idTop;
        j++;
      }
      bottomPointsGeo.drawRange.count = j;
      topPointsGeo.drawRange.count = j;
      if (j === 0) {
        return false;
      }
      xyzBottomAttr.needsUpdate = true;
      idBottomAttr.needsUpdate = true;
      xyzTopAttr.needsUpdate = true;
      idTopAttr.needsUpdate = true;
      return true;
    } else {
      return false;
    }
  }
};

// src/mapCache/MapCacheRenderer.ts
import {
  BufferAttribute as BufferAttribute6,
  BufferGeometry as BufferGeometry10,
  LinearEncoding as LinearEncoding3,
  NearestFilter as NearestFilter4,
  OrthographicCamera as OrthographicCamera3,
  Points,
  RepeatWrapping as RepeatWrapping2,
  Scene as Scene4,
  Uint16BufferAttribute as Uint16BufferAttribute3,
  Uint8BufferAttribute,
  WebGLRenderTarget as WebGLRenderTarget3
} from "three";

// src/materials/TileCacheWriterPointMaterial/index.ts
import {
  Color as Color7,
  RawShaderMaterial as RawShaderMaterial7,
  Uniform as Uniform7,
  Vector2 as Vector25
} from "three";

// src/materials/TileCacheWriterPointMaterial/frag.glsl
var frag_default7 = `precision highp float;

uniform vec3 uColor;
uniform sampler2D uTileTex;

varying vec2 vUv;

#ifdef DISCARD_BY_MAP_DEPTH_CACHE
  #ifdef ALTERNATE_DEPTH_TILE
    uniform sampler2D uAlternateDepthTileTex;
  #endif
  uniform sampler2D uMapDepthCacheTexture;
  varying vec2 vInverseUv;
#endif

#ifdef USE_XYZ
  varying float vZ;
  uniform float zColorScale;
#endif 


void main() {
  // vec2 uvTile = floor(uTileMap.xy * 8.0) / 8.0 + fract(vUv * 64.0) / 8.0;
  vec2 flippedCoord = gl_PointCoord;
  flippedCoord.y = 1.0 - flippedCoord.y;
  vec2 uv = vUv + flippedCoord / TILES_PER_CACHE_EDGE;
  #ifdef DISCARD_BY_MAP_DEPTH_CACHE
    #ifdef ALTERNATE_DEPTH_TILE
      vec4 depthTileSample = texture2D(uAlternateDepthTileTex, uv);
      if(depthTileSample.a < 0.1) {
        discard;
      }
    #endif
    vec4 bgTexel = texture2D(uMapDepthCacheTexture, vInverseUv + TILE_VIEW_RATIO * flippedCoord);
    #ifdef USE_XYZ
      depthTileSample.b += vZ;
    #endif
    if(depthTileSample.b < bgTexel.b) {
      discard;
    }
  #endif

  vec4 tileTexel = texture2D(uTileTex, uv);
  if(tileTexel.a < 0.1) {
    discard;
  }
  #ifdef USE_XYZ
    tileTexel.b += vZ * zColorScale;
  #endif
  
  gl_FragColor = tileTexel;
}`;

// src/materials/TileCacheWriterPointMaterial/vert.glsl
var vert_default7 = `precision highp float;

uniform vec2 uViewRes;
#ifdef USE_XYZ
    attribute vec3 xyz;
    #define COORD xyz.xy
    uniform float zSlideScale;
    varying float vZ;
#else 
    attribute vec2 xy;
    #define COORD xy
#endif
uniform float z;
attribute float id;

varying vec2 vUv;

#ifdef DISCARD_BY_MAP_DEPTH_CACHE 
    varying vec2 vInverseUv;
    uniform vec4 uMapDepthCacheUvST;
#endif

void main() {
    gl_Position = vec4(((COORD + 0.5) * PIXELS_PER_TILE) / uViewRes * 2.0 - 1.0, z, 1.0);
    #ifdef DEPTH_SORT_BY_Y 
        gl_Position.z += COORD.y * 0.05;
    #endif
    #ifdef USE_XYZ
        float z = xyz.z * PIXELS_PER_TILE / uViewRes.y * 2.0 * zSlideScale;
        gl_Position.y += z;
        gl_Position.z -= z * 0.5;
        vZ = xyz.z * 0.5;
    #endif
    gl_PointSize = PIXELS_PER_TILE;
    vUv = vec2(mod(id, TILES_PER_CACHE_EDGE) / TILES_PER_CACHE_EDGE, floor(id / TILES_PER_CACHE_EDGE) / TILES_PER_CACHE_EDGE);
    #ifdef DISCARD_BY_MAP_DEPTH_CACHE 
        vInverseUv = gl_Position.xy * 0.5 - 0.5 - (vec2(PIXELS_PER_TILE * 0.5) / uViewRes);
        vInverseUv = vInverseUv * uMapDepthCacheUvST.xy + uMapDepthCacheUvST.zw;
    #endif
}`;

// src/materials/TileCacheWriterPointMaterial/index.ts
var __defaultParams7 = {
  color: new Color7(1, 0, 0),
  tileTex: getTempTexture(),
  viewWidth: 1024,
  viewHeight: 1024,
  pixelsPerTile: 32,
  pixelsPerCacheEdge: 2048,
  z: 0,
  useXYZ: false,
  zSlideScale: 1,
  zColorScale: 1
};
var TileCacheWriterPointMaterial = class extends RawShaderMaterial7 {
  get mapDepthCacheTexture() {
    return this._mapDepthCacheTextureUniform.value;
  }
  set mapDepthCacheTexture(value) {
    this._mapDepthCacheTextureUniform.value = value;
  }
  get zSlideScale() {
    return this._zSlideScaleUniform.value;
  }
  set zSlideScale(value) {
    this._zSlideScaleUniform.value = value;
  }
  get zColorScale() {
    return this._zColorScaleUniform.value;
  }
  set zColorScale(value) {
    this._zColorScaleUniform.value = value;
  }
  get tileTexture() {
    return this._tileTexUniform.value;
  }
  set tileTexture(value) {
    this._tileTexUniform.value = value;
  }
  get alternateDepthTileTexture() {
    return this._alternateDepthTileTexUniform.value;
  }
  set alternateDepthTileTexture(value) {
    this._alternateDepthTileTexUniform.value = value;
  }
  constructor(options = {}) {
    const params = buildParameters(__defaultParams7, options);
    assertPowerOfTwo(params.pixelsPerTile);
    assertPowerOfTwo(params.pixelsPerCacheEdge);
    const uTileTex = new Uniform7(params.tileTex);
    const alternateDepthTileTexUniform = new Uniform7(
      params.alternateDepthTileTex || getTempTexture()
    );
    const uniforms = {
      uColor: new Uniform7(params.color),
      uTileTex,
      uViewRes: new Uniform7(new Vector25(params.viewWidth, params.viewHeight)),
      z: new Uniform7(params.z)
    };
    const defines = {
      PIXELS_PER_TILE: params.pixelsPerTile.toFixed(1),
      TILES_PER_CACHE_EDGE: (params.pixelsPerCacheEdge / params.pixelsPerTile).toFixed(1)
    };
    const mapDepthCacheTextureUniform = new Uniform7(params.mapDepthCacheTexture);
    if (params.mapDepthCacheTexture) {
      uniforms.uMapDepthCacheTexture = mapDepthCacheTextureUniform;
      uniforms.uMapDepthCacheUvST = new Uniform7(params.mapDepthCacheUvST);
      defines.DISCARD_BY_MAP_DEPTH_CACHE = true;
      defines.TILE_VIEW_RATIO = `vec2(${(32 / params.viewWidth).toFixed(6)}, ${(32 / params.viewHeight).toFixed(6)})`;
      if (params.alternateDepthTileTex) {
        uniforms.uAlternateDepthTileTex = alternateDepthTileTexUniform;
        defines.ALTERNATE_DEPTH_TILE = true;
      }
    }
    if (params.depthSortByY) {
      defines.DEPTH_SORT_BY_Y = true;
    }
    const zSlideScaleUniform = new Uniform7(params.zSlideScale);
    const zColorScaleUniform = new Uniform7(params.zColorScale);
    if (params.useXYZ) {
      defines.USE_XYZ = true;
      uniforms.zSlideScale = zSlideScaleUniform;
      uniforms.zColorScale = zColorScaleUniform;
    }
    super({
      uniforms,
      defines,
      vertexShader: vert_default7,
      fragmentShader: frag_default7,
      // alphaTest: 0.5,
      // transparent: true,
      depthWrite: true,
      depthTest: true
    });
    this._tileTexUniform = uTileTex;
    this._alternateDepthTileTexUniform = alternateDepthTileTexUniform;
    this._mapDepthCacheTextureUniform = mapDepthCacheTextureUniform;
    this._zSlideScaleUniform = zSlideScaleUniform;
    this._zColorScaleUniform = zColorScaleUniform;
  }
};

// src/mapCache/MapCacheRenderer.ts
var MapCacheRenderer = class {
  constructor(width, height, _jitTileSampler, pixelsPerTile = 32, pixelsPerCacheEdge = 1024) {
    this._jitTileSampler = _jitTileSampler;
    this.mapCache = /* @__PURE__ */ new Map();
    const totalTiles = width * height * 2;
    const viewWidth = width * pixelsPerTile;
    const viewHeight = height * pixelsPerTile;
    const xyBottomArr = new Uint8Array(totalTiles * 2);
    const xyTopArr = new Uint8Array(totalTiles * 2);
    const idBottomArr = new Uint16Array(totalTiles);
    const idTopArr = new Uint16Array(totalTiles);
    const nothingnessVisProps = new NamedBitsInBytes(
      new Uint8Array(
        Math.ceil(
          _jitTileSampler.tileMaker.visualPropertyLookupStrings.length / 8
        )
      ),
      _jitTileSampler.tileMaker.visualPropertyLookupStrings
    );
    nothingnessVisProps.enableBit("nothingness");
    _jitTileSampler.sampleVisIdsByVisProps(nothingnessVisProps);
    for (let i = 0; i < totalTiles; i++) {
      const x = i % width + _jitTileSampler.offsetX;
      const y = ~~(i / width) - _jitTileSampler.offsetY;
      const i2 = i * 2;
      const sample = _jitTileSampler.sampleVisIds(x, y);
      xyBottomArr[i2] = wrap(x, 0, width);
      xyBottomArr[i2 + 1] = wrap(y, 0, height);
      xyTopArr[i2] = wrap(x, 0, width);
      xyTopArr[i2 + 1] = wrap(y + 1, 0, height);
      idBottomArr[i] = 0;
      idTopArr[i] = 1;
    }
    const tileBottomPointsGeo = new BufferGeometry10();
    const xyBottomAttr = new Uint8BufferAttribute(xyBottomArr, 2);
    tileBottomPointsGeo.setAttribute("xy", xyBottomAttr);
    const idBottomAttr = new Uint16BufferAttribute3(idBottomArr, 1);
    tileBottomPointsGeo.setAttribute("id", idBottomAttr);
    const tileTopPointsGeo = new BufferGeometry10();
    const xyTopAttr = new Uint8BufferAttribute(xyTopArr, 2);
    tileTopPointsGeo.setAttribute("xy", xyTopAttr);
    const idTopAttr = new Uint16BufferAttribute3(idTopArr, 1);
    tileTopPointsGeo.setAttribute("id", idTopAttr);
    const indexArr = new Uint16Array(totalTiles);
    for (let i = 0; i < totalTiles; i++) {
      indexArr[i] = i;
    }
    tileBottomPointsGeo.setIndex(new BufferAttribute6(indexArr, 1));
    tileTopPointsGeo.setIndex(new BufferAttribute6(indexArr, 1));
    const pass = _jitTileSampler.tileMaker.passes[0];
    const pointsBottomMaterial = new TileCacheWriterPointMaterial({
      tileTex: _jitTileSampler.tileMaker.getTexture(pass),
      viewWidth,
      viewHeight,
      pixelsPerTile,
      pixelsPerCacheEdge
    });
    const pointsBottom = new Points(tileBottomPointsGeo, pointsBottomMaterial);
    this._pointsBottomMaterial = pointsBottomMaterial;
    pointsBottom.frustumCulled = false;
    const pointsTopMaterial = new TileCacheWriterPointMaterial({
      tileTex: _jitTileSampler.tileMaker.getTexture(pass),
      viewWidth,
      viewHeight,
      pixelsPerTile,
      pixelsPerCacheEdge
    });
    this._pointsTopMaterial = pointsTopMaterial;
    const pointsTop = new Points(tileTopPointsGeo, pointsTopMaterial);
    pointsTop.frustumCulled = false;
    pointsTop.renderOrder = 1;
    for (const pass2 of _jitTileSampler.tileMaker.passes) {
      const mapCache = new WebGLRenderTarget3(viewWidth, viewHeight, {
        magFilter: NearestFilter4,
        minFilter: NearestFilter4,
        encoding: LinearEncoding3,
        generateMipmaps: false,
        wrapS: RepeatWrapping2,
        wrapT: RepeatWrapping2
      });
      this.mapCache.set(pass2, mapCache);
    }
    const mapCacheScene = new Scene4();
    mapCacheScene.add(pointsBottom);
    mapCacheScene.add(pointsTop);
    const mapCacheCamera = new OrthographicCamera3(
      -100,
      100,
      -100,
      100,
      100,
      -100
    );
    mapCacheScene.add(mapCacheCamera);
    this.mapCacheScene = mapCacheScene;
    this.mapCacheCamera = mapCacheCamera;
    this.tileBottomPointsGeo = tileBottomPointsGeo;
    this.tileTopPointsGeo = tileTopPointsGeo;
  }
  render(renderer) {
    for (const pass of this._jitTileSampler.tileMaker.passes) {
      renderer.setRenderTarget(this.mapCache.get(pass));
      const passTileTex = this._jitTileSampler.tileMaker.getTexture(pass);
      this._pointsBottomMaterial.tileTexture = passTileTex;
      this._pointsTopMaterial.tileTexture = passTileTex;
      renderer.render(this.mapCacheScene, this.mapCacheCamera);
    }
    renderer.setRenderTarget(null);
  }
};

// src/mapCache/MapWithSpritesCacheRenderer.ts
import {
  BufferAttribute as BufferAttribute7,
  BufferGeometry as BufferGeometry11,
  Float32BufferAttribute as Float32BufferAttribute2,
  LinearEncoding as LinearEncoding4,
  Mesh as Mesh24,
  NearestFilter as NearestFilter5,
  OrthographicCamera as OrthographicCamera4,
  PlaneBufferGeometry as PlaneBufferGeometry5,
  Points as Points2,
  RepeatWrapping as RepeatWrapping3,
  Scene as Scene5,
  Uint16BufferAttribute as Uint16BufferAttribute4,
  Vector4 as Vector411,
  WebGLRenderTarget as WebGLRenderTarget4
} from "three";
var MapWithSpritesCacheRenderer = class {
  constructor(_mapCacheRenderer, width, height, maxSprites, _jitSpriteSampler, pixelsPerTile = 32, pixelsPerCacheEdge = 1024) {
    this._mapCacheRenderer = _mapCacheRenderer;
    this._jitSpriteSampler = _jitSpriteSampler;
    this.mapCache = /* @__PURE__ */ new Map();
    this.offsetX = 0;
    this.offsetY = 0;
    const viewWidth = width * pixelsPerTile;
    const viewHeight = height * pixelsPerTile;
    const xyzBottomArr = new Float32Array(maxSprites * 3);
    const xyzTopArr = new Float32Array(maxSprites * 3);
    const idBottomArr = new Uint16Array(maxSprites);
    const idTopArr = new Uint16Array(maxSprites);
    const tileBottomPointsGeo = new BufferGeometry11();
    const xyzBottomAttr = new Float32BufferAttribute2(xyzBottomArr, 3);
    tileBottomPointsGeo.setAttribute("xyz", xyzBottomAttr);
    const idBottomAttr = new Uint16BufferAttribute4(idBottomArr, 1);
    tileBottomPointsGeo.setAttribute("id", idBottomAttr);
    const tileTopPointsGeo = new BufferGeometry11();
    const xyzTopAttr = new Float32BufferAttribute2(xyzTopArr, 3);
    tileTopPointsGeo.setAttribute("xyz", xyzTopAttr);
    const idTopAttr = new Uint16BufferAttribute4(idTopArr, 1);
    tileTopPointsGeo.setAttribute("id", idTopAttr);
    const indexArr = new Uint16Array(maxSprites);
    for (let i = 0; i < maxSprites; i++) {
      indexArr[i] = i;
    }
    tileBottomPointsGeo.setIndex(new BufferAttribute7(indexArr, 1));
    tileTopPointsGeo.setIndex(new BufferAttribute7(indexArr, 1));
    const spriteMaker = _jitSpriteSampler.spriteMaker;
    const pass = _jitSpriteSampler.spriteMaker.passes[0];
    for (const pass2 of spriteMaker.passes) {
      const mapCache = new WebGLRenderTarget4(viewWidth, viewHeight, {
        magFilter: NearestFilter5,
        minFilter: NearestFilter5,
        encoding: LinearEncoding4,
        generateMipmaps: false,
        wrapS: RepeatWrapping3,
        wrapT: RepeatWrapping3
      });
      this.mapCache.set(pass2, mapCache);
    }
    const uvST = new Vector411(1, 1, 0, 0);
    const matParams = {
      tileTex: spriteMaker.getTexture(pass),
      viewWidth,
      viewHeight,
      pixelsPerTile,
      pixelsPerCacheEdge,
      mapDepthCacheTexture: this._mapCacheRenderer.mapCache.get(
        "customRoughnessMetalnessHeight"
      ).texture,
      mapDepthCacheUvST: uvST,
      alternateDepthTileTex: spriteMaker.getTexture(
        "customRoughnessMetalnessHeight"
      ),
      depthSortByY: true,
      useXYZ: true
    };
    const pointsBottomMaterial = new TileCacheWriterPointMaterial(matParams);
    const pointsBottom = new Points2(tileBottomPointsGeo, pointsBottomMaterial);
    this._pointsBottomMaterial = pointsBottomMaterial;
    pointsBottom.frustumCulled = false;
    matParams.z = -0.1;
    const pointsTopMaterial = new TileCacheWriterPointMaterial(matParams);
    this._pointsTopMaterial = pointsTopMaterial;
    const pointsTop = new Points2(tileTopPointsGeo, pointsTopMaterial);
    pointsTop.frustumCulled = false;
    pointsTop.renderOrder = 1;
    const mapCacheScene = new Scene5();
    mapCacheScene.add(pointsBottom);
    mapCacheScene.add(pointsTop);
    const mapCacheCamera = new OrthographicCamera4(
      -100,
      100,
      100,
      -100,
      100,
      -100
    );
    mapCacheScene.add(mapCacheCamera);
    const backdropMaterial = new BasicTextureMaterial({
      texture: getTempTexture(),
      uvST
    });
    backdropMaterial.depthTest = false;
    backdropMaterial.depthWrite = false;
    const backdrop = new Mesh24(
      new PlaneBufferGeometry5(200, 200),
      backdropMaterial
    );
    mapCacheScene.add(backdrop);
    backdrop.position.z = -1;
    backdrop.renderOrder = -1;
    this.backdrop = backdrop;
    this.mapCacheScene = mapCacheScene;
    this.mapCacheCamera = mapCacheCamera;
    this.mapCacheBackdropMaterial = backdropMaterial;
    this.spriteBottomPointsGeo = tileBottomPointsGeo;
    this.spriteTopPointsGeo = tileTopPointsGeo;
    this._backdropUvST = uvST;
    this._tilesInViewWidth = width;
    this._tilesInViewHeight = height;
  }
  render(renderer) {
    this._backdropUvST.z = this.offsetX / this._tilesInViewWidth;
    this._backdropUvST.w = this.offsetY / this._tilesInViewHeight;
    for (const pass of this._jitSpriteSampler.spriteMaker.passes) {
      this.mapCacheBackdropMaterial.texture = this._mapCacheRenderer.mapCache.get(pass).texture;
      renderer.setRenderTarget(this.mapCache.get(pass));
      const passTileTex = this._jitSpriteSampler.spriteMaker.getTexture(pass);
      const isTopDownHeight = pass === "customTopDownHeight";
      const isHeight = pass.includes("Height");
      const passDepthTileTex = this._jitSpriteSampler.spriteMaker.getTexture(
        isTopDownHeight ? "customTopDownHeight" : "customRoughnessMetalnessHeight"
      );
      const passDepthMapTex = this._mapCacheRenderer.mapCache.get(
        isTopDownHeight ? "customTopDownHeight" : "customRoughnessMetalnessHeight"
      ).texture;
      this._pointsBottomMaterial.tileTexture = passTileTex;
      this._pointsBottomMaterial.mapDepthCacheTexture = passDepthMapTex;
      this._pointsBottomMaterial.alternateDepthTileTexture = passDepthTileTex;
      this._pointsBottomMaterial.zSlideScale = isTopDownHeight ? 0 : 1;
      this._pointsBottomMaterial.zColorScale = isHeight ? 1 : 0;
      this._pointsTopMaterial.tileTexture = passTileTex;
      this._pointsTopMaterial.mapDepthCacheTexture = passDepthMapTex;
      this._pointsTopMaterial.alternateDepthTileTexture = passDepthTileTex;
      this._pointsTopMaterial.alternateDepthTileTexture = passDepthTileTex;
      this._pointsTopMaterial.zSlideScale = isTopDownHeight ? 0 : 1;
      this._pointsTopMaterial.zColorScale = isHeight ? 1 : 0;
      renderer.clearDepth();
      renderer.render(this.mapCacheScene, this.mapCacheCamera);
    }
    renderer.setRenderTarget(null);
  }
};

// src/mapCache/PointLightRenderer.ts
import {
  BufferAttribute as BufferAttribute8,
  BufferGeometry as BufferGeometry12,
  Float32BufferAttribute as Float32BufferAttribute3,
  LinearEncoding as LinearEncoding5,
  NearestFilter as NearestFilter6,
  OrthographicCamera as OrthographicCamera5,
  Points as Points3,
  RepeatWrapping as RepeatWrapping4,
  Scene as Scene6,
  WebGLRenderTarget as WebGLRenderTarget5
} from "three";

// src/materials/PointLightPointMaterial/index.ts
import {
  AdditiveBlending,
  Color as Color8,
  RawShaderMaterial as RawShaderMaterial8,
  Uniform as Uniform8,
  Vector2 as Vector26
} from "three";

// src/materials/PointLightPointMaterial/frag.glsl
var frag_default8 = `precision highp float;


uniform sampler2D uTextureColorsMapCache;
uniform sampler2D uTextureNormalsMapCache;
uniform sampler2D uTextureDepthTopDownMapCache;
uniform sampler2D uTextureRoughnessMetalnessHeightMapCache;
varying vec2 vInverseUv;
varying vec2 vSizeHeight;
varying vec3 vColor;

void main() {
  // vec2 uvTile = floor(uTileMap.xy * 8.0) / 8.0 + fract(vUv * 64.0) / 8.0;
  vec2 flippedCoord = gl_PointCoord;
  float lightSize = vSizeHeight.x;
  float lightHeight = vSizeHeight.y;
  flippedCoord.y = 1.0 - flippedCoord.y;
  vec2 texelUv = vInverseUv + PIXEL_VIEW_RATIO * lightSize * flippedCoord;
  vec4 texelColor = texture2D(uTextureColorsMapCache, texelUv);
  vec4 texelRoughnessMetalnessHeight = texture2D(uTextureRoughnessMetalnessHeightMapCache, texelUv);
  float texelHeight = texelRoughnessMetalnessHeight.b * 2.0;
  float lightDepth = lightHeight - texelHeight;
  float lightTileSize = lightSize / PIXELS_PER_TILE;
  vec3 virtualPosition = vec3((gl_PointCoord) + vec2(0.0, (texelHeight - lightHeight) / lightSize * PIXELS_PER_TILE), texelHeight);
  vec3 relLightPos = virtualPosition - vec3(0.5, 0.5, lightHeight);
  // relLightPos.z *= 0.25;
  // relLightPos.y += texelHeight;
  // vec3 relLightPos = vec3(gl_PointCoord - 0.5, -lightDepth);
  vec3 lightDir = -relLightPos.rbg;
  lightDir.y *= 0.25;
  lightDir = normalize(lightDir);
  vec4 texelNormals = texture2D(uTextureNormalsMapCache, texelUv);

  float roughness = 2.0 / texelRoughnessMetalnessHeight.r;
  float metalness = texelRoughnessMetalnessHeight.g;
  vec3 surfaceNormal = texelNormals.rgb * 2.0 - 1.0;
  // float dotP = dot(surfaceNormal, lightDir);
  float dotP = dot(surfaceNormal, lightDir) * (1.0 + metalness * 0.4);
  dotP = mix(1.0 - 0.5 * (1.0-dotP), dotP, roughness);
  float distance = max(0.0, 1.0 - length(relLightPos)/(lightTileSize * 0.5));
  float lightStrength = max(0.0, dotP) * distance * distance;


  float floorYOffset = -texelHeight * RELATIVE_TILE_SIZE;
  // texelHeight += RELATIVE_TILE_PIXEL_SIZE;
  float startingCastHeight = (texelHeight + RELATIVE_TILE_PIXEL_SIZE) * 0.5;
  float workingTexelHeight = startingCastHeight;
  float mixShadow = 1.0;
  vec2 flooredUv = texelUv + vec2(0, floorYOffset);
  // vec3 relLightPos2 = vec3(relLightPos.x, relLightPos.z, -relLightPos.y);
  // relLightPos2.y -= lightHeight;
  // relLightPos2.z -= lightHeight;
  // float newHeightBBB = texture2D(uTextureDepthTopDownMapCache, flooredUv).b * 2.0;
  vec2 lightVec2TopDown = vec2(-relLightPos.x, relLightPos.y);
  vec2 lightVec2Diagonal = vec2(-relLightPos.x, relLightPos.y - relLightPos.z / (lightTileSize));
  // vec2 lightVec2TopDown = vec2(relLightPos.x, relLightPos.y - lightHeight);
  // vec2 lightVec2 = vec2(relLightPos.x, relLightPos.z - relLightPos.y);
  #ifdef USE_SHADOWS
    for(float i = 0.0; i < 0.5; i += SHADOW_STEP_SIZE) {
      vec2 lightVec2TopDownStep = lightVec2TopDown * i;
      vec2 lightVec2DiagonalStep = lightVec2Diagonal * i;
      float newTopDownHeight = texture2D(uTextureDepthTopDownMapCache, flooredUv + lightVec2TopDownStep).b;
      float newDiagonalHeight = texture2D(uTextureRoughnessMetalnessHeightMapCache, texelUv + lightVec2DiagonalStep).b;
      workingTexelHeight = startingCastHeight - relLightPos.z * i;

      mixShadow = min(mixShadow, max(step(newTopDownHeight, workingTexelHeight), step(newDiagonalHeight, workingTexelHeight)));
      // mixShadow = min(mixShadow, step(newTopDownHeight, workingTexelHeight));
      // mixShadow = min(mixShadow, step(newDiagonalHeight, workingTexelHeight));
    }
  #endif

  vec3 lightColorHit = vColor * lightStrength * mixShadow;

	gl_FragColor = vec4(mix(lightColorHit, lightColorHit * texelColor.rgb, vec3(metalness)), 1.0);
  float mask = max(0.0, 1.0-length((gl_PointCoord - 0.5) * 2.0));
  float invMask = 1.0 - mask;
  gl_FragColor.rgb *= 1.0 - (invMask * invMask);
  vec2 texelUvCenter = vInverseUv + PIXEL_VIEW_RATIO * lightSize * 0.5;
  float texelHeightCenter = texture2D(uTextureRoughnessMetalnessHeightMapCache, texelUvCenter).b * 2.0;
  float blocked = step(texelHeightCenter, lightHeight);
  gl_FragColor.rgb += vColor * pow(max(0.0, 1.0 - 8.0 * length(vec2(0.5) - gl_PointCoord)), 3.0) * blocked;
  // gl_FragColor.rgb += vec3(texelHeightCenter);

  // gl_FragColor = texelNormals;
  // gl_FragColor = vec4(mixShadow, distance, lightDepth, 1.0);
  // gl_FragColor = vec4(lightStrength, lightStrength, lightStrength, 1.0);
  // gl_FragColor = vec4(lightDir * 0.5 + 0.5, 1.0);
  // gl_FragColor = vec4(vec3(virtualPosition.g), 1.0);
  // gl_FragColor = vec4(vec3(1.0) - abs(relLightPos) * 10.0 + 0.5, 1.0);
  // gl_FragColor.g = step(fract(gl_FragColor.g * 10.0), 0.2);
  // gl_FragColor = vec4(vec3(abs(relLightPos.b)), 1.0);
  // gl_FragColor = vec4(0.2, 0.0, 0.0, 1.0);
  // gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  // gl_FragColor.rgb = vec3(lightStrength);
  // gl_FragColor.rgb = vec3(newHeightBBB);
  // gl_FragColor.rgb += vec3(mixShadow * 0.5);

  // gl_FragColor.rgb = vec3(texture2D(uTextureDepthTopDownMapCache, flooredUv).b * 2.0);
	// for(float i = 0.0; i < 0.5; i += 1.0/32.0) {
  //   gl_FragColor.rgb = max(gl_FragColor.rgb, vec3(texture2D(uTextureDepthTopDownMapCache, flooredUv + lightVec2TopDown * i * RELATIVE_TILE_SIZE).b * 2.0));
  // }
  
}`;

// src/materials/PointLightPointMaterial/vert.glsl
var vert_default8 = `precision highp float;

uniform vec2 uViewRes;
attribute vec4 xyzSize;
attribute vec3 color;
uniform float z;
varying vec2 vSizeHeight;
varying vec3 vColor;

varying vec2 vInverseUv;

void main() {
  gl_Position = vec4(((xyzSize.xy + 0.5 + vec2(0.0, xyzSize.z)) * PIXELS_PER_TILE) / uViewRes * 2.0 - 1.0, z, 1.0);
  gl_PointSize = xyzSize.w;
  vInverseUv = gl_Position.xy * 0.5 - 0.5 - (vec2(xyzSize.w * 0.5) / uViewRes);
  vSizeHeight = xyzSize.wz;
  vColor = color;
}`;

// src/materials/PointLightPointMaterial/index.ts
var __defaultParams8 = {
  mapCacheColorsTexture: getTempTexture(),
  mapCacheNormalsTexture: getTempTexture(),
  mapCacheRoughnessMetalnessHeightTexture: getTempTexture(),
  mapCacheDepthTopDownTexture: getTempTexture(),
  viewWidth: 1024,
  viewHeight: 1024,
  pixelsPerTile: 32,
  relativeTileSize: 1 / 16,
  relativePixelSize: 1 / 512,
  pixelsPerCacheEdge: 2048,
  z: 0,
  useShadows: true,
  shadowResolution: 128
};
var PointLightPointMaterial = class extends RawShaderMaterial8 {
  constructor(options = {}) {
    const params = buildParameters(__defaultParams8, options);
    assertPowerOfTwo(params.pixelsPerTile);
    assertPowerOfTwo(params.pixelsPerCacheEdge);
    const uTextureColorsMapCache = new Uniform8(params.mapCacheColorsTexture);
    const uTextureNormalsMapCache = new Uniform8(params.mapCacheNormalsTexture);
    const uTextureRoughnessMetalnessHeightMapCache = new Uniform8(
      params.mapCacheRoughnessMetalnessHeightTexture
    );
    const uTextureDepthTopDownMapCache = new Uniform8(
      params.mapCacheDepthTopDownTexture
    );
    const uniforms = {
      uColor: new Uniform8(new Color8(1, 0.9, 0.8)),
      uTextureColorsMapCache,
      uTextureNormalsMapCache,
      uTextureRoughnessMetalnessHeightMapCache,
      uTextureDepthTopDownMapCache,
      uViewRes: new Uniform8(new Vector26(params.viewWidth, params.viewHeight)),
      z: new Uniform8(params.z)
    };
    const defines = {
      USE_SHADOWS: params.useShadows,
      SHADOW_STEP_SIZE: 1 / params.shadowResolution,
      PIXELS_PER_TILE: params.pixelsPerTile.toFixed(1),
      RELATIVE_TILE_SIZE: params.relativeTileSize,
      RELATIVE_PIXEL_SIZE: params.relativePixelSize,
      RELATIVE_TILE_PIXEL_SIZE: params.relativePixelSize / params.relativeTileSize
    };
    defines.PIXEL_VIEW_RATIO = `vec2(${(1 / params.viewWidth).toFixed(6)}, ${(1 / params.viewHeight).toFixed(6)})`;
    super({
      uniforms,
      defines,
      vertexShader: vert_default8,
      fragmentShader: frag_default8,
      blending: AdditiveBlending,
      transparent: true,
      depthWrite: false,
      depthTest: false
    });
  }
};

// src/utils/colorLibrary.ts
import { Color as Color9 } from "three";
var COLOR_BLACK = new Color9(0);
var COLOR_WHITE = new Color9(16777215);
var COLOR_HIGHLIGHT_GREEN = new Color9(6750054);
var COLOR_HIGHLIGHT_RED = new Color9(2273279);
var COLOR_BUFFED_TEXT = new Color9(6750054);
var COLOR_NERFED_TEXT = new Color9(16711680);
var COLOR_DYNAMIC_COST_TEXT = new Color9(16050242);

// src/mapCache/PointLightRenderer.ts
var LightController = class {
  constructor(x, y, z, size, color) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.size = size;
    this.color = color;
  }
};
var LightGroup = class {
  constructor(useShadows, maxPointLights, matParams) {
    this.useShadows = useShadows;
    this._lights = [];
    const lightPointsGeo = new BufferGeometry12();
    const xyzSizeArr = new Float32Array(maxPointLights * 4);
    const xyzSizeAttr = new Float32BufferAttribute3(xyzSizeArr, 4);
    lightPointsGeo.setAttribute("xyzSize", xyzSizeAttr);
    const colorArr = new Float32Array(maxPointLights * 3);
    const colorAttr = new Float32BufferAttribute3(colorArr, 3);
    lightPointsGeo.setAttribute("color", colorAttr);
    const indexArr = new Uint16Array(maxPointLights);
    for (let i = 0; i < maxPointLights; i++) {
      indexArr[i] = i;
    }
    lightPointsGeo.setIndex(new BufferAttribute8(indexArr, 1));
    const pointsBottomMaterial = new PointLightPointMaterial(matParams);
    const pointLightPoints = new Points3(lightPointsGeo, pointsBottomMaterial);
    pointLightPoints.frustumCulled = false;
    this._lightPointsGeo = lightPointsGeo;
    this.pointLightPoints = pointLightPoints;
  }
  update(ppt, offsetX, offsetY, viewWidth, viewHeight) {
    const lightPointsGeo = this._lightPointsGeo;
    const xyzSizeAttr = lightPointsGeo.getAttribute("xyzSize");
    const xyzSizeArr = xyzSizeAttr.array;
    const colorAttr = lightPointsGeo.getAttribute("color");
    const colorArr = colorAttr.array;
    lightPointsGeo.drawRange.count = 0;
    let j = 0;
    for (let i = 0; i < this._lights.length; i++) {
      const sprite = this._lights[i];
      const x = sprite.x - offsetX;
      const y = sprite.y - offsetY;
      if (x < 0 || x > viewWidth || y < 0 || y > viewHeight) {
        continue;
      }
      const xSnap = Math.round(wrap(x, 0, viewWidth) * ppt) / ppt;
      const ySnap = Math.round(wrap(y, 0, viewHeight) * ppt) / ppt;
      const j3 = j * 3;
      const j4 = j * 4;
      xyzSizeArr[j4] = xSnap;
      xyzSizeArr[j4 + 1] = ySnap;
      xyzSizeArr[j4 + 2] = sprite.z;
      xyzSizeArr[j4 + 3] = sprite.size;
      const c = sprite.color;
      colorArr[j3] = c.r;
      colorArr[j3 + 1] = c.g;
      colorArr[j3 + 2] = c.b;
      j++;
    }
    lightPointsGeo.drawRange.count = j;
    if (j > 0) {
      xyzSizeAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;
    }
    return j;
  }
  makeLight(x, y, z, size, color) {
    const light = new LightController(x, y, z, size, color);
    this._lights.push(light);
    return light;
  }
};
var PointLightRenderer = class {
  constructor(_mapCacheRenderer, _viewWidth, _viewHeight, _maxPointLights, _pixelsPerTile = 32, useShadows = true) {
    this._mapCacheRenderer = _mapCacheRenderer;
    this._viewWidth = _viewWidth;
    this._viewHeight = _viewHeight;
    this._maxPointLights = _maxPointLights;
    this._pixelsPerTile = _pixelsPerTile;
    this._lightGroups = [];
    this._lightGroupsLookup = /* @__PURE__ */ new Map();
    this.offsetX = 0;
    this.offsetY = 0;
    const pixelsWidth = _viewWidth * _pixelsPerTile;
    const pixelsHeight = _viewHeight * _pixelsPerTile;
    const renderTarget = new WebGLRenderTarget5(pixelsWidth, pixelsHeight, {
      depthBuffer: false,
      minFilter: NearestFilter6,
      magFilter: NearestFilter6,
      encoding: LinearEncoding5,
      wrapS: RepeatWrapping4,
      wrapT: RepeatWrapping4,
      generateMipmaps: false
    });
    const pointLightScene = new Scene6();
    const pointLightCamera = new OrthographicCamera5(
      -100,
      100,
      100,
      -100,
      100,
      -100
    );
    pointLightScene.add(pointLightCamera);
    this._renderTarget = renderTarget;
    this.pointLightScene = pointLightScene;
    this.pointLightCamera = pointLightCamera;
    this._pixelsWidth = pixelsWidth;
    this._pixelsHeight = pixelsHeight;
  }
  getLightGroup(useShadows = true, shadowResolution = 128) {
    const key = `${useShadows ? shadowResolution : "n"}`;
    if (!this._lightGroupsLookup.has(key)) {
      const matParams = {
        viewWidth: this._pixelsWidth,
        viewHeight: this._pixelsHeight,
        pixelsPerTile: this._pixelsPerTile,
        relativeTileSize: 1 / this._viewWidth,
        relativePixelSize: 1 / this._viewWidth / this._pixelsPerTile,
        mapCacheColorsTexture: this._mapCacheRenderer.mapCache.get("customColor").texture,
        mapCacheNormalsTexture: this._mapCacheRenderer.mapCache.get("normals").texture,
        mapCacheRoughnessMetalnessHeightTexture: this._mapCacheRenderer.mapCache.get("customRoughnessMetalnessHeight").texture,
        mapCacheDepthTopDownTexture: this._mapCacheRenderer.mapCache.get(
          "customTopDownHeight"
        ).texture,
        useShadows,
        shadowResolution
      };
      const lightGroup = new LightGroup(
        useShadows,
        this._maxPointLights,
        matParams
      );
      this.pointLightScene.add(lightGroup.pointLightPoints);
      this._lightGroups.push(lightGroup);
      this._lightGroupsLookup.set(key, lightGroup);
    }
    return this._lightGroupsLookup.get(key);
  }
  get texture() {
    return this._renderTarget.texture;
  }
  render(renderer) {
    let jt = 0;
    for (const lightGroup of this._lightGroups) {
      jt += lightGroup.update(
        this._pixelsPerTile,
        this.offsetX,
        this.offsetY,
        this._viewWidth,
        this._viewHeight
      );
    }
    if (jt === 0) {
      renderer.setRenderTarget(this._renderTarget);
      renderer.setClearColor(COLOR_BLACK, 1);
      renderer.clear(true, true, false);
      renderer.setRenderTarget(null);
    } else {
      renderer.setRenderTarget(this._renderTarget);
      renderer.setClearColor(COLOR_BLACK, 1);
      renderer.clear(true, false, false);
      renderer.render(this.pointLightScene, this.pointLightCamera);
      renderer.setRenderTarget(null);
    }
  }
};

// src/helpers/utils/MapScrollingView.ts
var MapScrollingView = class {
  constructor(viewWidth = 16, viewHeight = 16, pixelsPerTile = 32, pixelsPerCacheEdge = 2048, mapViewUvST, mapViewSubTilePixelOffsetUvST, clipspaceMode = true, passes) {
    this._dirty = true;
    this._noiseReady = false;
    const tileMaker = new MapTileMaker(
      pixelsPerTile,
      pixelsPerCacheEdge,
      passes
    );
    const spriteMaker = new SpriteMaker(
      pixelsPerTile,
      pixelsPerCacheEdge,
      passes
    );
    const jitTileSampler = new JITTileSampler(tileMaker, viewWidth, viewHeight);
    const jitSpriteSampler = new JITSpriteSampler(
      spriteMaker,
      pixelsPerTile,
      viewWidth,
      viewHeight
    );
    const mapCacheRenderer = new MapCacheRenderer(
      viewWidth,
      viewHeight,
      jitTileSampler,
      pixelsPerTile,
      pixelsPerCacheEdge
    );
    tileMaker.listenForMadeTiles(jitTileSampler.onTileMade);
    tileMaker.isIndexStillOnScreen = (index) => {
      for (let iCol = 0; iCol < viewWidth; iCol++) {
        for (let iRow = 0; iRow < viewHeight; iRow++) {
          const x = this.offsetX + iCol;
          const y = this.offsetY + iRow;
          const sampledVis = jitTileSampler.sampleVisIds(x, y);
          if (index === sampledVis.idBottom || index === sampledVis.idTop) {
            return true;
          }
        }
      }
      return false;
    };
    const mapWithSpritesCacheRenderer = new MapWithSpritesCacheRenderer(
      mapCacheRenderer,
      viewWidth,
      viewHeight,
      1024,
      jitSpriteSampler,
      pixelsPerTile,
      pixelsPerCacheEdge
    );
    const pointLightRenderer = new PointLightRenderer(
      mapWithSpritesCacheRenderer,
      viewWidth,
      viewHeight,
      1024,
      pixelsPerTile
    );
    const mapCachePassViews = [];
    for (const pass of tileMaker.passes) {
      const mapScrollingViewMaterial2 = new BasicTextureMaterial({
        texture: mapCacheRenderer.mapCache.get(pass).texture,
        uvST: mapViewUvST,
        clipspaceMode
      });
      const mapCacheView = new Mesh25(
        getSharedRectangleGeometry(),
        mapScrollingViewMaterial2
      );
      mapCachePassViews.push(mapCacheView);
    }
    this._noiseMaker = new NoiseTextureMaker();
    const mapScrollingViewMaterial = new FauxelMaterial({
      textureColor: mapWithSpritesCacheRenderer.mapCache.get("customColor").texture,
      textureNormals: mapWithSpritesCacheRenderer.mapCache.get("normals").texture,
      textureEmissive: mapWithSpritesCacheRenderer.mapCache.get("customEmissive").texture,
      textureRoughnessMetalnessHeight: mapWithSpritesCacheRenderer.mapCache.get(
        "customRoughnessMetalnessHeight"
      ).texture,
      textureTopDownHeight: mapWithSpritesCacheRenderer.mapCache.get(
        "customTopDownHeight"
      ).texture,
      texturePointLights: pointLightRenderer.texture,
      uvSTWorldOffset: mapViewUvST,
      uvST: mapViewSubTilePixelOffsetUvST,
      clipspaceMode,
      relativeTileSize: 1 / viewWidth,
      relativePixelSize: 1 / viewWidth / pixelsPerTile,
      pixelsPerTile,
      textureFog: this._noiseMaker.texture,
      useOutlines: getUrlFlag("outlines")
    });
    const mapCacheFinalView = new Mesh25(
      getSharedRectangleGeometry(),
      mapScrollingViewMaterial
    );
    this.spriteMaker = spriteMaker;
    this.tileMaker = tileMaker;
    this.jitTileSampler = jitTileSampler;
    this.jitSpriteSampler = jitSpriteSampler;
    this.mapCacheRenderer = mapCacheRenderer;
    this.mapWithSpritesCacheRenderer = mapWithSpritesCacheRenderer;
    this.pointLightRenderer = pointLightRenderer;
    this.mapCachePassViews = mapCachePassViews;
    this.mapCacheFinalView = mapCacheFinalView;
    this._mapScrollingViewMaterial = mapScrollingViewMaterial;
  }
  get offsetX() {
    return this.jitTileSampler.offsetX;
  }
  set offsetX(value) {
    this.jitTileSampler.offsetX = value;
    this.jitSpriteSampler.offsetX = value;
    this.mapWithSpritesCacheRenderer.offsetX = value;
  }
  get offsetY() {
    return this.jitTileSampler.offsetY;
  }
  set offsetY(value) {
    this.jitTileSampler.offsetY = value;
    this.jitSpriteSampler.offsetY = value;
    this.mapWithSpritesCacheRenderer.offsetY = value;
  }
  render(renderer, dt) {
    this._mapScrollingViewMaterial.setSunAngle(
      0.1 + performance.now() * sunSpeed + sunOffset * Math.PI * 2
    );
    if (!this._noiseReady) {
      this._noiseMaker.render(renderer);
      this._noiseReady = true;
    }
    this.tileMaker.render(renderer);
    const tileTime = performance.now() * 2e-3 % 1;
    this.jitTileSampler.animFrame = ~~(tileTime * 4);
    if (this.jitTileSampler.updateMeta() || this._dirty || this.jitTileSampler.dirty) {
      this._dirty = false;
      this.jitTileSampler.updateVis(
        this.mapCacheRenderer.tileBottomPointsGeo,
        this.mapCacheRenderer.tileTopPointsGeo
      );
      this.mapCacheRenderer.render(renderer);
      this.mapCacheRenderer.tileBottomPointsGeo.drawRange.count = 0;
      this.mapCacheRenderer.tileTopPointsGeo.drawRange.count = 0;
    }
    this.jitSpriteSampler.updateVis(
      this.mapWithSpritesCacheRenderer.spriteBottomPointsGeo,
      this.mapWithSpritesCacheRenderer.spriteTopPointsGeo
    );
    this.spriteMaker.render(renderer);
    this.mapWithSpritesCacheRenderer.render(renderer);
    this.pointLightRenderer.render(renderer);
  }
};

// src/rendering/TextureCachingScroller.ts
import {
  NearestFilter as NearestFilter7,
  RepeatWrapping as RepeatWrapping5,
  Vector2 as Vector27,
  Vector4 as Vector413,
  WebGLRenderTarget as WebGLRenderTarget6
} from "three";
var TextureCachingScroller = class {
  constructor(_externalRender) {
    this._externalRender = _externalRender;
    this.lastScrollOffset = new Vector27();
    this.scrollOffset = new Vector27(0, 0);
    this.cacheResolution = new Vector27(256, 256);
    this.cacheDirty = true;
    const uvST = new Vector413(1, 1, 0, 0);
    this.uvST = uvST;
    const cacheRenderTarget = new WebGLRenderTarget6(
      this.cacheResolution.x,
      this.cacheResolution.y,
      {
        magFilter: NearestFilter7,
        minFilter: NearestFilter7,
        wrapS: RepeatWrapping5,
        wrapT: RepeatWrapping5
      }
    );
    this.cacheRenderTarget = cacheRenderTarget;
  }
  render(renderer, dt) {
    if (this.cacheDirty) {
      this._renderCache(renderer, false);
      renderer.setRenderTarget(null);
      this.cacheDirty = false;
    } else if (!this.scrollOffset.equals(this.lastScrollOffset)) {
      const rTarget = this.cacheRenderTarget;
      const scissor = rTarget.scissor;
      const viewport = rTarget.viewport;
      const res = this.cacheResolution;
      let xNew = Math.round(this.scrollOffset.x);
      let xOld = Math.round(this.lastScrollOffset.x);
      let yNew = Math.round(this.scrollOffset.y);
      let yOld = Math.round(this.lastScrollOffset.y);
      let xDelta = xNew - xOld;
      let yDelta = yNew - yOld;
      const xDir = xNew > xOld ? 1 : -1;
      if (xDelta !== 0) {
        this.uvST.z = xNew / res.x;
        if (xNew < xOld) {
          const xTemp = xNew;
          xNew = xOld;
          xOld = xTemp;
          xDelta *= -1;
        }
      }
      xNew = wrap(xNew, 0, res.x);
      xOld = wrap(xOld, 0, res.x);
      const yDir = yNew > yOld ? 1 : -1;
      if (yDelta !== 0) {
        this.uvST.w = yNew / res.y;
        if (yNew < yOld) {
          const yTemp = yNew;
          yNew = yOld;
          yOld = yTemp;
          yDelta *= -1;
        }
      }
      yNew = wrap(yNew, 0, res.y);
      yOld = wrap(yOld, 0, res.y);
      if (xDelta !== 0) {
        const y = yDir === 1 ? yNew : yOld;
        scissor.set(xOld, y, xDelta, res.y);
        viewport.set(xDir === 1 ? -res.x + xNew : xOld, y, res.x, res.y);
        if (xNew > xOld) {
          this._renderCache(renderer, void 0);
          viewport.y = y - res.y;
          scissor.y = y - res.y;
          this._renderCache(renderer, void 0);
        } else {
          const leapA = xDir === 1 ? res.x : 0;
          const leapB = xDir === 1 ? res.x : -res.x;
          scissor.x -= leapA;
          this._renderCache(renderer);
          viewport.y = y - res.y;
          scissor.y = y - res.y;
          this._renderCache(renderer);
          scissor.x += leapB;
          viewport.x += leapB;
          viewport.y = y;
          scissor.y = y;
          this._renderCache(renderer);
          viewport.y = y - res.y;
          scissor.y = y - res.y;
          this._renderCache(renderer);
        }
      }
      if (yDelta !== 0) {
        scissor.set(0, yOld, res.x, yDelta);
        const x = xDir === 1 ? xNew : xOld;
        viewport.set(x, yDir === 1 ? -res.y + yNew : yOld, res.x, res.y);
        if (yNew > yOld) {
          this._renderCache(renderer);
          viewport.x = x - res.x;
          scissor.x = x - res.x;
          this._renderCache(renderer);
        } else {
          const leapA = yDir === 1 ? res.y : 0;
          const leapB = yDir === 1 ? res.y : -res.y;
          scissor.y -= leapA;
          this._renderCache(renderer);
          viewport.x = x - res.x;
          scissor.x = x - res.x;
          this._renderCache(renderer);
          scissor.y += leapB;
          viewport.y += leapB;
          viewport.x = x;
          scissor.x = x;
          this._renderCache(renderer);
          viewport.x = x - res.x;
          scissor.x = x - res.x;
          this._renderCache(renderer);
        }
      }
      renderer.setRenderTarget(null);
      this.lastScrollOffset.copy(this.scrollOffset);
    }
  }
  _renderCache(renderer, scissorTest = true, clearOnly = false) {
    this.cacheRenderTarget.scissorTest = scissorTest;
    renderer.setRenderTarget(this.cacheRenderTarget);
    renderer.clear(true, true);
    if (!clearOnly) {
      this._externalRender(renderer);
    }
  }
};

// src/materials/BasicFullScreenMaterial/index.ts
import { RawShaderMaterial as RawShaderMaterial9, Uniform as Uniform10, Vector2 as Vector29, Vector3 as Vector317 } from "three";

// src/uniforms.ts
import { Uniform as Uniform9, Vector2 as Vector28 } from "three";
var timeUniform = new Uniform9(0);
var devicePixelRatioUniform = new Uniform9(device_default.pixelRatio);
var pixelSizeInClipSpaceUniform = new Uniform9(
  new Vector28(2 / device_default.width, 2 / device_default.height)
);
var pixelAspectRatioUniform = new Uniform9(device_default.width / device_default.height);
device_default.onChange(() => {
  pixelAspectRatioUniform.value = device_default.width / device_default.height;
});

// src/materials/BasicFullScreenMaterial/frag.glsl
var frag_default9 = `precision lowp float;

uniform sampler2D uTileTex;
uniform sampler2D uMapTex;
uniform vec2 uMapSize;

varying vec2 vUv;

void main() {
  #ifdef USE_TWO_LAYERS
  vec4 sampleMapTop = texture2D(uMapTex, vUv);
  vec2 uvTileTop = floor(sampleMapTop.zw * RESOLUTION) / RESOLUTION + fract(vUv * uMapSize) / RESOLUTION;
  vec4 sampleTileTop = texture2D(uTileTex, uvTileTop);
  gl_FragColor = sampleTileTop;
  if(sampleTileTop.a<0.5) {
  #endif
    vec4 sampleMapBottom = texture2D(uMapTex, vUv+vec2(0.0, 1.0/uMapSize.y));
    vec2 uvTileBottom = floor(sampleMapBottom.xy * RESOLUTION) / RESOLUTION + fract(vUv * uMapSize) / RESOLUTION;
    vec4 sampleTileBottom = texture2D(uTileTex, uvTileBottom);
    gl_FragColor = sampleTileBottom;
  #ifdef USE_TWO_LAYERS
  }
  #endif
}
`;

// src/materials/BasicFullScreenMaterial/vert.glsl
var vert_default9 = `precision lowp float;

attribute vec3 position;
uniform float uAspectRatio;
uniform vec3 uTransform;
varying vec2 vUv;

void main() {
    gl_Position = vec4(position, 1.0);
    vUv = (position.xy - uTransform.xy) * vec2(uAspectRatio, 1.0) * uTransform.z;
}`;

// src/materials/BasicFullScreenMaterial/index.ts
var __defaultParams9 = {
  mapTex: getTempTexture(),
  tileTex: getTempTexture(),
  transform: new Vector317(0, 0, 1 / 2048),
  tilesPerEdge: 8,
  useTwoLayers: false
};
var BasicFullScreenMaterial = class extends RawShaderMaterial9 {
  constructor(options) {
    const params = buildParameters(__defaultParams9, options);
    const defines = {
      RESOLUTION: params.tilesPerEdge.toFixed(1)
    };
    if (params.useTwoLayers) {
      defines.USE_TWO_LAYERS = true;
    }
    super({
      uniforms: {
        uMapTex: new Uniform10(params.mapTex),
        uMapSize: new Uniform10(
          new Vector29(params.mapTex.image.width, params.mapTex.image.height)
        ),
        uTileTex: new Uniform10(params.tileTex),
        uTransform: new Uniform10(params.transform),
        uAspectRatio: pixelAspectRatioUniform
      },
      defines,
      vertexShader: vert_default9,
      fragmentShader: frag_default9,
      // transparent: true,
      depthWrite: false,
      depthTest: false
      // side: DoubleSide
    });
  }
};

// src/helpers/meshes/PegboardMesh.ts
import { Mesh as Mesh26 } from "three";

// src/materials/PegBoardMeshMaterial/index.ts
import {
  DoubleSide as DoubleSide8,
  NearestFilter as NearestFilter8,
  RawShaderMaterial as RawShaderMaterial10,
  Uniform as Uniform11,
  Vector2 as Vector210,
  Vector4 as Vector414
} from "three";

// src/loaders/assetLoader.ts
import { FileLoader, LoadingManager, TextureLoader as TextureLoader2 } from "three";
var __loadingManager = new LoadingManager();
var __textureLoader;
function getTextureLoader() {
  if (!__textureLoader) {
    __textureLoader = new TextureLoader2(__loadingManager);
  }
  return __textureLoader;
}
var __currentlyLoadingTextureResolvers = /* @__PURE__ */ new Map();
async function loadTexture(url, flipY) {
  let promise;
  if (__currentlyLoadingTextureResolvers.has(url)) {
    promise = new Promise((resolve, reject) => {
      __currentlyLoadingTextureResolvers.get(url).push(resolve);
    });
  } else {
    promise = new Promise((resolve, reject) => {
      __currentlyLoadingTextureResolvers.set(url, [resolve]);
      const onLoad = (texture) => {
        texture.name = url;
        if (flipY !== void 0) {
          texture.flipY = flipY;
        }
        __currentlyLoadingTextureResolvers.get(url).forEach((resolve2) => resolve2(texture));
        __currentlyLoadingTextureResolvers.delete(url);
      };
      getTextureLoader().load(url, onLoad, void 0, reject);
    });
  }
  return promise;
}

// src/materials/PegBoardMeshMaterial/frag.glsl
var frag_default10 = `precision highp float;
uniform vec4 color;
uniform sampler2D texture;
varying vec3 vColor;
varying vec2 vUv;

void main() {
    vec4 texel = texture2D(texture, vUv);
    if(texel.a < 0.5) {
        discard;
    }
	gl_FragColor = color;
    // gl_FragColor.rgb = mix(gl_FragColor.rgb, texel.rgb, texel.a);
    gl_FragColor.rgb = texel.rgb;
    gl_FragColor.rgb *= vColor;
}`;

// src/materials/PegBoardMeshMaterial/vert.glsl
var vert_default10 = `precision highp float;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec2 smoothOffset;
attribute vec2 position;
attribute vec2 uv;
attribute vec2 tileIndex;

attribute float color;
varying vec3 vColor;
varying vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position + smoothOffset, 0.0, 1.0 );
    vUv = uv + tileIndex;
    vColor = vec3(color);
}`;

// src/materials/PegBoardMeshMaterial/index.ts
var __defaultParams10 = {
  smoothOffset: new Vector210(),
  data: new Vector414(0.5, 0.5, 0.5, 0.5)
};
var PegboardMeshMaterial = class extends RawShaderMaterial10 {
  constructor(options = {}, matOptions = {}) {
    const params = buildParameters(__defaultParams10, options);
    const uTexture = new Uniform11(getTempTexture());
    loadTexture("game/tilemaps/test-blocks.png").then((tex) => {
      uTexture.value = tex;
      tex.magFilter = tex.minFilter = NearestFilter8;
    });
    const uniforms = {
      texture: uTexture,
      color: new Uniform11(params.data),
      smoothOffset: new Uniform11(params.smoothOffset)
    };
    const defines = {};
    super({
      defines,
      uniforms,
      vertexShader: vert_default10,
      fragmentShader: frag_default10,
      // alphaTest: 0.5,
      // transparent: true,
      depthWrite: true,
      depthTest: true,
      side: DoubleSide8,
      ...matOptions
    });
  }
};

// src/geometries/PegboardGeometry.ts
import { BufferAttribute as BufferAttribute9, BufferGeometry as BufferGeometry13, Vector2 as Vector211, Vector3 as Vector319 } from "three";

// src/helpers/utils/tilesEnum.ts
var TILES = /* @__PURE__ */ ((TILES2) => {
  TILES2[TILES2["EMPTY"] = 0] = "EMPTY";
  TILES2[TILES2["STONE"] = 1] = "STONE";
  TILES2[TILES2["DIRT"] = 2] = "DIRT";
  TILES2[TILES2["GRASSYDIRT"] = 3] = "GRASSYDIRT";
  TILES2[TILES2["SAND"] = 4] = "SAND";
  TILES2[TILES2["SNOW"] = 5] = "SNOW";
  TILES2[TILES2["CLAY"] = 6] = "CLAY";
  TILES2[TILES2["PURPLE"] = 7] = "PURPLE";
  TILES2[TILES2["BRICKS"] = 8] = "BRICKS";
  TILES2[TILES2["PLAYERHEAD"] = 9] = "PLAYERHEAD";
  TILES2[TILES2["PLAYERBODY"] = 10] = "PLAYERBODY";
  TILES2[TILES2["ICYSTONE"] = 11] = "ICYSTONE";
  TILES2[TILES2["WATER"] = 12] = "WATER";
  TILES2[TILES2["STONECORNER"] = 13] = "STONECORNER";
  TILES2[TILES2["BALL"] = 14] = "BALL";
  TILES2[TILES2["DIRTINTERNAL"] = 15] = "DIRTINTERNAL";
  TILES2[TILES2["STONEUNDERDIRT"] = 16] = "STONEUNDERDIRT";
  TILES2[TILES2["DIRTUNDERSTONE"] = 17] = "DIRTUNDERSTONE";
  TILES2[TILES2["SHRUBDRIED"] = 18] = "SHRUBDRIED";
  TILES2[TILES2["GRAVEHEADSTONE"] = 19] = "GRAVEHEADSTONE";
  TILES2[TILES2["STONEINTERNAL"] = 20] = "STONEINTERNAL";
  TILES2[TILES2["WATERINTERNAL"] = 21] = "WATERINTERNAL";
  TILES2[TILES2["STONEBIG_WSU"] = 22] = "STONEBIG_WSU";
  TILES2[TILES2["STONEBIG_CSU"] = 23] = "STONEBIG_CSU";
  TILES2[TILES2["STONEBIG_ESU"] = 24] = "STONEBIG_ESU";
  TILES2[TILES2["STONEBIG_WSC"] = 25] = "STONEBIG_WSC";
  TILES2[TILES2["STONEBIG_CSC"] = 26] = "STONEBIG_CSC";
  TILES2[TILES2["STONEBIG_ESC"] = 27] = "STONEBIG_ESC";
  TILES2[TILES2["STONEBIG_WSD"] = 28] = "STONEBIG_WSD";
  TILES2[TILES2["STONEBIG_CSD"] = 29] = "STONEBIG_CSD";
  TILES2[TILES2["STONEBIG_ESD"] = 30] = "STONEBIG_ESD";
  TILES2[TILES2["STONEBIG_ECU"] = 31] = "STONEBIG_ECU";
  TILES2[TILES2["STONEBIG_ENU"] = 32] = "STONEBIG_ENU";
  TILES2[TILES2["STONEBIG_ECC"] = 33] = "STONEBIG_ECC";
  TILES2[TILES2["STONEBIG_ENC"] = 34] = "STONEBIG_ENC";
  TILES2[TILES2["STONEBIG_ECD"] = 35] = "STONEBIG_ECD";
  TILES2[TILES2["STONEBIG_END"] = 36] = "STONEBIG_END";
  TILES2[TILES2["STONEBIG_WCU"] = 37] = "STONEBIG_WCU";
  TILES2[TILES2["STONEBIG_WNU"] = 38] = "STONEBIG_WNU";
  TILES2[TILES2["STONEBIG_CCU"] = 39] = "STONEBIG_CCU";
  TILES2[TILES2["STONEBIG_CNU"] = 40] = "STONEBIG_CNU";
  TILES2[TILES2["DIRTBIG_WSU"] = 41] = "DIRTBIG_WSU";
  TILES2[TILES2["DIRTBIG_CSU"] = 42] = "DIRTBIG_CSU";
  TILES2[TILES2["DIRTBIG_ESU"] = 43] = "DIRTBIG_ESU";
  TILES2[TILES2["DIRTBIG_WSC"] = 44] = "DIRTBIG_WSC";
  TILES2[TILES2["DIRTBIG_CSC"] = 45] = "DIRTBIG_CSC";
  TILES2[TILES2["DIRTBIG_ESC"] = 46] = "DIRTBIG_ESC";
  TILES2[TILES2["DIRTBIG_WSD"] = 47] = "DIRTBIG_WSD";
  TILES2[TILES2["DIRTBIG_CSD"] = 48] = "DIRTBIG_CSD";
  TILES2[TILES2["DIRTBIG_ESD"] = 49] = "DIRTBIG_ESD";
  TILES2[TILES2["DIRTBIG_ECU"] = 50] = "DIRTBIG_ECU";
  TILES2[TILES2["DIRTBIG_ENU"] = 51] = "DIRTBIG_ENU";
  TILES2[TILES2["DIRTBIG_ECC"] = 52] = "DIRTBIG_ECC";
  TILES2[TILES2["DIRTBIG_ENC"] = 53] = "DIRTBIG_ENC";
  TILES2[TILES2["DIRTBIG_ECD"] = 54] = "DIRTBIG_ECD";
  TILES2[TILES2["DIRTBIG_END"] = 55] = "DIRTBIG_END";
  TILES2[TILES2["DIRTBIG_WCU"] = 56] = "DIRTBIG_WCU";
  TILES2[TILES2["DIRTBIG_WNU"] = 57] = "DIRTBIG_WNU";
  TILES2[TILES2["DIRTBIG_CCU"] = 58] = "DIRTBIG_CCU";
  TILES2[TILES2["DIRTBIG_CNU"] = 59] = "DIRTBIG_CNU";
  TILES2[TILES2["GRASSYDIRTBIG_WSU"] = 60] = "GRASSYDIRTBIG_WSU";
  TILES2[TILES2["GRASSYDIRTBIG_CSU"] = 61] = "GRASSYDIRTBIG_CSU";
  TILES2[TILES2["GRASSYDIRTBIG_ESU"] = 62] = "GRASSYDIRTBIG_ESU";
  TILES2[TILES2["GRASSYDIRTBIG_WSC"] = 63] = "GRASSYDIRTBIG_WSC";
  TILES2[TILES2["GRASSYDIRTBIG_CSC"] = 64] = "GRASSYDIRTBIG_CSC";
  TILES2[TILES2["GRASSYDIRTBIG_ESC"] = 65] = "GRASSYDIRTBIG_ESC";
  TILES2[TILES2["GRASSYDIRTBIG_WSD"] = 66] = "GRASSYDIRTBIG_WSD";
  TILES2[TILES2["GRASSYDIRTBIG_CSD"] = 67] = "GRASSYDIRTBIG_CSD";
  TILES2[TILES2["GRASSYDIRTBIG_ESD"] = 68] = "GRASSYDIRTBIG_ESD";
  TILES2[TILES2["GRASSYDIRTBIG_ECU"] = 69] = "GRASSYDIRTBIG_ECU";
  TILES2[TILES2["GRASSYDIRTBIG_ENU"] = 70] = "GRASSYDIRTBIG_ENU";
  TILES2[TILES2["GRASSYDIRTBIG_ECC"] = 71] = "GRASSYDIRTBIG_ECC";
  TILES2[TILES2["GRASSYDIRTBIG_ENC"] = 72] = "GRASSYDIRTBIG_ENC";
  TILES2[TILES2["GRASSYDIRTBIG_ECD"] = 73] = "GRASSYDIRTBIG_ECD";
  TILES2[TILES2["GRASSYDIRTBIG_END"] = 74] = "GRASSYDIRTBIG_END";
  TILES2[TILES2["GRASSYDIRTBIG_WCU"] = 75] = "GRASSYDIRTBIG_WCU";
  TILES2[TILES2["GRASSYDIRTBIG_WNU"] = 76] = "GRASSYDIRTBIG_WNU";
  TILES2[TILES2["GRASSYDIRTBIG_CCU"] = 77] = "GRASSYDIRTBIG_CCU";
  TILES2[TILES2["GRASSYDIRTBIG_CNU"] = 78] = "GRASSYDIRTBIG_CNU";
  TILES2[TILES2["STONEROD_NS_N"] = 79] = "STONEROD_NS_N";
  TILES2[TILES2["STONEROD_NS_C"] = 80] = "STONEROD_NS_C";
  TILES2[TILES2["STONEROD_NS_S"] = 81] = "STONEROD_NS_S";
  TILES2[TILES2["STONEROD_NS_NUB"] = 82] = "STONEROD_NS_NUB";
  TILES2[TILES2["STONEROD_EW_W"] = 83] = "STONEROD_EW_W";
  TILES2[TILES2["STONEROD_EW_C"] = 84] = "STONEROD_EW_C";
  TILES2[TILES2["STONEROD_EW_E"] = 85] = "STONEROD_EW_E";
  TILES2[TILES2["STONEROD_EW_NUB"] = 86] = "STONEROD_EW_NUB";
  TILES2[TILES2["STONEROD_UD_U"] = 87] = "STONEROD_UD_U";
  TILES2[TILES2["STONEROD_UD_C"] = 88] = "STONEROD_UD_C";
  TILES2[TILES2["STONEROD_UD_D"] = 89] = "STONEROD_UD_D";
  TILES2[TILES2["STONEROD_UD_NUB"] = 90] = "STONEROD_UD_NUB";
  return TILES2;
})(TILES || {});

// src/geometries/PegboardGeometry.ts
var __tileIndexOffsetLookup = {
  x: [
    [0.25, 0],
    [0.25, -0.25]
  ],
  y: [
    [-0.25, -0.25],
    [-0.25, 0]
  ],
  z: [
    [-0.25, 0.25],
    [0.25, 0.25]
  ]
};
var __tileIdAtlasOffsets = [
  [0, 0],
  // EMPTY
  [0, 0],
  // STONE
  [2 / 32, 0],
  // DIRT
  [4 / 32, 0],
  // GRASSYDIRT
  [6 / 32, 0],
  // SAND
  [1 / 32, 24 / 288],
  // SNOW
  [3 / 32, 24 / 288],
  // CLAY
  [5 / 32, 24 / 288],
  // PURPLE
  [0, 48 / 288],
  // BRICKS
  [2 / 32, 48 / 288],
  // PLAYERHEAD
  [4 / 32, 48 / 288],
  // PLAYERBODY
  [6 / 32, 48 / 288],
  // ICYSTONE
  [1 / 32, 72 / 288],
  // WATER
  [3 / 32, 72 / 288],
  // STONECORNER
  [5 / 32, 72 / 288],
  // BALL
  [7 / 32, 72 / 288],
  // DIRTINTERNAL
  [0, 96 / 288],
  // STONEUNDERDIRT
  [2 / 32, 96 / 288],
  // DIRTUNDERSTONE
  [4 / 32, 96 / 288],
  // SHRUBDRIED
  [6 / 32, 96 / 288],
  // GRAVEHEADSTONE
  [8 / 32, 96 / 288],
  // STONEINTERNAL
  [10 / 32, 96 / 288],
  // WATERINTERNAL
  // [1 / 32, 120 / 288], //
  // [3 / 32, 120 / 288], //
  // [5 / 32, 120 / 288], //
  //
  [8 / 32, 48 / 288],
  // STONEBIG_WSU,
  [9 / 32, 40 / 288],
  // STONEBIG_CSU,
  [10 / 32, 32 / 288],
  // STONEBIG_ESU,
  [8 / 32, 32 / 288],
  // STONEBIG_WSC,
  [9 / 32, 24 / 288],
  // STONEBIG_CSC,
  [10 / 32, 16 / 288],
  // STONEBIG_ESC,
  [8 / 32, 16 / 288],
  // STONEBIG_WSD,
  [9 / 32, 8 / 288],
  // STONEBIG_CSD,
  [10 / 32, 0 / 288],
  // STONEBIG_ESD,
  //
  [11 / 32, 40 / 288],
  // STONEBIG_ECU,
  [12 / 32, 48 / 288],
  // STONEBIG_ENU,
  [11 / 32, 24 / 288],
  // STONEBIG_ECC,
  [12 / 32, 32 / 288],
  // STONEBIG_ENC,
  [11 / 32, 8 / 288],
  // STONEBIG_ECD,
  [12 / 32, 16 / 288],
  // STONEBIG_END,
  //
  [9 / 32, 56 / 288],
  // STONEBIG_WCU,
  [10 / 32, 64 / 288],
  // STONEBIG_WNU,
  [10 / 32, 48 / 288],
  // STONEBIG_CCU,
  [11 / 32, 56 / 288],
  // STONEBIG_CNU,
  //
  [14 / 32, 48 / 288],
  // DIRTBIG_WSU,
  [15 / 32, 40 / 288],
  // DIRTBIG_CSU,
  [16 / 32, 32 / 288],
  // DIRTBIG_ESU,
  [14 / 32, 32 / 288],
  // DIRTBIG_WSC,
  [15 / 32, 24 / 288],
  // DIRTBIG_CSC,
  [16 / 32, 16 / 288],
  // DIRTBIG_ESC,
  [14 / 32, 16 / 288],
  // DIRTBIG_WSD,
  [15 / 32, 8 / 288],
  // DIRTBIG_CSD,
  [16 / 32, 0 / 288],
  // DIRTBIG_ESD,
  //
  [17 / 32, 40 / 288],
  // DIRTBIG_ECU,
  [18 / 32, 48 / 288],
  // DIRTBIG_ENU,
  [17 / 32, 24 / 288],
  // DIRTBIG_ECC,
  [18 / 32, 32 / 288],
  // DIRTBIG_ENC,
  [17 / 32, 8 / 288],
  // DIRTBIG_ECD,
  [18 / 32, 16 / 288],
  // DIRTBIG_END,
  //
  [15 / 32, 56 / 288],
  // DIRTBIG_WCU,
  [16 / 32, 64 / 288],
  // DIRTBIG_WNU,
  [16 / 32, 48 / 288],
  // DIRTBIG_CCU,
  [17 / 32, 56 / 288],
  // DIRTBIG_CNU,
  //
  [20 / 32, 48 / 288],
  // GRASSYDIRTBIG_WSU,
  [21 / 32, 40 / 288],
  // GRASSYDIRTBIG_CSU,
  [22 / 32, 32 / 288],
  // GRASSYDIRTBIG_ESU,
  [20 / 32, 32 / 288],
  // GRASSYDIRTBIG_WSC,
  [21 / 32, 24 / 288],
  // GRASSYDIRTBIG_CSC,
  [22 / 32, 16 / 288],
  // GRASSYDIRTBIG_ESC,
  [20 / 32, 16 / 288],
  // GRASSYDIRTBIG_WSD,
  [21 / 32, 8 / 288],
  // GRASSYDIRTBIG_CSD,
  [22 / 32, 0 / 288],
  // GRASSYDIRTBIG_ESD,
  //
  [23 / 32, 40 / 288],
  // GRASSYDIRTBIG_ECU,
  [24 / 32, 48 / 288],
  // GRASSYDIRTBIG_ENU,
  [23 / 32, 24 / 288],
  // GRASSYDIRTBIG_ECC,
  [24 / 32, 32 / 288],
  // GRASSYDIRTBIG_ENC,
  [23 / 32, 8 / 288],
  // GRASSYDIRTBIG_ECD,
  [24 / 32, 16 / 288],
  // GRASSYDIRTBIG_END,
  //
  [21 / 32, 56 / 288],
  // GRASSYDIRTBIG_WCU,
  [22 / 32, 64 / 288],
  // GRASSYDIRTBIG_WNU,
  [22 / 32, 48 / 288],
  // GRASSYDIRTBIG_CCU,
  [23 / 32, 56 / 288],
  // GRASSYDIRTBIG_CNU,
  //
  [14 / 32, 96 / 288],
  // STONEROD_NS_N,
  [13 / 32, 88 / 288],
  // STONEROD_NS_C,
  [12 / 32, 80 / 288],
  // STONEROD_NS_S,
  [12 / 32, 112 / 288],
  // STONEROD_NS_NUB,
  //
  [16 / 32, 96 / 288],
  // STONEROD_EW_W,
  [17 / 32, 88 / 288],
  // STONEROD_EW_C,
  [18 / 32, 80 / 288],
  // STONEROD_EW_E,
  [18 / 32, 112 / 288],
  // STONEROD_EW_NUB,
  //
  [26 / 32, 32 / 288],
  // STONEROD_UD_U,
  [26 / 32, 16 / 288],
  // STONEROD_UD_C,
  [26 / 32, 0 / 288],
  // STONEROD_UD_D,
  [26 / 32, 64 / 288]
  // STONEROD_UD_NUB
];
var __scale = [32 / 512, 32 / 288];
function prescale(allNums) {
  for (const nums of allNums) {
    nums[0] *= __scale[0];
    nums[1] *= __scale[1];
  }
}
prescale(__tileIndexOffsetLookup.x);
prescale(__tileIndexOffsetLookup.y);
prescale(__tileIndexOffsetLookup.z);
var __drillDir = {
  x: -1,
  y: 1,
  z: -1
};
function v(x, y, z) {
  return new Vector319(x, y, z);
}
var __offsets3 = [
  v(0, 0, 0),
  v(-0.5, -0.5, 0),
  v(0.3333333333333333, -0.3333333333333333, -0.3333333333333333),
  v(-0.16666666666666669, -0.8333333333333333, -0.3333333333333333),
  v(0.6666666666666666, -0.6666666666666666, -0.6666666666666666),
  v(0.16666666666666663, -1.1666666666666665, -0.6666666666666666),
  v(0, -1, 0),
  v(0.5, -0.5, 0),
  v(0.33333333333333326, -1.3333333333333333, -0.33333333333333326),
  v(0.8333333333333333, -0.8333333333333333, -0.33333333333333326),
  v(0.6666666666666667, -1.6666666666666667, -0.6666666666666667),
  v(1.1666666666666667, -1.166666666666667, -0.6666666666666667)
];
var __windings = [
  "+y+z+x",
  "+x+z+y",
  "+y+x+z",
  "+x+y+z",
  "+z+x+y",
  "+z+y+x",
  "+x+z+y",
  "+y+z+x",
  "+x+y+z",
  "+y+x+z",
  "+z+y+x",
  "+z+x+y"
];
var __leftOrRightTriangle = [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0];
var tVec = new Vector319();
var sphereCenter = new Vector319(0, 0, -5);
var radiusSq = 2;
function updateDefaultResolverAnim() {
  const now = performance.now();
  const radius = lerp(1, 6, unlerp(-1, 1, Math.sin(now * 1e-3)));
  radiusSq = radius * radius;
}
var defaultResolverAnimPlaying = false;
function defaultIndexResolver(x, y, z) {
  if (!defaultResolverAnimPlaying) {
    defaultResolverAnimPlaying = true;
    setInterval(updateDefaultResolverAnim, 16);
  }
  tVec.set(x, y, z);
  const onGrid = tVec.y % 8 === 0 || tVec.x % 8 === 0;
  if (onGrid && (tVec.z + 5) % 16 === 0) {
    return 1;
  } else if (tVec.distanceToSquared(sphereCenter) < radiusSq && !(onGrid && (tVec.z === -4 || tVec.z === -3))) {
    return 2;
  }
  return 0;
}
var PegboardGeometry = class extends BufferGeometry13 {
  constructor(indexResolver = defaultIndexResolver) {
    super();
    this.playerCoord = new Vector319(-5, 7, -30);
    this.smoothOffset = new Vector211();
    const size = 32;
    const cells = size * size;
    const positionTemplate1 = new Float32Array([16, 0, 0, 8, 16, 16]);
    const positionTemplate2 = new Float32Array([0, 0, 16, 8, 0, 16]);
    const positionTemplates = [positionTemplate1, positionTemplate2];
    const uvTemplate1 = new Float32Array([0.75, 0.25, 0.25, 0.5, 0.75, 0.75]);
    const uvTemplate2 = new Float32Array([0.25, 0.25, 0.75, 0.5, 0.25, 0.75]);
    for (let i2 = 0; i2 < uvTemplate1.length; i2 += 2) {
      uvTemplate1[i2] *= __scale[0];
      uvTemplate1[i2 + 1] *= __scale[1];
      uvTemplate2[i2] *= __scale[0];
      uvTemplate2[i2 + 1] *= __scale[1];
    }
    const cellsMax = cells * 4;
    const maxDrawSize = cellsMax * 3;
    const uvTemplates = [uvTemplate1, uvTemplate2];
    const positionArr = new Float32Array(positionTemplate1.length * cellsMax);
    const uvArr = new Float32Array(3 * 2 * cellsMax);
    for (let iy = 0; iy < size; iy++) {
      for (let ix = 0; ix < size; ix++) {
        const io = iy * size + ix;
        const positionTemplate = positionTemplates[(iy + ix) % 2];
        const uvTemplate = uvTemplates[(iy + ix) % 2];
        const offset = io * positionTemplate.length;
        for (let i = 0; i < positionTemplate.length; i += 2) {
          positionArr[offset + i] = positionTemplate[i] + ix * 16;
          positionArr[offset + i + 1] = positionTemplate[i + 1] + iy * 8;
          uvArr[offset + i] = uvTemplate[i];
          uvArr[offset + i + 1] = uvTemplate[i + 1];
        }
      }
    }
    const tileIndexArr = new Float32Array(3 * cellsMax * 2);
    const colorArr = new Float32Array(3 * cellsMax);
    const originalPositionArr = positionArr.slice();
    const originalUvArr = uvArr.slice();
    const posAttr = new BufferAttribute9(positionArr, 2);
    this.setAttribute("position", posAttr);
    const uvAttr = new BufferAttribute9(uvArr, 2);
    this.setAttribute("uv", uvAttr);
    const tileIndexAttr = new BufferAttribute9(tileIndexArr, 2);
    this.setAttribute("tileIndex", tileIndexAttr);
    const colorAttr = new BufferAttribute9(colorArr, 1);
    this.setAttribute("color", colorAttr);
    const playerCoord = this.playerCoord;
    const vx = new Vector319();
    const vy = new Vector319();
    const vxy = new Vector319();
    const snappedPlayerCoord = new Vector319();
    const playerCoordRemainder = new Vector319();
    const smoothOffset = this.smoothOffset;
    const screenOffsetX = new Vector211(16, -8);
    const screenOffsetY = new Vector211(16, 8);
    const screenOffsetZ = new Vector211(0, 16);
    const setDrawRange = this.setDrawRange.bind(this);
    const axes = [];
    const occupiers = [];
    const centerView = new Vector319();
    const predepth = 64;
    const predepthVector = new Vector319(-predepth, predepth, -predepth);
    function updateGeometry() {
      axes.length = 0;
      occupiers.length = 0;
      snappedPlayerCoord.copy(playerCoord).round();
      playerCoordRemainder.copy(snappedPlayerCoord).sub(playerCoord);
      smoothOffset.set(0, 0);
      smoothOffset.addScaledVector(screenOffsetX, playerCoordRemainder.x);
      smoothOffset.addScaledVector(screenOffsetY, playerCoordRemainder.y);
      smoothOffset.addScaledVector(screenOffsetZ, playerCoordRemainder.z);
      smoothOffset.round();
      for (let ic = 0; ic < colorArr.length; ic++) {
        colorArr[ic] = rand();
      }
      const halfSize = size * 0.5;
      const hx = halfSize / 2;
      const hy = halfSize / 3;
      vx.set(hx, hx, 0);
      vy.set(-hy, hy, hy);
      centerView.copy(vx).add(vy).round();
      centerView.add(predepthVector);
      let tileIndex = __tileIndexOffsetLookup["x"][0];
      let i3out = 0;
      for (let iy = 0; iy < size; iy++) {
        for (let ix = 0; ix < size; ix++) {
          const wix = ix % 2;
          const wiy = iy % 6;
          const index = iy * size + ix;
          const windex = wiy * 2 + wix;
          const i3 = index * 3;
          const i6 = index * 6;
          const hx2 = ix / 2;
          const hy2 = iy / 3;
          vx.set(hx2, hx2, 0);
          vy.set(-hy2, hy2, hy2);
          vxy.copy(vx).add(vy).add(__offsets3[windex]).sub(centerView).add(snappedPlayerCoord).round();
          vxy.z -= Math.floor(iy / 6);
          let c = 0;
          const winding = __windings[windex];
          let iSub = 0;
          let axis3 = winding[1];
          const depthToGo = size + predepth;
          occupiers.length = 0;
          axes.length = 0;
          tileCollector: for (let d = 1; d <= depthToGo; d++) {
            const tileAtlasId = indexResolver(vxy.x, vxy.y, vxy.z);
            if (tileAtlasId > 0) {
              occupiers.push(tileAtlasId);
              axes.push(axis3);
              switch (tileAtlasId) {
                case 0 /* EMPTY */:
                case 14 /* BALL */:
                case 18 /* SHRUBDRIED */:
                case 19 /* GRAVEHEADSTONE */:
                case 22 /* STONEBIG_WSU */:
                case 32 /* STONEBIG_ENU */:
                case 24 /* STONEBIG_ESU */:
                case 38 /* STONEBIG_WNU */:
                case 28 /* STONEBIG_WSD */:
                case 30 /* STONEBIG_ESD */:
                case 36 /* STONEBIG_END */:
                case 41 /* DIRTBIG_WSU */:
                case 51 /* DIRTBIG_ENU */:
                case 43 /* DIRTBIG_ESU */:
                case 57 /* DIRTBIG_WNU */:
                case 47 /* DIRTBIG_WSD */:
                case 48 /* DIRTBIG_CSD */:
                case 49 /* DIRTBIG_ESD */:
                case 54 /* DIRTBIG_ECD */:
                case 55 /* DIRTBIG_END */:
                case 60 /* GRASSYDIRTBIG_WSU */:
                case 70 /* GRASSYDIRTBIG_ENU */:
                case 62 /* GRASSYDIRTBIG_ESU */:
                case 76 /* GRASSYDIRTBIG_WNU */:
                case 66 /* GRASSYDIRTBIG_WSD */:
                case 67 /* GRASSYDIRTBIG_CSD */:
                case 68 /* GRASSYDIRTBIG_ESD */:
                case 73 /* GRASSYDIRTBIG_ECD */:
                case 74 /* GRASSYDIRTBIG_END */:
                case 79 /* STONEROD_NS_N */:
                case 80 /* STONEROD_NS_C */:
                case 81 /* STONEROD_NS_S */:
                case 82 /* STONEROD_NS_NUB */:
                case 85 /* STONEROD_EW_E */:
                case 84 /* STONEROD_EW_C */:
                case 83 /* STONEROD_EW_W */:
                case 86 /* STONEROD_EW_NUB */:
                case 87 /* STONEROD_UD_U */:
                case 88 /* STONEROD_UD_C */:
                case 89 /* STONEROD_UD_D */:
                case 90 /* STONEROD_UD_NUB */:
                  if (occupiers.length === 8) {
                    break tileCollector;
                  }
                  break;
                default:
                  break tileCollector;
              }
            }
            iSub = d % 3 * 2;
            axis3 = winding[iSub + 1];
            switch (winding[iSub]) {
              case "+":
                vxy[axis3] += __drillDir[axis3];
                break;
              case "-":
                vxy[axis3] -= __drillDir[axis3];
                break;
              default:
                throw new Error("not a + or -");
            }
          }
          for (let i = occupiers.length - 1; i >= 0; i--) {
            const occupier = occupiers[i];
            const axis4 = axes[i];
            c = 1;
            tileIndex = __tileIndexOffsetLookup[axis4][__leftOrRightTriangle[windex]];
            const tileIndexOffset = __tileIdAtlasOffsets[occupier];
            const indexX = tileIndex[0] + tileIndexOffset[0];
            const indexY = tileIndex[1] + tileIndexOffset[1];
            const i6out = i3out * 2;
            positionArr[i6out] = originalPositionArr[i6];
            positionArr[i6out + 1] = originalPositionArr[i6 + 1];
            positionArr[i6out + 2] = originalPositionArr[i6 + 2];
            positionArr[i6out + 3] = originalPositionArr[i6 + 3];
            positionArr[i6out + 4] = originalPositionArr[i6 + 4];
            positionArr[i6out + 5] = originalPositionArr[i6 + 5];
            uvArr[i6out] = originalUvArr[i6];
            uvArr[i6out + 1] = originalUvArr[i6 + 1];
            uvArr[i6out + 2] = originalUvArr[i6 + 2];
            uvArr[i6out + 3] = originalUvArr[i6 + 3];
            uvArr[i6out + 4] = originalUvArr[i6 + 4];
            uvArr[i6out + 5] = originalUvArr[i6 + 5];
            tileIndexArr[i6out] = indexX;
            tileIndexArr[i6out + 1] = indexY;
            tileIndexArr[i6out + 2] = indexX;
            tileIndexArr[i6out + 3] = indexY;
            tileIndexArr[i6out + 4] = indexX;
            tileIndexArr[i6out + 5] = indexY;
            colorArr[i3out] = rand2(0, c);
            colorArr[i3out + 1] = rand2(0, c);
            colorArr[i3out + 2] = rand2(0, c);
            i3out += 3;
          }
        }
      }
      posAttr.needsUpdate = true;
      uvAttr.needsUpdate = true;
      colorAttr.needsUpdate = true;
      tileIndexAttr.needsUpdate = true;
      setDrawRange(0, Math.min(maxDrawSize, i3out));
    }
    updateGeometry();
    this.update = () => {
      updateGeometry();
    };
  }
};

// src/helpers/meshes/PegboardMesh.ts
var PegboardMesh = class extends Mesh26 {
  constructor(densityResolver) {
    const geo = new PegboardGeometry(densityResolver);
    const mat = new PegboardMeshMaterial({ smoothOffset: geo.smoothOffset });
    super(geo, mat);
    this.frustumCulled = false;
    this.playerCoord = geo.playerCoord;
    this._geo = geo;
  }
  update() {
    this._geo.update();
  }
};

// src/helpers/utils/Memoize3D.ts
var Memoize3D = class {
  constructor(_helper) {
    this._helper = _helper;
    this._memory = /* @__PURE__ */ new Map();
  }
  getValue(x, y, z) {
    const key = `${x}:${y}:${z}`;
    if (!this._memory.has(key)) {
      const sample = this._helper.getValue(x, y, z);
      this._memory.set(key, sample);
    }
    return this._memory.get(key);
  }
  invalidate(x, y, z) {
    const key = `${x}:${y}:${z}`;
    if (this._memory.has(key)) {
      this._memory.delete(key);
      this._helper.invalidate(x, y, z);
    }
  }
  setValue(x, y, z, value) {
    this.invalidate(x, y, z);
    this._helper.setValue(x, y, z, value);
  }
};

// src/helpers/utils/RockDensity3D.ts
var RockDensity3D = class {
  constructor() {
    this._noiseHelper = new Memoize3D(new NoiseHelper3D(0.075));
  }
  getValue(x, y, z) {
    const sample = Math.abs(
      this._noiseHelper.getValue(x - z * 0.5, y, z) * 2 - 1
    );
    const sample2 = Math.abs(
      this._noiseHelper.getValue(x + z * 0.5, y + 9e3, z + 1920) * 2 - 1
    );
    const minSample = Math.min(sample, sample2);
    const gradient = clamp(unlerp(0, 12, z), -0.1, 4);
    const density = minSample - gradient;
    return density;
  }
  invalidate(x, y, z) {
  }
  setValue(x, y, z, value) {
  }
};

// src/helpers/utils/UserWrite3D.ts
var UserWrite3D = class {
  constructor() {
    this._memory = /* @__PURE__ */ new Map();
  }
  getValue(x, y, z) {
    const key = `${x}:${y}:${z}`;
    if (!this._memory.has(key)) {
      return -1;
    }
    return this._memory.get(key);
  }
  setValue(x, y, z, value) {
    const key = `${x}:${y}:${z}`;
    this._memory.set(key, value);
  }
  invalidate(x, y, z) {
    const key = `${x}:${y}:${z}`;
    if (this._memory.has(key)) {
      this._memory.delete(key);
    }
  }
};

// src/helpers/utils/AverageBoxKernel3D.ts
var AverageBoxKernal3D = class {
  constructor(_helper, _distance = 1) {
    this._helper = _helper;
    this._distance = _distance;
  }
  getValue(x, y, z) {
    const d = this._distance;
    const h = this._helper;
    let value = 0;
    value += h.getValue(x - d, y - d, z - d);
    value += h.getValue(x - d, y - d, z);
    value += h.getValue(x - d, y - d, z + d);
    value += h.getValue(x - d, y, z - d);
    value += h.getValue(x - d, y, z);
    value += h.getValue(x - d, y, z + d);
    value += h.getValue(x - d, y + d, z - d);
    value += h.getValue(x - d, y + d, z);
    value += h.getValue(x - d, y + d, z + d);
    value += h.getValue(x, y - d, z - d);
    value += h.getValue(x, y - d, z);
    value += h.getValue(x, y - d, z + d);
    value += h.getValue(x, y, z - d);
    value += h.getValue(x, y, z);
    value += h.getValue(x, y, z + d);
    value += h.getValue(x, y + d, z - d);
    value += h.getValue(x, y + d, z);
    value += h.getValue(x, y + d, z + d);
    value += h.getValue(x + d, y - d, z - d);
    value += h.getValue(x + d, y - d, z);
    value += h.getValue(x + d, y - d, z + d);
    value += h.getValue(x + d, y, z - d);
    value += h.getValue(x + d, y, z);
    value += h.getValue(x + d, y, z + d);
    value += h.getValue(x + d, y + d, z - d);
    value += h.getValue(x + d, y + d, z);
    value += h.getValue(x + d, y + d, z + d);
    return value / 27;
  }
  invalidate(x, y, z) {
    const d = this._distance;
    const h = this._helper;
    h.invalidate(x - d, y - d, z - d);
    h.invalidate(x - d, y - d, z);
    h.invalidate(x - d, y - d, z + d);
    h.invalidate(x - d, y, z - d);
    h.invalidate(x - d, y, z);
    h.invalidate(x - d, y, z + d);
    h.invalidate(x - d, y + d, z - d);
    h.invalidate(x - d, y + d, z);
    h.invalidate(x - d, y + d, z + d);
    h.invalidate(x, y - d, z - d);
    h.invalidate(x, y - d, z);
    h.invalidate(x, y - d, z + d);
    h.invalidate(x, y, z - d);
    h.invalidate(x, y, z);
    h.invalidate(x, y, z + d);
    h.invalidate(x, y + d, z - d);
    h.invalidate(x, y + d, z);
    h.invalidate(x, y + d, z + d);
    h.invalidate(x + d, y - d, z - d);
    h.invalidate(x + d, y - d, z);
    h.invalidate(x + d, y - d, z + d);
    h.invalidate(x + d, y, z - d);
    h.invalidate(x + d, y, z);
    h.invalidate(x + d, y, z + d);
    h.invalidate(x + d, y + d, z - d);
    h.invalidate(x + d, y + d, z);
    h.invalidate(x + d, y + d, z + d);
  }
  setValue(x, y, z, value) {
  }
};

// src/helpers/utils/helper3DFactory.ts
function wrapInMemoizedAverageBoxKernels(core, distances) {
  let cursor = core;
  for (let i = 0; i < distances.length; i++) {
    cursor = new Memoize3D(new AverageBoxKernal3D(cursor, distances[i]));
  }
  return cursor;
}

// src/helpers/utils/LandscapeTileIndexRaw3D.ts
var LandscapeTileIndexRaw3D = class {
  constructor() {
    this._rockDensityHelper = new RockDensity3D();
    this._dirtHelper = wrapInMemoizedAverageBoxKernels(
      this._rockDensityHelper,
      [1, 3]
    );
    this._userTiles = new UserWrite3D();
  }
  getValue(x, y, z) {
    const userVal = this._userTiles.getValue(x, y, z);
    if (userVal !== -1) {
      return userVal;
    }
    const rockDensity = this._rockDensityHelper.getValue(x, y, z);
    const rockDensityAbove = this._rockDensityHelper.getValue(x, y, z + 1);
    const dirtDensity = this._dirtHelper.getValue(x, y, z);
    if (rockDensity === 0) return 0 /* EMPTY */;
    if (rockDensity > 0.5) {
      if (rockDensityAbove > 0.5 || z < 20) {
        return 1 /* STONE */;
      } else {
        return 5 /* SNOW */;
      }
    } else if (dirtDensity > 0.05) {
      return 2 /* DIRT */;
    }
    if (z < 7) {
      return 12 /* WATER */;
    }
    return 0 /* EMPTY */;
  }
  invalidate(x, y, z) {
  }
  setValue(x, y, z, value) {
    this._userTiles.setValue(x, y, z, value);
  }
};

// src/helpers/utils/LandscapeTileIndexIntermediate3D.ts
var LandscapeTileIndexIntermediate3D = class {
  constructor() {
    this._tileHelper = new Memoize3D(new LandscapeTileIndexRaw3D());
  }
  getValue(x, y, z) {
    const h = this._tileHelper;
    const tile = h.getValue(x, y, z);
    switch (tile) {
      case 1 /* STONE */:
        const wcc1 = h.getValue(x - 1, y, z) === 1 /* STONE */;
        const ecc1 = h.getValue(x + 1, y, z) === 1 /* STONE */;
        const cnc1 = h.getValue(x, y + 1, z) === 1 /* STONE */;
        const csc1 = h.getValue(x, y - 1, z) === 1 /* STONE */;
        const ccu1 = h.getValue(x, y, z + 1) === 1 /* STONE */;
        const ccd1 = h.getValue(x, y, z - 1) === 1 /* STONE */;
        if (wcc1 && ecc1 && csc1 && cnc1 && ccu1 && ccd1) {
          if (h.getValue(x - 1, y - 1, z + 1) && h.getValue(x - 1, y + 1, z + 1) && h.getValue(x + 1, y - 1, z + 1) && h.getValue(x + 1, y + 1, z + 1)) {
            return 20 /* STONEINTERNAL */;
          }
        }
        if (wcc1 && ecc1 && ccu1 && ccd1 && !csc1) {
          return 26 /* STONEBIG_CSC */;
        } else if (csc1 && cnc1 && ccu1 && ccd1 && !ecc1) {
          return 33 /* STONEBIG_ECC */;
        } else if (wcc1 && ecc1 && csc1 && cnc1 && !ccu1) {
          return 39 /* STONEBIG_CCU */;
        } else if (wcc1 && ecc1 && !csc1 && cnc1 && !ccu1 && ccd1) {
          return 23 /* STONEBIG_CSU */;
        } else if (wcc1 && !ecc1 && csc1 && cnc1 && !ccu1 && ccd1) {
          return 31 /* STONEBIG_ECU */;
        } else if (!wcc1 && ecc1 && !csc1 && cnc1 && !ccu1 && ccd1) {
          return 22 /* STONEBIG_WSU */;
        } else if (wcc1 && !ecc1 && csc1 && !cnc1 && !ccu1 && ccd1) {
          return 32 /* STONEBIG_ENU */;
        } else if (wcc1 && !ecc1 && !csc1 && cnc1 && !ccu1 && ccd1) {
          return 24 /* STONEBIG_ESU */;
        } else if (!wcc1 && ecc1 && csc1 && !cnc1 && !ccu1 && ccd1) {
          return 38 /* STONEBIG_WNU */;
        } else if (!wcc1 && ecc1 && !csc1 && ccu1 && ccd1) {
          return 25 /* STONEBIG_WSC */;
        } else if (!ecc1 && csc1 && !cnc1 && ccu1 && ccd1) {
          return 34 /* STONEBIG_ENC */;
        } else if (wcc1 && !ecc1 && cnc1 && !csc1 && ccu1 && ccd1) {
          return 27 /* STONEBIG_ESC */;
        } else if (!wcc1 && ecc1 && !csc1 && ccu1 && !ccd1) {
          return 28 /* STONEBIG_WSD */;
        } else if (wcc1 && !ecc1 && !csc1 && cnc1 && ccu1 && !ccd1) {
          return 30 /* STONEBIG_ESD */;
        } else if (wcc1 && !ecc1 && csc1 && !cnc1 && ccu1 && !ccd1) {
          return 36 /* STONEBIG_END */;
        } else if (wcc1 && !ecc1 && csc1 && cnc1 && ccu1 && !ccd1) {
          return 35 /* STONEBIG_ECD */;
        } else if (wcc1 && ecc1 && !csc1 && cnc1 && ccu1 && !ccd1) {
          return 29 /* STONEBIG_CSD */;
        }
        return tile;
      case 2 /* DIRT */:
        const wcc2r = h.getValue(x - 1, y, z);
        const ecc2r = h.getValue(x + 1, y, z);
        const cnc2r = h.getValue(x, y + 1, z);
        const csc2r = h.getValue(x, y - 1, z);
        const ccu2r = h.getValue(x, y, z + 1);
        const ccd2r = h.getValue(x, y, z - 1);
        if (wcc2r === 12 /* WATER */ || ecc2r === 12 /* WATER */ || cnc2r === 12 /* WATER */ || csc2r === 12 /* WATER */ || ccu2r === 12 /* WATER */) {
          return 4 /* SAND */;
        }
        const wcc2 = wcc2r === 2 /* DIRT */ || wcc2r === 12 /* WATER */;
        const ecc2 = ecc2r === 2 /* DIRT */ || ecc2r === 12 /* WATER */;
        const cnc2 = cnc2r === 2 /* DIRT */ || cnc2r === 12 /* WATER */;
        const csc2 = csc2r === 2 /* DIRT */ || csc2r === 12 /* WATER */;
        const ccu2 = ccu2r === 2 /* DIRT */;
        const ccd2 = ccd2r !== 0 /* EMPTY */;
        let grassy = true;
        for (let i = 1; i < 10; i++) {
          if (h.getValue(x, y, z + i) !== 0 /* EMPTY */) {
            grassy = false;
            break;
          }
        }
        if (wcc2 && ecc2 && csc2 && cnc2 && ccu2 && ccd2) {
          return 15 /* DIRTINTERNAL */;
        } else if (wcc2 && ecc2 && ccu2 && ccd2 && !csc2) {
          return grassy ? 64 /* GRASSYDIRTBIG_CSC */ : 45 /* DIRTBIG_CSC */;
        } else if (csc2 && cnc2 && ccu2 && ccd2 && !ecc2) {
          return grassy ? 71 /* GRASSYDIRTBIG_ECC */ : 52 /* DIRTBIG_ECC */;
        } else if (wcc2 && ecc2 && csc2 && cnc2 && !ccu2) {
          return grassy ? 77 /* GRASSYDIRTBIG_CCU */ : 58 /* DIRTBIG_CCU */;
        } else if (wcc2 && ecc2 && !csc2 && cnc2 && !ccu2 && ccd2) {
          return grassy ? 61 /* GRASSYDIRTBIG_CSU */ : 42 /* DIRTBIG_CSU */;
        } else if (wcc2 && !ecc2 && csc2 && cnc2 && !ccu2 && ccd2) {
          return grassy ? 69 /* GRASSYDIRTBIG_ECU */ : 50 /* DIRTBIG_ECU */;
        } else if (!wcc2 && ecc2 && !csc2 && cnc2 && !ccu2 && ccd2) {
          return grassy ? 60 /* GRASSYDIRTBIG_WSU */ : 41 /* DIRTBIG_WSU */;
        } else if (wcc2 && !ecc2 && csc2 && !cnc2 && !ccu2 && ccd2) {
          return grassy ? 70 /* GRASSYDIRTBIG_ENU */ : 51 /* DIRTBIG_ENU */;
        } else if (wcc2 && !ecc2 && !csc2 && cnc2 && !ccu2 && ccd2) {
          return grassy ? 62 /* GRASSYDIRTBIG_ESU */ : 43 /* DIRTBIG_ESU */;
        } else if (!wcc2 && ecc2 && csc2 && !cnc2 && !ccu2 && ccd2) {
          return grassy ? 76 /* GRASSYDIRTBIG_WNU */ : 57 /* DIRTBIG_WNU */;
        } else if (!wcc2 && ecc2 && !csc2 && ccu2 && ccd2) {
          return grassy ? 63 /* GRASSYDIRTBIG_WSC */ : 44 /* DIRTBIG_WSC */;
        } else if (!ecc2 && csc2 && !cnc2 && ccu2 && ccd2) {
          return grassy ? 72 /* GRASSYDIRTBIG_ENC */ : 53 /* DIRTBIG_ENC */;
        } else if (wcc2 && !ecc2 && cnc2 && !csc2 && ccu2 && ccd2) {
          return grassy ? 65 /* GRASSYDIRTBIG_ESC */ : 46 /* DIRTBIG_ESC */;
        } else if (!wcc2 && ecc2 && !csc2 && ccu2 && !ccd2) {
          return grassy ? 66 /* GRASSYDIRTBIG_WSD */ : 47 /* DIRTBIG_WSD */;
        } else if (wcc2 && !ecc2 && !csc2 && cnc2 && ccu2 && !ccd2) {
          return grassy ? 68 /* GRASSYDIRTBIG_ESD */ : 49 /* DIRTBIG_ESD */;
        } else if (wcc2 && !ecc2 && csc2 && !cnc2 && ccu2 && !ccd2) {
          return grassy ? 74 /* GRASSYDIRTBIG_END */ : 55 /* DIRTBIG_END */;
        } else if (wcc2 && !ecc2 && csc2 && cnc2 && ccu2 && !ccd2) {
          return grassy ? 73 /* GRASSYDIRTBIG_ECD */ : 54 /* DIRTBIG_ECD */;
        } else if (wcc2 && ecc2 && !csc2 && cnc2 && ccu2 && !ccd2) {
          return grassy ? 67 /* GRASSYDIRTBIG_CSD */ : 48 /* DIRTBIG_CSD */;
        }
        if (grassy) {
          return 3 /* GRASSYDIRT */;
        }
        if (h.getValue(x, y, z + 1) === 1 /* STONE */) {
          return 17 /* DIRTUNDERSTONE */;
        }
        return tile;
      case 12 /* WATER */:
        if (h.getValue(x, y, z + 1) !== 0 /* EMPTY */) {
          return 21 /* WATERINTERNAL */;
        }
        return tile;
      default:
        return tile;
    }
  }
  invalidate(x, y, z) {
    const h = this._tileHelper;
    h.invalidate(x - 1, y - 1, z - 1);
    h.invalidate(x - 1, y - 1, z);
    h.invalidate(x - 1, y - 1, z + 1);
    h.invalidate(x - 1, y, z - 1);
    h.invalidate(x - 1, y, z);
    h.invalidate(x - 1, y, z + 1);
    h.invalidate(x - 1, y + 1, z - 1);
    h.invalidate(x - 1, y + 1, z);
    h.invalidate(x - 1, y + 1, z + 1);
    h.invalidate(x, y - 1, z - 1);
    h.invalidate(x, y - 1, z);
    h.invalidate(x, y - 1, z + 1);
    h.invalidate(x, y, z - 1);
    h.invalidate(x, y, z);
    h.invalidate(x, y, z + 1);
    h.invalidate(x, y + 1, z - 1);
    h.invalidate(x, y + 1, z);
    h.invalidate(x, y + 1, z + 1);
    h.invalidate(x + 1, y - 1, z - 1);
    h.invalidate(x + 1, y - 1, z);
    h.invalidate(x + 1, y - 1, z + 1);
    h.invalidate(x + 1, y, z - 1);
    h.invalidate(x + 1, y, z);
    h.invalidate(x + 1, y, z + 1);
    h.invalidate(x + 1, y + 1, z - 1);
    h.invalidate(x + 1, y + 1, z);
    h.invalidate(x + 1, y + 1, z + 1);
  }
  setValue(x, y, z, value) {
    this._tileHelper.setValue(x, y, z, value);
  }
};

// src/helpers/utils/LandscapeTileIndex3D.ts
var LandscapeTileIndex3D = class {
  constructor() {
    this._tileHelper = new Memoize3D(new LandscapeTileIndexIntermediate3D());
  }
  getValue(x, y, z) {
    const h = this._tileHelper;
    const tile = h.getValue(x, y, z);
    switch (tile) {
      case 1 /* STONE */:
        const wcc1r = h.getValue(x - 1, y, z);
        const ecc1r = h.getValue(x + 1, y, z);
        const cnc1r = h.getValue(x, y + 1, z);
        const csc1r = h.getValue(x, y - 1, z);
        const ccu1r = h.getValue(x, y, z + 1);
        const ccd1r = h.getValue(x, y, z - 1);
        const wcc1b = wcc1r >= 22 /* STONEBIG_WSU */ && wcc1r <= 40 /* STONEBIG_CNU */;
        const ecc1b = ecc1r >= 22 /* STONEBIG_WSU */ && ecc1r <= 40 /* STONEBIG_CNU */;
        const cnc1b = cnc1r >= 22 /* STONEBIG_WSU */ && cnc1r <= 40 /* STONEBIG_CNU */;
        const csc1b = csc1r >= 22 /* STONEBIG_WSU */ && csc1r <= 40 /* STONEBIG_CNU */;
        const ccu1b = ccu1r >= 22 /* STONEBIG_WSU */ && ccu1r <= 40 /* STONEBIG_CNU */;
        const ccd1b = ccd1r >= 22 /* STONEBIG_WSU */ && ccd1r <= 40 /* STONEBIG_CNU */;
        const wcc1s = wcc1r === 1 /* STONE */;
        const ecc1s = ecc1r === 1 /* STONE */;
        const cnc1s = cnc1r === 1 /* STONE */;
        const csc1s = csc1r === 1 /* STONE */;
        const ccu1s = ccu1r === 1 /* STONE */;
        const ccd1s = ccd1r === 1 /* STONE */;
        if (wcc1s && ecc1s) {
          return 84 /* STONEROD_EW_C */;
        } else if (cnc1s && csc1s) {
          return 80 /* STONEROD_NS_C */;
        } else if (ccu1s && ccd1s) {
          return 88 /* STONEROD_UD_C */;
        } else if (wcc1b) {
          return 86 /* STONEROD_EW_NUB */;
        } else if (cnc1b) {
          return 82 /* STONEROD_NS_NUB */;
        } else if (ccd1b) {
          return 90 /* STONEROD_UD_NUB */;
        } else if (wcc1s) {
          return 85 /* STONEROD_EW_E */;
        } else if (ecc1b || ecc1s) {
          return 83 /* STONEROD_EW_W */;
        } else if (cnc1s) {
          return 81 /* STONEROD_NS_S */;
        } else if (csc1b || csc1s) {
          return 79 /* STONEROD_NS_N */;
        } else if (ccd1s) {
          return 87 /* STONEROD_UD_U */;
        } else if (ccu1b || ccu1s) {
          return 89 /* STONEROD_UD_D */;
        }
        return 90 /* STONEROD_UD_NUB */;
      case 0 /* EMPTY */:
        const v2 = h.getValue(x, y, z - 1);
        if (v2 !== 0 /* EMPTY */ && v2 !== 12 /* WATER */ && v2 !== 51 /* DIRTBIG_ENU */ && v2 !== 50 /* DIRTBIG_ECU */ && v2 !== 43 /* DIRTBIG_ESU */ && v2 !== 42 /* DIRTBIG_CSU */ && v2 !== 41 /* DIRTBIG_WSU */ && v2 !== 56 /* DIRTBIG_WCU */ && v2 !== 57 /* DIRTBIG_WNU */ && v2 !== 59 /* DIRTBIG_CNU */ && v2 !== 70 /* GRASSYDIRTBIG_ENU */ && v2 !== 69 /* GRASSYDIRTBIG_ECU */ && v2 !== 62 /* GRASSYDIRTBIG_ESU */ && v2 !== 61 /* GRASSYDIRTBIG_CSU */ && v2 !== 60 /* GRASSYDIRTBIG_WSU */ && v2 !== 75 /* GRASSYDIRTBIG_WCU */ && v2 !== 76 /* GRASSYDIRTBIG_WNU */ && v2 !== 78 /* GRASSYDIRTBIG_CNU */ && (x * 113 + y * 45 + z * 17) % 19 === 0) {
          switch (Math.abs(x + y) % 3) {
            case 0:
              return 14 /* BALL */;
            case 1:
              return 19 /* GRAVEHEADSTONE */;
            default:
              return 18 /* SHRUBDRIED */;
          }
        }
      default:
        return tile;
    }
  }
  invalidate(x, y, z) {
    const h = this._tileHelper;
    h.invalidate(x, y, z);
    h.invalidate(x - 1, y, z);
    h.invalidate(x + 1, y, z);
    h.invalidate(x, y + 1, z);
    h.invalidate(x, y - 1, z);
    h.invalidate(x, y, z + 1);
    h.invalidate(x, y, z - 1);
  }
  setValue(x, y, z, value) {
    this._tileHelper.setValue(x, y, z, value);
  }
};

// src/helpers/utils/createMapCacheViewPlane.ts
import { PlaneGeometry as PlaneGeometry2 } from "three";
function createMapCacheViewPlane(viewWidth, viewHeight, clipspaceMode = true) {
  const mapCacheViewPlane = new PlaneGeometry2(2, 2, 1, 1);
  if (clipspaceMode) {
    const updateViewUvs = () => {
      const uvs = mapCacheViewPlane.getAttribute("uv");
      const safeWidth = 1 - 1 / viewWidth;
      const safeHeight = 1 - 2 / viewHeight;
      uvs.setX(1, safeWidth);
      uvs.setX(3, safeWidth);
      uvs.setY(2, 1 - safeHeight);
      uvs.setY(3, 1 - safeHeight);
      const aspect = safeWidth / safeHeight;
      const aspectAspect = aspect / device_default.aspect;
      let left = 0;
      let right = safeWidth;
      let top = 1;
      let bottom = 1 - safeHeight;
      const arr = uvs.array;
      if (aspectAspect > 1) {
        const center = (right - left) * 0.5;
        const halfSize = center / aspectAspect;
        left = center - halfSize;
        right = center + halfSize;
      } else {
        const center = (bottom - top) * 0.5;
        const halfSize = center * aspectAspect;
        bottom = center + halfSize;
        top = center - halfSize;
      }
      arr[0] = left;
      arr[1] = top;
      arr[2] = right;
      arr[3] = top;
      arr[4] = left;
      arr[5] = bottom;
      arr[6] = right;
      arr[7] = bottom;
      uvs.needsUpdate = true;
    };
    device_default.onChange(updateViewUvs, true);
  }
  return mapCacheViewPlane;
}

// src/index.ts
var index_default = {
  TileMaker,
  MapTileMaker,
  JITTileSampler,
  MapScrollingView,
  TextureCachingScroller,
  geometry: {
    FibonacciSphereGeometry
  },
  helpers: {
    createMapCacheViewPlane
  },
  LightController,
  SpriteController,
  getMaterial: getMeshMaterial,
  getMeshMaterial,
  PegboardMesh,
  LandscapeTileIndex3D,
  Memoize3D,
  TILES,
  materials: {
    BasicFullScreenMaterial,
    SimplexNoiseMaterial,
    BasicTextureMaterial
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
