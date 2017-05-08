'use strict';

const myApp = require('../app/getPrime.js')

describe("Number Manipulation Functionality", function() {
	it("should return [ 2, 3, 5, 7 ] as prime numbers when input n is 10", function(){
		expect(myApp.getprimes(10)).toEqual([2, 3, 5, 7]);
	})
	it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97] as prime numbers when input value n is 100", function(){
		expect(myApp.getprimes(100)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);
	})
	it("should return [] as prime numbers when input n is 1", function(){
		expect(myApp.getprimes(1)).toEqual([]);
	})
	it("should return [] as prime numbers when input n is 0", function(){
		expect(myApp.getprimes(0)).toEqual([]);
	})
	it("should return [] as prime numbers when input n is -1", function(){
		expect(myApp.getprimes(-1)).toEqual([]);
	})
	it("should return [] as prime numbers when input n is 'a'", function(){
		expect(myApp.getprimes('a')).toEqual([]);
	})
	it("should return [] as prime numbers when input n is boolean value of true", function(){
		expect(myApp.getprimes('a')).toEqual([]);
	})
	it("should return [] as prime numbers when no value is input for n ", function(){
		expect(myApp.getprimes()).toEqual([]);
	})
	it("should return [] as prime numbers when input value n is an empty array []", function(){
		expect(myApp.getprimes([])).toEqual([]);
	})
	it("should return [] as prime numbers when input value n is an array of numbers [5,7,9]", function(){
		expect(myApp.getprimes([5,7,9])).toEqual([]);
	})
})