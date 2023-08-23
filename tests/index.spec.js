import { expect } from 'chai';
import solution from '../index.js';

describe('Binary Tree Branch Sum', () => {
  it('should return "Left" when the left branch is larger', () => {
    expect(solution([3, 6, 2, 9, -1, 10])).to.equal('Left');
  });

  it('should return "Right" when the right branch is larger', () => {
    expect(solution([3, 6, 2, 9, 100, 10])).to.equal('Right');
  });

  it('should return an empty string when the branches are equal', () => {
    expect(solution([3, 6, 6, 9, 9, 10, 10])).to.equal('');
  });

  it('should return an empty string for an empty tree', () => {
    expect(solution([])).to.equal('');
  });
});
