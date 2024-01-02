var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/shipping-rates-validation-rules': {
                'Ceymox_CustomShipping/js/model/shipping-rates-validation-rules-mixin': true
            },
            'Magento_Checkout/js/view/shipping': {
                'Ceymox_CustomShipping/js/view/shipping-mixin': true
            }
        }
    }
};