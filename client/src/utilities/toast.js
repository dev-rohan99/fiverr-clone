import cogoToast from 'cogo-toast';


const toaster = (type, message) => {
    switch(type){
        case "error":
            return cogoToast.error(message, { position: 'bottom-left' });

        case "info":
            return cogoToast.ingo(message, { position: 'bottom-left' });

        case "loading":
            return cogoToast.loading(message, { position: 'bottom-left' });

        case "warn":
            return cogoToast.warn(message, { position: 'bottom-left' });

        case "success":
            return cogoToast.success(message, { position: 'bottom-left' });

        default:
            return cogoToast.success(message, { position: 'bottom-left' });
    }
}

export default toaster;
