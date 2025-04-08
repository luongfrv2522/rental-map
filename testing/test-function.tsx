import {expect, test} from "vitest"
import {formatPrice} from "@/lib/number-extension";

test('adds 1 + 2 to equal 3', () => {
  expect(formatPrice(1000)).toBe(1000)
})