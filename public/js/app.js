angular.module("productsApp", ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "list.html",
                controller: "ListController",
                resolve: {
                    products: function(Products) {
                        return Products.getProducts();
                    }
                }
            })
            .when("/new/product", {
                controller: "NewProductController",
                templateUrl: "product-form.html"
            })
            .when("/product/:productId", {
                controller: "EditContactController",
                templateUrl: "product.html"
            })
            .otherwise({
                redirectTo: "/"
            })
    })
    .service("Contacts", function($http) {
        this.getProducts = function() {
            return $http.get("/products").
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding products.");
                });
        }
        this.createContact = function(product) {
            return $http.post("/products", product).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error creating product.");
                });
        }
        this.getContact = function(productId) {
            var url = "/products/" + productId;
            return $http.get(url).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error finding this product.");
                });
        }
        this.editContact = function(product) {
            var url = "/products/" + product._id;
            console.log(product._id);
            return $http.put(url, product).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error editing this product.");
                    console.log(response);
                });
        }
        this.deleteContact = function(productId) {
            var url = "/products/" + productId;
            return $http.delete(url).
                then(function(response) {
                    return response;
                }, function(response) {
                    alert("Error deleting this product.");
                    console.log(response);
                });
        }
    })
    .controller("ListController", function(products, $scope) {
        $scope.products = products.data;

        $scope.searchById = function(searchedItem) {
            
        }
    })
    .controller("NewContactController", function($scope, $location, Contacts) {
        $scope.back = function() {
            $location.path("#/");
        }

        $scope.saveContact = function(product) {
            Contacts.createContact(product).then(function(doc) {
                var productUrl = "/product/" + doc.data._id;
                $location.path(productUrl);
            }, function(response) {
                alert(response);
            });
        }
    })
    .controller("EditContactController", function($scope, $routeParams, Contacts) {
        Contacts.getContact($routeParams.productId).then(function(doc) {
            $scope.product = doc.data;
        }, function(response) {
            alert(response);
        });

        $scope.toggleEdit = function() {
            $scope.editMode = true;
            $scope.productFormUrl = "product-form.html";
        }

        $scope.back = function() {
            $scope.editMode = false;
            $scope.productFormUrl = "";
        }

        $scope.saveContact = function(product) {
            Contacts.editContact(product);
            $scope.editMode = false;
            $scope.productFormUrl = "";
        }

        $scope.deleteContact = function(productId) {
            Contacts.deleteContact(productId);
        }
    });