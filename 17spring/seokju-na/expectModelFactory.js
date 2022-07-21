import ModelA from '../../src/models/ModelA';
import ModelB from '../../src/models/ModelB';
import ExpectModelA from './expectModelA';
import ExpectModelB from './expectModelB';

const isInstanceModelOf = (instance, Model) => {
    const ModelOfInstance = instance.Model;
    return ModelOfInstance.getTableName() === Model.getTableName();
};

function expectModelFactory(instance) {
    let expectModel = null;

    if (isInstanceModelOf(instance, ModelA)) {
        expectModel = new ExpectModelA(instance);
    } else if (isInstanceModelOf(instance, ModelB)) {
        expectModel = new ExpectModelB(instance);
    }

    return expectModel;
}

export default expectModelFactory;
