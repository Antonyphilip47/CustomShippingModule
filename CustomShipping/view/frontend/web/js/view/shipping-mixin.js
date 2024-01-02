define(['jquery'], function ($) {
    'use strict';

    return function (shippingComponent) {
        return shippingComponent.extend({
            initialize: function () {
                this._super();

                // Observe changes in the selected options
                this.observeCountryAndRegion();
            },

            observeCountryAndRegion: function () {
                var self = this;

                // Observe changes in the country option
                this.source.on('shippingAddress.country_id:value', function (countryId) {
                    // Send the selected countryId to your server-side code
                    self.sendDataToServer(countryId);
                });

                // Observe changes in the region option
                this.source.on('shippingAddress.region_id:value', function (regionId) {
                    // Send the selected regionId to your server-side code
                    self.sendDataToServer(regionId);
                });
            },

            sendDataToServer: function (data) {
                // Implement your logic to send the data to your server-side code
                console.log('Selected data:', data);
                // You can use AJAX to send data to your PHP code here
            }
        });
    };
});
