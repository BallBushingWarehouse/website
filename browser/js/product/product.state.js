app.config(function ($stateProvider) {

    $stateProvider.state('product', {
        url: '/product/:productIdentifier',
        templateUrl: 'js/product/product.template.html',
        controller: 'ProductController',
        resolve: {
        	ProductData: function(ProductsFactory, $stateParams) {
        		var productIdentifier = $stateParams.productIdentifier;
        		return ProductsFactory[productIdentifier];
        	}
        }
    });

});