(function() {
    'use strict';

    angular
        .module('webapp')
        .config(function($translateProvider) {

            $translateProvider.translations('en', {
                ALERT_CLOSE: 'Close',
                CANCEL: 'Cancel',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD: 'New password',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD_IS_REQUIRED: 'New password is required',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD_MAX: 'New password max',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD_MIN: 'New password min',
                CHANGE_PASSWORD_FORM_NEW_PASSWORD_PATTERN: 'New password pattern',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD: 'Old password',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD_IS_REQUIRED: 'Old password is required',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD_MAX: 'Old password max',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD_MIN: 'Old password min',
                CHANGE_PASSWORD_FORM_OLD_PASSWORD_PATTERN: 'Old password pattern',
                CHANGE_PASSWORD_FORM_SUBMIT: 'Submit',
                CREATE_TODO: 'Create todo',
                CREATE_TODO_DATE: 'Date',
                CREATE_TODO_DATE_IS_REQUIRED: 'Date is required',
                CREATE_TODO_STATUS: 'Status',
                CREATE_TODO_STATUS_IS_REQUIRED: 'Status is required',
                CREATE_TODO_SUBMIT: 'Submit',
                CREATE_TODO_TASK: 'Task',
                CREATE_TODO_TASK_IS_REQUIRED: 'Task is required',
                CREATE_TODO_TASK_MAX: 'Task max',
                CREATE_TODO_TASK_MIN: 'Task min',
                CREATE_TODO_USER_ID: 'User id',
                CREATE_TODO_USER_ID_IS_REQUIRED: 'User id is required',
                CREATE_USER: 'Create user',
                CREATE_USER_FIRST_NAME: 'First name',
                CREATE_USER_FIRST_NAME_IS_REQUIRED: 'First name is required',
                CREATE_USER_FIRST_NAME_MAX: 'First name max',
                CREATE_USER_FIRST_NAME_MIN: 'First name min',
                CREATE_USER_LAST_NAME: 'Last name',
                CREATE_USER_LAST_NAME_IS_REQUIRED: 'Last name is required',
                CREATE_USER_LAST_NAME_MAX: 'Last name max',
                CREATE_USER_LAST_NAME_MIN: 'Last name min',
                CREATE_USER_PASSWORD_HASH: 'Password hash',
                CREATE_USER_PASSWORD_HASH_IS_REQUIRED: 'Password hash is required',
                CREATE_USER_PASSWORD_HASH_MAX: 'Password hash max',
                CREATE_USER_PASSWORD_HASH_MIN: 'Password hash min',
                CREATE_USER_ROLE: 'Role',
                CREATE_USER_ROLE_IS_REQUIRED: 'Role is required',
                CREATE_USER_SUBMIT: 'Submit',
                CREATE_USER_USERNAME: 'Username',
                CREATE_USER_USERNAME_IS_REQUIRED: 'Username is required',
                CREATE_USER_USERNAME_MAX: 'Username max',
                CREATE_USER_USERNAME_MIN: 'Username min',
                DATA_SET_EMPTY_NO_DATA: 'No data',
                DELETE_TODO: 'Delete todo',
                DELETE_TODO_SUBMIT: 'Submit',
                DELETE_USER: 'Delete user',
                DELETE_USER_SUBMIT: 'Submit',
                EDIT_TODO: 'Edit todo',
                EDIT_TODO_DATE: 'Date',
                EDIT_TODO_DATE_IS_REQUIRED: 'Date is required',
                EDIT_TODO_STATUS: 'Status',
                EDIT_TODO_STATUS_IS_REQUIRED: 'Status is required',
                EDIT_TODO_SUBMIT: 'Submit',
                EDIT_TODO_TASK: 'Task',
                EDIT_TODO_TASK_IS_REQUIRED: 'Task is required',
                EDIT_TODO_TASK_MAX: 'Task max',
                EDIT_TODO_TASK_MIN: 'Task min',
                EDIT_TODO_USER_ID: 'User id',
                EDIT_TODO_USER_ID_IS_REQUIRED: 'User id is required',
                EDIT_USER: 'Edit user',
                EDIT_USER_FIRST_NAME: 'First name',
                EDIT_USER_FIRST_NAME_IS_REQUIRED: 'First name is required',
                EDIT_USER_FIRST_NAME_MAX: 'First name max',
                EDIT_USER_FIRST_NAME_MIN: 'First name min',
                EDIT_USER_LAST_NAME: 'Last name',
                EDIT_USER_LAST_NAME_IS_REQUIRED: 'Last name is required',
                EDIT_USER_LAST_NAME_MAX: 'Last name max',
                EDIT_USER_LAST_NAME_MIN: 'Last name min',
                EDIT_USER_PASSWORD_HASH: 'Password hash',
                EDIT_USER_PASSWORD_HASH_IS_REQUIRED: 'Password hash is required',
                EDIT_USER_PASSWORD_HASH_MAX: 'Password hash max',
                EDIT_USER_PASSWORD_HASH_MIN: 'Password hash min',
                EDIT_USER_ROLE: 'Role',
                EDIT_USER_ROLE_IS_REQUIRED: 'Role is required',
                EDIT_USER_SUBMIT: 'Submit',
                EDIT_USER_USERNAME: 'Username',
                EDIT_USER_USERNAME_IS_REQUIRED: 'Username is required',
                EDIT_USER_USERNAME_MAX: 'Username max',
                EDIT_USER_USERNAME_MIN: 'Username min',
                ERROR_MESSAGE: 'There was an error executing operation.',
                ERROR_TITLE: 'Error',
                MODAL_WINDOW_CLOSE: 'Close',
                NO: 'No',
                OK: 'Ok',
                PLEASE_SELECT: 'Please select',
                SIGN_IN_FORM_PASSWORD: 'Password',
                SIGN_IN_FORM_PASSWORD_IS_REQUIRED: 'Password is required',
                SIGN_IN_FORM_PASSWORD_MAX: 'Password max',
                SIGN_IN_FORM_PASSWORD_MIN: 'Password min',
                SIGN_IN_FORM_PASSWORD_PATTERN: 'Password pattern',
                SIGN_IN_FORM_SUBMIT: 'Submit',
                SIGN_IN_FORM_USERNAME: 'Username',
                SIGN_IN_FORM_USERNAME_IS_REQUIRED: 'Username is required',
                SIGN_IN_FORM_USERNAME_MAX: 'Username max',
                SIGN_IN_FORM_USERNAME_MIN: 'Username min',
                SIGN_IN_PAGE_SIGN_UP: 'Sign up',
                SIGN_UP_FORM_FIRST_NAME: 'First name',
                SIGN_UP_FORM_FIRST_NAME_IS_REQUIRED: 'First name is required',
                SIGN_UP_FORM_FIRST_NAME_MAX: 'First name max',
                SIGN_UP_FORM_FIRST_NAME_MIN: 'First name min',
                SIGN_UP_FORM_LAST_NAME: 'Last name',
                SIGN_UP_FORM_LAST_NAME_IS_REQUIRED: 'Last name is required',
                SIGN_UP_FORM_LAST_NAME_MAX: 'Last name max',
                SIGN_UP_FORM_LAST_NAME_MIN: 'Last name min',
                SIGN_UP_FORM_PASSWORD: 'Password',
                SIGN_UP_FORM_PASSWORD_IS_REQUIRED: 'Password is required',
                SIGN_UP_FORM_PASSWORD_MAX: 'Password max',
                SIGN_UP_FORM_PASSWORD_MIN: 'Password min',
                SIGN_UP_FORM_PASSWORD_PATTERN: 'Password pattern',
                SIGN_UP_FORM_SUBMIT: 'Submit',
                SIGN_UP_FORM_USERNAME: 'Username',
                SIGN_UP_FORM_USERNAME_IS_REQUIRED: 'Username is required',
                SIGN_UP_FORM_USERNAME_MAX: 'Username max',
                SIGN_UP_FORM_USERNAME_MIN: 'Username min',
                SIGN_UP_PAGE_SIGN_IN: 'Sign in',
                TODOS_DATE: 'Date',
                TODOS_DELETE_TODO: 'Delete todo',
                TODOS_EDIT_TODO: 'Edit todo',
                TODOS_ID: 'Id',
                TODOS_PAGE_ADD_TODO: 'Add todo',
                TODOS_STATUS: 'Status',
                TODOS_TASK: 'Task',
                TODOS_USER_USERNAME: 'User username',
                USERS_DELETE_USER: 'Delete user',
                USERS_EDIT_USER: 'Edit user',
                USERS_FIRST_NAME: 'First name',
                USERS_ID: 'Id',
                USERS_LAST_NAME: 'Last name',
                USERS_PAGE_ADD_USER: 'Add user',
                USERS_ROLE: 'Role',
                USERS_USERNAME: 'Username',
                USERS_VIEW_USER_TODOS: 'View user todos',
                USER_TODOS_DATE: 'Date',
                USER_TODOS_ID: 'Id',
                USER_TODOS_STATUS: 'Status',
                USER_TODOS_TASK: 'Task',
                USER_TODOS_USER_ID: 'User id',
                YES: 'Yes'
            });

            $translateProvider.preferredLanguage('en');

            $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        });
})();