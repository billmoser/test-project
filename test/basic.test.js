import { core, extensions } from '../index.js'

test ('#core~foo test', () => {
    const val = core.foo('a')
    expect(val).toBe('I')
})

test ('#extensions~bar test', () => {
    let val = extensions.bar('a')
    expect(val).toBe('a')
    val = extensions.bar('c')
    expect(val).toBe('b')
})
