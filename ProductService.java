package MyPack.LaptopShopApp.Services;

import java.util.List;

import MyPack.LaptopShopApp.Entity.Product;

public interface ProductService 
{
	public List<Product> getProducts();
	public Product getProduct(long productId);
	public Product addProduct(Product product);
	public Product updateProduct(Product product);
	public void deleteProduct(long parseLong);

}
