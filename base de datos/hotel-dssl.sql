CREATE TABLE `adicional` (
  `idAdicional` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idCliente` int DEFAULT null,
  `idHabitacion` int DEFAULT null,
  `idProducto` int DEFAULT null,
  `cantidad` int DEFAULT null,
  `subTotal` double DEFAULT null
);

CREATE TABLE `cliente` (
  `idCliente` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `documento` varchar(8) DEFAULT null,
  `nombre` varchar(45) DEFAULT null,
  `apPat` varchar(45) DEFAULT null,
  `apMat` varchar(45) DEFAULT null,
  `direccion` varchar(45) DEFAULT null,
  `telefono` varchar(9) DEFAULT null,
  `email` varchar(45) DEFAULT null,
  `contraseña` varchar(45) DEFAULT null,
  `estado` varchar(45) DEFAULT null
);

CREATE TABLE `habitacion` (
  `idHabitacion` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `habitacion` int NOT NULL,
  `tipoHabitacion` varchar(45) DEFAULT null,
  `descripcion` varchar(200) DEFAULT null,
  `pDiario` double NOT NULL,
  `estado` varchar(1) DEFAULT null
);

CREATE TABLE `personal` (
  `idPersonal` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `dni` varchar(8) DEFAULT null,
  `nombre` varchar(45) DEFAULT null,
  `apPat` varchar(45) DEFAULT null,
  `apMat` varchar(45) DEFAULT null,
  `direccion` varchar(45) DEFAULT null,
  `telefono` varchar(45) DEFAULT null,
  `email` varchar(45) DEFAULT null,
  `contraseña` varchar(45) DEFAULT null,
  `cargo` varchar(45) DEFAULT null,
  `estado` varchar(1) DEFAULT null
);

CREATE TABLE `producto` (
  `idProducto` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT null,
  `descrpcion` varchar(200) DEFAULT null,
  `stock` int DEFAULT null,
  `precioVenta` double DEFAULT null
);

CREATE TABLE `recepcion` (
  `idRecepcion` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `tipoReserva` varchar(45) DEFAULT null,
  `idReserva` int DEFAULT null,
  `idPersonal` int DEFAULT null,
  `idHabitacion` int DEFAULT null,
  `idCliente` int DEFAULT null,
  `fIngreso` date DEFAULT null,
  `fSalida` date DEFAULT null,
  `fRecepcion` date DEFAULT null,
  `dias` int DEFAULT null,
  `estado` varchar(1) DEFAULT null,
  `tipoPago` double DEFAULT null
);

CREATE TABLE `reserva` (
  `idReserva` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idHabitacion` int DEFAULT null,
  `idCliente` int DEFAULT null,
  `fIngreso` date DEFAULT null,
  `fSalida` date DEFAULT null,
  `fReserva` date DEFAULT null,
  `dias` int DEFAULT null,
  `estado` varchar(1) DEFAULT null
);

CREATE TABLE `venta` (
  `idVenta` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `idRecepcion` int DEFAULT null,
  `idAdicional` int DEFAULT null,
  `SubTotal` double DEFAULT null,
  `PrecioTotal` double DEFAULT null
);

CREATE INDEX `idCliente_idx` ON `adicional` (`idCliente`);

CREATE INDEX `idHabitacion_idx` ON `adicional` (`idHabitacion`);

CREATE INDEX `idProducto_idx` ON `adicional` (`idProducto`);

CREATE UNIQUE INDEX `pDiario_UNIQUE` ON `habitacion` (`pDiario`);

CREATE UNIQUE INDEX `tipoHabitacion_UNIQUE` ON `habitacion` (`tipoHabitacion`);

CREATE UNIQUE INDEX `descripcion_UNIQUE` ON `habitacion` (`descripcion`);

CREATE UNIQUE INDEX `tipoReserva_UNIQUE` ON `recepcion` (`tipoReserva`);

CREATE INDEX `idHabitacion_idx` ON `reserva` (`idHabitacion`);

CREATE INDEX `idCliente_idx` ON `reserva` (`idCliente`);

CREATE INDEX `idAdicional_idx` ON `venta` (`idRecepcion`, `idAdicional`);

ALTER TABLE `reserva` ADD CONSTRAINT `idCliente` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idCliente`);

ALTER TABLE `reserva` ADD CONSTRAINT `idHabitacion` FOREIGN KEY (`idHabitacion`) REFERENCES `habitacion` (`idHabitacion`);

ALTER TABLE `producto` ADD FOREIGN KEY (`descrpcion`) REFERENCES `adicional` (`idCliente`);

ALTER TABLE `recepcion` ADD FOREIGN KEY (`tipoReserva`) REFERENCES `reserva` (`idReserva`);

ALTER TABLE `recepcion` ADD FOREIGN KEY (`idPersonal`) REFERENCES `personal` (`idPersonal`);

ALTER TABLE `venta` ADD FOREIGN KEY (`idAdicional`) REFERENCES `adicional` (`idAdicional`);

ALTER TABLE `venta` ADD FOREIGN KEY (`idRecepcion`) REFERENCES `recepcion` (`idRecepcion`);
