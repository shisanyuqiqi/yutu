"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ChainId: () => ChainId,
  ERC20Token: () => ERC20Token,
  FACTORY_ADDRESS: () => FACTORY_ADDRESS,
  FACTORY_ADDRESS_MAP: () => FACTORY_ADDRESS_MAP,
  INIT_CODE_HASH: () => INIT_CODE_HASH,
  INIT_CODE_HASH_MAP: () => INIT_CODE_HASH_MAP,
  JSBI: () => import_jsbi2.default,
  NATIVE: () => NATIVE,
  Native: () => Native,
  ONE_HUNDRED_PERCENT: () => ONE_HUNDRED_PERCENT,
  Pair: () => Pair,
  Route: () => Route,
  Router: () => Router,
  Trade: () => Trade,
  WBNB: () => WBNB,
  WETH9: () => WETH9,
  WNATIVE: () => WNATIVE,
  ZERO_PERCENT: () => ZERO_PERCENT,
  computePairAddress: () => computePairAddress,
  inputOutputComparator: () => inputOutputComparator,
  isTradeBetter: () => isTradeBetter,
  tradeComparator: () => tradeComparator
});
module.exports = __toCommonJS(src_exports);
var import_jsbi2 = __toESM(require("jsbi"));

// src/constants.ts
var import_swap_sdk_core2 = require("@pancakeswap/swap-sdk-core");

// src/entities/token.ts
var import_swap_sdk_core = require("@pancakeswap/swap-sdk-core");

// src/utils.ts
var import_address = require("@ethersproject/address");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_tiny_warning = __toESM(require("tiny-warning"));
function validateAndParseAddress(address) {
  try {
    const checksummedAddress = (0, import_address.getAddress)(address);
    (0, import_tiny_warning.default)(address === checksummedAddress, `${address} is not checksummed.`);
    return checksummedAddress;
  } catch (error) {
    (0, import_tiny_invariant.default)(false, `${address} is not a valid address.`);
  }
}

// src/entities/token.ts
var ERC20Token = class extends import_swap_sdk_core.Token {
  constructor(chainId, address, decimals, symbol, name, projectLink) {
    super(chainId, validateAndParseAddress(address), decimals, symbol, name, projectLink);
  }
};

// src/constants.ts
var ChainId = /* @__PURE__ */ ((ChainId2) => {
  ChainId2[ChainId2["ETHEREUM"] = 1] = "ETHEREUM";
  ChainId2[ChainId2["GOERLI"] = 5] = "GOERLI";
  ChainId2[ChainId2["BSC"] = 56] = "BSC";
  ChainId2[ChainId2["BSC_TESTNET"] = 97] = "BSC_TESTNET";
  return ChainId2;
})(ChainId || {});
var ZERO_PERCENT = new import_swap_sdk_core2.Percent("0");
var ONE_HUNDRED_PERCENT = new import_swap_sdk_core2.Percent("1");
var FACTORY_ADDRESS = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
var FACTORY_ADDRESS_ETH = "0x1097053Fd2ea711dad45caCcc45EfF7548fCB362";
var FACTORY_ADDRESS_MAP = {
  [1 /* ETHEREUM */]: FACTORY_ADDRESS_ETH,
  [5 /* GOERLI */]: FACTORY_ADDRESS_ETH,
  [56 /* BSC */]: FACTORY_ADDRESS,
  [97 /* BSC_TESTNET */]: "0x6725f303b657a9451d8ba641348b6761a6cc7a17"
};
var INIT_CODE_HASH = "0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5";
var INIT_CODE_HASH_ETH = "0x57224589c67f3f30a6b0d7a1b54cf3153ab84563bc609ef41dfb34f8b2974d2d";
var INIT_CODE_HASH_MAP = {
  [1 /* ETHEREUM */]: INIT_CODE_HASH_ETH,
  [5 /* GOERLI */]: INIT_CODE_HASH_ETH,
  [56 /* BSC */]: INIT_CODE_HASH,
  [97 /* BSC_TESTNET */]: "0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66"
};
var WETH9 = {
  [1 /* ETHEREUM */]: new ERC20Token(1 /* ETHEREUM */, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "WETH", "Wrapped Ether", "https://weth.io"),
  [5 /* GOERLI */]: new ERC20Token(5 /* GOERLI */, "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6", 18, "WETH", "Wrapped Ether", "https://weth.io")
};
var WBNB = {
  [1 /* ETHEREUM */]: new ERC20Token(1 /* ETHEREUM */, "0x418D75f65a02b3D53B2418FB8E1fe493759c7605", 18, "WBNB", "Wrapped BNB", "https://www.binance.org"),
  [56 /* BSC */]: new ERC20Token(56 /* BSC */, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB", "https://www.binance.org"),
  [97 /* BSC_TESTNET */]: new ERC20Token(97 /* BSC_TESTNET */, "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", 18, "WBNB", "Wrapped BNB", "https://www.binance.org")
};
var WNATIVE = {
  [1 /* ETHEREUM */]: WETH9[1 /* ETHEREUM */],
  [5 /* GOERLI */]: WETH9[5 /* GOERLI */],
  [56 /* BSC */]: WBNB[56 /* BSC */],
  [97 /* BSC_TESTNET */]: WBNB[97 /* BSC_TESTNET */]
};
var NATIVE = {
  [1 /* ETHEREUM */]: { name: "Ether", symbol: "ETH", decimals: 18 },
  [5 /* GOERLI */]: { name: "Goerli Ether", symbol: "GOR", decimals: 18 },
  [56 /* BSC */]: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18
  },
  [97 /* BSC_TESTNET */]: {
    name: "Binance Chain Native Token",
    symbol: "tBNB",
    decimals: 18
  }
};

