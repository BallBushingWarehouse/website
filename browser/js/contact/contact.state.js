app.config(function ($stateProvider) {

    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'js/contact/contact.template.html',
        controller: 'ContactController'
    });

});