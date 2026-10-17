import { describe, it, expect } from 'vitest';
import { validateEmail, calculateTotal } from './main.js';

describe('validateEmail', () => {
    it('should return true for valid email', () => {
        expect(validateEmail('test@example.com')).toBe(true);
    });
    it('should return false for invalid email', () => {
        expect(validateEmail('invalid-email')).toBe(false);
    });
});

describe('calculateTotal', () => {
    it('should calculate total correctly', () => {
        const items = [{ price: 100, quantity: 2 }, { price: 50, quantity: 1 }];
        expect(calculateTotal(items)).toBe(250);
    });
    it('should throw error for non-array', () => {
        expect(() => calculateTotal('invalid')).toThrow('Items must be an array');
    });
});