// src/trade.ts
function isTradeBetter(tradeA, tradeB, minimumDelta = ZERO_PERCENT) {
  if (tradeA && !tradeB)
    return false;
  if (tradeB && !tradeA)
    return true;
  if (!tradeA || !tradeB)
    return void 0;
  if (tradeA.tradeType !== tradeB.tradeType || !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) || !tradeA.outputAmount.currency.equals(tradeB.outputAmount.currency)) {
    throw new Error("Trades are not comparable");
  }
  if (minimumDelta.equalTo(ZERO_PERCENT)) {
    return tradeA.executionPrice.lessThan(tradeB.executionPrice);
  }
  return tradeA.executionPrice.asFraction.multiply(minimumDelta.add(ONE_HUNDRED_PERCENT)).lessThan(tradeB.executionPrice);
}

// src/entities/pair.ts
var import_swap_sdk_core3 = require("@pancakeswap/swap-sdk-core");
var import_address2 = require("@ethersproject/address");
var import_solidity = require("@ethersproject/solidity");
var import_jsbi = __toESM(require("jsbi"));
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var PAIR_ADDRESS_CACHE = {};
var composeKey = (token0, token1) => `${token0.chainId}-${token0.address}-${token1.address}`;
var computePairAddress = ({
  factoryAddress,
  tokenA,
  tokenB
}) => {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];
  const key = composeKey(token0, token1);
  if ((PAIR_ADDRESS_CACHE == null ? void 0 : PAIR_ADDRESS_CACHE[key]) === void 0) {
    PAIR_ADDRESS_CACHE = {
      ...PAIR_ADDRESS_CACHE,
      [key]: (0, import_address2.getCreate2Address)(factoryAddress, (0, import_solidity.keccak256)(["bytes"], [(0, import_solidity.pack)(["address", "address"], [token0.address, token1.address])]), INIT_CODE_HASH_MAP[token0.chainId])
    };
  }
  return PAIR_ADDRESS_CACHE[key];
};
var Pair = class {
  static getAddress(tokenA, tokenB) {
    return computePairAddress({ factoryAddress: FACTORY_ADDRESS_MAP[tokenA.chainId], tokenA, tokenB });
  }
  constructor(currencyAmountA, tokenAmountB) {
    const tokenAmounts = currencyAmountA.currency.sortsBefore(tokenAmountB.currency) ? [currencyAmountA, tokenAmountB] : [tokenAmountB, currencyAmountA];
    this.liquidityToken = new ERC20Token(tokenAmounts[0].currency.chainId, Pair.getAddress(tokenAmounts[0].currency, tokenAmounts[1].currency), 18, "Cake-LP", "Pancake LPs");
    this.tokenAmounts = tokenAmounts;
  }
  involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  get token0Price() {
    const result = this.tokenAmounts[1].divide(this.tokenAmounts[0]);
    return new import_swap_sdk_core3.Price(this.token0, this.token1, result.denominator, result.numerator);
  }
  get token1Price() {
    const result = this.tokenAmounts[0].divide(this.tokenAmounts[1]);
    return new import_swap_sdk_core3.Price(this.token1, this.token0, result.denominator, result.numerator);
  }
  priceOf(token) {
    (0, import_tiny_invariant2.default)(this.involvesToken(token), "TOKEN");
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  get chainId() {
    return this.token0.chainId;
  }
  get token0() {
    return this.tokenAmounts[0].currency;
  }
  get token1() {
    return this.tokenAmounts[1].currency;
  }
  get reserve0() {
    return this.tokenAmounts[0];
  }
  get reserve1() {
    return this.tokenAmounts[1];
  }
  reserveOf(token) {
    (0, import_tiny_invariant2.default)(this.involvesToken(token), "TOKEN");
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  }
  getOutputAmount(inputAmount) {
    (0, import_tiny_invariant2.default)(this.involvesToken(inputAmount.currency), "TOKEN");
    if (import_jsbi.default.equal(this.reserve0.quotient, import_swap_sdk_core3.ZERO) || import_jsbi.default.equal(this.reserve1.quotient, import_swap_sdk_core3.ZERO)) {
      throw new import_swap_sdk_core3.InsufficientReservesError();
    }
    const inputReserve = this.reserveOf(inputAmount.currency);
    const outputReserve = this.reserveOf(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
    const inputAmountWithFee = import_jsbi.default.multiply(inputAmount.quotient, import_swap_sdk_core3._9975);
    const numerator = import_jsbi.default.multiply(inputAmountWithFee, outputReserve.quotient);
    const denominator = import_jsbi.default.add(import_jsbi.default.multiply(inputReserve.quotient, import_swap_sdk_core3._10000), inputAmountWithFee);
    const outputAmount = import_swap_sdk_core3.CurrencyAmount.fromRawAmount(inputAmount.currency.equals(this.token0) ? this.token1 : this.token0, import_jsbi.default.divide(numerator, denominator));
    if (import_jsbi.default.equal(outputAmount.quotient, import_swap_sdk_core3.ZERO)) {
      throw new import_swap_sdk_core3.InsufficientInputAmountError();
    }
    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  }
  getInputAmount(outputAmount) {
    (0, import_tiny_invariant2.default)(this.involvesToken(outputAmount.currency), "TOKEN");
    if (import_jsbi.default.equal(this.reserve0.quotient, import_swap_sdk_core3.ZERO) || import_jsbi.default.equal(this.reserve1.quotient, import_swap_sdk_core3.ZERO) || import_jsbi.default.greaterThanOrEqual(outputAmount.quotient, this.reserveOf(outputAmount.currency).quotient)) {
      throw new import_swap_sdk_core3.InsufficientReservesError();
    }
    const outputReserve = this.reserveOf(outputAmount.currency);
    const inputReserve = this.reserveOf(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0);
    const numerator = import_jsbi.default.multiply(import_jsbi.default.multiply(inputReserve.quotient, outputAmount.quotient), import_swap_sdk_core3._10000);
    const denominator = import_jsbi.default.multiply(import_jsbi.default.subtract(outputReserve.quotient, outputAmount.quotient), import_swap_sdk_core3._9975);
    const inputAmount = import_swap_sdk_core3.CurrencyAmount.fromRawAmount(outputAmount.currency.equals(this.token0) ? this.token1 : this.token0, import_jsbi.default.add(import_jsbi.default.divide(numerator, denominator), import_swap_sdk_core3.ONE));
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  }
  getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    (0, import_tiny_invariant2.default)(totalSupply.currency.equals(this.liquidityToken), "LIQUIDITY");
    const tokenAmounts = tokenAmountA.currency.sortsBefore(tokenAmountB.currency) ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    (0, import_tiny_invariant2.default)(tokenAmounts[0].currency.equals(this.token0) && tokenAmounts[1].currency.equals(this.token1), "TOKEN");
    let liquidity;
    if (import_jsbi.default.equal(totalSupply.quotient, import_swap_sdk_core3.ZERO)) {
      liquidity = import_jsbi.default.subtract((0, import_swap_sdk_core3.sqrt)(import_jsbi.default.multiply(tokenAmounts[0].quotient, tokenAmounts[1].quotient)), import_swap_sdk_core3.MINIMUM_LIQUIDITY);
    } else {
      const amount0 = import_jsbi.default.divide(import_jsbi.default.multiply(tokenAmounts[0].quotient, totalSupply.quotient), this.reserve0.quotient);
      const amount1 = import_jsbi.default.divide(import_jsbi.default.multiply(tokenAmounts[1].quotient, totalSupply.quotient), this.reserve1.quotient);
      liquidity = import_jsbi.default.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
    }
    if (!import_jsbi.default.greaterThan(liquidity, import_swap_sdk_core3.ZERO)) {
      throw new import_swap_sdk_core3.InsufficientInputAmountError();
    }
    return import_swap_sdk_core3.CurrencyAmount.fromRawAmount(this.liquidityToken, liquidity);
  }
  getLiquidityValue(token, totalSupply, liquidity, feeOn = false, kLast) {
    (0, import_tiny_invariant2.default)(this.involvesToken(token), "TOKEN");
    (0, import_tiny_invariant2.default)(totalSupply.currency.equals(this.liquidityToken), "TOTAL_SUPPLY");
    (0, import_tiny_invariant2.default)(liquidity.currency.equals(this.liquidityToken), "LIQUIDITY");
    (0, import_tiny_invariant2.default)(import_jsbi.default.lessThanOrEqual(liquidity.quotient, totalSupply.quotient), "LIQUIDITY");
    let totalSupplyAdjusted;
    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      (0, import_tiny_invariant2.default)(!!kLast, "K_LAST");
      const kLastParsed = import_jsbi.default.BigInt(kLast);
      if (!import_jsbi.default.equal(kLastParsed, import_swap_sdk_core3.ZERO)) {
        const rootK = (0, import_swap_sdk_core3.sqrt)(import_jsbi.default.multiply(this.reserve0.quotient, this.reserve1.quotient));
        const rootKLast = (0, import_swap_sdk_core3.sqrt)(kLastParsed);
        if (import_jsbi.default.greaterThan(rootK, rootKLast)) {
          const numerator = import_jsbi.default.multiply(totalSupply.quotient, import_jsbi.default.subtract(rootK, rootKLast));
          const denominator = import_jsbi.default.add(import_jsbi.default.multiply(rootK, import_swap_sdk_core3.FIVE), rootKLast);
          const feeLiquidity = import_jsbi.default.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(import_swap_sdk_core3.CurrencyAmount.fromRawAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }
    return import_swap_sdk_core3.CurrencyAmount.fromRawAmount(token, import_jsbi.default.divide(import_jsbi.default.multiply(liquidity.quotient, this.reserveOf(token).quotient), totalSupplyAdjusted.quotient));
  }
};

// src/entities/route.ts
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_swap_sdk_core4 = require("@pancakeswap/swap-sdk-core");
var Route = class {
  constructor(pairs, input, output) {
    this._midPrice = null;
    (0, import_tiny_invariant3.default)(pairs.length > 0, "PAIRS");
    const chainId = pairs[0].chainId;
    (0, import_tiny_invariant3.default)(pairs.every((pair) => pair.chainId === chainId), "CHAIN_IDS");
    const wrappedInput = input.wrapped;
    (0, import_tiny_invariant3.default)(pairs[0].involvesToken(wrappedInput), "INPUT");
    (0, import_tiny_invariant3.default)(typeof output === "undefined" || pairs[pairs.length - 1].involvesToken(output.wrapped), "OUTPUT");
    const path = [wrappedInput];
    for (const [i, pair] of pairs.entries()) {
      const currentInput = path[i];
      (0, import_tiny_invariant3.default)(currentInput.equals(pair.token0) || currentInput.equals(pair.token1), "PATH");
      const output2 = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;
      path.push(output2);
    }
    this.pairs = pairs;
    this.path = path;
    this.input = input;
    this.output = output;
  }
  get midPrice() {
    if (this._midPrice !== null)
      return this._midPrice;
    const prices = [];
    for (const [i, pair] of this.pairs.entries()) {
      prices.push(this.path[i].equals(pair.token0) ? new import_swap_sdk_core4.Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.quotient, pair.reserve1.quotient) : new import_swap_sdk_core4.Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.quotient, pair.reserve0.quotient));
    }
    const reduced = prices.slice(1).reduce((accumulator, currentValue) => accumulator.multiply(currentValue), prices[0]);
    return this._midPrice = new import_swap_sdk_core4.Price(this.input, this.output, reduced.denominator, reduced.numerator);
  }
  get chainId() {
    return this.pairs[0].chainId;
  }
};

// src/entities/trade.ts
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_swap_sdk_core5 = require("@pancakeswap/swap-sdk-core");
function inputOutputComparator(a, b) {
  (0, import_tiny_invariant4.default)(a.inputAmount.currency.equals(b.inputAmount.currency), "INPUT_CURRENCY");
  (0, import_tiny_invariant4.default)(a.outputAmount.currency.equals(b.outputAmount.currency), "OUTPUT_CURRENCY");
  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    }
    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    }
    return 1;
  }
  if (a.outputAmount.lessThan(b.outputAmount)) {
    return 1;
  }
  return -1;
}
function tradeComparator(a, b) {
  const ioComp = inputOutputComparator(a, b);
  if (ioComp !== 0) {
    return ioComp;
  }
  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  }
  if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  }
  return a.route.path.length - b.route.path.length;
}
var Trade = class {
  static exactIn(route, amountIn) {
    return new Trade(route, amountIn, import_swap_sdk_core5.TradeType.EXACT_INPUT);
  }
  static exactOut(route, amountOut) {
    return new Trade(route, amountOut, import_swap_sdk_core5.TradeType.EXACT_OUTPUT);
  }
  constructor(route, amount, tradeType) {
    this.route = route;
    this.tradeType = tradeType;
    const tokenAmounts = new Array(route.path.length);
    if (tradeType === import_swap_sdk_core5.TradeType.EXACT_INPUT) {
      (0, import_tiny_invariant4.default)(amount.currency.equals(route.input), "INPUT");
      tokenAmounts[0] = amount.wrapped;
      for (let i = 0; i < route.path.length - 1; i++) {
        const pair = route.pairs[i];
        const [outputAmount] = pair.getOutputAmount(tokenAmounts[i]);
        tokenAmounts[i + 1] = outputAmount;
      }
      this.inputAmount = import_swap_sdk_core5.CurrencyAmount.fromFractionalAmount(route.input, amount.numerator, amount.denominator);
      this.outputAmount = import_swap_sdk_core5.CurrencyAmount.fromFractionalAmount(route.output, tokenAmounts[tokenAmounts.length - 1].numerator, tokenAmounts[tokenAmounts.length - 1].denominator);
    } else {
      (0, import_tiny_invariant4.default)(amount.currency.equals(route.output), "OUTPUT");
      tokenAmounts[tokenAmounts.length - 1] = amount.wrapped;
      for (let i = route.path.length - 1; i > 0; i--) {
        const pair = route.pairs[i - 1];
        const [inputAmount] = pair.getInputAmount(tokenAmounts[i]);
        tokenAmounts[i - 1] = inputAmount;
      }
      this.inputAmount = import_swap_sdk_core5.CurrencyAmount.fromFractionalAmount(route.input, tokenAmounts[0].numerator, tokenAmounts[0].denominator);
      this.outputAmount = import_swap_sdk_core5.CurrencyAmount.fromFractionalAmount(route.output, amount.numerator, amount.denominator);
    }
    this.executionPrice = new import_swap_sdk_core5.Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.quotient, this.outputAmount.quotient);
    this.priceImpact = (0, import_swap_sdk_core5.computePriceImpact)(route.midPrice, this.inputAmount, this.outputAmount);
  }
  minimumAmountOut(slippageTolerance) {
    (0, import_tiny_invariant4.default)(!slippageTolerance.lessThan(import_swap_sdk_core5.ZERO), "SLIPPAGE_TOLERANCE");
    if (this.tradeType === import_swap_sdk_core5.TradeType.EXACT_OUTPUT) {
      return this.outputAmount;
    }
    const slippageAdjustedAmountOut = new import_swap_sdk_core5.Fraction(import_swap_sdk_core5.ONE).add(slippageTolerance).invert().multiply(this.outputAmount.quotient).quotient;
    return import_swap_sdk_core5.CurrencyAmount.fromRawAmount(this.outputAmount.currency, slippageAdjustedAmountOut);
  }
  maximumAmountIn(slippageTolerance) {
    (0, import_tiny_invariant4.default)(!slippageTolerance.lessThan(import_swap_sdk_core5.ZERO), "SLIPPAGE_TOLERANCE");
    if (this.tradeType === import_swap_sdk_core5.TradeType.EXACT_INPUT) {
      return this.inputAmount;
    }
    const slippageAdjustedAmountIn = new import_swap_sdk_core5.Fraction(import_swap_sdk_core5.ONE).add(slippageTolerance).multiply(this.inputAmount.quotient).quotient;
    return import_swap_sdk_core5.CurrencyAmount.fromRawAmount(this.inputAmount.currency, slippageAdjustedAmountIn);
  }
  static bestTradeExactIn(pairs, currencyAmountIn, currencyOut, { maxNumResults = 3, maxHops = 3 } = {}, currentPairs = [], nextAmountIn = currencyAmountIn, bestTrades = []) {
    (0, import_tiny_invariant4.default)(pairs.length > 0, "PAIRS");
    (0, import_tiny_invariant4.default)(maxHops > 0, "MAX_HOPS");
    (0, import_tiny_invariant4.default)(currencyAmountIn === nextAmountIn || currentPairs.length > 0, "INVALID_RECURSION");
    const amountIn = nextAmountIn.wrapped;
    const tokenOut = currencyOut.wrapped;
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      if (!pair.token0.equals(amountIn.currency) && !pair.token1.equals(amountIn.currency))
        continue;
      if (pair.reserve0.equalTo(import_swap_sdk_core5.ZERO) || pair.reserve1.equalTo(import_swap_sdk_core5.ZERO))
        continue;
      let amountOut;
      try {
        ;
        [amountOut] = pair.getOutputAmount(amountIn);
      } catch (error) {
        if (error.isInsufficientInputAmountError) {
          continue;
        }
        throw error;
      }
      if (amountOut.currency.equals(tokenOut)) {
        (0, import_swap_sdk_core5.sortedInsert)(bestTrades, new Trade(new Route([...currentPairs, pair], currencyAmountIn.currency, currencyOut), currencyAmountIn, import_swap_sdk_core5.TradeType.EXACT_INPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        const pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length));
        Trade.bestTradeExactIn(pairsExcludingThisPair, currencyAmountIn, currencyOut, {
          maxNumResults,
          maxHops: maxHops - 1
        }, [...currentPairs, pair], amountOut, bestTrades);
      }
    }
    return bestTrades;
  }
  worstExecutionPrice(slippageTolerance) {
    return new import_swap_sdk_core5.Price(this.inputAmount.currency, this.outputAmount.currency, this.maximumAmountIn(slippageTolerance).quotient, this.minimumAmountOut(slippageTolerance).quotient);
  }
  static bestTradeExactOut(pairs, currencyIn, currencyAmountOut, { maxNumResults = 3, maxHops = 3 } = {}, currentPairs = [], nextAmountOut = currencyAmountOut, bestTrades = []) {
    (0, import_tiny_invariant4.default)(pairs.length > 0, "PAIRS");
    (0, import_tiny_invariant4.default)(maxHops > 0, "MAX_HOPS");
    (0, import_tiny_invariant4.default)(currencyAmountOut === nextAmountOut || currentPairs.length > 0, "INVALID_RECURSION");
    const amountOut = nextAmountOut.wrapped;
    const tokenIn = currencyIn.wrapped;
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      if (!pair.token0.equals(amountOut.currency) && !pair.token1.equals(amountOut.currency))
        continue;
      if (pair.reserve0.equalTo(import_swap_sdk_core5.ZERO) || pair.reserve1.equalTo(import_swap_sdk_core5.ZERO))
        continue;
      let amountIn;
      try {
        ;
        [amountIn] = pair.getInputAmount(amountOut);
      } catch (error) {
        if (error.isInsufficientReservesError) {
          continue;
        }
        throw error;
      }
      if (amountIn.currency.equals(tokenIn)) {
        (0, import_swap_sdk_core5.sortedInsert)(bestTrades, new Trade(new Route([pair, ...currentPairs], currencyIn, currencyAmountOut.currency), currencyAmountOut, import_swap_sdk_core5.TradeType.EXACT_OUTPUT), maxNumResults, tradeComparator);
      } else if (maxHops > 1 && pairs.length > 1) {
        const pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length));
        Trade.bestTradeExactOut(pairsExcludingThisPair, currencyIn, currencyAmountOut, {
          maxNumResults,
          maxHops: maxHops - 1
        }, [pair, ...currentPairs], amountIn, bestTrades);
      }
    }
    return bestTrades;
  }
};

