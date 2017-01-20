(function(){
    'use strict';

    angular
        .module('portfolioApp')
        .controller('mailController', mailController);


        function mailController() {
            var vm = this;

            vm.contactData = [{
                Name: {
                    text: 'Name'
                },
                Email: {
                    text: 'Email'
                },
                Phone: {
                    text: 'Phone'
                },
                Message: {
                    text: 'Message'
                }
            }];
            vm.submitEmail = submitEmail ;

             function submitEmail(sentMessage){
                if(sentMessage.$valid){
                    sentMessage.$setPristine();
                    sentMessage.$setUntouched();
                }
            }
        }
})();