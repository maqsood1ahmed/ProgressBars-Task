/* eslint-env jest */
import { getBarsData } from './progressbarsApi';

describe('#getBarsData() using Async', () => {
    it('should load bars data', () => {
        return getBarsData()
            .then(data => {
                console.log(data);
                expect(data).toBeDefined();
                expect(data).toHaveProperty("bars");
                expect(data).toHaveProperty("buttons");
                expect(data).toHaveProperty("limit");
            });
    });
});
