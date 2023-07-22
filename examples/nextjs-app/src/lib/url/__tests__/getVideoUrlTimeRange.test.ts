import { getVideoUrlTimeRange } from '../getVideoUrlTimeRange';

describe('getVideoUtlTimerange', () => {
  it('should work with full timerange', () => {
    expect(
      getVideoUrlTimeRange(
        'https://media.failwell.be/roz/roz-markten-trio.m4v#t=20,29.1'
      )
    ).toStrictEqual({
      start: 20,
      end: 29.1,
    });
  });

  it('should work with only start in timerange', () => {
    expect(
      getVideoUrlTimeRange(
        'https://media.failwell.be/roz/roz-markten-trio.m4v#t=20'
      )
    ).toStrictEqual({
      start: 20,
      end: null,
    });
  });

  it('should work with no timerange', () => {
    expect(
      getVideoUrlTimeRange('https://media.failwell.be/roz/roz-markten-trio.m4v')
    ).toStrictEqual({
      start: 0,
      end: null,
    });
  });
});
