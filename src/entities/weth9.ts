import { Token } from './token'

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {
  [1]: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
  [3]: new Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  [4]: new Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  [5]: new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  [42]: new Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),

  [10]: new Token(10, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  [69]: new Token(69, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),

  [42161]: new Token(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
  [421611]: new Token(421611, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
  [250]: new Token(250, '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', 18, 'WETH', 'Wrapped Ether'),
  [199]: new Token(199, '0x23181F21DEa5936e24163FFABa4Ea3B316B57f3C', 18, 'WETH', 'Wrapped Ether'),
  [7332]: new Token(7332, '0xF5cB8652a84329A2016A386206761f455bCEDab6', 18, 'WETH', 'Wrapped Ether'),
  [80084]: new Token(80084, '0x7507c1dc16935B82698e4C63f2746A2fCf994dF8', 18, 'WETH', 'Wrapped Ether'),
  [48815]: new Token(48815, '0xc9cB60b2635A1e2518B37Cb632C973e54C5AB3fF', 18, 'WETH', 'Wrapped Ether'),
  [64165]: new Token(64165, '0xD31686E65f17542C7019B22b2E6A0C71e72aA8Dd', 18, 'WETH', 'Wrapped Ether'),
}
