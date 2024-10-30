import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
}

const DEFAULT_NETWORKS = [ChainId.MAINNET, ChainId.GOERLI]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const UNI_ADDRESSES: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [
  ChainId.OPTIMISM,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.SEPOLIA
])

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

export const V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const V2_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V2_FACTORY_ADDRESS),
  [ChainId.BIT_TORRENT_MAINNET]: '0xee4bc42157cf65291ba2fe839ae127e3cc76f741',
  [ChainId.FANTOM]: '0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3',
  [ChainId.EON]: '0xa6AD18C2aC47803E193F75c3677b14BF19B94883',
  [ChainId.BERA_TESTNET]: '0xEE4bC42157cf65291Ba2FE839AE127e3Cc76f741',
  [ChainId.GOAT_TESTNET]: '0xEE4bC42157cf65291Ba2FE839AE127e3Cc76f741',
  [ChainId.SONIC_TESTNET]: '0xEE4bC42157cf65291Ba2FE839AE127e3Cc76f741',

}

export const V2_FACTORY_INIT_HASH: AddressMap = {
  ...constructSameAddressMap('0xcdf2deca40a0bd56de8e3ce5c7df6727e5b1bf2ac96f283fa9c4b3e6b42ea9d2'),
  [ChainId.BIT_TORRENT_MAINNET]: '0x143b7504e2b4eb34ed3cf725a14720c008dff8cd992e32c0eccd639c183ad602',
  [ChainId.FANTOM]: '0xcdf2deca40a0bd56de8e3ce5c7df6727e5b1bf2ac96f283fa9c4b3e6b42ea9d2',
  [ChainId.EON]: '0x143b7504e2b4eb34ed3cf725a14720c008dff8cd992e32c0eccd639c183ad602',
  [ChainId.BERA_TESTNET]: '0xc0a4478c7d7a8e51439185380bd1914dea14c12086db861090a5dc8d11b4e95b',
  [ChainId.GOAT_TESTNET]: '0xc0a4478c7d7a8e51439185380bd1914dea14c12086db861090a5dc8d11b4e95b',
  [ChainId.SONIC_TESTNET]: '0xc0a4478c7d7a8e51439185380bd1914dea14c12086db861090a5dc8d11b4e95b',
}

export const V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

// Liquidity brewer address
export const V2_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V2_ROUTER_ADDRESS),
  [ChainId.BIT_TORRENT_MAINNET]: '0x1be40073083d753f1eeFd87b03461221c35492C3',
  [ChainId.FANTOM]: '0x31F63A33141fFee63D4B26755430a390ACdD8a4d',
  [ChainId.EON]: '0xccEC4EF0228488636B6E8dF77D7d4211c87Ef255',
  [ChainId.BERA_TESTNET]: '0xa6AD18C2aC47803E193F75c3677b14BF19B94883',
  [ChainId.GOAT_TESTNET]: '0x6f29913E84f693F48E9576465589b778030345A2',
  [ChainId.SONIC_TESTNET]: '0xa6AD18C2aC47803E193F75c3677b14BF19B94883',
}

// Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon
const DEFAULT_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984',
  quoterAddress: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
  v3MigratorAddress: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  nonfungiblePositionManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
}
const MAINNET_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  v1MixedRouteQuoterAddress: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E'
}
const GOERLI_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  v1MixedRouteQuoterAddress: '0xBa60b6e6fF25488308789E6e0A65D838be34194e'
}

const OPTIMISM_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES
const ARBITRUM_ONE_ADDRESSES: ChainAddresses = {
  ...DEFAULT_ADDRESSES,
  multicallAddress: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  tickLensAddress: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573'
}
const POLYGON_ADDRESSES: ChainAddresses = DEFAULT_ADDRESSES

// celo v3 addresses
const CELO_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc',
  multicallAddress: '0x633987602DE5C4F337e3DbF265303A1080324204',
  quoterAddress: '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8',
  v3MigratorAddress: '0x3cFd4d48EDfDCC53D3f173F596f621064614C582',
  nonfungiblePositionManagerAddress: '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A',
  tickLensAddress: '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D'
}

