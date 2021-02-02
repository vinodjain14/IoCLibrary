# IoCLibrary
Custom IoC container using Typescripts.


Idea : This code is for custom IoC container using typescripts. 
Dependency Injection using container and fetching dependencies based on their types (interfaces).

Here I took one use case that I tried to solve with my custom IoC.

Pizza, Dough and Toppings are 3 classes those implements their interfaces.
Pizza is having a dependency on Doug and Toppings to get ready. Here in Pizza class dependency injected by IoCConatainer that I implemented.

In IoCConatainer, there are 2 public methods, bindservice() is to register the service and fetchService() to fetch the service.
Each service first need to register with container instance. Container can be instantiate only once, its singleton. 

Thats all.


