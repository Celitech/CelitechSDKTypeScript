import nock from 'nock';

import { Celitech } from '../../../src';

import { ESimService } from '../../../src/services/eSim/ESim';

describe('test ESimService object', () => {
  it('should be an object', () => {
    expect(typeof ESimService).toBe('function');
  });
});

describe('test ESim', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Celitech();

    nock.cleanAll();
  });

  describe('test getEsim', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=3329714553')
        .reply(200, { data: {} });
      return sdk.eSim.getEsim('3329714553').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=5031182497')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsim()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=3783281993')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsim('3783281993')).rejects.toThrow();
    });
  });

  describe('test getEsimDevice', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/3166002630/device')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimDevice('3166002630').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5103730669/device')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/3616186951/device')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice('3616186951')).rejects.toThrow();
    });
  });

  describe('test getEsimHistory', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8875452678/history')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimHistory('8875452678').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/7935089854/history')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/3902275933/history')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory('3902275933')).rejects.toThrow();
    });
  });

  describe('test getEsimMac', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8255378636/mac')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimMac('8255378636').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/6067470436/mac')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/2620789581/mac')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac('2620789581')).rejects.toThrow();
    });
  });
});
