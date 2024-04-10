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
        .get('/esim?iccid=8743802897')
        .reply(200, { data: {} });
      return sdk.eSim.getEsim('8743802897').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=1420095126')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsim()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=9400373502')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsim('9400373502')).rejects.toThrow();
    });
  });

  describe('test getEsimDevice', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/6120643886/device')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimDevice('6120643886').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/1797454035/device')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8732776945/device')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice('8732776945')).rejects.toThrow();
    });
  });

  describe('test getEsimHistory', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5709652263/history')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimHistory('5709652263').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/2763445986/history')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/4207774440/history')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory('4207774440')).rejects.toThrow();
    });
  });

  describe('test getEsimMac', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8936735798/mac')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimMac('8936735798').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5928866078/mac')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5543892832/mac')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac('5543892832')).rejects.toThrow();
    });
  });
});
