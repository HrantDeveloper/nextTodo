import { getCurrentDate } from './heleperFuncs';

describe('getCurrentDate', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2020, 3, 1));
  });

  describe('when type is equal to short', () => {
    it('should return short version of the today date', () => {
      expect(getCurrentDate('short')).toBe('Wed 1 Apr');
    });
  });

  describe('when type is equal to long', () => {
    it('should return short version of the today date', () => {
      expect(getCurrentDate('long')).toBe('Wednesday 1 April');
    });
  });
});
