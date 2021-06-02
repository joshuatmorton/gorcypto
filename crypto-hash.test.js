const cryptoHash = require ('./crypto-hash');

describe('cryptoHash()', () => {

    it('generates a SHA-256 hased output', () => {
        expect(cryptoHash('doo doo le foo ')) //space!!
            .toEqual('108ab21a2083b0a8d537533b592c1c1e354e0af43ab21ca186bad2704180e5a7')
    });

    it('produces ther same hash with the same input arguments in any order' , () => {
        expect(cryptoHash('one', 'two', 'three')) 
            .toEqual(cryptoHash('three','one', 'two'))
           
        });
});
