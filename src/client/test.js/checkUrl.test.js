
import { urlChecker } from '../js/checkUrl'

test('This test should return true', () => {
    const url = "https://www.notesfromthefrontier.com/blog/categories/wild-west-history";
    expect(urlChecker(url)).toBeTruthy();
});