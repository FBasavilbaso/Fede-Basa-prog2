CREATE SCHEMA tiendaOnline;

USE tiendaOnline;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email varchar(250),
usuario varchar(250),
password varchar(250),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO users (id,  email, usuario, password, createdAt, updatedAt) VALUES
(DEFAULT, "ksoler@udesa.edu.ar", "Keni Soler", "1234", DEFAULT, DEFAULT),
(DEFAULT, "fbasavilbaso@udesa.edu.ar", "Federico Basavilbaso", "9876", DEFAULT, DEFAULT),
(DEFAULT, "sdelosheros@udesa.edu.ar", "Salvador de los Heros", "1928", DEFAULT, DEFAULT),
(DEFAULT, "bgomezrangel@udesa.edu.ar", "Brian Gomez", "5678", DEFAULT, DEFAULT),
(DEFAULT, "lnavas@udesa.edu.ar", "Luis Navas", "1122", DEFAULT, DEFAULT);

CREATE TABLE products (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
imagen varchar(700) DEFAULT NULL,
producto varchar(250) DEFAULT NULL,
descripcion varchar(600) DEFAULT NULL,
usuarioId INT UNSIGNED,
FOREIGN KEY (usuarioId) REFERENCES users(id),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO products (id, imagen, producto, descripcion, usuarioId, createdAt, updatedAt) VALUES
(DEFAULT, "https://http2.mlstatic.com/D_NQ_NP_908187-MLU70829039014_082023-O.webp", "Auriculares Bose", "Audífono inalambrico con cancelación de ruido", 1 , DEFAULT, DEFAULT),
(DEFAULT, "https://http2.mlstatic.com/D_728284-MLA75551295634_042024-O.jpg", "Control Playstation 5", "Joystick inalámbrico Sony para playstation 5", 2 , DEFAULT, DEFAULT),
(DEFAULT, "https://file.hstatic.net/200000348419/file/231031_m3_macbook_pro_1ccda5f68f174078b92203ca64520567.png", "Macbook Pro 14", "Macbook Pro 14 con chip M3 - 512GB", 3 , DEFAULT, DEFAULT),
(DEFAULT, "https://nextgames.com.ar/img/Public/1040/50896-producto-apple-vision-pro.jpg", "Vision Pro", "Headset con realidad-mixta", 4 , DEFAULT, DEFAULT),
(DEFAULT, "https://http2.mlstatic.com/D_NQ_NP_770678-MLA71279499005_082023-O.webp", "Reloj Garmin", "Reloj GPS Golf Garmin approach S70 47mm", 5 , DEFAULT, DEFAULT);