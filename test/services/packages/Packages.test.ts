import nock from 'nock';

import { Celitech } from '../../../src';

import { PackagesService } from '../../../src/services/packages/Packages';

describe('test PackagesService object', () => {
  it('should be an object', () => {
    expect(typeof PackagesService).toBe('function');
  });
});

describe('test Packages', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Celitech();

    nock.cleanAll();
  });

  describe('test listPackages', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get(
          '/packages?destination=quod&startDate=velit&endDate=ducimus&afterCursor=amet&limit=3&startTime=9&endTime=5&duration=6',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'quod',
          startDate: 'velit',
          endDate: 'ducimus',
          afterCursor: 'amet',
          limit: 3,
          startTime: 9,
          endTime: 5,
          duration: 6,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
