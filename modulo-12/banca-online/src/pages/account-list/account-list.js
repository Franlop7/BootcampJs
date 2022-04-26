import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiViewMoel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';


getAccountList().then(accountList => {
    const viewModelAccountList = mapAccountListFromApiViewMoel(accountList);
    addAccountRows(viewModelAccountList);

    viewModelAccountList.forEach(account => {
        onUpdateField(`select-${account.id}`, event => {
            const route = event.target.value;
            history.push(route);
        });
    });
});
