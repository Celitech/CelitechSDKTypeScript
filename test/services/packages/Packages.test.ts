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
          '/packages?destination=quod&startDate=accusamus&endDate=eligendi&afterCursor=quisquam&limit=8&startTime=6&endTime=9&duration=1',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'quod',
          startDate: 'accusamus',
          endDate: 'eligendi',
          afterCursor: 'quisquam',
          limit: 8,
          startTime: 6,
          endTime: 9,
          duration: 1,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
