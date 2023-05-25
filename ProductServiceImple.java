package MyPack.LaptopShopApp.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import MyPack.LaptopShopApp.Dao.ProductDao;
import MyPack.LaptopShopApp.Entity.Product;

@Service
public class ProductServiceImple implements ProductService 
{
  @Autowired
	private ProductDao productDao;

@Override
public List<Product> getProducts() {
	// TODO Auto-generated method stub
	return productDao.findAll();
}

@Override
public Product getProduct(long productId) {
	// TODO Auto-generated method stub
	return productDao.getOne(productId);
}

@Override
public Product addProduct(Product product) {
	productDao.save(product);
	return product;
	
}

@Override
public Product updateProduct(Product product) {
	// TODO Auto-generated method stub
	productDao.save(product);
	return product;
}

@Override
public void deleteProduct(long parseLong) {
	// TODO Auto-generated method stub
	Product entity=productDao.getOne(parseLong);
	productDao.delete(entity);
	
}
	
	
}
