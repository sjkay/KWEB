import 'babel-polyfill';

import ModelA from '../../../src/models/ModelA';
import expectModel from '../expect/expectModelFactory';
import testAsync from '../helper/testAsync';
import dbHelper from '../helper/db';
import contentDummy from '../dummy/contentDummy';

describe('Unit Test: models/ModelA', () => {
    beforeEach(testAsync(async () => {
        await dbHelper.initTestDB();
        await dbHelper.syncDB();
    }));
    
    describe('createContent()', () => {
        it('새로운 콘텐츠 모델을 만들고 해당 모델의 id를 ModelA의 콘텐츠로 연관시킨다.', testAsync(async () => {
            const contentInfo = contentDummy.getData('Basic Content');

            const a = ModelA.buildNew();
            await a.createContent(contentInfo);

            await expectModel(a).toHaveContentEqualWith(contentInfo);
        }));
    });
});
