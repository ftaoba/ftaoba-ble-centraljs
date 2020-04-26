export class FTAobaFaceData {
  private _transform?: Float32Array;

  constructor(private dataView: DataView) {}

  get transform() {
    if (this._transform) return (this._transform as any) as ReadonlyArray<number>;
    this._transform = new Float32Array(this.dataView.buffer, this.dataView.byteOffset + 8, 16);
    return (this.browDownLeft as any) as ReadonlyArray<number>;
  }
  get eyeBlinkLeft() {
    return this.dataView.getFloat32(72, true);
  }
  get eyeLookDownLeft() {
    return this.dataView.getFloat32(76, true);
  }
  get eyeLookInLeft() {
    return this.dataView.getFloat32(80, true);
  }
  get eyeLookOutLeft() {
    return this.dataView.getFloat32(84, true);
  }
  get eyeLookUpLeft() {
    return this.dataView.getFloat32(88, true);
  }
  get eyeSquintLeft() {
    return this.dataView.getFloat32(92, true);
  }
  get eyeWideLeft() {
    return this.dataView.getFloat32(96, true);
  }
  get eyeBlinkRight() {
    return this.dataView.getFloat32(100, true);
  }
  get eyeLookDownRight() {
    return this.dataView.getFloat32(104, true);
  }
  get eyeLookInRight() {
    return this.dataView.getFloat32(108, true);
  }
  get eyeLookOutRight() {
    return this.dataView.getFloat32(112, true);
  }
  get eyeLookUpRight() {
    return this.dataView.getFloat32(116, true);
  }
  get eyeSquintRight() {
    return this.dataView.getFloat32(120, true);
  }
  get eyeWideRight() {
    return this.dataView.getFloat32(124, true);
  }
  get jawForward() {
    return this.dataView.getFloat32(128, true);
  }
  get jawLeft() {
    return this.dataView.getFloat32(132, true);
  }
  get jawRight() {
    return this.dataView.getFloat32(136, true);
  }
  get jawOpen() {
    return this.dataView.getFloat32(140, true);
  }
  get mouthClose() {
    return this.dataView.getFloat32(144, true);
  }
  get mouthFunnel() {
    return this.dataView.getFloat32(148, true);
  }
  get mouthPucker() {
    return this.dataView.getFloat32(152, true);
  }
  get mouthSmileLeft() {
    return this.dataView.getFloat32(156, true);
  }
  get mouthSmileRight() {
    return this.dataView.getFloat32(160, true);
  }
  get mouthFrownLeft() {
    return this.dataView.getFloat32(164, true);
  }
  get mouthFrownRight() {
    return this.dataView.getFloat32(168, true);
  }
  get mouthDimpleLeft() {
    return this.dataView.getFloat32(172, true);
  }
  get mouthDimpleRight() {
    return this.dataView.getFloat32(176, true);
  }
  get mouthStretchLeft() {
    return this.dataView.getFloat32(180, true);
  }
  get mouthStretchRight() {
    return this.dataView.getFloat32(184, true);
  }
  get mouthRollLower() {
    return this.dataView.getFloat32(188, true);
  }
  get mouthRollUpper() {
    return this.dataView.getFloat32(192, true);
  }
  get mouthShrugLower() {
    return this.dataView.getFloat32(196, true);
  }
  get mouthShrugUpper() {
    return this.dataView.getFloat32(200, true);
  }
  get mouthPressLeft() {
    return this.dataView.getFloat32(204, true);
  }
  get mouthPressRight() {
    return this.dataView.getFloat32(208, true);
  }
  get mouthLowerDownLeft() {
    return this.dataView.getFloat32(212, true);
  }
  get mouthLowerDownRight() {
    return this.dataView.getFloat32(216, true);
  }
  get mouthUpperUpLeft() {
    return this.dataView.getFloat32(220, true);
  }
  get mouthUpperUpRight() {
    return this.dataView.getFloat32(224, true);
  }
  get browDownLeft() {
    return this.dataView.getFloat32(228, true);
  }
  get browDownRight() {
    return this.dataView.getFloat32(232, true);
  }
  get browInnerUp() {
    return this.dataView.getFloat32(236, true);
  }
  get browOuterUpLeft() {
    return this.dataView.getFloat32(240, true);
  }
  get browOuterUpRight() {
    return this.dataView.getFloat32(244, true);
  }
  get cheekPuff() {
    return this.dataView.getFloat32(248, true);
  }
  get cheekSquintLeft() {
    return this.dataView.getFloat32(252, true);
  }
  get cheekSquintRight() {
    return this.dataView.getFloat32(256, true);
  }
  get noseSneerLeft() {
    return this.dataView.getFloat32(260, true);
  }
  get noseSneerRight() {
    return this.dataView.getFloat32(264, true);
  }
  get tongueOut() {
    return this.dataView.getFloat32(268, true);
  }
}
