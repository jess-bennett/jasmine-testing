describe("fizzBuzz", function() {

    beforeEach(function() {
        fizz = new fizzBuzz();
    });

    describe("Check result", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it("should return FizzBuzz when called as fizzBuzz(30)", function() {
            var result = fizzBuzz(30)
            expect(result).toBe("FizzBuzz");
        });

        it("should return FizzBuzz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it("should return FizzBuzz when called as fizzBuzz(27)", function() {
            var result = fizzBuzz(27)
            expect(result).toBe("Fizz");
        });
    });

});