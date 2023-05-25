package MyPack.LaptopShopApp.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import MyPack.LaptopShopApp.Entity.Product;

public interface ProductDao extends JpaRepository<Product, Long> 
{

}
