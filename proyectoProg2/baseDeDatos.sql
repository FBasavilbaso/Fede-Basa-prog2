CREATE SCHEMA tiendaOnline;

USE tiendaOnline;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario varchar(250),
email varchar(250),
password varchar(250),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO users (id, usuario, email, password, createdAT, updatedAt) VALUES
(DEFAULT, "Keni Soler", "ksoler@udesa.edu.ar", "123456789", DEFAULT, DEFAULT),
(DEFAULT, "Federico Basavilbaso", "fbasavilbaso@udesa.edu.ar", "987654321", DEFAULT, DEFAULT),
(DEFAULT, "Salvador de los Heros", "sdelosheros@udesa.edu.ar", "192837465", DEFAULT, DEFAULT),
(DEFAULT, "Brian Gomez", "bgomezrangel@udesa.edu.ar", "567891234", DEFAULT, DEFAULT),
(DEFAULT, "Luis Navas", "lnavas@udesa.edu.ar", "112233445", DEFAULT, DEFAULT);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
imagen varchar(700) DEFAULT NULL,
producto varchar(250) DEFAULT NULL,
descripcion varchar(600) DEFAULT NULL,
usuario_id INT UNSIGNED,
FOREIGN KEY (usuario_id) REFERENCES users(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO products (id, imagen, producto, descripcion, usuario_id, createdAT, updatedAT) VALUES
(DEFAULT, "https://http2.mlstatic.com/D_NQ_NP_908187-MLU70829039014_082023-O.webp", "Auriculares Bose", "Audífono inalambrico con cancelación de ruido", 1 , DEFAULT, DEFAULT),
(DEFAULT, "https://http2.mlstatic.com/D_728284-MLA75551295634_042024-O.jpg", "Control Playstation 5", "Joystick inalámbrico Sony para playstation 5", 2 , DEFAULT, DEFAULT),
(DEFAULT, "https://file.hstatic.net/200000348419/file/231031_m3_macbook_pro_1ccda5f68f174078b92203ca64520567.png", "Macbook Pro 14", "Macbook Pro 14 con chip M3 - 512GB", 3 , DEFAULT, DEFAULT),
(DEFAULT, "https://nextgames.com.ar/img/Public/1040/50896-producto-apple-vision-pro.jpg", "Vision Pro", "Headset con realidad-mixta", 4 , DEFAULT, DEFAULT),
(DEFAULT, "https://http2.mlstatic.com/D_NQ_NP_770678-MLA71279499005_082023-O.webp", "Reloj Garmin", "Reloj GPS Golf Garmin approach S70 47mm", 5 , DEFAULT, DEFAULT)