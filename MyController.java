package MyPack.LaptopShopApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import MyPack.LaptopShopApp.Entity.Product;
import MyPack.LaptopShopApp.Services.ProductService;

@RestController
@CrossOrigin(allowedHeaders = "*")   
public class MyController 
{
	@Autowired
	private ProductService productService;
	
 @GetMapping("/home")
	public String Home()
	{
		return "Welcome to Product Application";
		
	}
		
		//get all the products using GET Request
		@GetMapping("/products")
		public List<Product> getProducts()
		{
			return this.productService.getProducts();
		}
		
		//get single product using GET Request
		@GetMapping("/products/{productId}")
		public Product getProduct(@PathVariable String productId)
		{
			return this.productService.getProduct(Long.parseLong(productId));
					
		}
		
		//add product using POST Request
		@PostMapping("/products")  
		public Product addProduct(@RequestBody Product product)
		{
			return this.productService.addProduct(product);
		}
		
		
		//update product using PUT Request
		@PutMapping("/products")
		public Product updateProduct(@RequestBody Product product )
		{
			return this.productService.updateProduct(product);
		}
		
		// delete the product using DELETE Request
		@DeleteMapping("/products/{productId}")
		public void deleteProduct(@PathVariable String productId) {
			this.productService.deleteProduct(Long.parseLong(productId));
		}

}