// BNB v3 addresses
const BNB_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xdB1d10011AD0Ff90774D0C6Bb92e5C5c8b4461F7',
  multicallAddress: '0x963Df249eD09c358A4819E39d9Cd5736c3087184',
  quoterAddress: '0x78D78E420Da98ad378D7799bE8f4AF69033EB077',
  v3MigratorAddress: '0x32681814957e0C13117ddc0c2aba232b5c9e760f',
  nonfungiblePositionManagerAddress: '0x7b8A01B39D58278b5DE7e48c8449c9f4F5170613',
  tickLensAddress: '0xD9270014D396281579760619CCf4c3af0501A47C',
  swapRouter02Address: '0xB971eF87ede563556b2ED4b1C0b0019111Dd85d2'
}

// optimism goerli addresses
const OPTIMISM_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10',
  multicallAddress: '0x07F2D8a2a02251B62af965f22fC4744A5f96BCCd',
  quoterAddress: '0x9569CbA925c8ca2248772A9A4976A516743A246F',
  v3MigratorAddress: '0xf6c55fBe84B1C8c3283533c53F51bC32F5C7Aba8',
  nonfungiblePositionManagerAddress: '0x39Ca85Af2F383190cBf7d7c41ED9202D27426EF6',
  tickLensAddress: '0xe6140Bd164b63E8BfCfc40D5dF952f83e171758e'
}

// arbitrum goerli v3 addresses
const ARBITRUM_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6',
  multicallAddress: '0x8260CB40247290317a4c062F3542622367F206Ee',
  quoterAddress: '0x1dd92b83591781D0C6d98d07391eea4b9a6008FA',
  v3MigratorAddress: '0xA815919D2584Ac3F76ea9CB62E6Fd40a43BCe0C3',
  nonfungiblePositionManagerAddress: '0x622e4726a167799826d1E1D150b076A7725f5D81',
  tickLensAddress: '0xb52429333da969a0C79a60930a4Bf0020E5D1DE8'
}

// sepolia v3 addresses
const SEPOLIA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x0227628f3F023bb0B980b67D528571c95c6DaC1c',
  multicallAddress: '0xD7F33bCdb21b359c8ee6F0251d30E94832baAd07',
  quoterAddress: '0xEd1f6473345F45b75F8179591dd5bA1888cf2FB3',
  v3MigratorAddress: '0x729004182cF005CEC8Bd85df140094b6aCbe8b15',
  nonfungiblePositionManagerAddress: '0x1238536071E1c677A632429e3655c799b22cDA52',
  tickLensAddress: '0xd7f33bcdb21b359c8ee6f0251d30e94832baad07'
}

// Avalanche v3 addresses
const AVALANCHE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x740b1c1de25031C31FF4fC9A62f554A55cdC1baD',
  multicallAddress: '0x0139141Cd4Ee88dF3Cdb65881D411bAE271Ef0C2',
  quoterAddress: '0xbe0F5544EC67e9B3b2D979aaA43f18Fd87E6257F',
  v3MigratorAddress: '0x44f5f1f5E452ea8d29C890E8F6e893fC0f1f0f97',
  nonfungiblePositionManagerAddress: '0x655C406EBFa14EE2006250925e54ec43AD184f8B',
  tickLensAddress: '0xEB9fFC8bf81b4fFd11fb6A63a6B0f098c6e21950',
  swapRouter02Address: '0xbb00FF08d01D300023C629E8fFfFcb65A5a578cE'
}

const BASE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x33128a8fC17869897dcE68Ed026d694621f6FDfD',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693',
  quoterAddress: '0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a',
  v3MigratorAddress: '0x23cF10b1ee3AdfCA73B0eF17C07F7577e7ACd2d7',
  nonfungiblePositionManagerAddress: '0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1',
  tickLensAddress: '0x0CdeE061c75D43c82520eD998C23ac2991c9ac6d',
  swapRouter02Address: '0x2626664c2603336E57B271c5C0b26F421741e481'
}

