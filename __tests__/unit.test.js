// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number 1', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number 2', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('hello@abc.org')).toBe(true);
});

test('invalid email 1', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail('hello@abc')).toBe(false);
});

test('valid strong password 1', () => {
  expect(isStrongPassword('Abcd_123')).toBe(true);
});

test('valid strong password 2', () => {
  expect(isStrongPassword('a123')).toBe(true);
});

test('invalid strong password 1', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('invalid strong password 2', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

test('valid date 1', () => {
  expect(isDate('1/1/2024')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('invalid date 1', () => {
  expect(isDate('2024/12/25')).toBe(false);
});

test('invalid date 2', () => {
  expect(isDate('12-25-2024')).toBe(false);
});

test('valid hex color 1', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid hex color 2', () => {
  expect(isHexColor('#12ab3F')).toBe(true);
});

test('invalid hex color 1', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('invalid hex color 2', () => {
  expect(isHexColor('12345')).toBe(false);
});