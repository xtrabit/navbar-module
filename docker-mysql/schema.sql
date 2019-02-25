-- Execute this file from mysql shell:
--   SOURCE schema.sql
-- to create the database and the tables.

CREATE DATABASE IF NOT EXISTS navbar;

USE navbar;

DROP TABLE IF EXISTS inventory;

CREATE TABLE inventory (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `item_name` CHAR(127) NULL DEFAULT NULL,
  `style` INTEGER NULL DEFAULT NULL,
  `color` CHAR(8) NULL DEFAULT NULL,
  `size` CHAR(3) NULL DEFAULT NULL,
  `price` char(8) NULL DEFAULT NULL,
  `image_url` CHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS users;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `email` CHAR(255) NULL DEFAULT NULL,
  `password` CHAR(32) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS cart;

CREATE TABLE cart (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user` CHAR(127) NULL DEFAULT NULL,
  `item_id` INTEGER NULL DEFAULT NULL,
  `qty` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`item_id`) REFERENCES inventory(`id`)
);

INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/40079881_023_b.jpeg","Patagonia Woven Pullover T-Shirt",98168657,"purple","XS","31.06");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/42423137_001_b.jpeg","Patagonia Woven Striped Jersey",23211501,"orange","M","53.30");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/42823385_001_b.jpeg","Stussy Long Sleeve Lightweight Hoodie",24721077,"black","S","82.13");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/42823385_010_b.jpeg","Nike Woven Logo Hoodie",91956814,"red","XL","54.71");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/43371194_004_b.jpeg","Stussy Woven Logo T-Shirt",57632210,"blue","XS","39.03");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/44101954_010_b.jpeg","Stussy Graphic Zipper T-Shirt",94728138,"green","XXL","49.80");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/45708377_044_b.jpeg","Patagonia Woven Striped T-Shirt",69173958,"brown","XS","51.24");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/46149910_001_b.jpeg","Champion Long Sleeve Lightweight Hoodie",62102042,"purple","XS","41.21");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/46277711_066_b.jpeg","Nike Long Sleeve Lightweight Jersey",17929400,"red","M","72.27");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/46679890_070_b.jpeg","Patagonia Long Sleeve Lightweight Jersey",37155492,"white","XS","96.91");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/46893517_023_b.jpeg","Stussy Long Sleeve Pullover Jersey",73083606,"brown","XL","85.12");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/46966404_050_b.jpeg","Champion Exclusive Pullover Jersey",79569994,"brown","S","27.36");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/47117528_016_b.jpeg","Nike Woven Logo Jersey",80025219,"blue","XXL","39.37");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/47370044_054_b.jpeg","Patagonia Woven Logo Hoodie",89758521,"red","S","33.31");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/47378526_045_b.jpeg","Nike Woven Striped T-Shirt",16921323,"blue","M","84.62");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/47478177_000_b.jpeg","Nike Graphic Pullover Jersey",82560599,"blue","S","26.06");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/47480280_079_b.jpeg","Patagonia Graphic Lightweight Tank Top",44886370,"blue","XXL","87.08");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/47822044_001_b.jpeg","Stussy Woven Zipper Jersey",88109368,"white","M","13.93");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/47828918_044_b.jpeg","Champion Graphic Logo Jersey",40990243,"purple","XL","17.08");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48023717_000_b.jpeg","Stussy Exclusive Striped Jersey",46350206,"yellow","S","51.67");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48024145_060_b.jpeg","Champion Graphic Pullover T-Shirt",42904388,"green","L","87.39");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48024434_010_b.jpeg","Champion Woven Pullover Hoodie",82556139,"orange","S","99.81");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48024715_001_b.jpeg","Champion Exclusive Pullover Tank Top",11447680,"yellow","XXL","87.04");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48036248_009_b.jpeg","Patagonia Long Sleeve Logo Tank Top",29670935,"purple","S","59.60");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48228597_061_b.jpeg","Champion Exclusive Pullover Jersey",80414406,"black","S","50.13");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48274518_010_b.jpeg","Stussy Long Sleeve Zipper Hoodie",57498712,"blue","M","17.05");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48465231_016_b.jpeg","Stussy Woven Pullover Jersey",39813933,"brown","L","22.01");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48488910_070_b.jpeg","Stussy Woven Striped Tank Top",11711949,"purple","XXL","46.25");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48539720_001_b.jpeg","Nike Exclusive Striped T-Shirt",92285070,"brown","S","30.91");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48541072_001_b.jpeg","Stussy Graphic Zipper Jersey",21734362,"purple","M","39.23");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48544944_004_b.jpeg","Champion Exclusive Zipper Tank Top",76410769,"white","XS","91.14");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48553291_060_b.jpeg","Patagonia Exclusive Striped Tank Top",18285398,"brown","XL","92.99");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48611917_060_b.jpeg","Champion Graphic Pullover Jersey",53485992,"white","S","24.36");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48612063_050_b.jpeg","Stussy Exclusive Logo Jersey",29209165,"black","L","93.47");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48612113_010_b.jpeg","Nike Exclusive Striped Tank Top",73079883,"red","XS","36.43");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48612576_040_b.jpeg","Champion Long Sleeve Striped Jersey",71500464,"white","M","5.10");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48618391_061_b.jpeg","Patagonia Exclusive Lightweight Jersey",69551435,"white","S","93.59");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48626949_010_b.jpeg","Patagonia Exclusive Logo Tank Top",69776379,"red","M","63.04");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48628002_010_b.jpeg","Stussy Exclusive Striped Hoodie",96926211,"green","S","45.07");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48650311_010_b.jpeg","Champion Graphic Pullover T-Shirt",92916736,"white","S","89.06");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48651897_020_b.jpeg","Stussy Graphic Logo Tank Top",55889698,"purple","XS","47.86");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48652572_010_b.jpeg","Patagonia Long Sleeve Lightweight Tank Top",61526601,"white","XXL","28.11");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48652853_010_b.jpeg","Nike Long Sleeve Lightweight Jersey",42145994,"brown","XXL","93.24");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48658660_010_b.jpeg","Champion Long Sleeve Pullover Hoodie",57608560,"blue","XS","2.63");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48667596_074_b.jpeg","Stussy Exclusive Lightweight T-Shirt",19114790,"blue","L","82.07");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48669329_040_b.jpeg","Champion Graphic Zipper T-Shirt",88635883,"red","XS","95.72");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48833271_010_b.jpeg","Champion Graphic Zipper T-Shirt",31537904,"purple","XS","1.79");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48834766_010_b.jpeg","Stussy Woven Pullover Jersey",51107767,"white","L","24.78");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48927115_010_b.jpeg","Champion Graphic Lightweight Tank Top",14813167,"white","S","41.13");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48927172_066_b.jpeg","Stussy Woven Lightweight T-Shirt",84963003,"orange","XL","18.27");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/48980395_001_b.jpeg","Stussy Graphic Logo Tank Top",25686355,"black","M","48.23");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/49049406_001_b.jpeg","Champion Long Sleeve Pullover T-Shirt",45477046,"yellow","XS","18.41");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/49091069_004_b.jpeg","Stussy Woven Logo Jersey",45431751,"white","XL","37.03");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/49726607_000_b.jpeg","Champion Woven Lightweight Tank Top",48299624,"white","S","37.60");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/49850589_032_b.jpeg","Nike Graphic Logo Jersey",69687512,"yellow","XXL","64.76");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/49888043_072_b.jpeg","Nike Exclusive Lightweight Hoodie",43928518,"yellow","S","72.55");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50003631_001_b.jpeg","Champion Woven Striped Tank Top",86664962,"purple","S","34.08");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50065903_009_b.jpeg","Stussy Long Sleeve Zipper Tank Top",43904192,"green","XS","99.62");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50185115_095_b.jpeg","Patagonia Long Sleeve Striped T-Shirt",59864490,"black","XXL","91.29");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50214386_095_b.jpeg","Champion Exclusive Lightweight Tank Top",50974022,"brown","XL","63.46");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50233436_067_b.jpeg","Patagonia Exclusive Striped Jersey",54494332,"white","M","49.80");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50273655_030_b.jpeg","Patagonia Exclusive Logo T-Shirt",43563052,"black","S","14.18");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50274802_040_b.jpeg","Patagonia Exclusive Logo Jersey",85239152,"black","XS","44.64");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50275080_010_b.jpeg","Nike Graphic Striped T-Shirt",43590160,"green","L","10.53");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50303437_010_b.jpeg","Stussy Long Sleeve Zipper Tank Top",61429419,"purple","XL","9.41");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50637065_045_b.jpeg","Patagonia Exclusive Striped Jersey",54306985,"black","L","39.84");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50637230_004_b.jpeg","Patagonia Woven Striped Tank Top",66741988,"red","XS","0.37");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50637628_066_b.jpeg","Nike Exclusive Striped Jersey",10706793,"black","XS","36.68");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50637743_060_b.jpeg","Champion Exclusive Pullover Jersey",91297244,"white","S","21.33");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50638097_010_b.jpeg","Stussy Graphic Pullover Jersey",51223896,"orange","XS","55.34");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50678325_001_b.jpeg","Champion Woven Zipper Tank Top",36385402,"brown","S","44.56");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50680289_010_b.jpeg","Stussy Graphic Zipper T-Shirt",83339217,"brown","XXL","30.27");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50681915_004_b.jpeg","Stussy Graphic Zipper T-Shirt",66400896,"green","M","93.70");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50683028_030_b.jpeg","Stussy Long Sleeve Logo Hoodie",78461906,"red","XXL","40.68");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50696954_001_b.jpeg","Patagonia Long Sleeve Zipper Hoodie",14128386,"blue","L","1.86");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50697952_010_b.jpeg","Patagonia Woven Logo Jersey",83149191,"yellow","M","24.71");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50698034_030_b.jpeg","Nike Exclusive Lightweight Hoodie",54095127,"blue","XXL","26.85");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50699735_001_b.jpeg","Patagonia Exclusive Striped Jersey",52783269,"black","L","26.58");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50700301_010_b.jpeg","Patagonia Exclusive Pullover Tank Top",91256499,"brown","XXL","63.02");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50700525_053_b.jpeg","Champion Graphic Pullover Hoodie",12416509,"black","M","92.25");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50700640_085_b.jpeg","Champion Exclusive Zipper Hoodie",84200058,"brown","XXL","87.68");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50700822_010_b.jpeg","Champion Graphic Logo Hoodie",31674250,"blue","XL","31.24");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50701549_030_b.jpeg","Patagonia Woven Zipper Hoodie",11381225,"red","S","86.91");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50704097_066_b.jpeg","Champion Exclusive Striped Hoodie",36817064,"black","L","92.61");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50704790_001_b.jpeg","Nike Woven Lightweight Hoodie",78194300,"purple","XXL","82.04");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50705045_001_b.jpeg","Nike Woven Zipper Hoodie",83900313,"yellow","XS","76.01");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50705508_001_b.jpeg","Patagonia Woven Pullover Tank Top",67966508,"white","L","77.36");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50705557_010_b.jpeg","Patagonia Long Sleeve Lightweight Hoodie",27123744,"blue","L","78.28");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50705748_001_b.jpeg","Champion Woven Pullover T-Shirt",64500653,"yellow","XL","45.67");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50707074_040_b.jpeg","Patagonia Long Sleeve Zipper Tank Top",78638851,"purple","XL","38.01");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50707298_001_b.jpeg","Stussy Woven Logo Hoodie",36791229,"green","L","99.26");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50722651_001_b.jpeg","Nike Long Sleeve Lightweight T-Shirt",23526324,"purple","M","22.57");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50809318_001_b.jpeg","Nike Exclusive Lightweight T-Shirt",33510561,"green","XL","44.66");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50809599_061_b.jpeg","Patagonia Exclusive Striped Jersey",52747917,"blue","M","57.31");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50809706_001_b.jpeg","Nike Exclusive Logo Hoodie",26154413,"green","M","60.21");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50821412_072_b.jpeg","Nike Woven Striped Hoodie",42367468,"green","S","56.46");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50824564_060_b.jpeg","Nike Long Sleeve Logo Jersey",18822461,"white","XS","80.15");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50824754_010_b.jpeg","Nike Graphic Zipper Hoodie",77267308,"black","S","92.97");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50830389_001_b.jpeg","Nike Woven Lightweight Tank Top",96332251,"black","XL","82.09");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/50995950_040_b.jpeg","Stussy Exclusive Lightweight Jersey",88536286,"black","L","68.35");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/51259745_010_b.jpeg","Patagonia Exclusive Zipper Jersey",26584987,"orange","S","23.77");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/51259943_010_b.jpeg","Nike Woven Zipper T-Shirt",23266075,"orange","XXL","80.67");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/51260206_001_b.jpeg","Patagonia Woven Zipper T-Shirt",92105393,"blue","M","91.30");
INSERT into inventory (image_url, item_name, style, color, size, price) VALUES ("https://s3.amazonaws.com/navbarpictures/tshirts/51260313_001_b.jpeg","Stussy Woven Zipper T-Shirt",45843272,"brown","L","53.70");