// Base Goerli v3 addresses
const BASE_GOERLI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x9323c1d6D800ed51Bd7C6B216cfBec678B7d0BC2',
  multicallAddress: '0xB206027a9E0E13F05eBEFa5D2402Bab3eA716439',
  quoterAddress: '0xedf539058e28E5937dAef3f69cEd0b25fbE66Ae9',
  v3MigratorAddress: '0x3efe5d02a04b7351D671Db7008ec6eBA9AD9e3aE',
  nonfungiblePositionManagerAddress: '0x3c61369ef0D1D2AFa70d8feC2F31C5D6Ce134F30',
  tickLensAddress: '0x1acB873Ee909D0c98adB18e4474943249F931b92',
  swapRouter02Address: '0x8357227D4eDc78991Db6FDB9bD6ADE250536dE1d'
}

// {
//   "v3CoreFactoryAddress":"0xE12b00681dD2e90f51d9Edf55CE1A7D171338165",
//   "multicall2Address":"0xF20200B941Cfee64D6e07f2abe75887bfC2a8a0D",
//   "proxyAdminAddress":"0x456b6feA5a362C0A507C79976Ed9e23d988Cc70C",
//   "tickLensAddress":"0x07685F75c6172DB0Dd9a03Fcc3258d6Ade0F370d",
//   "nftDescriptorLibraryAddressV1_3_0":"0xc1B52dfdF885F3f275429f34006C2F7Ad8fCb96E",
//   "nonfungibleTokenPositionDescriptorAddressV1_3_0":"0xc6a659ee0FAC8D61431776E5D9573Baf057Cd020",
//   "descriptorProxyAddress":"0xCdE6C1953d5Da7f78Dd91784227B1F9aF109c40F",
//   "nonfungibleTokenPositionManagerAddress":"0x9C8D29B9e02A22704dFC986C385b1eB298B83Acf",
//   "v3MigratorAddress":"0x06bbc9b0dD1Ad3C0F965B9c421919Df20b4583dE",
//   "v3StakerAddress":"0xf37252e941F5Fb78AFd9dA971344cC2A7260D4E6",
//   "quoterV2Address":"0x9A037Bf3c6E35a4FcB2a94DbbFC8013CFc9FF50a",
//   "swapRouter02":"0x5Cf0020FEc05770cadF64fe97a915f100d541869"
// }

const BTTC_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xE12b00681dD2e90f51d9Edf55CE1A7D171338165',
  multicallAddress: '0xF20200B941Cfee64D6e07f2abe75887bfC2a8a0D',
  quoterAddress: '0x9A037Bf3c6E35a4FcB2a94DbbFC8013CFc9FF50a',
  v3MigratorAddress: '0x06bbc9b0dD1Ad3C0F965B9c421919Df20b4583dE',
  nonfungiblePositionManagerAddress: '0x9C8D29B9e02A22704dFC986C385b1eB298B83Acf',
  tickLensAddress: '0x07685F75c6172DB0Dd9a03Fcc3258d6Ade0F370d',
  swapRouter02Address: '0x5Cf0020FEc05770cadF64fe97a915f100d541869',
  v1MixedRouteQuoterAddress: '0x956927a62F4E6066e760560a86c305E81A38F0d3'
}
const FTM_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x7928a2c48754501f3a8064765ECaE541daE5c3E6',
  multicallAddress: '0x96a7F0E4905F39508b17Faef5aC456C72a4E1319',
  tickLensAddress: '0xbaA8353CC9d02733eF12f9556ed999521f6E554c',
  nonfungiblePositionManagerAddress: '0xb39d21718e24DE36fDD8c5C73e928B5EFF33d6C2',
  v3MigratorAddress: '0x07F004c39b5628107860574F30902A995824f486',
  quoterAddress: '0xB9507f2ED171D52c5c2EFaeAbdE440d264504A92',
  swapRouter02Address: '0x40F70B72796C30f355dF859B2c8F94f18c38AdF8',
  v1MixedRouteQuoterAddress: '0x5F2C0cB92c064d54b2eA086327010aEA13B2fA01'
}
const EON_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x7928a2c48754501f3a8064765ECaE541daE5c3E6',
  multicallAddress: '0x96a7F0E4905F39508b17Faef5aC456C72a4E1319',
  tickLensAddress: '0xbaA8353CC9d02733eF12f9556ed999521f6E554c',
  nonfungiblePositionManagerAddress: '0xb39d21718e24DE36fDD8c5C73e928B5EFF33d6C2',
  v3MigratorAddress: '0x07F004c39b5628107860574F30902A995824f486',
  quoterAddress: '0xB9507f2ED171D52c5c2EFaeAbdE440d264504A92',
  swapRouter02Address: '0x40F70B72796C30f355dF859B2c8F94f18c38AdF8',
  v1MixedRouteQuoterAddress: '0xC87Bb454A49eaBcA632B80d5faF40CDBe410EeC2'
}


