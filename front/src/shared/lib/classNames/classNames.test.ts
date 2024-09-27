import { classNames } from "./classNames";

describe('classNames', () => {

    test('with only main class', () => {
        expect(classNames('header')).toBe('header')
    })

    test('with additional classes', () => {
        expect(classNames('header', ['visible', 'hidden'])).toBe('header visible hidden')
    })

    test('with mod classes', () => {
        expect(classNames('header', ['visible', 'hidden'], {['hover']: true, 'dark': false})).toBe('header visible hidden hover')
    })
    
    test('with undefined', () => {
        expect(classNames('header', undefined, {'hover': undefined, 'dark': true})).toBe('header dark')
    })

    test('without main class', () => {
        expect(classNames('', ['hidden'])).toBe('hidden')
    })
    
    test('main class = undefined', () => {
        expect(classNames(undefined, ['hidden'])).toBe('hidden')
    })
})