export class PageConfig {
  numberOfListedCharacter: number;
  numberOfPages: number;
  currentPageIndex: number;
  pageNumbers: Array<number>;

  getCorrectNumOfListedCharacter(value: number, numberOfItems: number): number {
    if (value > numberOfItems) {
      return numberOfItems;
    } else if (value < 1) {
      return 1;
    } else if (value % 1) {
      return Math.floor(value);
    } else {
      return value;
    }
  }
}
