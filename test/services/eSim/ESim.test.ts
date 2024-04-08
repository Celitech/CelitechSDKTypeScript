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
        .get('/esim?iccid=7127971123')
        .reply(200, { data: {} });
      return sdk.eSim.getEsim('7127971123').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=8347539898')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsim()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=1240506739')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsim('1240506739')).rejects.toThrow();
    });
  });

  describe('test getEsimDevice', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/6746655806/device')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimDevice('6746655806').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/9554053722/device')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8832663859/device')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice('8832663859')).rejects.toThrow();
    });
  });

  describe('test getEsimHistory', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/3901147554/history')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimHistory('3901147554').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5455850944/history')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/7586166617/history')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory('7586166617')).rejects.toThrow();
    });
  });

  describe('test getEsimMac', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8963367841/mac')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimMac('8963367841').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/1211539975/mac')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5729778125/mac')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac('5729778125')).rejects.toThrow();
    });
  });
});
