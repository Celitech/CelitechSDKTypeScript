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
          '/packages?destination=commodi&startDate=necessitatibus&endDate=natus&afterCursor=magni&limit=3&startTime=1&endTime=1&duration=7',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'commodi',
          startDate: 'necessitatibus',
          endDate: 'natus',
          afterCursor: 'magni',
          limit: 3,
          startTime: 1,
          endTime: 1,
          duration: 7,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
