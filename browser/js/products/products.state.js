app.config(function ($stateProvider) {

    $stateProvider.state('products', {
        url: '/products',
        templateUrl: 'js/products/products.template.html',
        controller: 'ProductsController'
    });

});