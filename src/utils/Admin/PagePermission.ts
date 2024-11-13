import { PermissionConstants } from 'constants/adminUserAccessConstants';
import { AdminUserPermissions } from 'contexts/AuthContext';

export const isPageAccessiable = (pageName: string, adminUserPermissions: AdminUserPermissions[]) => {
  const isAccessiable = adminUserPermissions.filter(
    (item) =>
      item.module_name === pageName && (item.permission === PermissionConstants.Read || item.permission === PermissionConstants.Update)
  );
  return isAccessiable.length > 0 ? true : false;
};

export const haveUpdatePermission = (pageName: string, adminUserPermissions: AdminUserPermissions[]) => {
  const filterParams = adminUserPermissions?.filter(
    (item) => item.module_name === pageName && (item.permission === 'Read' || item.permission === 'Update')
  );
  filterParams.length > 0 ? filterParams[0]?.permission === PermissionConstants.Update : false;

  return filterParams.length > 0 ? filterParams[0]?.permission === PermissionConstants.Update : false;
};