// "v3CoreFactoryAddress":"0x025CF7E9054D563A5adb12cEC7f0F189c15378a0",
// "multicall2Address":"0xD6fFB889fe82FBCF6141A75D97B1960b67603D79",
// "proxyAdminAddress":"0xbaA8353CC9d02733eF12f9556ed999521f6E554c",
// "tickLensAddress":"0x0057CB6fE6a312AC29d60256299F2De425Af734d",
// "nftDescriptorLibraryAddressV1_3_0":"0x4237D0E559237AC718890EbC7698E5525DB48238",
// "nonfungibleTokenPositionDescriptorAddressV1_3_0":"0xaeE05d74c00c8aFCe2A39496FE22cEA3c7Adbc11",
// "descriptorProxyAddress":"0xb39d21718e24DE36fDD8c5C73e928B5EFF33d6C2",
// "nonfungibleTokenPositionManagerAddress":"0x07F004c39b5628107860574F30902A995824f486",
// "v3MigratorAddress":"0xBc3c672EEEB4e78890bF56B903d51D91671b437B",
// "v3StakerAddress":"0xB9507f2ED171D52c5c2EFaeAbdE440d264504A92",
// "quoterV2Address":"0x40F70B72796C30f355dF859B2c8F94f18c38AdF8",
// "swapRouter02":"0x82Bc9D9096b18E672f4d864be5a0333FB6958155"
// MixedRouteQuoterV1: 0xe7005a4Fa0260022149772EA86449431B4A9e641
const BERA_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x025CF7E9054D563A5adb12cEC7f0F189c15378a0',
  multicallAddress: '0xD6fFB889fe82FBCF6141A75D97B1960b67603D79',
  tickLensAddress: '0x0057CB6fE6a312AC29d60256299F2De425Af734d',
  nonfungiblePositionManagerAddress: '0x07F004c39b5628107860574F30902A995824f486',
  v3MigratorAddress: '0xBc3c672EEEB4e78890bF56B903d51D91671b437B',
  quoterAddress: '0x40F70B72796C30f355dF859B2c8F94f18c38AdF8',
  swapRouter02Address: '0x82Bc9D9096b18E672f4d864be5a0333FB6958155',
  v1MixedRouteQuoterAddress: '0xe7005a4Fa0260022149772EA86449431B4A9e641'
}

const GOAT_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xb39d21718e24DE36fDD8c5C73e928B5EFF33d6C2',
  multicallAddress: '0x40F70B72796C30f355dF859B2c8F94f18c38AdF8',
  tickLensAddress: '0x0D30331D462a30E344ee599B7483E313D63fD42A',
  nonfungiblePositionManagerAddress: '0x60050E4a491b24ADF36Fe184f994dE985641c747',
  v3MigratorAddress: '0x44FD0e3a5DcE52de0E8628993b99C7dcF7e372Db',
  quoterAddress: '0x963eaDFE636AEdce3320391C133510593465F965',
  swapRouter02Address: '0x2327f9A037C8C44744dCD6D135633DA466576D72',
  v1MixedRouteQuoterAddress: '0x621071f64AEa3dF5B6E4C0ad060a95E36660a48F'
}

