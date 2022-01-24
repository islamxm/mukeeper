import {preloader} from './preloader';
import {requestError} from './requestError';

export const requestStatus = {
    success: function() {
        preloader.hide();
    },
    loading: function() {
        preloader.show();
    },
    fail: function() {
        preloader.hide();
        requestError();
    }
};