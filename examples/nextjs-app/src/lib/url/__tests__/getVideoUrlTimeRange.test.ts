import { getVideoUrlTimeRange } from '../getVideoUrlTimeRange';

describe('getVideoUrlTimerange', () => {
  it('should work with full timerange', () => {
    expect(
      getVideoUrlTimeRange(
        'https://example.com/roz/roz-markten-trio.m4v#t=20,29.1'
      )
    ).toStrictEqual({
      start: 20,
      end: 29.1,
    });
  });

  it('should work with only start in timerange', () => {
    expect(
      getVideoUrlTimeRange('https://example.com/roz/roz-markten-trio.m4v#t=20')
    ).toStrictEqual({
      start: 20,
      end: undefined,
    });
  });

  it('should work with no timerange', () => {
    expect(
      getVideoUrlTimeRange('https://example.com/roz/roz-markten-trio.m4v')
    ).toStrictEqual({
      start: 0,
      end: undefined,
    });
  });
});
