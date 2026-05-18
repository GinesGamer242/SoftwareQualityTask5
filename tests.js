let expect;
let toRoman, toInt;

if (typeof window === 'undefined') {
  const chai = await import('chai');
  expect = chai.expect;
  const functions = await import('./script.js');
  toRoman = functions.toRoman;
  toInt = functions.toInt;
} else {
  expect = chai.expect;
  const functions = await import('./script.js');
  toRoman = functions.toRoman;
  toInt = functions.toInt;
}

describe('Domain Partitioning (Valid Partitions)', function() {
    it('TC-1: should convert 50 to "L"', function() {
        expect(toRoman(50)).to.equal('L');
    });

    it('TC-2: should convert 888 to "DCCCLXXXVIII"', function() {
        expect(toRoman(888)).to.equal('DCCCLXXXVIII');
    });

    it('TC-3: should convert Roman "D" to 500', function() {
        expect(toInt('D')).to.equal(500);
    });
  });

describe('Domain Partitioning (Invalid Partitions)', function() {
    it('TC-4: should return error for numbers too large (5000)', function() {
        expect(toRoman(5000)).to.equal('Invalid text');
    });

    it('TC-5: should return error for negative numbers (-10)', function() {
        expect(toRoman(-10)).to.equal('Invalid text');
    });

    it('TC-6: should return error for non-Roman characters ("G")', function() {
        expect(toInt('G')).to.equal('Invalid text');
    });

    it('TC-7: should return error for non-integer inputs (10.5)', function() {
        expect(toRoman(10.5)).to.equal('Invalid text'); 
    });
  });

describe('Boundary Testing', function() {
    it('TC-8: Minimum Valid (Int) 1 -> "I"', function() {
        expect(toRoman(1)).to.equal('I');
    });

    it('TC-9: Below Minimum (Int) 0 -> "Error"', function() {
        expect(toRoman(0)).to.equal('Invalid text');
    });

    it('TC-10: Maximum Valid (Int) 3999 -> "MMMCMXCIX"', function() {
        expect(toRoman(3999)).to.equal('MMMCMXCIX');
    });

    it('TC-11: Above Maximum (Int) 4000 -> "Error"', function() {
        expect(toRoman(4000)).to.equal('Invalid text');
    });

    it('TC-12: Minimum Valid (Roman) "I" -> 1', function() {
        expect(toInt('I')).to.equal(1);
    });

    it('TC-14: Maximum Valid (Roman) "MMMCMXCIX" -> 3999', function() {
        expect(toInt('MMMCMXCIX')).to.equal(3999);
    });

    it('TC-15: Above Maximum (Roman) "MMMM" -> "Error"', function() {
        expect(toInt('MMMM')).to.equal('Invalid text');
    });
  });

describe('Testing Matrix', function() {
    it('TC-16: Int-To-Roman "90" -> "XC"', function() {
        expect(toRoman(90)).to.equal('XC');
    });

    it('TC-17: Roman-To-Int "XC" -> 90', function() {
        expect(toInt('XC')).to.equal(90);
    });

    it('TC-18: Int-To-Roman "3000" -> "MMM"', function() {
        expect(toRoman(3000)).to.equal('MMM');
    });

    it('TC-19: Roman-To-Int "IIII" (Non-canonical) -> "Error"', function() {
        expect(toInt('IIII')).to.equal('Invalid text');
    });

    it('TC-20: Roman-To-Int "VX" (Invalid sequence) -> "Error"', function() {
        expect(toInt('VX')).to.equal('Invalid text');
    });

    it('TC-21: Int-To-Roman "1500" -> "MD"', function() {
        expect(toRoman(1500)).to.equal('MD');
    });
  });