// src/entities/native.ts
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_swap_sdk_core6 = require("@pancakeswap/swap-sdk-core");
var _Native = class extends import_swap_sdk_core6.NativeCurrency {
  constructor({
    chainId,
    decimals,
    name,
    symbol
  }) {
    super(chainId, decimals, symbol, name);
  }
  get wrapped() {
    const wnative = WNATIVE[this.chainId];
    (0, import_tiny_invariant5.default)(!!wnative, "WRAPPED");
    return wnative;
  }
  static onChain(chainId) {
    if (chainId in this.cache) {
      return this.cache[chainId];
    }
    (0, import_tiny_invariant5.default)(!!NATIVE[chainId], "NATIVE_CURRENCY");
    const { decimals, name, symbol } = NATIVE[chainId];
    return this.cache[chainId] = new _Native({ chainId, decimals, symbol, name });
  }
  equals(other) {
    return other.isNative && other.chainId === this.chainId;
  }
};
var Native = _Native;
Native.cache = {};

// src/router.ts
var import_swap_sdk_core7 = require("@pancakeswap/swap-sdk-core");
var import_tiny_invariant6 = __toESM(require("tiny-invariant"));
function toHex(currencyAmount) {
  return `0x${currencyAmount.quotient.toString(16)}`;
}
var ZERO_HEX = "0x0";
var Router = class {
  constructor() {
  }
  static swapCallParameters(trade, options) {
    const etherIn = trade.inputAmount.currency.isNative;
    const etherOut = trade.outputAmount.currency.isNative;
    (0, import_tiny_invariant6.default)(!(etherIn && etherOut), "ETHER_IN_OUT");
    (0, import_tiny_invariant6.default)(!("ttl" in options) || options.ttl > 0, "TTL");
    const to = validateAndParseAddress(options.recipient);
    const amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    const amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    const path = trade.route.path.map((token) => token.address);
    const deadline = "ttl" in options ? `0x${(Math.floor(new Date().getTime() / 1e3) + options.ttl).toString(16)}` : `0x${options.deadline.toString(16)}`;
    const useFeeOnTransfer = Boolean(options.feeOnTransfer);
    let methodName;
    let args;
    let value;
    switch (trade.tradeType) {
      case import_swap_sdk_core7.TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer ? "swapExactETHForTokensSupportingFeeOnTransferTokens" : "swapExactETHForTokens";
          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? "swapExactTokensForETHSupportingFeeOnTransferTokens" : "swapExactTokensForETH";
          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? "swapExactTokensForTokensSupportingFeeOnTransferTokens" : "swapExactTokensForTokens";
          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }
        break;
      case import_swap_sdk_core7.TradeType.EXACT_OUTPUT:
        (0, import_tiny_invariant6.default)(!useFeeOnTransfer, "EXACT_OUT_FOT");
        if (etherIn) {
          methodName = "swapETHForExactTokens";
          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = "swapTokensForExactETH";
          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = "swapTokensForExactTokens";
          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }
        break;
    }
    return {
      methodName,
      args,
      value
    };
  }
};

// src/index.ts
__reExport(src_exports, require("@pancakeswap/swap-sdk-core"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChainId,
  ERC20Token,
  FACTORY_ADDRESS,
  FACTORY_ADDRESS_MAP,
  INIT_CODE_HASH,
  INIT_CODE_HASH_MAP,
  JSBI,
  NATIVE,
  Native,
  ONE_HUNDRED_PERCENT,
  Pair,
  Route,
  Router,
  Trade,
  WBNB,
  WETH9,
  WNATIVE,
  ZERO_PERCENT,
  computePairAddress,
  inputOutputComparator,
  isTradeBetter,
  tradeComparator
});
