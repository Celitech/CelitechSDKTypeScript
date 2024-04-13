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
        .get('/esim?iccid=5826175661')
        .reply(200, { data: {} });
      return sdk.eSim.getEsim('5826175661').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=6666941227')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsim()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=6502915224')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsim('6502915224')).rejects.toThrow();
    });
  });

  describe('test getEsimDevice', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/1265016645/device')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimDevice('1265016645').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/3292907849/device')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/9483139421/device')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice('9483139421')).rejects.toThrow();
    });
  });

  describe('test getEsimHistory', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/6031951908/history')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimHistory('6031951908').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/2172792159/history')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5175625912/history')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory('5175625912')).rejects.toThrow();
    });
  });

  describe('test getEsimMac', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5852975852/mac')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimMac('5852975852').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8522678017/mac')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/7615886779/mac')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac('7615886779')).rejects.toThrow();
    });
  });
});