//   "v3CoreFactoryAddress": "0x7928a2c48754501f3a8064765ECaE541daE5c3E6",
//   "multicall2Address":"0x96a7F0E4905F39508b17Faef5aC456C72a4E1319",
//   "proxyAdminAddress":"0xD6fFB889fe82FBCF6141A75D97B1960b67603D79",
//   "tickLensAddress":"0xbaA8353CC9d02733eF12f9556ed999521f6E554c",
//   "nftDescriptorLibraryAddressV1_3_0":"0x0057CB6fE6a312AC29d60256299F2De425Af734d",
//   "nonfungibleTokenPositionDescriptorAddressV1_3_0":"0x4237D0E559237AC718890EbC7698E5525DB48238",
//   "descriptorProxyAddress":"0xaeE05d74c00c8aFCe2A39496FE22cEA3c7Adbc11",
//   "nonfungibleTokenPositionManagerAddress":"0xb39d21718e24DE36fDD8c5C73e928B5EFF33d6C2",
//   "v3MigratorAddress":"0x07F004c39b5628107860574F30902A995824f486",
//   "v3StakerAddress":"0x9c04f7a1506aBDDe1A3Bb8aB1a2Da520bDF79E68",
//   "quoterV2Address":"0xB9507f2ED171D52c5c2EFaeAbdE440d264504A92",
//   "swapRouter02":"0x40F70B72796C30f355dF859B2c8F94f18c38AdF8"
//    MixedRouteQuoterV1: 0xa7B257019fc65Be804fd5A2Aa2AFe64cBC9E7d37
const SONIC_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x7928a2c48754501f3a8064765ECaE541daE5c3E6',
  multicallAddress: '0x96a7F0E4905F39508b17Faef5aC456C72a4E1319',
  tickLensAddress: '0xbaA8353CC9d02733eF12f9556ed999521f6E554c',
  nonfungiblePositionManagerAddress: '0xb39d21718e24DE36fDD8c5C73e928B5EFF33d6C2',
  v3MigratorAddress: '0x07F004c39b5628107860574F30902A995824f486',
  quoterAddress: '0xB9507f2ED171D52c5c2EFaeAbdE440d264504A92',
  swapRouter02Address: '0x40F70B72796C30f355dF859B2c8F94f18c38AdF8',
  v1MixedRouteQuoterAddress: '0xa7B257019fc65Be804fd5A2Aa2AFe64cBC9E7d37',
}


export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.MAINNET]: MAINNET_ADDRESSES,
  [ChainId.OPTIMISM]: OPTIMISM_ADDRESSES,
  [ChainId.ARBITRUM_ONE]: ARBITRUM_ONE_ADDRESSES,
  [ChainId.POLYGON]: POLYGON_ADDRESSES,
  [ChainId.POLYGON_MUMBAI]: POLYGON_ADDRESSES,
  [ChainId.GOERLI]: GOERLI_ADDRESSES,
  [ChainId.CELO]: CELO_ADDRESSES,
  [ChainId.CELO_ALFAJORES]: CELO_ADDRESSES,
  [ChainId.BNB]: BNB_ADDRESSES,
  [ChainId.OPTIMISM_GOERLI]: OPTIMISM_GOERLI_ADDRESSES,
  [ChainId.ARBITRUM_GOERLI]: ARBITRUM_GOERLI_ADDRESSES,
  [ChainId.SEPOLIA]: SEPOLIA_ADDRESSES,
  [ChainId.AVALANCHE]: AVALANCHE_ADDRESSES,
  [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_GOERLI]: BASE_GOERLI_ADDRESSES,
  [ChainId.BIT_TORRENT_MAINNET]: BTTC_ADDRESSES,
  [ChainId.FANTOM]: FTM_ADDRESSES,
  [ChainId.EON]: EON_ADDRESSES,
  [ChainId.BERA_TESTNET]: BERA_TESTNET_ADDRESSES,
  [ChainId.GOAT_TESTNET]: GOAT_TESTNET_ADDRESSES,
  [ChainId.SONIC_TESTNET]: SONIC_TESTNET_ADDRESSES,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6'
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3'
}

export const TIMELOCK_ADDRESSES: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8'
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e')
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd'
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (chainId == ChainId.BNB) {
    return CHAIN_TO_ADDRESSES_MAP[chainId].swapRouter02Address
  }
  return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
}
