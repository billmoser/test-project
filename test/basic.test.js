import { describe, expect, test } from '@jest/globals'
import { core, extensions } from '../index.js'

describe('core.js tests', () => {
  test('#core~foo test', () => {
    const val = core.foo('a')
    expect(val).toBe('I')
  })
})

describe('extensions.js tests', () => {
  test('#extensions~bar test', () => {
    let val = extensions.bar('a')
    expect(val).toBe('a')
    val = extensions.bar('c')
    expect(val).toBe('b')
  })
})
