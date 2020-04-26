import { FTAobaFaceData } from './face-data';

export type FTAobaBleListenerKeyTypes = 'data';
export type FTAobaBleListenerValueTypes = {
  data: FTAobaFaceData;
};
export type FTAobaBleListener<K extends FTAobaBleListenerKeyTypes> = (v: FTAobaBleListenerValueTypes[K]) => any;
export type FTAobaBleListeners = { [K in FTAobaBleListenerKeyTypes]: FTAobaBleListener<K>[] };

const serviceUUID = '07b196f9-5aa0-4270-b610-8deda20a417c';
const characteristicUUID = '7a051851-3abe-4adb-94fc-8e2021a58320';

export class FTAobaBLECentral {
  private listeners: FTAobaBleListeners = {
    data: [],
  };

  private faceDataCharacteristicValueChangedListener = () => {
    if (!this.ch.value) return;
    const faceData = new FTAobaFaceData(this.ch.value);
    this.listeners.data.forEach((f) => f(faceData));
  };

  private constructor(private ch: BluetoothRemoteGATTCharacteristic) {
    ch.addEventListener('characteristicvaluechanged', this.faceDataCharacteristicValueChangedListener);
  }

  private static instance: FTAobaBLECentral;

  static async initialize() {
    if (this.instance) return this.instance;
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ name: 'ftaoba' }, { services: [serviceUUID] }],
    });
    const server = await device.gatt?.connect();
    const service = await server?.getPrimaryService(serviceUUID);
    const ch = await service?.getCharacteristic(characteristicUUID)!;
    await ch.startNotifications();
    return (this.instance = new FTAobaBLECentral(ch));
  }

  on<K extends FTAobaBleListenerKeyTypes>(type: K, listener: FTAobaBleListener<K>) {
    this.listeners[type].push(listener as any);
  }

  off<K extends FTAobaBleListenerKeyTypes>(type: K, listener: FTAobaBleListener<K>) {
    const index = this.listeners[type].indexOf(listener as any);
    if (index === -1) return;
    this.listeners[type].splice(index, 1);
  }

  destroy() {
    this.ch.removeEventListener('characteristicvaluechanged', this.faceDataCharacteristicValueChangedListener);
    this.ch.stopNotifications();
  }
}
