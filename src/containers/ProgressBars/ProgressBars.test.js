import React from 'react';
import ProgressBars from './ProgressBars';

import renderer from 'react-test-renderer';

test('Progress Bar functions testing', () => {
    let component = renderer.create(<ProgressBars />).getInstance();

    let treeA = component.calculatePercentage(75, 180);
    expect(treeA).toBe(42);

    treeA = component.calculatePercentage(517, 180);
    expect(treeA).toBe(287);

    let treeB = component.barZeroLimit(-15);
    expect(treeB).toBe(0);

    treeB = component.barZeroLimit(15);
    expect(treeB).toBe(15);

    let treeC = component.percentageLimit(0, 300, 100);
    expect(treeC).toBe(100);
});
