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
          '/packages?destination=unde&startDate=nihil&endDate=harum&afterCursor=illum&limit=5&startTime=3&endTime=8&duration=6',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'unde',
          startDate: 'nihil',
          endDate: 'harum',
          afterCursor: 'illum',
          limit: 5,
          startTime: 3,
          endTime: 8,
          duration: 6,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
