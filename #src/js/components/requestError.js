import {preloader} from './preloader';
import MicroModal from 'micromodal';

export function requestError() {
    preloader.hide();
    MicroModal.show('modalError');
}