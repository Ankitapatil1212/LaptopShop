package MyPack.LaptopShopApp.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
	@Id
	private long pro_Id;
	private String pro_Name;
	private String pro_model;
	private String pro_type;
	private String pro_desc;
	private String pro_price;

	public long getPro_Id() {
		return pro_Id;
	}

	public void setPro_Id(long pro_Id) {
		this.pro_Id = pro_Id;
	}

	public String getPro_Name() {
		return pro_Name;
	}

	public void setPro_Name(String pro_Name) {
		this.pro_Name = pro_Name;
	}

	public String getPro_model() {
		return pro_model;
	}

	public void setPro_model(String pro_model) {
		this.pro_model = pro_model;
	}

	public String getPro_type() {
		return pro_type;
	}

	public void setPro_type(String pro_type) {
		this.pro_type = pro_type;
	}

	public String getPro_desc() {
		return pro_desc;
	}

	public void setPro_desc(String pro_desc) {
		this.pro_desc = pro_desc;
	}

	public String getPro_price() {
		return pro_price;
	}

	public void setPro_price(String pro_price) {
		this.pro_price = pro_price;
	}

	@Override
	public String toString() {
		return "Product [pro_Id=" + pro_Id + ", pro_Name=" + pro_Name + ", pro_model=" + pro_model + ", pro_type="
				+ pro_type + ", pro_desc=" + pro_desc + ", pro_price=" + pro_price + "]";
	}

	public Product(long pro_Id, String pro_Name, String pro_model, String pro_type, String pro_desc, String pro_price) {
		super();
		this.pro_Id = pro_Id;
		this.pro_Name = pro_Name;
		this.pro_model = pro_model;
		this.pro_type = pro_type;
		this.pro_desc = pro_desc;
		this.pro_price = pro_price;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

}
